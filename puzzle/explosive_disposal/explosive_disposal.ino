// TODO: 7-segment display as class
#include "explosive_disposal.h"

// 7-segment display pin configuration
const uint8_t addressPins[] = {2, 3, 4, 5, 6, 7, 8, 9};
const uint8_t channelPins[] = {10, 14, 15, 16};

// 7-segment display state
uint8_t displayState[] = {19, 19, 19, 19};

// 7-segment display channel index
uint16_t displayChannel = 0;

// 7-segment display status
bool displayEnabled = true;

const byte BCDMapping[] = {
    B11000000,  //  0
    B11111001,  //  1
    B10100100,  //  2
    B10110000,  //  3
    B10011001,  //  4
    B10010010,  //  5
    B10000010,  //  6
    B11111000,  //  7
    B10000000,  //  8
    B10010000,  //  9
    B10001000,  //  A (10)
    B10000011,  //  B (11)
    B11000110,  //  C (12)
    B10100001,  //  D (13)
    B10000110,  //  E (14)
    B10001110,  //  F (15)
    B11111001,  //  I (16)
    B11000111,  //  L (17)
    B10111111,  //  - (18)
    B01111111,  //  .
    B10110110   //  Error
};

void resetChannel() {
    for (uint8_t channelPin : channelPins) {
        pinMode(channelPin, OUTPUT);
        digitalWrite(channelPin, LOW);
    }
}

void resetAddress() {
    for (uint8_t addressPin : addressPins) {
        pinMode(addressPin, OUTPUT);
        digitalWrite(addressPin, HIGH);
    }
}

void resetTimers() {
    // clear interrupts
    cli();

    // set timer0 interrupt at 500Hz
    TCCR0A = 0;
    TCCR0B = 0;
    // initialize counter value to 0
    TCNT0 = 0;
    // set compare match register for 500Hz increments
    OCR0A = 124; // = (16*10^6) / (500*256) - 1 (must be <256)
    // turn on CTC mode
    TCCR0A |= (1 << WGM01);
    // Set CS02 for 256 prescaler
    TCCR0B |= (1 << CS02);
    // enable timer compare interrupt
    TIMSK0 |= (1 << OCIE0A);

    // set timer1 interrupt at 1Hz
    TCCR1A = 0;
    TCCR1B = 0;
    // initialize counter value to 0
    TCNT1 = 0;
    // set compare match register for 1Hz increments
    OCR1A = 15624;// = (16*10^6) / (1*1024) - 1 (must be <65536)
    // turn on CTC mode
    TCCR1B |= (1 << WGM12);
    // Set CS12 and CS10 bits for 1024 prescaler
    TCCR1B |= (1 << CS12) | (1 << CS10);  
    // enable timer compare interrupt
    TIMSK1 |= (1 << OCIE1A);

    // set interrupts
    sei();
}

void displayWrite(int number, int channel, bool dot) {
    boolean bitToWrite;
    for (uint8_t channelPin : channelPins) {
        digitalWrite(channelPin, LOW);
    }
    for (uint8_t addressPin : addressPins) {
        digitalWrite(addressPin, HIGH);
    }
    for (int segment = 0; segment < 8; segment++) {
        if (number < 0 || number >= 20) {
            bitToWrite = bitRead(BCDMapping[20], segment);
        }
        else if (segment == 7 && dot) {
            bitToWrite = 0;
        }
        else {
            bitToWrite = bitRead(BCDMapping[number], segment);
        }
        digitalWrite(addressPins[segment], bitToWrite);
    }
    digitalWrite(channelPins[channel], HIGH);
}

void displayOff() {
    displayEnabled = false; 
}

void displayOn() {
    displayEnabled = true;
}

void clearDisplay() {
    for (uint8_t channelPin : channelPins) {
        digitalWrite(channelPin, HIGH);
    }
    for (uint8_t addressPin : addressPins) {
        digitalWrite(addressPin, HIGH);
    }
}

void refreshDisplay() {
    if (displayEnabled) {
        displayWrite(displayState[displayChannel], displayChannel, false);
        displayChannel++;
        if (displayChannel < 0 || displayChannel > 3) {
            displayChannel = 0;
        }
    } else {
        clearDisplay();
    }
}

// Initialize puzzle step
int puzzleStep = PUZZLE_PENDING;

// Initialize puzzle time in seconds
int puzzleTimer = 300;

// Initialize puzzle output code
int puzzleCode = 9733;

// Correct solution <>, ORANGE, RED, WHITE, GREEN
// Correct solution <>, A1, A3, A2, A0
// Correct sequence 28, 30, 22, 20, 16, 0
int solutionStep = 0;
// 1 << 4 | 1 << 3 | 1 << 2 | 0 << 1
// 1 << 4 | 1 << 3 | 1 << 2 | 1 << 1
// 1 << 4 | 0 << 3 | 1 << 2 | 1 << 1
// 1 << 4 | 0 << 3 | 1 << 2 | 0 << 1
// 1 << 4 | 0 << 3 | 0 << 2 | 0 << 1
// 0 << 4 | 0 << 3 | 0 << 2 | 0 << 1

void outputTime() {
    // "XX:XX"
    uint16_t t = secondsAsTime(puzzleTimer);
    for (int i = 0; i < 4; i++) {
        displayState[i] = digitAtIndex(t, i);
    }
}

void outputLose() {
    // "FAIL"
    uint8_t newState[] = {17, 16, 10, 15};
    for (int i = 0; i < 4; i++) {
        displayState[i] = newState[i]; 
    }
}

void outputWin() {
    // "----"
    for (int i = 0; i < 4; i++) {
        displayState[i] = 18; 
    }
}

void outputCode() {
    // "9733"
    for (int i = 0; i < 4; i++) {
        displayState[i] = digitAtIndex(puzzleCode, i);
    }
}

byte readState() {
    return (byte) (
        (digitalRead(A0) << 4) |
        (digitalRead(A1) << 3) |
        (digitalRead(A2) << 2) |
        (digitalRead(A3) << 1)
    );
}

void updateState() {
    // handles global state
    if (puzzleStep == PUZZLE_PENDING) {
        checkTrigger();
    }
    else if (puzzleStep == PUZZLE_LOSE) {
        return;
    }
    else if (puzzleStep >= PUZZLE_END) {
        return;
    }
    else if (puzzleStep >= PUZZLE_WIN) {
        puzzleStep++;
    }
    else {
        checkTimer();
        checkState();
    }
}

void checkTrigger() {
    // while in pending state only
    byte state = readState();
    if (state == 30 && puzzleStep == PUZZLE_PENDING) {
        puzzleStep = PUZZLE_BEGIN;
    }
}

void checkTimer() {
    // while in timer state only
    puzzleTimer--;
    if (puzzleTimer <= 0) {
        puzzleStep = PUZZLE_LOSE;
    }
}

void checkState() {
    // handles state changle only
    byte state = readState();
  
    // Step 0: Timer started
    if (state == 30) {
        return;
    }

    // Step 1: Orange wire, A1
    else if (state == 22) {
        if (solutionStep == 0) {
            solutionStep++;
        }
        if (solutionStep == 1) {
            return;
        }
    }

    // Step 2: Red wire, A3
    else if (state == 20) {
        if (solutionStep == 1) {
            solutionStep++;
        }
        if (solutionStep == 2) {
            return;
        }
    }

    // Step 3: White wire, A2
    else if (state == 16) {
        if (solutionStep == 2) {
            solutionStep++;
        }
        if (solutionStep == 3) {
            return;
        }
    }

    // Step 4: Green wire, A0
    else if (state == 0) {
        if (solutionStep == 3) {
            solutionStep++;
        }
        if (solutionStep == 4) {
            puzzleStep = PUZZLE_WIN;
            return;
        }
    }
    puzzleStep = PUZZLE_LOSE;
}

void setup() {
    // handles configuration only
    pinMode(A0, INPUT_PULLUP);
    pinMode(A1, INPUT_PULLUP);
    pinMode(A2, INPUT_PULLUP);
    pinMode(A3, INPUT_PULLUP);
    resetAddress();
    resetChannel();
    clearDisplay();

    delay(2000);
    resetTimers();
}

void loop() {
    // handles output only
    if (puzzleStep == PUZZLE_BEGIN) {
        displayOn();
        outputTime();
    }
    else if (puzzleStep == PUZZLE_LOSE) {
        displayOn();
        outputLose();
    }
    else if (puzzleStep >= PUZZLE_END) {
        displayOn();
        outputCode();
    }
    else if (puzzleStep >= PUZZLE_WIN) {
        displayOn();
        outputWin();
    }
    else {
        displayOff();
    }
}

// timer0 interrupt handler at 500Hz
ISR(TIMER0_COMPA_vect){
    refreshDisplay();
}

// timer1 interrupt handler at 1Hz
ISR(TIMER1_COMPA_vect){
    updateState();
}

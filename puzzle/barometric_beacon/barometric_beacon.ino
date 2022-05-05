// MPL115A1 breakout board is connected to pins 8, 9, 11, 13:
// SDN: pin 9 (default, configurable)
// CSN: pin 8 (default, configurable)
// SDO/DOUT/MISO: pin 12
// SDI/DIN/MOSI:  pin 11
// SCK: pin 13
#include "MPL115A1.h"
#include "barometric_beacon.h"
#define LED_PIN 2

MPL115A1 sensor;

uint8_t currentIndex = 0;
uint16_t historyAverage;
uint16_t history[HISTORY_SIZE];

uint16_t resetHistory() {
    uint16_t hpa = (uint16_t) sensor.getPressure();
    for (uint8_t i = 0; i < HISTORY_SIZE; i++) {
        history[i] = hpa;
    }
    return updateAverage();
}

uint16_t updateHistory() {
    uint16_t hpa = (uint16_t) sensor.getPressure();
    history[currentIndex] = hpa;
    currentIndex++;
    if (currentIndex >= HISTORY_SIZE) {
        currentIndex = 0;
    }
    return hpa;
}

uint16_t updateAverage() {
    uint16_t sum = 0;
    for (int i = 0; i < HISTORY_SIZE; i++) {
        sum += history[i];
    }
    historyAverage = sum / HISTORY_SIZE;
    return historyAverage; 
}

void check(uint16_t hpa) {
    float current_threshold = (float) historyAverage * (1 + THRESHOLD);
    if ((float) hpa >= current_threshold) {
        // simply infinite loop output mode if triggered
        while (true) {
            output();
            delay(CHECK_DELAY);
        }
    }
}

void hello() {
    digitalWrite(LED_PIN, LOW);
    for (int i = 0; i < 3; i++) {
        delay(1000);
        digitalWrite(LED_PIN, HIGH);
        delay(1000);
        digitalWrite(LED_PIN, LOW);
    }
}

void output() {
    const byte code[] = {
        MORSE_DOT,
        MORSE_DOT,
        MORSE_DOT,
        MORSE_BREAK,
        MORSE_DOT,
        MORSE_BREAK,
        MORSE_DASH,
        MORSE_DASH,
        MORSE_BREAK,
        MORSE_DOT,
        MORSE_DASH,
        MORSE_DASH,
        MORSE_DOT,
        MORSE_BREAK,
        MORSE_DOT,
        MORSE_BREAK,
        MORSE_DOT,
        MORSE_DASH,
        MORSE_DOT,
        MORSE_BREAK
    };
    digitalWrite(LED_PIN, LOW);

    for (byte output : code) {
        if (output != MORSE_BREAK) {
            digitalWrite(LED_PIN, HIGH);
            delay(output * MORSE_DELAY);  
        }
        digitalWrite(LED_PIN, LOW);
        delay(output * MORSE_DELAY);
    }
}

void setup() {
    pinMode(LED_PIN, OUTPUT);

    Serial.begin(9600);
    sensor.begin();
    resetHistory();

    hello();
}

void loop() {
    uint16_t hpa = updateHistory();

    // output current hpa value, history average for debug
    Serial.print("hPa: ");
    Serial.print(hpa);
    Serial.print(", average ");
    Serial.print(historyAverage);
    Serial.print("\n");

    // check hpa threshold, this will never return if triggered
    check(hpa);

    // update historical average and continue after delay
    updateAverage();
    delay(CHECK_DELAY);
}
// Output message as text: semper
// Output message as morse: ... . -- .--. . .-.

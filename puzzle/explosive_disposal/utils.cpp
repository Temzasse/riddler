#include <Arduino.h>
#include "utils.h"

uint16_t secondsAsTime(uint16_t seconds) {
    uint8_t m = (uint8_t) (seconds / 60);
    uint8_t s = (uint8_t) (seconds % 60);
    return (uint16_t)(m * 100) + (uint16_t) s;
}

uint8_t digitAtIndex(uint16_t number, int index) {
    return ((uint16_t) (number / (pow(10, index))) % 10);
}

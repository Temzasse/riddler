#ifndef MPL115A1_h
#define MPL115A1_h

class MPL115A1 {
    byte sdnPin, csnPin, bShutdown;
    short c[6]; // a0, b1, b2, c12, c11, c22 in datasheet

    byte read(byte addr);
    word readw(byte addr);
    void write(byte addr, byte data);

    public:
      MPL115A1(int csnPin = 8, int sdnPin = 9);
      float getPressure();
      void begin();
      void end();
};

#endif

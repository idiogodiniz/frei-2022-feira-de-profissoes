#include <SoftwareSerial.h>

const int pinoRX = 0; // bluetooth
const int pinoTX = 1; // bluetooth
const int pinoPort = 2;
const int pinoLedGreen = 3;
const int pinoLedRed = 4;
int dadoBluetooth = 0;

SoftwareSerial bluetooth(pinoRX, pinoTX);

void setup(){
    Serial.begin(9600);
    bluetooth.begin(9600);
    bluetooth.print("$");
    bluetooth.print("$");
    bluetooth.print("$");
    delay(100);
    digitalWrite(pinoLedRed, HIGH);
}

void loop(){
    if(bluetooth.available()){
        dadoBluetooth = bluetooth.read();
        if(dadoBluetooth == '1'){
            digitalWrite(pinoLedRed, LOW);
            digitalWrite(pinoPort, HIGH);
            digitalWrite(pinoLedGreen, HIGH);
            delay(160000);
            digitalWrite(pinoLedGreen, LOW);
            digitalWrite(pinoPort, LOW);
            digitalWrite(pinoLedRed, HIGH);
        }
    }
}

//% color="#ff7f50" icon="\uf06e" block="BitMake"
namespace bitmake {
    //% blockId=setButton
    //% block="button on pin %pin"
    //% weight=50
    //% group="Button"
    export function setButton(pin: DigitalPin) {
        pins.setPull(pin, PinPullMode.PullUp)
    }

    //% blockId=buttonPressed
    //% block="button %pin pressed"
    //% weight=50
    //% group="Button"
    export function buttonPressed(pin: DigitalPin) {
        return pins.digitalReadPin(pin)==0            
    }

    //% blockId=buttonWaitForPress
    //% block="wait for button %pin pressed"
    //% weight=50
    //% group="Button"
    export function buttonWaitForPress(pin: DigitalPin) {
        while (pins.digitalReadPin(pin) != 0)
            basic.pause(100)
    }

    //% blockId=buttonWaitForPress
    //% block="wait for button %pin released"
    //% weight=50
    //% group="Button"
    export function buttonWaitForRelease(pin: DigitalPin) {
        while (pins.digitalReadPin(pin) == 0)
            basic.pause(100)
    }
/*
    //% blockId=setLed
    //% block="led on pin %pin"
    //% weight=50
    //% group="Led"
    export function setLed(pin: DigitalPin) {
    }

    //% blockId=ledOn
    //% block="led %pin on"
    //% weight=50
    //% group="Led"
    export function ledOn(pin: DigitalPin) {
        pins.digitalWritePin(pin, 1)
    }

    //% blockId=ledOff
    //% block="led %pin off"
    //% weight=50
    //% group="Led"
    export function ledOff(pin: DigitalPin) {
        pins.digitalWritePin(pin, 0)
    }
*/
    export class Led {
        pin: DigitalPin;

        //% blockId="classLedOn"    
        //% block="ledd|led on"
        //% led.defl=ledd
        //% weight=50
        //% group="Led"
        on(): void {
            pins.digitalWritePin(this.pin, 1)
        }

        //% blockId="classLedOff"    
        //% block="ledd|led on"
        //% weight=50
        //% group="Led"
        off(): void {
            pins.digitalWritePin(this.pin, 0)
        }
    }

    //% blockId="led_create" 
    //% block="Led at pin %pin"
    //% weight=50
    //% group="Led"
    export function create(pin: DigitalPin): Led {
        let led = new Led();
        led.pin = pin
        return led;
    }
}

//% color="#ff7f50" icon="\uf0ad" block="BitMake"
namespace bitmake {
/*
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
    export class Button {
        pin: DigitalPin;

        //% blockId=buttonPressed
        //% block="%button|pressed"
        //% weight=50
        //% group="Button"
        buttonPressed() {
            return pins.digitalReadPin(this.pin) == 0
        }

        //% blockId=buttonNotPressed
        //% block="%button|not pressed"
        //% weight=50
        //% group="Button"
        buttonNotPressed() {
            return pins.digitalReadPin(this.pin) == 1
        }

        //% blockId=buttonWaitForPress
        //% block="%button|wait for press"
        //% weight=50
        //% group="Button"
        buttonWaitForPress() {
            while (pins.digitalReadPin(this.pin) != 0)
                basic.pause(100)
        }

        //% blockId=buttonWaitForRelease
        //% block="%button|wait for release"
        //% weight=50
        //% group="Button"
        buttonWaitForRelease() {
            while (pins.digitalReadPin(this.pin) == 0)
                basic.pause(100)
        }
    }

    //% blockId="button_create" 
    //% block="Button at pin %pin"
    //% weight=50
    //% group="Button"
    //% blockSetVariable=button
    export function createButton(pin: DigitalPin): Button {
        let button = new Button();
        button.pin = pin
        pins.setPull(pin, PinPullMode.PullUp)
        return button;
    }

    export class Led {
        pin: DigitalPin;

        //% blockId="led_on"    
        //% block="%led|led on"
        //% weight=50
        //% group="Led"
        on(): void {
            pins.digitalWritePin(this.pin, 1)
        }

        //% blockId="led_off"    
        //% block="%led|led off"
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
    //% blockSetVariable=led
    export function createLed(pin: DigitalPin): Led {
        let led = new Led();
        led.pin = pin
        return led;
    }

    export class AnalogInput {
        pin: AnalogPin;
        rangeFrom: number;
        rangeTo: number

        //% blockId="analog_input_value"
        //% block="%analog|value"
        //% weight=50
        //% group="AnalogInput"
        value(): number {
            let val = pins.analogReadPin(this.pin)
            return Math.map(val, 0, 1023, this.rangeFrom, this.rangeTo)
        }
    }

    //% blockId="analog_input_create" 
    //% block="AnalogInput at pin %pin from %rangeFrom to %rangeTo"
    //% weight=50
    //% group="AnalogInput"
    //% blockSetVariable=analog
    export function createAnalogInput(pin: AnalogPin, rangeFrom: number, rangeTo: number): AnalogInput {
        let anIn = new AnalogInput();
        anIn.pin = pin
        anIn.rangeFrom = rangeFrom;
        anIn.rangeTo = rangeTo;
        return anIn;
    }
}

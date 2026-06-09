/*
 * Basic devices in BitMake system
 */

//% color="#ff7f50" icon="\uf0ad" block="BitMake"
namespace bitmake {
    /* Button
       ----------------------------------------------------
    */
    export class Button {
        pin: DigitalPin;

        //% blockId=Button_pressed
        //% block="%button|pressed"
        //% weight=50
        //% group="Button"
        pressed() {
            return pins.digitalReadPin(this.pin) == 0
        }

        //% blockId=Button_notPressed
        //% block="%button|not pressed"
        //% weight=50
        //% group="Button"
        notPressed() {
            return pins.digitalReadPin(this.pin) == 1
        }

        //% blockId=Button_waitForPress
        //% block="%button|wait for press"
        //% weight=50
        //% group="Button"
        waitForPress() {
            while (pins.digitalReadPin(this.pin) != 0)
                basic.pause(100)
        }

        //% blockId=Button_waitForRelease
        //% block="%button|wait for release"
        //% weight=50
        //% group="Button"
        waitForRelease() {
            while (pins.digitalReadPin(this.pin) == 0)
                basic.pause(100)
        }
    }

    //% blockId="Button_create"
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


    /* Led
       ----------------------------------------------------
    */
    export class Led {
        pin: DigitalPin;
        status: number

        //% blockId="Led_on"    
        //% block="%led|on"
        //% weight=50
        //% group="Led"
        on(): void {
            this.status = 1
            pins.digitalWritePin(this.pin, this.status)
        }

        //% blockId="Led_off"
        //% block="%led|off"
        //% weight=50
        //% group="Led"
        off(): void {
            this.status = 0
            pins.digitalWritePin(this.pin, this.status)
        }

        //% blockId="Led_toggle"
        //% block="%led|toggle"
        //% weight=50
        //% group="Led"
        toggle(): void {
            this.status = 1 - this.status
            pins.digitalWritePin(this.pin, this.status)
        }
    }

    //% blockId="Led_create"
    //% block="Led at pin %pin"
    //% weight=50
    //% group="Led"
    //% blockSetVariable=led
    export function createLed(pin: DigitalPin): Led {
        let led = new Led();
        led.pin = pin
        return led;
    }


    /* DimmableLed
       ----------------------------------------------------
    */
    export class DimmableLed {
        pin: AnalogPin;
        value: number
        rangeFrom: number;
        rangeTo: number

        private scale() : number {
            return Math.map(this.value, this.rangeFrom, this.rangeTo, 0, 1023)
        }

        private unScale(): number {
            return Math.map(this.value, 0, 1023, this.rangeFrom, this.rangeTo)
        }

        //% blockId="DimmableLed_on"
        //% block="%led|on"
        //% weight=50
        //% group="Dimmable Led"
        on(): void {
            this.value = this.rangeTo
            pins.analogWritePin(this.pin, 1023)
        }

        //% blockId="DimmableLed_off"
        //% block="%led|off"
        //% weight=50
        //% group="Dimmable Led"
        off(): void {
            this.value = this.rangeFrom
            pins.analogWritePin(this.pin, 0)
        }

        //% blockId="DimmableLed_setIntensity"
        //% block="%led|intensity %value"
        //% weight=50
        //% group="Dimmable Led"
        setIntensity(value: number): void {
            this.value = value
            pins.analogWritePin(this.pin, this.scale())
        }


        //% blockId="DimmableLed_toggle"
        //% block="%led|toggle"
        //% weight=50
        //% group="Dimmable Led"
        toggle(): void {
            this.value = this.rangeTo - this.value + this.rangeFrom
            pins.analogWritePin(this.pin, this.scale())
        }
    }

    //% blockId="DimmableLed_create"
    //% block="DimmableLed at pin %pin from $rangeFrom to $rangeTo"
    //% weight=50
    //% group="Dimmable Led"
    //% blockSetVariable=led
    //% rangeFrom.defl=0
    //% rangeTo.defl=100
    export function createDimmableLed(pin: AnalogPin, rangeFrom: number=0, rangeTo: number=100): DimmableLed {
        let led = new DimmableLed();
        led.pin = pin
        led.rangeFrom = rangeFrom;
        led.rangeTo = rangeTo;
        return led;
    }

   

    /* AnalogInput
       ----------------------------------------------------
    */
    export class AnalogInput {
        pin: AnalogPin;
        rangeFrom: number;
        rangeTo: number

        //% blockId="AnalogInput_value"
        //% block="%analog|value"
        //% weight=50
        //% group="AnalogInput"
        value(): number {
            let val = pins.analogReadPin(this.pin)
            return Math.map(val, 0, 1023, this.rangeFrom, this.rangeTo)
        }
    }

    //% blockId="AnalogInput_create"
    //% block="AnalogInput at pin %pin from %rangeFrom to %rangeTo"
    //% weight=50
    //% group="AnalogInput"
    //% blockSetVariable=analog
    //% rangeFrom.defl=0
    //% rangeTo.defl=100
    export function createAnalogInput(pin: AnalogPin, rangeFrom: number=0, rangeTo: number=100): AnalogInput {
        let anIn = new AnalogInput();
        anIn.pin = pin
        anIn.rangeFrom = rangeFrom;
        anIn.rangeTo = rangeTo;
        return anIn;
    }
}

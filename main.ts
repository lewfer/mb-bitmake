namespace bitmake {
    //% blockId=setButton
    //% block="button on pin %pin"
    //% weight=50
    export function setButton(pin: DigitalPin) {
        pins.setPull(pin, PinPullMode.PullUp)
    }

    //% blockId=buttonPressed
    //% block="button %pin pressed"
    //% weight=50
    export function buttonPressed(pin: DigitalPin) {
        return pins.digitalReadPin(pin)==0            
    }

    //% blockId=buttonWaitForPress
    //% block="wait for button %pin pressed"
    //% weight=50
    export function buttonWaitForPress(pin: DigitalPin) {
        while (pins.digitalReadPin(pin) != 0)
            basic.pause(100)
    }


}

namespace bitmake {
    //% blockId=setButton
    //% block="create a button on pin %pin"
    //% weight=50
    export function setButton(pin: DigitalPin) {
        pins.setPull(pin, PinPullMode.PullUp)
    }

    //% blockId=buttonPressed
    //% block="check if button on pin %pin is pressed"
    //% weight=50
    export function buttonPressed(pin: DigitalPin) {
        return pins.digitalReadPin(pin)==0            
    }

}

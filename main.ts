enum RadioMessage {
    message1 = 49434,
    Mining_Started = 16113
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        serial.writeString("ID 1 Has Started Mining")
        Total_Blocks += 0 + 1
        Block_No += 0 + 1
        basic.pause(1000)
    } else if (receivedNumber == 0) {
        ID_1 = 0
    }
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    led.toggle(0, 0)
    serial.writeLine("ID 1 Is Online")
    basic.pause(5000)
    basic.clearScreen()
})
let ID_1 = 0
radio.setGroup(90)
radio.setTransmitPower(7)
radio.setFrequencyBand(5)
let Block_Reward = 1
let Block_No = 0
let Total_Blocks = 0
radio.sendValue("Block_Reward", Block_Reward)
radio.sendValue("Block_No", Block_No)
radio.sendValue("Total_Blocks", Total_Blocks)
serial.redirectToUSB()
serial.writeLine("Block Reward Is:" + Block_Reward)
serial.writeLine("Total Blocks Is:" + Total_Blocks)
serial.writeLine("No. Of Blocks:" + Block_No)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(1000)
    serial.writeLine("Block Reward Is:" + Block_Reward)
    serial.writeLine("Total Blocks Is:" + Total_Blocks)
    serial.writeLine("No. Of Blocks:" + Block_No)
})

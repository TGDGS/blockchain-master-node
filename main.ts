enum RadioMessage {
    message1 = 49434,
    Mining_Started = 16113
}
radio.onReceivedValue(function (name, value) {
    while (name == "Mining_Started" && value == 1) {
        basic.showString("ID 1 Mining")
        serial.writeString("ID 1 Has Started Mining")
        Total_Blocks += Total_Blocks + 1
        Block_No += Block_No + 1
    }
})
let Total_Blocks = 0
let Block_No = 0
radio.setGroup(90)
radio.setTransmitPower(7)
radio.setFrequencyBand(5)
let Block_Reward = 1
Block_No = 0
Total_Blocks = 0
radio.sendValue("Block_Reward", Block_Reward)
radio.sendValue("Block_No", Block_No)
radio.sendValue("Total_Blocks", Total_Blocks)
serial.redirectToUSB()
serial.writeLine("Block Reward Is:" + Block_Reward)
serial.writeLine("Total Blocks Is:" + Total_Blocks)
serial.writeLine("No. Of Blocks:" + Block_No)
loops.everyInterval(100, function () {
    radio.sendValue("Block_Reward", Block_Reward)
    radio.sendValue("Block_No", Block_No)
    radio.sendValue("Total_Blocks", Total_Blocks)
})

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

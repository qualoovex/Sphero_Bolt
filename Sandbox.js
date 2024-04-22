/*Programmer: Julian Granger
Team Member: Travis Ralph 
bolt ID:183F
Date: 4-16-24
Program: Hello World - Snadbox */
/*
async function startProgram() {
await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(100);
	await delay (2);
	setSpeed(0);

}
*/
/*
async function startProgram() {
	setMainLed({ r: 11, g: 250, b: 26 });
	await speak("Hello guys", true);
	await delay(1);
	for (var sq1 = 0; sq1 < 4; sq1++) {
		setMainLed(getRandomColor());
		await Sound.EightBit.Drop.play(true);
		await roll((getHeading() + 90), 70, 2);
		await delay(1);

	}

}
*/
async function startProgram() {
	await roll(90, 200, 2);

}
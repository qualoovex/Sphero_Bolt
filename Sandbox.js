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
async function startProgram() {
	setMainLed({ r: 0, g: 0, b: 255 });
	await speak("Hello Square", true);
	await delay(1);
	for (var _i1 = 0; _i1 < 4; _i1++) {
		setMainLed(getRandomColor());
		await Sound.Game.Coin.play(true);
		await roll((getHeading() + 90), 60, 1);
		await delay(1);

	}

}
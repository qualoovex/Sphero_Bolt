/*Programmer: Julian Granger
Team Member: Travis Ralph 
bolt ID:183F
Date: 4-16-24
Program: Hello World - mini course 
Program URL https://edu.sphero.com/program/16743338/edit */


async function startProgram() {
	await roll(0, 80, 3);
	await delay(1);
	await roll((getHeading() - 90), 70, 2.3);
	await delay(1);
	await roll((getHeading() - 90), 50, 3);
	await delay(1);
	await roll((getHeading() + 90), 50, 2.5);
	await delay(1)
	await roll((getHeading() + 90), 50, 1);
}
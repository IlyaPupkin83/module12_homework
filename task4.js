/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов.Включите некоторые в розетку. Посчитайте потребляемую мощность. Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/

function ElectricEquipment(powerConsumption) {
	this.powerConsumption = powerConsumption,
		this.state = false,
		totalConsumption = 0
}

ElectricEquipment.prototype.getTotalConsumption = function () {
	console.log(totalConsumption);
}

ElectricEquipment.prototype.changeState = function () {
	if (this.state === true) {
		this.state = false;
		totalConsumption -= this.powerConsumption;
		console.log(totalConsumption);
	} else if (this.state === false) {
		this.state = true;
		totalConsumption += this.powerConsumption;
		console.log(totalConsumption);
	}
}

//лампочка
function Lamp(powerConsumption, lightColor) {
	this.powerConsumption = powerConsumption;
	this.lightColor = lightColor
}

//компьютер
function Computer(powerConsumption, CPU, APU) {
	this.powerConsumption = powerConsumption;
	this.CPU = lightColor
	this.APU = lightColor
}


Lamp.prototype = new ElectricEquipment();

const lamp1 = new Lamp(10, 'white');
const lamp2 = new Lamp(35, 'red');
const computer = new Lamp(650, 'AMD', 'RADEON');
lamp1.changeState();
lamp2.changeState();

ElectricEquipment.prototype.getTotalConsumption();
computer.changeState();
ElectricEquipment.prototype.getTotalConsumption();
lamp1.changeState();
ElectricEquipment.prototype.getTotalConsumption();
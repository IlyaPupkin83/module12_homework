//Перепишите консольное приложение из предыдущего юнита на классы. Перепишите консольное приложение из предыдущего юнита на классы

class ElectricEquipment {
	constructor(powerConsumption) {
		this.powerConsumption = powerConsumption;
		this.state = false;
	}

	static totalConsumtion = 0;

	static getTotalConsumption() {
		console.log(ElectricEquipment.totalConsumtion);
	}

	changeState() {
		if (this.state === true) {
			this.state = false;
			ElectricEquipment.totalConsumtion -= this.powerConsumption;
		} else if (this.state === false) {
			this.state = true;
			ElectricEquipment.totalConsumtion += this.powerConsumption;
		}
	}
}

//лампочка
class Lamp extends ElectricEquipment {
	constructor(powerConsumption, lightColor) {
		super(powerConsumption)
		this.lightColor = lightColor
	}
}

//компьютер
class Computer extends ElectricEquipment {
	constructor(powerConsumption, CPU, APU) {
		super(powerConsumption)
		this.CPU = lightColor
		this.APU = lightColor
	}
}

const lamp1 = new Lamp(10, 'white');
const lamp2 = new Lamp(35, 'red');
const computer = new Lamp(650, 'AMD', 'RADEON');
lamp1.changeState();
lamp2.changeState();

ElectricEquipment.getTotalConsumption();
computer.changeState();
ElectricEquipment.getTotalConsumption();
lamp1.changeState();
ElectricEquipment.getTotalConsumption();
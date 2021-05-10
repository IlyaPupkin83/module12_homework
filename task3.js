//Напишите функцию, которая создает пустой объект, но без прототипа

function createNoProto() {
	let returnObj = Object.create(null);
	return returnObj;
}

let testVar = createNoProto();

console.log(Object.getPrototypeOf(testVar));
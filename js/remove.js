//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement(array, item) {
	const index = array.indexOf(item);
	if (index !== -1) {
		 array.splice(index, 1);
	}
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 3);
console.log(array); 


// Результат: [ 1, 2, 4, 5, 6, 7 ]
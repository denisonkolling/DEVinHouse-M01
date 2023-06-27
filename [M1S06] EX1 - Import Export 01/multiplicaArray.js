const numeros = [1, 2, 3, 4, 5]

export function multiplicaArray(array) {
	var multi = 1;
	for (var i = 0; i < array.length; i++) {
		multi *= array[i];
	}
  console.log(multi);
}

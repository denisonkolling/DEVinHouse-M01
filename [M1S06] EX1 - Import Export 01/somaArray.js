const numeros = [1, 2, 3, 4, 5]

export function somaArray(array) {
	var soma = 0;
	for (var i = 0; i < array.length; i++) {
		soma += array[i];
	}
  console.log(soma);
}


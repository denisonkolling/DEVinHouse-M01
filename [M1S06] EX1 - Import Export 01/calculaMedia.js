const numeros = [1, 2, 3, 4, 5]

export function calculaMedia(array) {
	var soma = 0;
	for (var i = 0; i < array.length; i++) {
		soma += array[i];
	}
  var media = soma/array.length;
  console.log(media);
}

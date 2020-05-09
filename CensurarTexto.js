function obtenerExpresionCensurada(expresion){
	let expresionCensurada = ''

	for (let i = 0; i < expresion.length; i++) {
		expresionCensurada = expresionCensurada + '*'
	}
	return expresionCensurada
}
// gente
// =>
// expresion

function censurarTexto(frase, expresionesCensuradas){
	let fraseCensurada = frase

	for (let i = 0; i < expresionesCensuradas.length; i++) {
		const expresion = expresionesCensuradas[i]

		if (frase.includes(expresion)) {
			fraseCensurada = fraseCensurada.replace(expresion, obtenerExpresionCensurada(expresion))

		}
	}
	return fraseCensurada
}

console.log(censurarTexto('no veo el momento en que la cuarentena se termine cuarentena', ['cuarentena']))




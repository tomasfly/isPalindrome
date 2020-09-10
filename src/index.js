function obtenerDuplicado(enterosParameter) {
    let secondArray = []
    let duplicates = []
    enterosParameter.forEach(element => {
        if (!secondArray.includes(element)) {
            secondArray.push(element)
        }
        else {
            if (!duplicates.includes(element)) {
                duplicates.push(element)
            }
        }
    });
    return duplicates
}

function isPalindrome(palabra) {
    let arrayPalabra = []
    let arrayPalabraInversa = []
    let largo = palabra.length

    for (let index = 0; index < largo; index++) {
        arrayPalabra.push(palabra[index])
    }

    for (let index = largo - 1; index >= 0; index--) {
        arrayPalabraInversa.push(palabra[index])
    }

    let palabToString = arrayPalabra.toString().replace(/,/g, '')
    let palabInverseToString = arrayPalabraInversa.toString().replace(/,/g, '')
    if (palabToString === palabInverseToString) {
        return true
    }
    return false
}

module.exports = { obtenerDuplicado, isPalindrome }
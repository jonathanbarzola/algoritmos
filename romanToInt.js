function romanToInt(numeroRomano = '') {

    // Creamos un objeto donde se almacenará los números romanos y sus respectivos valores en números arabigos.
    const valoresRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    // Creamos e inicializamos la variable resultado en cero que se utilizará para acumular el valor del número romano.
    let resultado = 0;

    // Creamos un bucle para recorrer la palabra, caracter por caracter y así asignarle su valor.
    for (let i = 0; i < numeroRomano.length; i++) {
        
        // Almancemos el valor actual que recorre el for y guardamos su valor entero.
        let valorActual = valoresRomanos[numeroRomano.charAt(i)];

        // Almancemos el valor siguiente que recorre el for y guardamos su valor entero.
        let valorSiguiente = valoresRomanos[numeroRomano.charAt(i + 1)];

        // Comprobamos si el valor siguiente existe y si es mayor que el valor actual, si es así le restamos el valor actual. EJM IX = 9 ya que el valor siguiente (X) es mayor que (I) por lo tanto (I) se le resta a (X) que es el valor siguiente.
        if (valorSiguiente && valorSiguiente > valorActual) {
            resultado = resultado - valorActual;
        } else  {

            // Si lo anterior es falso, entonces solo vamos acumulando el valor actual
            resultado = resultado + valorActual;
        }
    }
    
    return resultado;
}

let num = romanToInt('MCMXCIX')
console.log(num);
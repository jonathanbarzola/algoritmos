function esBisiesto(year) {

  // Verificamos que año sea divisibible entre 4, si NO es divisible entre 4 entonces NO es un año bisiesto.
  if (year % 4 === 0) {

    // Si si es divisible por 4 pero el año es divisible entre 100 entonces NO es un año bisiesto
    if (year % 100 === 0) {

      // Si es divisible por 4 y 400 entonces es un año bisiesto :D
      if (year % 400 === 0) {
        return true;
      } else {       
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(esBisiesto(1900))
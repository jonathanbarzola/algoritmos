function esBisiesto(year) {

    // Validamos que el año sea divisible entre 4, si NO es divisible entonces retornamos false.
    if (year % 4 === 0) {
        
        // Si el año NO es divisible entre 100 entonces el año es bisiesto
        if (year % 100 === 0) {
            
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

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
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
  
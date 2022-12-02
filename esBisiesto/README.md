# Explicación del código

La función `esBisiesto()` comienza verificando si el año es divisible por 4 utilizando el operador módulo (`%`). Si el año es divisible por 4, entonces se verifica si es divisible por 100 utilizando el mismo operador. Si el año es divisible por 100, entonces se verifica si es divisible por 400. Si el año es divisible por 400, se devuelve `true`, ya que se considera bisiesto. Si el año no es divisible por 400, se devuelve `false`, ya que no se considera bisiesto.

Si el año no es divisible por 100 pero sí por 4, se devuelve `true`, ya que se considera bisiesto. Si el año no es divisible ni por 100 ni por 4, se devuelve `false`, ya que no se considera bisiesto.

Código completo:
```javascript
function esBisiesto(year) {

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

```
# Explicación del código

Para determinar si un año es **bisiesto** en JavaScript, se evalúa si el año es divisible entre 4 porque, de acuerdo con las reglas para determinar si un año es bisiesto, un año es bisiesto **si es divisible entre 4 pero NO entre 100**.

La razón por la que se utiliza esta regla se debe a que **los años bisiestos ocurren cada cuatro años**. Esto se debe a que el período de un día solar (el tiempo que tarda la Tierra en completar una vuelta completa alrededor del Sol) es ligeramente más largo que 365 días. Para compensar esta diferencia, se agrega un día extra (el 29 de febrero) **cada cuatro años** para ajustar el calendario.

Sin embargo, **esta regla no se aplica a todos los años divisibles entre 4.** Por ejemplo, **el año 1900 NO fue un año bisiesto**, a pesar de que es divisible entre 4. Esto se debe a que, además de ser **divisible entre 4**, un año bisiesto también debe ser **divisible entre 400**. Por lo tanto, el código que te di evalúa si el año es divisible entre **4**, **100** y **400** para determinar si es un **año bisiesto**.

Por lo tanto la función `esBisiesto()` comienza verificando si el año es divisible por 4 utilizando el operador módulo (`%`). Si el año es divisible por 4, entonces se verifica si es divisible por 100 utilizando el mismo operador. Si el año es divisible por 100, entonces se verifica si es divisible por 400. Si el año es divisible por 400, se devuelve `true`, ya que se considera bisiesto. Si el año no es divisible por 400, se devuelve `false`, ya que no se considera bisiesto.

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
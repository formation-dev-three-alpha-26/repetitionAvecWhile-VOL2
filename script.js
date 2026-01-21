
// 5    * 10 *10
// 3     * 10 * 10 *10

// function multiplierPar10NFois(n, p) {     // version1
//   var result = 1;
//   var x = 0;
//   while (x < p) {
//     result = result * 10;

//     x++;
//   }

//   result = n * result;

//   return result;
// }

function multiplierPar10NFois(n, p) {
  var result = n;
  var x = 0;
  while (x < p) {
    result = result * 10;
    x++;
  }
  return result;
}

function compterCaractèreÀIndex(string1, index, string2) {
  var x = 0;
  var counter = 0;
  while (x < string2.length) {
    if (string1[index] === string2[x]) {
      counter++;
    }

    x++;
  }

  return counter;
}

//v1
function inverserChaîne(chaine) {
  var result = "";

  var x = 0;

  while (x < chaine.length) {
    result = chaine[x] + result;
    x++;
  }

  return result;
}
//v2
function inverserChaîne(chaine) {
  var result = "";

  var x = chaine.length - 1;

  while (x >= 0) {
    result = result + chaine[x];
    x--;
  }

  return result;
}

function obtenirIndiceDe(ch, ca) {
  var x = 0;

  while (x < ch.length) {
    if (ch[x] === ca) {
      return x;
    }

    x++;
  }

  return "not found";
}

function sommePairs(nombre1, nombre2) {
  var result = 0;

  while (nombre1 < nombre2) {
    if (nombre1 % 2 === 0) {
      result += nombre1;
    }

    nombre1++;
  }

  return result;
}

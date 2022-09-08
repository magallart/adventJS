const string1 = 'bici coche (balón bici) coche peluche';
const string2 = '(muñeca) consola bici';
const string3 = 'bici coche (balón bici coche';
const string4 = 'peluche (bici [coche) bici coche balón';
const string5 = '(peluche {) bici';
const string6 = '(()) bici';
const string7 = '(a() bici " debería ser inválido';

export default function isValid(letter) {

  const regEx1 = new RegExp(/\[|\]|\{|\}/); // Contiene {,},[,]
  const regEx2 = new RegExp(/\(\)/); // Contiene ()
  const regEx3 = new RegExp(/\(*[A-Z|a-z|0-9]\)/); // () estén llenos
  
  if (regEx1.test(letter)) return false;
  if (regEx2.test(letter)) return false;
  return regEx3.test(letter);
}

console.log(isValid(string1));
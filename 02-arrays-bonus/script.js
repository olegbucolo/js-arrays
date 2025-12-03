const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(`1. reversedTeachers:`, reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(t => t.length > 5)
console.log(`2. longNames:`, longNames)

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf('Ed'), 1)
console.log(`3. teachers dopo rimozione di Ed:`, teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf("Fabio") !== -1;
console.log(`4. isFabioPresent:`,isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e 
// salvala nella variabile teachersString
const teachersString = teachers.join(', ');
console.log(`5. teachersString:`, teachersString)

// Programme pour vérifier si on peut voter en France (AND &&)

let age = 24
let nationality = 'french'
let isResident = false

if(age>=18 && nationality === 'french' && isResident === true) {
  console.log('vous pouvez voter en France')
} else if (age >=18 && nationality === 'french' && !isResident ) {
  console.log('vous pouvez voter mais a l etranger')
} else {
  console.log('un des parammètres n est pas valide')
}

// Programme qui va m'aider à décider si je dois mettre mon manteau

let isRainy = false;
let isWindy = false;

if(isWindy || isRainy ) {

  console.log('Vous devez mettez votre manteau')
} else {
  console.log('vous n avez pas besoin de manteau today')
}

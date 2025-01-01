const firstNames = [
  'Ivan', 'Karlos', 'Armen', 'Victor', 'Vadim',
  'Katerina', 'Asya', 'Fiona', 'George', 'Elena'
];

const lastNames = [
  'Petrov(a)', 'Fartin(a)', 'Williams', 'Alitov(a)', 'Brigin(a)',
  'Tramp', 'Miller', 'Hazin(a)', 'Moorin(a)', 'Talov(a)'
];

const streets = [
  'Pushkina', 'Oktyabry', 'Parkovaya', 'Ingenernaya', 
  'Skazochnaya', 'Lesnaya', 'Cedarnaya', 'Zelenaya'
];

const cities = [
  'Ishimbay', 'Los Angeles', 'Sterlitamak', 
  'Ufa', 'Moscow', 'Kazan'
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomName() {
  return `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
}

function getRandomAddress() {
  const streetNumber = Math.floor(Math.random() * 1000) + 1;
  const streetName = getRandomElement(streets);
  const city = getRandomElement(cities);
  return `${streetNumber} ${streetName}, ${city}`;
}

// Экспортируем функции
module.exports = {
  getRandomName,
  getRandomAddress,
};
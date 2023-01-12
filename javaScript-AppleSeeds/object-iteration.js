const obj = { car:"tesla", year:"2020", cost: 300000 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
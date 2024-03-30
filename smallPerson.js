
function smallPerson(person) {
  let smallPerson = "";
  if (person[0].age < person[1].age) {
    smallPerson = person[0].name;
  } else {
    smallPerson = person[1].name;
  }
  return smallPerson;
}

const result = smallPerson([
  { name: "mahfuj", age: 20 },
  { name: "abdullah", age: 23 },
]);

console.log(result);

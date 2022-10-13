import _ from "lodash";

const user = {
  name: "Imie",
  surname: "Nazwisko",
  allGrades: [
    {
      subjectName: "Name1",
      grades: [5, 3, 2, 5, 2],
      weight: 3,
    },
    {
      subjectName: "Name2",
      grades: [3, 3.5, 2],
      weight: 1,
    },
    {
      subjectName: "Name3",
      grades: [4, 3, 3.5],
      weight: 5,
    },
  ],
};
//zad 3
function showUser(user) {
  console.log(`${user.name}  ${user.surname}`);
  let sum = 0;
  let weights = 0;
  for (const subject of user.allGrades) {
    sum += _.sum(subject.grades) * subject.weight;
    weights += subject.weight * subject.grades.length;
  }
  console.log(`avreage = ${sum / weights}`);
}

showUser(user);

// zad 4
console.log(_.find(user.allGrades, { weight: 1 }));

//zad 5
const collections = [
  {},
  15,
  "hello@test.pl",
  null,
  ["aaa", "bbb", 5],
  "admin@gmail.com",
  undefined,
  "a34@yahoo.com",
  "321@a",
  "321.pl",
];

function getMails(collection) {
  const regex = /.+@.+\..+/;
  return _.filter(
    collection,
    (email) => typeof email === "string" && regex.test(email)
  );
}

console.log(getMails(collections));

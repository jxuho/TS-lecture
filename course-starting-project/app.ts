const person1 = {
  name: "Juho",
  age: 26,
  hobbies: ["sports", "cooking"]
}

let favoriteActivites1: string[];
favoriteActivites1 = ["Sports", 1];

let favoriteActivites2: any[];
favoriteActivites2 = ["Sports", 1];


console.log(person1.name);


for (const hobby of person1.hobbies) {
  console.log(hobby.toUpperCase());
}


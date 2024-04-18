const person: {
	name: string;
	age: number;
	role: [number, string];  // tuple type을 지정함.
} = {
	name: 'Juho',
	age: 26,
	role: [2, 'author']
}

person.role[1] = 10;
person.role = []

person.role.push("hello")  // push는 예외적으로 가능함.

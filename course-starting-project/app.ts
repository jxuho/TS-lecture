enum Role { ADMIN, READ_ONLY, AUTHOR};

enum Role2 { ADMIN = 5, READ_ONLY, AUTHOR = 100};
enum Role3 { ADMIN = "ADMIN", READ_ONLY = 1, AUTHOR = 100};

const person = {
	name: 'Juho',
	age: 26,
	role: Role.ADMIN
}

console.log(Role.AUTHOR); // 결과: 2
console.log(Role2.READ_ONLY);  // 6
console.log(Role2.AUTHOR);  // 100
console.log(Role3.ADMIN);  // 'ADMIN'


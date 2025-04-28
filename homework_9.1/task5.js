
const users = [
    { name: 'Dmytro', email: 'dmytro_inbox@yahoo.com', age: 28 },
    { name: 'Anna', email: 'anna_inbox@yahoo.com', age: 25 },
    { name: 'John', email: 'john_inbox@yahoo.com', age: 30 }
  ];
  

  for (const user of users) {

    const { name, email, age } = user;
  

    console.log(name);
    console.log(email);
    console.log(age);
  }
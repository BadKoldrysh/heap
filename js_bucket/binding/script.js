let user = {
    name: "John",
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}

setTimeout(user.sayHi, 1000); // user lost his name

setTimeout(() => {user.sayHi();}, 1000); // goot solution, but
// you can change name value
user = {
    sayHi() {console.log("Another user say hello!")}
}
  
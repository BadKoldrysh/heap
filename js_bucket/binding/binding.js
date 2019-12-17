let lox = {
    name: "Peter"
}

function sayGrebz(phrase, ending) {
    console.log(phrase + " " + this.name + ending);
}

let sayGrebzUser = sayGrebz.bind(lox);
sayGrebzUser("Who teach you dance do, ", "?");

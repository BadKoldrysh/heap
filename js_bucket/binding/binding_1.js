let car = {
    name: "audi",
    doBeep() {
        console.log(`${this.name} do beep-beep`);
    }
}

let doBeep = car.doBeep.bind(car);

// can run it without an object
doBeep();

setTimeout(doBeep, 1500);

// even if the value of user changes within 1 second
// doBeep uses the pre-bound value

car = {
    doBeep() {console.log("Another car do beep")}
};

function Dog(name, color) {
    this.name = name
    this.color = color
}
Dog.prototype.run = function () {
    console.log(`${this.name} is running`)
}
Dog.prototype.eat = function () {
    console.log(`${this.name} 在啃骨头`)
}
const dog1 = new Dog('旺财','black'),dog2=new Dog('咪咪','gray')

class Dog{
    constructor(name,color) {
        this.name = name
        this.color = color
    }
    run(){
        console.log(`${this.name} is running`)
    }
    eat(){
        console.log(`${this.name} 在啃骨头`)
    }
}
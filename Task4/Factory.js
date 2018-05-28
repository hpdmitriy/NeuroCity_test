class User {
    constructor({name,age,gender}){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    get userInfo() {
        return `My name is ${this.name} I'm a ${this.gender}, I'm ${this.age} years old`
    }
}
const vasia = new User({
    name: 'Vasiliy',
    age: 25,
    gender: 'man'
});
const ann = new User({
    name: 'Anna',
    age: 25,
    gender: 'woman'
});
console.log(vasia.userInfo);
console.log(ann.userInfo);
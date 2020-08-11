var Student = /** @class */ (function () {
    function Student(firstName, middleInital, lastName) {
        this.firstName = firstName;
        this.middleInital = middleInital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInital + " " + lastName;
    }
    return Student;
}());
var greeter = function (person) {
    return "Hello" + person.firstName + person.lastName;
};
var user = new Student("Lee", "Kyu", "Young");
console.log(greeter(user));
document.body.textContent = greeter(user);

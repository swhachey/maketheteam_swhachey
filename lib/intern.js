const Employee = require("./employee");

class Intern extends Employee {
    constructor(school){
    super("name", "id", "email")
    this.school = school
    this.role = "Intern"};

    getSchool(){
        return this.school;
    };
    
    getRole(){
        return this.role;
    };
}
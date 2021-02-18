const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNum){
    super("name", "id", "email")
    this.officeNum = officeNum};
    
    getRole(){

    };
}
const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNum){
    super("name", "id", "email")
    this.officeNum = officeNum
    this.role = "Manager"};
    
    getRole(){
        return this.role;
    };
}
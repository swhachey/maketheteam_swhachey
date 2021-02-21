const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const jest = require("jest");

describe("Employee", ()=>{
    describe("getName", ()=> {
        it("should return the name property given with constructor function", ()=> {
        const name = "Scott"    
        const result = new Employee(name, "id", "email").getName();

        expect(result).toEqual(name);
        });
    });


})
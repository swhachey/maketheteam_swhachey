const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

describe("Employee", ()=>{
    describe("getName", ()=> {
        it("should return the name property given with constructor function", ()=> {
        const name = "Scott"    
        let result = new Employee(name, "id", "email").getName();

        expect(result).toEqual(name);
        });
    });
    describe("getId", ()=> {
        it("should return the ID number property given with constructor function", ()=> {
        const id = 123
        let result = new Employee("Scott", id, "email").getId();

        expect(result).toEqual(id)
        });
    });
    describe("getEmail", ()=> {
        it("should return the Email Address property given with constructor function", ()=> {
        const email = "sw.hachey@gmail.com";
        let result = new Employee("Scott", "id", email).getEmail();
        expect(result).toEqual(email)
        });
    });
    describe("getRole", ()=> {
        it("should return the Role property given with constructor function", ()=> {
        const role = "Employee";
        let result = new Employee("Scott", "id", "email").getRole();
        expect(result).toEqual(role)
        });
    });
    
});

describe("Engineer", ()=>{
    describe("getName", ()=> {
        it("should return the name property given with constructor function", ()=> {
        const name = "Scott"    
        let result = new Engineer(name, "id", "email").getName();

        expect(result).toEqual(name);
        });
    });
    describe("getId", ()=> {
        it("should return the ID number property given with constructor function", ()=> {
        const id = 123
        let result = new Engineer("Scott", id, "email").getId();

        expect(result).toEqual(id)
        });
    });
    describe("getEmail", ()=> {
        it("should return the Email Address property given with constructor function", ()=> {
        const email = "sw.hachey@gmail.com";
        let result = new Engineer("Scott", "id", email).getEmail();
        expect(result).toEqual(email)
        });
    });
    describe("getRole", ()=> {
        it("should return the Role property given with constructor function", ()=> {
        const role = "Engineer";
        let result = new Engineer("Scott", "id", "email").getRole();
        expect(result).toEqual(role)
        });
    });
    describe("getGithub", ()=> {
        it("should return the GitHub Username property given with constructor function", ()=> {
        const github = "swhachey";
        let result = new Engineer("Scott", "id", "email", github).getGithub();
        expect(result).toEqual(github)
        });
    });
    
});
describe("Intern", ()=>{
    describe("getName", ()=> {
        it("should return the name property given with constructor function", ()=> {
        const name = "Scott"    
        let result = new Intern(name, "id", "email").getName();

        expect(result).toEqual(name);
        });
    });
    describe("getId", ()=> {
        it("should return the ID number property given with constructor function", ()=> {
        const id = 123
        let result = new Intern("Scott", id, "email").getId();

        expect(result).toEqual(id)
        });
    });
    describe("getEmail", ()=> {
        it("should return the Email Address property given with constructor function", ()=> {
        const email = "sw.hachey@gmail.com";
        let result = new Intern("Scott", "id", email).getEmail();
        expect(result).toEqual(email)
        });
    });
    describe("getRole", ()=> {
        it("should return the Role property given with constructor function", ()=> {
        const role = "Intern";
        let result = new Intern("Scott", "id", "email").getRole();
        expect(result).toEqual(role)
        });
    });
    describe("getSchool", ()=> {
        it("should return the Role property given with constructor function", ()=> {
        const school = "DU";
        let result = new Intern("Scott", "id", "email", school).getSchool();
        expect(result).toEqual(school)
        });
    });
    
});


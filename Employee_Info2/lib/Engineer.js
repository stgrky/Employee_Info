// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

var Employee=require("./Employee")

// new class that extends to Employee

class Engineer extends Employee{
    constructor(name,id,email,github){
        // "super" uses the main parent and its original constructor
        super(name,id,email)
        this.github=github
    }

    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}
module.exports=Engineer
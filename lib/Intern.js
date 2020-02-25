// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Use the Employee var, that way we can 
//extend the class to the parent "employee"
var Employee=require("./Employee")

//Create a new class for Intern and extend it to the parent "employee"
class Intern extends Employee{
    constructor(name,id,email,school){
        //Use super to reference the parent..
        super(name,id,email)
        //add school for intern..
        this.school=school
    }
    // getSchool()
// getRole() // Overridden to return 'Intern'
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}
module.exports=Intern
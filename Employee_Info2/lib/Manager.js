// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// using employee var again 
var Employee=require=("./Employee")

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        // super piggybacks off of employee
        super(name,id,email)
        this.officeNumber=officeNumber
        // officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
}

module.exports.Manager
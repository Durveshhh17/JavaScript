class College{
    constructor(name,location,CID){
        this.name = name;
        this.location = location;
        this.CID = CID;
    }
    Detail(){
        console.log(`College name:  ${this.name}` );
        console.log(`College Address:${this.location}`);
        console.log(`College ID:${this.CID}`)
    }
}

class Department extends College{
    constructor(name,location,CID,Deptname,DeptID){
        super(name,location,CID)
        this.Deptname = Deptname
        this.DeptID = DeptID
    }
    showdetails(){
        this.Detail()
        console.log(`College Department name:  ${this.Deptname}` );
        console.log(`College Department id:  ${this.DeptID}` );
    }
}

let Details = new Department("SCOE","Kharghar","101","IT","100")
Details.showdetails()
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

class Students extends Department{
    constructor(name,location,CID,Deptname,DeptID,StudName,Roll_no,Age){
        super(name,location,CID,Deptname,DeptID)
        this.StudName=StudName
        this.Roll_no=Roll_no
        this.Age=Age
    }

    Full_Details(){
        this.Detail()
        this.showdetails()
        console.log(`Student Name:  ${this.StudName}` );
        console.log(`Roll_no:  ${this.Roll_no}` );
        console.log(`Student Age:  ${this.Age}` );
    }
}

let Details = new Students("SCOE","Kharghar",101,"IT",100,"Mayuresh",50,20)
Details.Full_Details()
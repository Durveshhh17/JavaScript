class College{
    constructor(name,location,CID){
        this.name = name;
        this.location = location;
        this.CID = CID;
    }
    Detail(){
        console.log(this.name , this.location, this.CID);
        console.log(`College Address: ${this.location}`);
        console.log(`College ID:${this.CID}`)
    }
}

let Collegeinfo = new College("SCOE","Kharghar",100);
Collegeinfo.Detail();
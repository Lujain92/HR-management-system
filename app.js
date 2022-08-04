let numberId=1
const bodyEl=document.getElementsByTagName("body");
const container=document.getElementById("container")
 
 function randomNum(min,max){
    return Math.floor(Math.random()*(max-min))+min
 }
 const array=[]

 function allEmployee (employeeId,fullName,department,Level,imageURL,Salary){
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.Level=Level;
    this.imageURL=imageURL;
    this.Salary=Salary;
    this.uniqueId =function (){
        this.employeeId+=numberId;
        numberId++;
        return this.employeeId

    };
    this.salaryCal=function() {

    

        if ( this.Level=="Senior"){
            this.Salary= randomNum(1500,2000) - randomNum(1500,2000)*0.075
            return this.Salary
           }
           else if (this.Level =="Mid-Senior"){
            this.Salary= randomNum(1000,1500) - randomNum(1000,1500)*0.075
            return this.Salary
           }
           else{
            this.Salary= randomNum(500,1000) - randomNum(500,1000)*0.075
            return this.Salary
           }
    
        } ;
        array.push(this);
        

 }
 
const name1=new allEmployee(999,"Ghazi Samer","Administration","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Ghazi.jpg?raw=true",0)
const name2=new allEmployee(999,"Lana Ali","Finance","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Lana.jpg?raw=true",0)
const name3=new allEmployee(999,"Tamara Ayoub","Marketing","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true",0)
const name4=new allEmployee(999,"Safi Walid","Administration","Mid-Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Safi.jpg?raw=true",0)
const name5=new allEmployee(999,"Omar Zaid","Development","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Omar.jpg?raw=true",0)
const name6=new allEmployee(999,"Rana Saleh","Development","Junior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Rana.jpg?raw=true",0)
const name7=new allEmployee(999,"Hadi Ahmad","Finance","Mid-Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true",0)

allEmployee.prototype.render=function() {
    this.salaryCal()
    this.uniqueId()
    divEl=document.createElement("div");
    container.appendChild(divEl);
    divEl.className="design"
    imgEl=document.createElement("img");
    imgEl.src=this.imageURL
    imgEl.alt=this.fullName
    divEl.appendChild(imgEl)
    
    pEl=document.createElement("p");
    pEl.textContent=`Name:${this.fullName} ID:${this.employeeId} Department: ${this.department}Level:${this.Level} ${this.Salary} `
    
    divEl.appendChild(pEl)
    // brEl=document.createElement("br")
    // divEl.appendChild(brEl)

    
    

    
     //document.write(`<main><p>Employee name: ${this.fullName}</p><p>Department: ${this.Level}</p><p>Employee salary:${this.Salary}</p></main>`)
    


    
    
}

name1.render()
name2.render()
name3.render()
name4.render()
name5.render()
name6.render()
name7.render()

let numberId=1
 
 function randomNum(min,max){
    return Math.floor(Math.random()*(max-min))+min
 }
 
 
 const name1={
    employeeId:999,
    fullName:"Ghazi Samer" ,
    department :"Administration" ,
    Level:"Senior" ,
    imageURL :"V" ,
    uniqueId :function(){
        this.employeeId+=numberId;
        numberId++;
        return this.employeeId
    },
    Salary :0,
    salaryCal:function(){

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

    },
    
    

}

const name2={
    employeeId:999,
    fullName:"Lana Ali	" ,
    department :"Finance" ,
    Level:"Senior" ,
    imageURL :"V" ,
    uniqueId :function(){
        this.employeeId+=numberId;
        numberId++;
        return this.employeeId
    },
    Salary :0,
    salaryCal:function(){

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

    },
    
    

}

const name3={
    employeeId:999,
    fullName:"Tamara Ayoub" ,
    department :"Marketing" ,
    Level:"Senior" ,
    imageURL :"V" ,
    uniqueId :function(){
        this.employeeId+=numberId;
        numberId++;
        return this.employeeId
    },
    Salary :0,
    salaryCal:function(){

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

    },
    
    

}





const name4={
    employeeId:999,
    fullName:"Safi Walid" ,
    department :"Administration" ,
    Level:"Mid-Senior" ,
    imageURL :"V" ,
    uniqueId :function(){
        this.employeeId+=numberId;
        numberId++;
        return this.employeeId
    },
    Salary :0,
    salaryCal:function(){

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

    },
    
    

}


const name5={
    employeeId:999,
    fullName:"Omar Zaid" ,
    department :"Development" ,
    Level:"Senior" ,
    imageURL :"V" ,
    uniqueId :function(){
        this.employeeId+=numberId;
        numberId++;
        return this.employeeId
    },
    Salary :0,
    salaryCal:function(){

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

    },
    
    

}


const name6={
    employeeId:999,
    fullName:"Rana Saleh	" ,
    department :"Development" ,
    Level:"Junior" ,
    imageURL :"V" ,
    uniqueId :function(){
        this.employeeId+=numberId;
        numberId++;
        return this.employeeId
    },
    Salary :0,
    salaryCal:function(){

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

    },
    
    

}

const name7={
    employeeId:999,
    fullName:"Hadi Ahmad" ,
    department :"Finance" ,
    Level:"Mid-Senior" ,
    imageURL :"V" ,
    uniqueId :function(){
        this.employeeId+=numberId;
        numberId++;
        return this.employeeId
    },
    Salary :0,
    salaryCal:function(){

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

    },
    
    

}


array=[]
array.push(name1,name2,name3,name4,name5,name6,name7)


for (let i=0;i<array.length;i++){
    
    console.log(`Employee name: ${array[i]["fullName"]}`)
    array[i].salaryCal()
    console.log(`Employee salary:${array[i].Salary}`)
    

 
}
let numberId=1000
function unique(){
    numberId++
    return numberId


}



 
 function randomNum(min,max){
    return Math.floor(Math.random()*(max-min))+min
 }
 
 
 const name1={
    employeeId:unique(),
    fullName:"Ghazi Samer" ,
    department :"Administration" ,
    Level:"Senior" ,
    imageURL :"V" ,
    Salary : function (){
        
        return this.salaryCal() - this.salaryCal() *0.075 

    },
    salaryCal:function(){

       if ( this.Level=="Senior"){{
        return randomNum(1500,2000)
       }}
       else if (this.Level =="Mid-Senior"){
        return randomNum(1000,1500)
       }
       else{
        return randomNum(500,1000)
       }

    },
    
    

}

const name2={
    employeeId:unique(),
    fullName:"Lana Ali	" ,
    department :"Finance" ,
    Level:"Senior" ,
    imageURL :"V" ,
    Salary : function (){
        
        return this.salaryCal() - this.salaryCal() *0.075 

    },
    salaryCal:function(){

       if ( this.Level=="Senior"){{
        return randomNum(1500,2000)
       }}
       else if (this.Level =="Mid-Senior"){
        return randomNum(1000,1500)
       }
       else{
        return randomNum(500,1000)
       }

    },
    
    

}

const name3={
    employeeId:unique(),
    fullName:"Tamara Ayoub" ,
    department :"Marketing" ,
    Level:"Senior" ,
    imageURL :"V" ,
    Salary : function (){
        
        return this.salaryCal() - this.salaryCal() *0.075 

    },
    salaryCal:function(){

       if ( this.Level=="Senior"){{
        return randomNum(1500,2000)
       }}
       else if (this.Level =="Mid-Senior"){
        return randomNum(1000,1500)
       }
       else{
        return randomNum(500,1000)
       }

    },
    
    

}



const name4={
    employeeId:unique(),
    fullName:"Safi Walid" ,
    department :"Administration" ,
    Level:"Mid-Senior" ,
    imageURL :"V" ,
    Salary : function (){
        
        return this.salaryCal() - this.salaryCal() *0.075 

    },
    salaryCal:function(){

       if ( this.Level=="Senior"){{
        return randomNum(1500,2000)
       }}
       else if (this.Level =="Mid-Senior"){
        return randomNum(1000,1500)
       }
       else{
        return randomNum(500,1000)
       }

    },
    
    

}


const name5={
    employeeId:unique(),
    fullName:"Omar Zaid" ,
    department :"Development" ,
    Level:"Senior" ,
    imageURL :"V" ,
    Salary : function (){
        
        return this.salaryCal() - this.salaryCal() *0.075 

    },
    salaryCal:function(){

       if ( this.Level=="Senior"){{
        return randomNum(1500,2000)
       }}
       else if (this.Level =="Mid-Senior"){
        return randomNum(1000,1500)
       }
       else{
        return randomNum(500,1000)
       }

    },
    
    

}


const name6={
    employeeId:unique(),
    fullName:"Rana Saleh	" ,
    department :"Development" ,
    Level:"Junior" ,
    imageURL :"V" ,
    Salary : function (){
        
        return this.salaryCal() - this.salaryCal() *0.075 

    },
    salaryCal:function(){

       if ( this.Level=="Senior"){{
        return randomNum(1500,2000)
       }}
       else if (this.Level =="Mid-Senior"){
        return randomNum(1000,1500)
       }
       else{
        return randomNum(500,1000)
       }

    },
    
    

}

const name7={
    employeeId:unique(),
    fullName:"Hadi Ahmad" ,
    department :"Finance" ,
    Level:"Mid-Senior" ,
    imageURL :"V" ,
    Salary : function (){
        
        return this.salaryCal() - this.salaryCal() *0.075 

    },
    salaryCal:function(){

       if ( this.Level=="Senior"){{
        return randomNum(1500,2000)
       }}
       else if (this.Level =="Mid-Senior"){
        return randomNum(1000,1500)
       }
       else{
        return randomNum(500,1000)
       }

    },
    
    

}


array=[]
array.push(name1,name2,name3,name4,name5,name6,name7)
console.log(array)

for (let i=0;i<array.length;i++){
    
    console.log(array[i]["fullName"])
    console.log(array[i].Salary())
    
}
 
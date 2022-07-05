
function loginData(e,p){
    this.Email=e;
    this.Password=p;
}

let signuparr=JSON.parse(localStorage.getItem("singupls"))||[];
// console.log(signuparr)
function loginfun(e){

    e.preventDefault();
    console.log("hii")
    let loginform=document.getElementById("loginform");
    
    let Email=loginform.Email.value;

    let Password=loginform.Password.value;


    let loginNew= new loginData(Email,Password);
    console.log(loginNew);
     let d=false;

    signuparr.forEach(function (ele){

        if (Email == ele.email && Password == ele.password){
           
            d=true;
        } 
        

    })

    if(d==true){
        alert("Login SuccessFull")
        window.location.href="index.html"
    }
   else{
    alert("Enter valid Id and password")
   }
   
   









      
   


}
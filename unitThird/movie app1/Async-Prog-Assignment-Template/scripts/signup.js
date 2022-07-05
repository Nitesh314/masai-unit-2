

 function Data(n,c,e,p){
       
    this.name=n;
    this.contact=c;
    this.email=e;
    this.password=p;
}

let signuparr=JSON.parse(localStorage.getItem("singupls"))||[];
function signfun(e){
    e.preventDefault();
   // console.log("hii")
    let form=document.getElementById("signform")

    let name=form.name.value;

    let contact=form.contact.value;

    let email=form.email.value;

    let password=form.password.value;

    //console.log(name,contact,email,password)
    let signupdata= new Data(name,contact,email,password);
    
   if(name==""){
    alert("Please Enter Name")
   }
   else if(contact==""){
    alert("Please Enter Contact")
   }
   else if (email==""){
    alert("Please Enter Email")

   }
   else if (password==""){
    alert("Please Enter Password")
    
   }
 



else{
    signuparr.push(signupdata)
    localStorage.setItem("singupls",JSON.stringify(signuparr))
    alert("Signup SuccessFull ")
    window.location.href="login.html"
}
   
    



}
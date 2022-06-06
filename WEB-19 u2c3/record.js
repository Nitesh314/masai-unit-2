// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction);


function myFunction(event){
    event.preventDefault()
    var names=document.querySelector("#name").value
    var employee=document.querySelector("#employeeID").value
    var depart=document.querySelector("#department").value
    var expe=document.querySelector("#exp").value
    var emails=document.querySelector("#email").value
    var mob=document.querySelector("#mbl").value

     var tr=document.createElement("tr");
    var tn=document.createElement("td");
    tn.innerText=names;

    var tn1=document.createElement("td");
    tn1.innerText=employee;

    var tn2=document.createElement("td");
    tn2.innerText=depart;

    var tn3=document.createElement("td");
    tn3.innerText=expe;

    var tn4=document.createElement("td");
    tn4.innerText=emails;

    var tn5=document.createElement("td");
    tn5.innerText=mob;

    var experiences=Number(expe)

    var tn6=document.createElement("td");
    if(experiences > 5){
        tn6.innerText="Senior";
    }
    else if(experiences >= 2 && experiences <= 5)
    {
        tn6.innerText="Junior"
    }
    else {
        tn6.innerText="Fresher";
    }
    
    var tn7=document.createElement("td");
    tn7.innerText="delete";
    tr.append(tn,tn1,tn2,tn3,tn4,tn5,tn6,tn7)
    document.querySelector("tbody").append(tr)

}


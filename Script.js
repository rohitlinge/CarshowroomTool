let Showroommenu = document.querySelector(".Showroommenu");
let showroomname = document.querySelector(".Showroomname");
let singup = document.getElementById("signup");
let signin = document.getElementById("signin");
let about = document.getElementById("about");
let boxright = document.querySelector(".right");
let leftbox = document.querySelector(".left");
let afterlogleftmenu = document.querySelector(".afterloginleftbar")

// Function for auto show about us & buy defolt white baground about button //
function showaboutus(){

boxright.innerHTML = `<div class="content">

<b>Showroom Management Suite</b>
Streamline your dealership operations with a centralized platform designed for inventory precision and effortless discovery. This software provides a robust toolkit for managing multi-location inventories with ease.
<ul>
<li>1. Dynamic Inventory Entry</li>
<li>2. Showroom Allocation</li>
<li>3. Advanced Search & Filter</li>
<li>4. Detailed Specifications</li>

</ul>
</div>`
       about.style.backgroundColor = "aliceblue";
about.style.color = "black"
singup.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
singup.style.color = "white"
signin.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
signin.style.color = "white"
 
}

// call auto show about us to show in first load//

showaboutus()

//show respected filed on respected buuton

Showroommenu.addEventListener("click", function(event){

    let button = event.target;

    if(button.id == "signup"){

singup.style.backgroundColor = "aliceblue";
singup.style.color = "black"
signin.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
signin.style.color = "white"
about.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
about.style.color = "white"
singupsubmitt()
    }
    else if(button.id == "signin"){
signin.style.backgroundColor = "aliceblue";
signin.style.color = "black"
singup.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
singup.style.color = "white"
about.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
about.style.color = "white"
sininboxright()
    }
    else if(button.id == "about"){
       about.style.backgroundColor = "aliceblue";
about.style.color = "black"
singup.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
singup.style.color = "white"
signin.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
signin.style.color = "white"
showaboutus()
    }

});

// sin up data push on localstore and same verify is there allready avilable or not //

function Submituserondatabase(){

let username = document.getElementById("username").value
let passward = document.getElementById("passward").value

let users = JSON.parse(localStorage.getItem("users")) || []

let user = {
 
username: username,
passward: passward

} 

users.push(user)

localStorage.setItem("users", JSON.stringify(users))

document.getElementById("username").value = ""
document.getElementById("passward").value = ""

boxright.innerHTML = `
<div class="singinnotification">
    <h2>You signed up successfully! Now, to access the dashboard, please sign in.</h2>
</div>
`;

}

function singupsubmitt(){

boxright.innerHTML = `<form>
<input placeholder="Enter Your UserName" type="text" id="username">
<input placeholder="Enter Your Passward" type="text" id="passward">
<input value="Sing Up" type="button" id="buttonsinup" onclick="Submituserondatabase()">
</form>`
}



function sininsubmitbutton(){

let sininusername = document.getElementById("sininusername").value
let sininpassward = document.getElementById("sininpassward").value
let Databaselocalstoreage = JSON.parse(localStorage.getItem("users")) || [];

let result = Databaselocalstoreage.find(function(val){

return val.passward === sininpassward && val.username === sininusername

})

if(result){
boxright.innerHTML = `
<div class="singinnotification">
    <h2>You signed in successfully! Now, to access the dashboard</h2>
</div>
`    
showroomname.innerHTML = `Welcome ${sininusername}, Here is What happing in your showroom`
showroomname.style.borderBottom = "1px solid white";
afterloginleftbarchnage()
} else {
    boxright.innerHTML = `
<div class="singinnotification">
    <h2>Pls Submitt right Username and Passward</h2>
</div>
`   
}

}

function sininboxright(){


boxright.innerHTML = `

<div class="singinbuttonform">
<input type="text" id="sininusername" placeholder="Username">
<input type="text" id="sininpassward" placeholder="Passward">
<input onclick="sininsubmitbutton()" value="Sin in" type="button" id="singinbuttonsubmit">
</div>

`;

}

// after log in left side bar //

function afterloginleftbarchnage(){

Showroommenu.style.display = "none"

afterlogleftmenu.style.display = "block"










}
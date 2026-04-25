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
boxright.classList.remove("dashboard-view");
boxright.classList.add("center-view");
singupsubmitt()
    }
    else if(button.id == "signin"){
signin.style.backgroundColor = "aliceblue";
signin.style.color = "black"
singup.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
singup.style.color = "white"
about.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
about.style.color = "white"
boxright.classList.remove("dashboard-view");
boxright.classList.add("center-view");
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
<maindashbordfirstview>
<div id="addobjects">
<input class="button1" type="button" onclick="" value="ADD Cars">
<input class="button1" type="button" onclick=""value="ADD Cars">
<input class="button1" type="button" onclick=""value="ADD Cars">

</div>
<div class="dashbordinternal">
<div class="a">

<div class="box1"><h2>Total Inventory Count</h2></div>
<div class="box2"><h2>Inventory by Status</h2></div>
<div class="box3"><h2>Stock Ageing Analysis</h2></div>
</div>
<div class="b">
<div class="box4"><h3>Hatchbacks</h3><img src="https://imgd.aeplcdn.com/1280x720/cw/ec/32475/Maruti-Suzuki-New-Swift-Exterior-116090.jpg?wm=0" style="width: 100px; height:60px" ></div>
<div class="box5"><h3>Sedans</h3><img src="https://ackodrive-prod.ackoassets.com/image/mercedes-benz/amg-s-63-e-performance/obsidian-black/default/Transparent.png" style="width: 120px; height:50px" ></div>
<div class="box6"><h3>SUVs</h3><img src="https://www.vertumotors.com/images/new/vertu/car/toyota/corolla/colour-swatches/metallic-eclipseblack.jpg" style="width: 100px; height:60px" ></div>
</div>
<div class="c"> <table>
    <tr>
      <th>Car Type</th>
      <th>Total Cost</th>
      <th>Profit Predict</th>
    </tr>
    <tr>
      <td>Hatchbacks</td>
      <td>14</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Sedans</td>
      <td>15</td>
      <td>B</td>
    </tr>
    <tr>
      <td>SUVs</td>
      <td>14</td>
      <td>A+</td>
    </tr>
  </table></div>
</div>
</maindashbordfirstview>
`    
boxright.classList.remove("center-view");
boxright.classList.add("dashboard-view");
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
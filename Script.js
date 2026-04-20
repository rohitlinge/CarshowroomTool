let Showroommenu = document.querySelector(".Showroommenu");
let singup = document.getElementById("signup")
let signin = document.getElementById("signin")
let about = document.getElementById("about")
let boxright = document.querySelector(".right")

Showroommenu.addEventListener("click", function(event){

    let button = event.target;

    if(button.id == "signup"){

singup.style.backgroundColor = "aliceblue";
singup.style.color = "black"
signin.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
signin.style.color = "white"
about.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
about.style.color = "white"
boxright.innerHTML = ""

    }
    else if(button.id == "signin"){
signin.style.backgroundColor = "aliceblue";
signin.style.color = "black"
singup.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
singup.style.color = "white"
about.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
about.style.color = "white"
boxright.innerHTML = ""
    }
    else if(button.id == "about"){
       about.style.backgroundColor = "aliceblue";
about.style.color = "black"
singup.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
singup.style.color = "white"
signin.style.backgroundColor = "rgba(255, 255, 255, 0.168)";
signin.style.color = "white"
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
    }

});
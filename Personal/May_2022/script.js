var images = document.querySelectorAll(".pic");


function accountStatus(element){
    if (element.innerText == "Login"){
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login";
    }
}

function invertColors(){
    console.log(images);
    images.classList.add("invert");
}
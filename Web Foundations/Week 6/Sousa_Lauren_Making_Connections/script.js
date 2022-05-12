var requestTracker = document.querySelector("#totalRequests");
var connectionTracker = document.querySelector("#totalConnections");
var userName = document.querySelector("#nameOfUser");

function connectionConfirm(id){
    var element = document.querySelector(id);
    element.remove();
    totalRequests.innerText--;
    totalConnections.innerText++;
}

function connectionDeny(id){
    var element = document.querySelector(id);
    element.remove();
    totalRequests.innerText--;
}

function editName(){
    userName.innerText = "Any Other Name";
}
let username ;

document.getElementById("submit").onclick = function () {
   username = document.getElementById("name").value;
   document.getElementById("result").textContent = `Your name  is : ${username}`
}
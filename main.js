

let list = document.querySelector('ul');
list.addEventListener('click', (e) =>{
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);
function newItem() {

    let usersList = document.createElement("li");
    let userInput = document.getElementById("userInput").value;
    let t = document.createTextNode(userInput);
    let close = document.createElement("span");


    usersList.className = "m-2 d-flex justify-content-between "


    close.className = "btn-close"
    usersList.append(close)

    usersList.append(t)

    if (userInput === '') {
        alert("Please Enter Your Name")
    }
    else {

        document.getElementById("first").append(usersList)
    }
    document.getElementById("userInput").value = "";

    close.addEventListener("click", () => {

        usersList.remove()
    })

}
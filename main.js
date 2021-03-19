

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

     ////// create close button
    let close = document.createElement("button");

    /////create div to  checkbox and close button
    let newDiv = document.createElement("div");

     ////// create checkbox   
     let x = document.createElement("INPUT");
     x.className = " w-75 d-none"
     x.setAttribute("type", "checkbox");

   


    //// userList stylle
    usersList.className = "m-2 d-flex justify-content-between "

    //// close button stylle
    close.className = "btn-close w-25 m-e-12"

     //// div stylle
     newDiv.className = "d-inline-flex"
     newDiv.append(x)
    

     


     newDiv.append(close)
    
      usersList.append(newDiv)


   
    

    usersList.append(t)

    if (userInput === '') {
        alert("Please Enter Your Name")
    }
    else {

        document.getElementById("first").append(usersList)
    }
    document.getElementById("userInput").value = "";

    usersList.addEventListener("click",()=>{

      x.className = "w-100m-t-10 "
      x.checked =true;
    })

   

    close.addEventListener("click", () => {

        usersList.remove()
    })

}
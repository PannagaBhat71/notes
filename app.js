let output = document.querySelector(".output");
let clear = document.querySelector(".clear");
alert("hello user the cancel button is to clear text, not the saved ones. To delete saved ones pls refresh the page");
function notes(){
    const notebook = document.getElementById("notebook").value.toLowerCase();
    let div = document.createElement("div");
    div.textContent = notebook;
    div.classList.add("inside-output");
    output.append(div);
    
};


clear.addEventListener("click",() =>{
    const notebook = document.getElementById("notebook");
    notebook.value="";
});


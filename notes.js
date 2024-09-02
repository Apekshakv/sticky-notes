const notesconatiner = document.getElementsByClassName("pen")[0]
const btn = document.getElementsByClassName("btn")[0]
let notes =document.getElementsByClassName("paper")[0]



btn.addEventListener("click" , opp)

function opp(event){
event.preventDefault()

let inpu = document.createElement("p");
let img = document.createElement("img");
inpu.className="paper";
inpu.setAttribute("contenteditable","true");
img.src="delete.png";
img.className="delete"
notesconatiner.appendChild(inpu).appendChild(img);

}

function shownotes(){
   notesconatiner.innerHTML=localStorage.getItem("notess");
}
shownotes();


function updateStorage(){
   localStorage.setItem("notess", notesconatiner.innerHTML)
}

notesconatiner.addEventListener("click",apple)

function apple(e) {
   if (e.target.className === "delete") {
     e.target.parentElement.remove();
     updateStorage();
   } 
   else if (e.target.className === "paper") {
     const paperNotes = document.getElementsByClassName("paper");
     Array.from(paperNotes).forEach(note => {
       note.onkeyup = function () {
         updateStorage();
       };
     });
   }
 }
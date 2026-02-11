const msg = document.getElementById('msg')  ; 
const tasks = document.querySelectorAll(".tasks") ;



function setMessage(text = "") {
    msg.textContent = text ; 
}

const addButtons = document.querySelectorAll(".add") ;

addButtons.forEach((btn) =>{
    btn.addEventListener("click", () =>{
       const value = window.prompt("quelle tache aujourdhui ?") ;
       if(!value || value.trim() === "") {
        setMessage("Aucune tache saisie") ;
        return ; 
       }

       setMessage("") ;

       const dayCell = btn.closest(".day") ; 

    

        const tasksBox = dayCell.querySelector(".tasks") ;
        const taskEl = document.createElement("div") ;
        taskEl.className = "task" ;
        const span = document.createElement("span") ;
        span.textContent = value.trim() ;

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.textContent = "\u274C";

delBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  taskEl.remove();
});
         taskEl.appendChild(span) ;
         taskEl.appendChild(delBtn) ;


      
    tasksBox.appendChild(taskEl) ;
    });

});


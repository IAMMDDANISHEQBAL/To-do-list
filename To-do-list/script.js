let task=document.querySelector("#input");

let tasklist=document.querySelector(".list");

task.addEventListener('keypress',(e)=>
{
    if(e.key==='Enter')
        {
            let temptask=task.value.trim();

            let node=document.createElement("li");
            node.innerHTML=temptask;
           
            
            let button=document.createElement("button");
            let priority=document.createElement("button");
            priority.style.width = "4.5rem";
            priority.style.height = "1.3rem";
            priority.style.backgroundColor = "green";
            priority.style.color = "white";
            priority.setAttribute("class", "priority");
            priority.innerText = "Priority";
            priority.style.marginLeft="1.5rem";
            priority.style.fontSize="smaller";
            priority.style.border="none";

            priority.addEventListener('click', () => {
                if (priority.classList.contains("prioritized")) {
                    priority.classList.remove("prioritized");
                    priority.innerText = "Priority";
                    priority.style.backgroundColor = "green";

                    button.disabled=false;
                    button.style.backgroundColor="green";
                    button.style.textDecoration="none";
                   
                  
                } else {
                    priority.classList.add("prioritized");
                    priority.innerText = "Prioritized";
                    priority.style.backgroundColor = "red";
                    button.disabled=true;
                    button.style.backgroundColor="red";
                    button.style.textDecoration="line-through";
                }
                priority.style.border="none";
            });
            //----------------------------------------------
            button.style.width = "4.5rem";
            button.style.height = "1.2rem";
            button.style.backgroundColor = "green";
            button.style.color = "white";
            button.setAttribute("class", "delete");
            button.innerText = "Delete";
            button.style.border="none";
            tasklist.appendChild(node);
            node.appendChild(button);
            button.style.marginLeft="1.5rem";
            button.style.fontSize="smaller";
            node.appendChild(priority);
            button.addEventListener('click', () => {
                
                
                node.remove(); 
                
            });
            
            
            
            task.value="";

         
        }
  

});





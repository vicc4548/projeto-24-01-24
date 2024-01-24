let task = "";
let completed = [];

const inputTask = document.querySelector("#inputTask")


// Esta função é chamada quando o botão de adicionar é clicado, ela adiciona tarefa no card "A fazer".

function add_task(){
    tarefa = inputTask.value;
    tarefa = tarefa.toUpperCase()

    //verifica se algo foi digitado, antes de criar o elemento da lista
    if(tarefa){
        const item_Lista = document.createElement("li")
        const list_toDo = document.querySelector("#list_toDo")
        
        //cria o elemento <li> adiciona a tarefa digitada nele e insere na tag <ul>
        text_list =  document.createTextNode(tarefa)
        item_Lista.appendChild(text_list)
        list_toDo.appendChild(item_Lista)
        

        //cria evento de click para cada item adicionado. E sempre que o item for clicado ele chama a função "task_inProgress e remove o item clicado da tela"
        item_Lista.addEventListener("click", function() {
            task = this.innerHTML;
            task_inProgress();
            list_toDo.removeChild(item_Lista)
        })
    
    
        inputTask.value="";
    }
    
        
}



function task_inProgress(){
        
        const item_Lista = document.createElement("li")
        const list_inProgress = document.querySelector("#list_inProgress")

        text_list = document.createTextNode(task)
        item_Lista.appendChild(text_list)
        list_inProgress.appendChild(item_Lista)
        item_Lista.addEventListener("click", function() {
            task = this.innerHTML;
            task_Completed();
            list_inProgress.removeChild(item_Lista)
        })
    
}
function task_Completed(){
    

    const item_Lista = document.createElement("li")
    const list_Completed = document.querySelector("#list_completed")

    text_list = document.createTextNode(task)
    item_Lista.appendChild(text_list)
    list_Completed.appendChild(item_Lista)
    item_Lista.addEventListener("click",function(){
        list_Completed.removeChild(item_Lista)

    })
    
}


    
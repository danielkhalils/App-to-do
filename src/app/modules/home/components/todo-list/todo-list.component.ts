import { Component, DoCheck, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor(){ }

  //Enviar itens concluidos para o final da fila de tarefas
  ngDoCheck(): void {
    this.setLocalStorage();
  }
  
  //Marcar itens concluídos
  public setEmmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  //Deletar item da lista
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  //Deletar todos os itens da lista
  public deleteAllTaskList(){
    const confirm = window.confirm("Deseja deletar todas as tarefas?")
    
    if(confirm == true){
      this.taskList = [];
    }
  }

  //Validar campo vazio
  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }

  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  
      //Salvar itens no localStorage e converte o array para string
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}

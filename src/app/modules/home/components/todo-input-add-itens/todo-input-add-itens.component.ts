import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{

  //Emitir para outros componentes algum valor
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string  = "";

  constructor(){ }

  ngOnInit(): void {

  }

  public submitTaskList(){

    //Remover espaços em branco e não permitir tarefas com títulos vazios
    this.addItemTaskList = this.addItemTaskList.trim()

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  aceitar: boolean = false;

  tarefas: Tarefa[] = []

  constructor(private tarefaservice: TarefaService) { }

  ngOnInit(): void {
    this.findAll();
  }

  btnaceitar(): void{
    this.aceitar = this.aceitar ? false : true;
  }

  findAll(){
    this.tarefaservice.findAll().subscribe((x) => this.tarefas = x);
  }

}

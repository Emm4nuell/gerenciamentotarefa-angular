import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/interfaces/tarefa';

@Component({
  selector: 'app-create-tarefa',
  templateUrl: './create-tarefa.component.html',
  styleUrls: ['./create-tarefa.component.css']
})
export class CreateTarefaComponent implements OnInit {

  tarefa: Tarefa = {
    id: '',
    nometarefa: '',
    descricao: '',
    datacriacao: '',
    datarecebimento: '',
    dataconcluido: '',
    observacao: '',
    status: '',
    usuario: {
      id: '1'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  constructor(private tarefaservice: TarefaService) { }

  ngOnInit(): void {
  }

}

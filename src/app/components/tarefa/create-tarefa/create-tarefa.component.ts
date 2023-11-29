import { TarefaService } from 'src/app/service/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { Router } from '@angular/router';

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
    prioridade: '',
    usuario: {
      id: '1'
    }
  }

  selectPrioridade: String[] = ['Selecione', 'Baixa', 'Media', 'Alta'];

  constructor(private service: TarefaService, private router: Router) { }

  ngOnInit(): void {
  }

  criartarefa(): void{
    this.service.createTarefa(this.tarefa).subscribe({next: (response) =>{
      this.router.navigate(['/']);
    }, error: (err) =>{
      alert("Erro ao criar tarefa")
    }})
  }

}

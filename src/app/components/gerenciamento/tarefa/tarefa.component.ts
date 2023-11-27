import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
      id: ''
    }
  }

  constructor(private tarefaservice: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  btnaceitar(): void{
    this.aceitar = this.aceitar ? false : true;
  }

  color(id: String): any{
    if(id == '3'){
      return "red";
    }
  }


  findAll(){
    this.tarefaservice.findAll().subscribe((x) => this.tarefas = x);
  }

  finById(id: String){
    this.aceitar = this.aceitar ? false : true;
    this.tarefaservice.findById(id).subscribe({next: (response: any)=> {
      this.tarefa = response
    }, error: (err)=>{
      console.error("Error: " + err)
    }})
  }

  submit(){
    this.tarefaservice.findByIdDataUpdate(this.tarefa).subscribe({next: (response) => {
      this.aceitar = this.aceitar ? false : true;
      this.findAll();
      this.router.navigate(['/']) 
    }, error: (error) =>{
      console.error(error);
    }})}

}

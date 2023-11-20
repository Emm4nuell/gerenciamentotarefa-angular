import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../interfaces/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = "http://206.42.51.75:8082/tarefa";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(`${this.apiUrl}`);
  }
}

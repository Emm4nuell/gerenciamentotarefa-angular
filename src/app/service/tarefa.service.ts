import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../interfaces/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = "http://localhost:8080/tarefa";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(`${this.apiUrl}`);
  }

  findById(id: String): Observable<Tarefa>{
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  findByIdData(tarefa: any):Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.apiUrl}/monitoramento/${tarefa.id}`, tarefa);
  }

}

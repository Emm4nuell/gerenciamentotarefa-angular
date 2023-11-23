import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './components/section/section.component';
import { TarefaComponent } from './components/gerenciamento/tarefa/tarefa.component';
import { CreateTarefaComponent } from './components/tarefa/create-tarefa/create-tarefa.component';

const routes: Routes = [
  {path: '', component: SectionComponent, children: [
    {path: '', component: TarefaComponent},
    {path: 'criartarefa', component: CreateTarefaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

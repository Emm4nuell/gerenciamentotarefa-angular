import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './components/section/section.component';
import { TarefaComponent } from './components/gerenciamento/tarefa/tarefa.component';

const routes: Routes = [
  {path: '', component: SectionComponent, children: [
    {path: '', component: TarefaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

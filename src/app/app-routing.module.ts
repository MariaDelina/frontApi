import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './componentes/persona/nuevapersona.component';
import { ListaProductoComponent } from './componentes/persona/lists-persona';
import { EditarProductoComponent } from './componentes/persona/editar-persona';
const routes: Routes = [
  {path: '', component: ListaProductoComponent},
  {path: 'nuevo', component: PersonaComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

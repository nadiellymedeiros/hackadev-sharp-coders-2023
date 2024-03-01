import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtratoComponent } from './paginas/extrato/extrato.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroMobileComponent } from './paginas/cadastro/cadastro-mobile/cadastro-mobile.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'cadastro', component: CadastroMobileComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

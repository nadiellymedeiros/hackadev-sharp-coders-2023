import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtratoComponent } from './paginas/extrato/extrato.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CartoesComponent } from './paginas/cartoes/cartoes.component';
import { SaqueComponent } from './componentes/transacoes/saque/saque.component';
import { TransferenciaComponent } from './componentes/transacoes/transferencia/transferencia.component';
import { DepositoComponent } from './componentes/transacoes/deposito/deposito.component';
import { HomePageComponent } from './paginas/home-page/home-page.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cartoes', component: CartoesComponent },
  { path: 'deposito', component: DepositoComponent },
  { path: 'transferencia', component: TransferenciaComponent },
  { path: 'saque', component: SaqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

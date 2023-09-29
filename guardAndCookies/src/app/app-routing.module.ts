import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaramelAuSelComponent } from './caramel-au-sel/caramel-au-sel.component';
import { CaramelAuSelGuard } from './caramel-au-sel.guard';
import { VerredeauComponent } from './verredeau/verredeau.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { SelComponent } from './sel/sel.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'caramelAuSel', component: CaramelAuSelComponent, canActivate: [CaramelAuSelGuard] },
  // Ajoutez d'autres routes selon vos besoins.
  { path: 'verredeau', component: VerredeauComponent},
  { path: 'bonbon', component: BonbonComponent },
  { path: 'sel', component: SelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

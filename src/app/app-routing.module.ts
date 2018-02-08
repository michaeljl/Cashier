import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierComponent} from './cashier/cashier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CashierDetailsComponent } from './cashier-details/cashier-details.component';

const routes: Routes = [
     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
     { path: 'dashboard', component: DashboardComponent },
     { path: 'detail/:id', component: CashierDetailsComponent },
     { path: 'cashier', component: CashierComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }

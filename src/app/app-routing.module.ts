import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { DefaultComponent } from './pages/default/default.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: '**', component: DefaultComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

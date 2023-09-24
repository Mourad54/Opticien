import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ApplicationComponent } from './application/application.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',component:AcceuilComponent},
  {path:'appl',component:ApplicationComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  
  
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

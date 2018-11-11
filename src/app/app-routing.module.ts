import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffreEmploitComponent } from './offre-emploit/offre-emploit.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AcRecruteurComponent } from './ac-recruteur/ac-recruteur.component';
import { AcCondidatsComponent } from './ac-condidats/ac-condidats.component';



// Configuration des URLs
const routes: Routes = [
  { path: 'offre' , component: OffreEmploitComponent},
  { path: 'acceuil' , component: AcceuilComponent},
  { path: 'ac-recruteur' , component: AcRecruteurComponent},
  { path: 'ac-condidats' , component: AcCondidatsComponent},

  { path: '' , redirectTo: 'acceuil' , pathMatch: 'full' },
  { path: '**' , redirectTo: 'acceuil' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
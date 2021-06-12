import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SharedModule } from '../shared/shared.module';
import { AbilityDetailsComponent } from './ability-details/ability-details.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailsComponent,
    AbilityDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'pokemon-list', component: PokemonListComponent },
      { path: 'details/:name/:url', component: PokemonDetailsComponent },
      { path: 'ability/:name/:url/:ability/:abilityUrl', component: AbilityDetailsComponent }, 
    ])
  ]
})
export class PokemonModule { }

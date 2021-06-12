import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AbilityDetails } from './ability-details';
import { Pokemon } from './pokemon';
import { PokemonDetails } from './pokemon-details';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any[]> {
    return this.http.get<any>(`${this.pokemonUrl}/pokemon`)
      .pipe(
        map(data => data.results),
        catchError(this.handleError)
      );
  }

  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<any>(url)
      .pipe(
        map(data => {
          let pokemonDetails = {
            name: data.name,
            height: data.height,
            weight: data.weight,
            baseExperience: data.base_experience,
            abilities: this.getAbilities(data.abilities)
          }
          return pokemonDetails as PokemonDetails;
        }),
        catchError(this.handleError)
      );
  }

  getAbilityDetails(url: string): Observable<AbilityDetails> {
    return this.http.get<any>(url)
      .pipe(
        map(data => {
          let abilityDetails = {
            name: data.name,
            effects: this.getEffects(data.effect_entries),
            pokemonsHavingThisAbility: this.getPokemons(data.pokemon)
          };
          return abilityDetails as AbilityDetails;
        }),
        catchError(this.handleError)
      );
  }

  private getAbilities(abilities: any[]): any[] {
    let result = [];
    abilities.forEach(element => {
      result.push(element.ability);
    });

    return result;
  }

  private getEffects(effects: any[]): any {
    let result = '';
    effects.forEach(element => {
      if (element.language.name == 'en')
      result = element.effect;
    })
    return result;
  }

  private getPokemons(pokemonsHavingThisAbility: any[]): any[] {
    let result = [];
    pokemonsHavingThisAbility.forEach(element => {
      result.push(element.pokemon.name)
    });

    return result;
  }
  
  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  title: string = "Pokemon List";
  pokemonList: Pokemon[] = [];
  errorMessage = '';

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(data => {
      this.pokemonList = data
    }, err => this.errorMessage = err);
  }
}

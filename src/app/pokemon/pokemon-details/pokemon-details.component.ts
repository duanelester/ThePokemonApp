import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetails } from '../pokemon-details';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  title: string = "Pokemon Details";
  pokemonDetails: PokemonDetails = {} as PokemonDetails;
  errorMessage: string = '';
  pokemonUrl: string = '';
  pokemonName: string = '';

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const url = this.route.snapshot.paramMap.get('url');
    this.pokemonUrl = url;

    if (url) {
      this.getPokemonDetails(url);
    }

  }

  getPokemonDetails(url) {
    this.pokemonService.getPokemonDetails(url).subscribe(details => {
      this.pokemonDetails = details;
      this.pokemonName = this.pokemonDetails.name;
    }, err => this.errorMessage = err);
  }
}

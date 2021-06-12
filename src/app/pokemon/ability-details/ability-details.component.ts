import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbilityDetails } from '../ability-details';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-ability-details',
  templateUrl: './ability-details.component.html',
  styleUrls: ['./ability-details.component.css']
})
export class AbilityDetailsComponent implements OnInit {
  title: string = "Ability Details";
  abilityDetails: AbilityDetails = {} as AbilityDetails;
  errorMessage = '';
  onBackUrl: string = ''
  pokemonUrl: string = this.route.snapshot.paramMap.get('url');
  pokemonName: string = this.route.snapshot.paramMap.get('name');

  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit(): void {
    const url = this.route.snapshot.paramMap.get('abilityUrl');

    if (url) {
      this.getAbilityDetails(url);
    }
  }

  getAbilityDetails(url) {
    this.pokemonService.getAbilityDetails(url).subscribe(result => {
      this.abilityDetails = result;
    });
  }
}

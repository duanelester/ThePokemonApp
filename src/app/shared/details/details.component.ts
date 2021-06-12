import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() title?= '';
  @Input() name?= '';
  @Input() height?= 0;
  @Input() weight?= 0;
  @Input() base_experience?= 0;
  @Input() abilities?: [] = [];
  @Input() effects?= '';
  @Input() errorMessage?= '';
  @Input() pokemonsHavingThisAbility?: [] = [];
  @Input() pokemonUrl?= '';
  @Input() pokemonName?= '';
  @Input() onBackUrl?= '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack() {
    if (this.title == "Pokemon Details") {
      this.router.navigate(['/pokemon-list'])
    } else {
      this.router.navigate(['/details', this.pokemonName, this.pokemonUrl]);
    }
  }
}

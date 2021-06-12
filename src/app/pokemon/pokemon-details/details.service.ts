import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PokemonDetails } from '../pokemon-details';

@Injectable({
    providedIn: 'root'
})
export class DetailsService {
    pokemonDetails: PokemonDetails;
    
    constructor(private http: HttpClient) { }

    getPokemonDetails(url: string): Observable<PokemonDetails> {
        return this.http.get<any>(url)
            .pipe(
                map((data: any) => this.pokemonDetails = data as PokemonDetails),
                catchError(this.handleError)
            );
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

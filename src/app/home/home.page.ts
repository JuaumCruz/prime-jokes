import { Component } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  search: string;
  jokes: any[];
  searchedJokes: any[];

  constructor(private jokesService: JokesService, private router: Router) {}

  ngOnInit() {
    this.jokesService.getAll().subscribe(p => {
      this.jokes = p;
    }, error => {
      console.error(error);
    }, () => {
      console.log('Piadas carregadas com sucesso!');
    });
  }

  searchJoke(text: string) {
    this.searchedJokes = this.jokes.filter(j => j.pergunta.includes(text));
  }

  clearJoke() {
    this.searchedJokes = [];
  }

  viewJoke(joke: any) {
    this.jokesService.joke = joke;
    this.router.navigateByUrl('/detail');
  }
}

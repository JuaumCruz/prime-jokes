import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  piada: any;
  constructor(private jokesService: JokesService, private router: Router) { }

  ngOnInit() {
    this.piada = this.jokesService.joke;
  }

  back() {
    this.router.navigateByUrl('home');
  }

}

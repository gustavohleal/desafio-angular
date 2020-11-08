import { Component } from '@angular/core';

import{ Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafio Angular';

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}


  onClick(rota:string){
    this.router.navigate([rota]);
  }
}

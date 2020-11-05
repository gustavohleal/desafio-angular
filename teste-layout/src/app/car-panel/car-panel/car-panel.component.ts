import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-panel',
  templateUrl: './car-panel.component.html',
  styleUrls: ['./car-panel.component.scss']
})
export class CarPanelComponent implements OnInit {
  speed:number=880; // reduz de 0 até 610
  rotate:number=-35; //vai de -35 até 215
  flag:boolean=true;
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
  
    setInterval(()=>{
      if(this.flag) {
        this.speed -= 100;
        this.rotate += 30;
        if ( this.speed <= 275 ) {
          this.flag = false;
        }
      } else {
        this.speed++;
        this.rotate--;
        if ( this.speed >= 880 ) {
          this.flag = true;
        }
      }
    }, 5000)
  }




  
}

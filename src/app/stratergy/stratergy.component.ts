import { Component } from '@angular/core';
import { PersonDetailsComponent } from '../../../src/app/person-details/person-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stratergy',
  standalone: true,
  imports: [],
  templateUrl: './stratergy.component.html',
  styleUrl: './stratergy.component.css'
})
export class StratergyComponent {
  constructor(private router: Router){
  }

  openSteps(){
    this.router.navigate(['/details'])
  }
}

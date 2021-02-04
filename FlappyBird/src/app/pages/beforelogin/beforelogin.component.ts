import { Component, OnInit } from '@angular/core';
import { trigger} from '@angular/animations';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-beforelogin',
  templateUrl: './beforelogin.component.html',
  styleUrls: ['./beforelogin.component.scss'],
  animations: [
    trigger('animImageSlider', [
    ]),
  ]
})

export class BeforeloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

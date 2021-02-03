import { Component, OnInit } from '@angular/core';
import { trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animImageSlider', [
    ]),
  ]
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  images = [
    '../../../assets/yellowbird-upflap.gif',

  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  onNext() {
    if (this.counter != this.images.length - 1) {
      this.counter++;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

}

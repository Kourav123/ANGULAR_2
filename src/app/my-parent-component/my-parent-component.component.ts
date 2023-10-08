import { Component } from '@angular/core';

@Component({
  selector: 'app-my-parent-component',
  templateUrl: './my-parent-component.component.html',
  styleUrls: ['./my-parent-component.component.css']
})
export class MyParentComponentComponent {
  message: string = '';

  receiveMessage(eventData: string) {
    this.message = eventData;
  }
}

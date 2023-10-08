import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-child-component',
  templateUrl: './my-child-component.component.html',
  styleUrls: ['./my-child-component.component.css']
})
export class MyChildComponentComponent {
  @Output() customEvent = new EventEmitter<string>();

  sendMessage() {
    this.customEvent.emit('Hello from Child!');
  }
}

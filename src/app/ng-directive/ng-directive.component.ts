import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.css']
})
export class NgDirectiveComponent {
  showContent=true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  applyRedColor = true;
  textStyle = { 'font-weight': 'bold', 'color': 'blue' };
  selectedValue = 'option2';

}

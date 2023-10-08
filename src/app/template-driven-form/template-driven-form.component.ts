import { Component } from '@angular/core';
import { NgForm ,FormBuilder,Validators,FormGroup} from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  onSubmit(contactForm: any) {
    console.log(contactForm.value); // Log the form values
  }
 
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

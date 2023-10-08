import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyChildComponentComponent } from './my-child-component/my-child-component.component';
import { MyParentComponentComponent } from './my-parent-component/my-parent-component.component';
import { NgDirectiveComponent } from './ng-directive/ng-directive.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe'; // Import FormsModule
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MyChildComponentComponent,
    MyParentComponentComponent,
    NgDirectiveComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

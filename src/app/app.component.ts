import {Component} from "@angular/core";
// 3 Decorater
@Component({
    selector: "app-root",
    templateUrl: './app.component.html'  // 2 Template
})
export class AppComponent {     // 1 Class
    name: string = "Angular";
    title: string = "My first Angular App";
    imagePath = 'https://www.ujalavacations.com/Ujala_admin/assests/images/click-3.png';
    firstName = "select";
    isDisabled = false;
   
    badHtml: string = "Hello <script >alert('hacked');</script>"
    last = "me";
    getname() {
        return this.name + this.last;
    }
}
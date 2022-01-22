import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Component directive
  templateUrl: './app.component.html',
  //template: '<h1>Hello World</h1>',
  styleUrls: ['./app.component.scss']
  //styles:['h1{color: darkblue}']
})
export class AppComponent {
  title:string = 'Frontend Track 2022';

  sayHello():string
  {
    return `Hello World, ${this.title}`
  }
}

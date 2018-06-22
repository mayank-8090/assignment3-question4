import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{test()}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
   test()
   {
    var title = 'Mayank';
    return [title.length,title.toUpperCase()]
   }
  
  

}

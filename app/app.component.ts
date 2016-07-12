//our root app component
import {Component} from '@angular/core'
import {HeroFormComponent} from "./hero-form.component";

@Component({
  selector: 'my-app',
  providers: [],
  template: `
      <hero-form>loading form</hero-form>
  `,
  directives: [HeroFormComponent]
})
export class AppComponent {

}

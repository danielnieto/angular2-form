//our root app component
import {Component} from '@angular/core'
import {HeroFormComponent} from "./hero-form.component";
import {AlternativeFormComponent} from "./alternative-form.component";

@Component({
  selector: 'my-app',
  providers: [],
  template: `
     <!-- <hero-form>loading form</hero-form> -->
      <alternative-form>Loading alternative form</alternative-form>
  `,
  directives: [HeroFormComponent, AlternativeFormComponent]
})
export class AppComponent {

}

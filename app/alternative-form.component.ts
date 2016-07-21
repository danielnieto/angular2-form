import {Component} from "@angular/core";
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
    selector: "alternative-form",
    templateUrl: "./app/alternative-form.component.html",
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class AlternativeFormComponent{

    myForm: FormGroup;
    sku: AbstractControl;

    onSubmit(){
        alert(JSON.stringify(this.myForm.value));
    }

    constructor(private fb: FormBuilder){
        this.myForm = fb.group({
            'sku':["", Validators.compose([Validators.required, skuValidator])],
            'name':["no tiene"]
        });

         this.sku = this.myForm.controls['sku'];
    }


    get diagnostics(){
        return JSON.stringify(this.myForm.value);
    }

    function skuValidator(control: FormControl): { [s: string]: boolean } {
      if (!control.value.match(/^123/)) {
        return {invalidSku: true};
      }
    }

}

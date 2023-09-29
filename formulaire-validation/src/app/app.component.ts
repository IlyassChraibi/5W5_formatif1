import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      chiffrePrefere: ['', [Validators.required, this.chiffrePrefereValidator]],
      description: ['', [Validators.required, this.descriptionValidator(this.chiffrePrefereValidator)]]
    });    
  }

  // Créez un validateur personnalisé pour vérifier si le chiffre préféré est entre 1 et 9.
  chiffrePrefereValidator(control: AbstractControl): ValidationErrors | null {
    const chiffrePrefere = control.value;
    if (chiffrePrefere >= 1 && chiffrePrefere <= 9) {
      return null; // Le chiffre est valide
    } else {
      return { chiffrePrefereInvalid: true }; // Le chiffre est invalide
    }
  }

  // Créez un validateur personnalisé pour vérifier si la description contient N mots de N lettres.
  descriptionValidator(chiffrePrefereValidator: ValidatorFn): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const chiffrePrefereControl = control.root.get('chiffrePrefere');
      if (!chiffrePrefereControl) {
        return null;
      }

      const chiffrePrefere = chiffrePrefereControl.value;
      const description = control.value;
      const words = description.split(' ');

      if (words.length !== chiffrePrefere) {
        return { descriptionWordCountInvalid: true };
      }

      for (const word of words) {
        if (word.length !== chiffrePrefere) {
          return { descriptionWordLengthInvalid: true };
        }
      }

      return null; // La description est valide
    };
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Le formulaire est valide, vous pouvez traiter les données soumises ici
      const formData = this.myForm.value;
      console.log('Données soumises :', formData);
    }
  }
}

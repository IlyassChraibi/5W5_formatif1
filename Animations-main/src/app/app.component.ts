import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from "@angular/animations";
import { bounce, shake } from "ng-animate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bounce', [transition(':increment', useAnimation(bounce, {
      params: { timing: 3, delay: 0 } // Modifier la durée à 3 secondes et le délai à 0
    }))]),
    trigger('shake', [transition(':decrement', useAnimation(shake))])
  ]
})
export class AppComponent {

  mavariable = 0;
  shake = false;
  bounce = false;

  constructor() {
  }

  shakeMe() {
    this.shake = true;
    setTimeout(() => { this.shake = false; }, 3000);
  }

  bounceMe() {
    this.bounce = true;
    setTimeout(() => { this.bounce = false; }, 3000);
  }

  shakeThenBounce() {
    this.shake = true;
  
    // Utiliser une promesse pour déclencher "Shake" pendant 3 secondes
    const shakePromise = new Promise<void>((resolve) => {
      setTimeout(() => {
        this.shake = false;
        resolve();
      }, 1000);
    });
  
    // Attendre que "Shake" soit terminé avant de déclencher "Bounce"
    shakePromise.then(() => {
      this.bounce = true;
  
      // Utiliser une promesse pour déclencher "Bounce" pendant 3 secondes
      const bouncePromise = new Promise<void>((resolve) => {
        setTimeout(() => {
          this.bounce = false;
          resolve();
        }, 1000);
      });
  
      // Réinitialiser les animations après que "Bounce" soit terminé
      bouncePromise.then(() => {
        this.shake = false;
        this.bounce = false;
      });
    });
  }
  
}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sucresChecked !: boolean;
  salesChecked !: boolean;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    // Lire les valeurs depuis les cookies lors de l'initialisation
    this.sucresChecked = this.cookieService.get('sucresChecked') === 'true';
    this.salesChecked = this.cookieService.get('salesChecked') === 'true';
  }

  saveState() {
    // Enregistrer l'état des cases à cocher dans les cookies
    this.cookieService.set('sucresChecked', this.sucresChecked.toString());
    this.cookieService.set('salesChecked', this.salesChecked.toString());
    console.log("ligne 26");
    // Redirigez vers la page /caramelAuSel en incluant les paramètres dans l'URL
    this.router.navigate(['/caramelAuSel']).then(() => {
      // Rafraîchissez la page après la navigation
      window.location.reload();
    });
  }
}

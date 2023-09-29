import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CaramelAuSelGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // Vérifiez si l'utilisateur aime le sucre ou le sel en lisant les cookies.
    const sucreLiked = this.cookieService.get('sucresChecked') === 'true';
    const selLiked = this.cookieService.get('salesChecked') === 'true';

    console.log(sucreLiked);
    console.log(sucreLiked);
    if (!sucreLiked && !selLiked) {
      // L'utilisateur n'aime ni le sucre ni le sel, redirigez-le vers la page /verreDEau.
      return this.router.createUrlTree(['/verredeau']);
    } else if (sucreLiked && !selLiked) {
      // L'utilisateur aime le sucre mais pas le sel, redirigez-le vers la page /bonbon.
      return this.router.createUrlTree(['/bonbon']);
    } else if (!sucreLiked && selLiked) {
      // L'utilisateur aime le sel mais pas le sucre, redirigez-le vers la page /sel.
      return this.router.createUrlTree(['/sel']);
    } else {
      // L'utilisateur aime à la fois le sucre et le sel, autorisez l'accès à la page /caramelAuSel.
      return true;
    }
  }
}

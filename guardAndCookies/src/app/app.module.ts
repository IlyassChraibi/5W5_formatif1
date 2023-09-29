import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CaramelAuSelComponent } from './caramel-au-sel/caramel-au-sel.component';
import { SelComponent } from './sel/sel.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { VerredeauComponent } from './verredeau/verredeau.component';
import { CaramelAuSelGuard } from './caramel-au-sel.guard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CaramelAuSelComponent,
    SelComponent,
    BonbonComponent,
    VerredeauComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,    
    FormsModule,
  ],
  providers: [CaramelAuSelGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

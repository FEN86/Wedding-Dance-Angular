import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { OffersComponent } from './offers/offers.component';
import { CoachesComponent } from './coaches/coaches.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    ServiceComponent,
    OffersComponent,
    CoachesComponent,
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center-center'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent]
})
export class AppModule { }

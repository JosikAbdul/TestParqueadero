import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoRegistroComponent } from './components/vehiculo-registro/vehiculo-registro.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoRegistroComponent,
    TarifasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

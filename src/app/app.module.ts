import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlightSearchFeatureModule } from './flight-search/flight-search-feature.module';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FlightSearchFeatureModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

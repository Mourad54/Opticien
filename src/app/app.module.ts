import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ApplicationComponent } from './application/application.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import{HttpClientModule} from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import { NotfoundComponent } from './notfound/notfound.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ApplicationComponent,
    NotfoundComponent,

    
    
  ],
  imports: [
    
    BrowserModule,
    NgxPrintModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    
  
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

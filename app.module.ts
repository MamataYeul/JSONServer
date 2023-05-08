import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MasterService } from './master.service';
import { RestService } from './Services/rest.service';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RealEstateComponent } from './real-estate/real-estate.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
// import { JsontableComponent } from './jsontable/jsontable.component';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BestSellersComponent,
    RealEstateComponent,
    PieChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule ,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    NgChartsModule,
  ],
  providers: [RestService
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }

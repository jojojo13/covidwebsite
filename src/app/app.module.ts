import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldwideComponent } from './components/worldwide/worldwide.component';
import { RegioneComponent } from './components/regione/regione.component';
import { RegionalListComponent } from './components/regione/regional-list/regional-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/regione/map/map.component';
import { LineChartComponent } from './components/regione/line-chart/line-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DashboardRenderedComponent } from './components/dash-board/dashboard-rendered/dashboard-rendered.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ListnewsComponent } from './components/listnews/listnews.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    WorldwideComponent,
    RegioneComponent,
    RegionalListComponent,
    MapComponent, 
    LineChartComponent,
    HeaderComponent,
    DashBoardComponent,
    DashboardRenderedComponent,
    ListnewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LeafletModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

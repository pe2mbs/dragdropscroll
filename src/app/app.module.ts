import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProgramCard } from './components/program.card.component';
import { ProgramCardContainer } from './components/program.card.container.component';
import { ScrollingModule, CdkScrollableModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    ProgramCard,
    ProgramCardContainer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	DragDropModule,
	ScrollingModule,
	CdkScrollableModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

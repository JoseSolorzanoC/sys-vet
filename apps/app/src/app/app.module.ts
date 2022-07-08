import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@sys-vet/ui';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, UiModule, BrowserAnimationsModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

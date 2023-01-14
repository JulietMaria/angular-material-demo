import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatChipsModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

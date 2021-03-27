import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FocusInModule } from "./focus-in/focus-in.module";

@NgModule({
  imports: [BrowserModule, FormsModule, FocusInModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

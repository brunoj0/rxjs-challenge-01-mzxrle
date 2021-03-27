import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FocusInDirective } from "./focus-in.directive";
import { FocusInService } from "./focus-in.service";

@NgModule({
  exports: [FocusInDirective],
  declarations: [FocusInDirective]
})
export class FocusInModule {}

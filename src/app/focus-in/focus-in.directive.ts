import { Directive, Inject } from "@angular/core";
import { FocusInService } from "./focus-in.service";
import { Observable } from "rxjs";

@Directive({
  selector: "[appFocusIn]",
  outputs: ["appFocusIn"],
  providers: [FocusInService]
})
export class FocusInDirective {
  constructor(@Inject(FocusInService) readonly appFocusIn: Observable<any>) {}
}

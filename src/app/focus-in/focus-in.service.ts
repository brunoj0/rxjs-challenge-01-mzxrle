import { Injectable } from "@angular/core";
import { ElementRef, Inject } from "@angular/core";
import { defer, fromEvent, merge, Observable, of } from "rxjs";
import { DOCUMENT } from "@angular/common";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  mapTo,
  tap
} from "rxjs/operators";

@Injectable()
export class FocusInService extends Observable<any> {
  constructor({ nativeElement }: ElementRef<HTMLElement>) {
    const focused$ = merge(
      fromEvent(nativeElement, "focusin").pipe(mapTo(true)),
      fromEvent<FocusEvent>(nativeElement, "focusout").pipe(
        map(({ relatedTarget }) =>
          nativeElement.contains(relatedTarget as Node)
        )
      )
    );
    super(subscriber => focused$.subscribe(subscriber));
  }
}

import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../counter.actions';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html'
})
export class VisualizadorComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

}

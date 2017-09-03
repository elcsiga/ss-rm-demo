import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../../app.state';
import { Cr } from '../../types';

@Component({
  selector: 'app-cr-list',
  templateUrl: './cr-list.component.html',
  styleUrls: ['./cr-list.component.css']
})
export class CrListComponent implements OnInit {

  public crList : Array<Cr>;

  constructor(private store: Store<State>) {
    store.select(
      state => state.cr.crList
    ).subscribe(
      list => { this.crList = list }
    );
  }



  ngOnInit() {
  }

}

import {Action} from '@ngrx/store';
import {Cr} from '../types';

export class AddCr implements Action {
  public static TYPE = 'ADD_CR';
  readonly type = AddCr.TYPE;
  constructor(public payload: Cr) {
  }
}

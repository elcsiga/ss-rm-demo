import {Cr} from '../types';
import * as crActions from '../actions';
import {Action} from '@ngrx/store';

//import {createSelector} from 'reselect';
//import * as _ from 'lodash';

export interface State {
  crList: Cr[];
}

export const initialState: State = {
  crList: [
    {id: 1, title: 'CR one'},
    {id: 2, title: 'CR two'},
    {id: 3, title: 'CR three'},
  ]
};

// Selectors

export function reducer(state = initialState, action: Action): State {

  switch (action.type) {

    case crActions.AddCr.TYPE: {
      const addAction = action as crActions.AddCr;
      const cr = addAction.payload;


      //TODO ADD CR
      return state;
    }
  }

  return state;

}

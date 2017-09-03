import * as fromCr from './cr/reducers';

//import {environment} from '../../environments/environment';
import {ActionReducer} from '@ngrx/store';
//import {compose} from '@ngrx/core';
//import {storeFreeze} from 'ngrx-store-freeze';
//import {createSelector} from 'reselect';

export interface State {
  cr: fromCr.State;
}

export const initialState: State = {
  cr: fromCr.initialState,
};

// export const getFeatureState = (state: State) => state.feature;
// export const getFeatureList = createSelector(getFeatureState, fromFeature.getFeatureList);
// export const getEditedFeature = createSelector(getFeatureState, fromFeature.getEdited);
// export const getSelectedFeatureId = createSelector(getFeatureState, fromFeature.getSelectedFeatureId);
// export const getFeatureDetailsMode = createSelector(getFeatureState, fromFeature.getDetailsMode);
// export const isEditedFeatureDirty = createSelector(getFeatureState, fromFeature.isEditedDirty);

export const reducers = {
  cr: fromCr.reducer
};


/*
export const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

*/

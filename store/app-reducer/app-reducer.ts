import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../constants';


// export type CounterState = {
//   authorizationStatus: AuthorizationStatus,
//   mapHoveredOffer: OfferType | null,
//   offerPageData: OfferType | undefined,
//   currentOfferComments: ReviewType[],
// }

export const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  // mapHoveredOffer: null,
  booksData: null,
  // currentOfferComments: [],
};

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setBooksData: (state, action) => {
      state.booksData = action.payload;
    },
  },
});

export const {setBooksData} = appReducer.actions;

export default appReducer.reducer;

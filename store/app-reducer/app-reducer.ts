import {createSlice, PayloadAction} from '@reduxjs/toolkit';


// export type CounterState = {
//   authorizationStatus: AuthorizationStatus,
//   mapHoveredOffer: OfferType | null,
//   offerPageData: OfferType | undefined,
//   currentOfferComments: ReviewType[],
// }

export const initialState = {
  // authorizationStatus: AuthorizationStatus.Unknown,
  // mapHoveredOffer: null,
  booksData: null,
  // currentOfferComments: [],
};

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    // setAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
    //   state.authorizationStatus = action.payload
    // },
    // setMapHoveredOffer: (state, action: PayloadAction<OfferType | null>) => {
    //   state.mapHoveredOffer = action.payload;
    // },
    //
    setBooksData: (state, action) => {
      state.booksData = action.payload;
    },
    // setCurrentOfferComments: (state, action: PayloadAction<ReviewType[]>) => {
    //   state.currentOfferComments = action.payload;
    // },
    // setOfferPageFavoriteStatus: (state, action: PayloadAction<OfferType>) => {
    //   if (state.offerPageData) {
    //     state.offerPageData.isFavorite = action.payload.isFavorite;
    //   }
    // },

  },
});

export const {setBooksData} = appReducer.actions;

export default appReducer.reducer;

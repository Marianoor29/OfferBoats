import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for card and the initial state
interface Card {
  name: string;
  expiry: string;
  cvv: string;
  cardNumber: string;
}

interface InitialState {
  cardArray: Card[];
  selectedCard: Card | null;
}

// Initialize the state with type InitialState
const initialState: InitialState = {
  cardArray: [
    {
      name: "Nick Doe",
      expiry: "12/13",
      cvv: "431",
      cardNumber: "4473098392383921",
    },
    {
      name: "John Doe",
      expiry: "12/13",
      cvv: "124",
      cardNumber: "5552777873832734",
    },
  ],
  selectedCard: null,
};

export const paymentCardSlice = createSlice({
  name: "Cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cardArray.push(action.payload);
    },
    setSelectedCard: (state, action: PayloadAction<Card | null>) => {
      state.selectedCard = action.payload;
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.cardArray.splice(action.payload, 1);
    },
  },
});

export const { addCard, setSelectedCard, deleteCard } = paymentCardSlice.actions;
export const cardData = (state: { Cards: InitialState }) => state.Cards.cardArray;
export const getSelectedCard = (state: { Cards: InitialState }) => state.Cards.selectedCard;
export default paymentCardSlice.reducer;

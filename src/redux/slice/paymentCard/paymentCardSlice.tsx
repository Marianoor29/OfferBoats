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
  selectedCard: number | null;
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
    setSelectedCard: (state, action: PayloadAction<number | null>) => {
      state.selectedCard = state.selectedCard === action.payload ? null : action.payload;
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.cardArray.splice(action.payload, 1);
      // If the deleted card was the selected card, unselect it
      if (state.selectedCard === action.payload) {
        state.selectedCard = null;
      } else if (state.selectedCard !== null && state.selectedCard > action.payload) {
        // Adjust the selectedCard index if a card before the selected one is deleted
        state.selectedCard -= 1;
      }
    },
  },
});


export const { addCard, setSelectedCard, deleteCard } = paymentCardSlice.actions;
export const cardData = (state: { Cards: InitialState }) => state.Cards.cardArray;
export const getSelectedCard = (state: { Cards: InitialState }) => state.Cards.selectedCard;
export default paymentCardSlice.reducer;

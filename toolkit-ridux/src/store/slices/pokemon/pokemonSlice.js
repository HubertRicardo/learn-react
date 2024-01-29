import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, actions) => {},
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

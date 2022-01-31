import { TOGGLE_FAVOURITE } from "./actions";

const initialData = {
	favourites: [],
};

// TOGGLE USERS FAVOURITE POKEMON
const pokemonReducer = (state = initialData, action) => {
	switch (action.type) {
		case TOGGLE_FAVOURITE:
			let pokemonFavourite = state.favourites.find(
				(favPokemon) => action.payload.id === favPokemon.id
			);
			return {
				...state,
				favourites: pokemonFavourite
					? [
							...state.favourites.filter(
								(pokemon) => pokemon.id !== pokemonFavourite.id
							),
					  ]
					: [...state.favourites, action.payload],
			};
		default:
			return state;
	}
};

export default pokemonReducer;

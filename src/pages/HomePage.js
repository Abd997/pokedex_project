import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IMAGE_URL_API, POKEMON_API_URL } from "../config";
import PokemonCard from "../components/PokemonCard";

export default function HomePage() {
	const [pokemonData, setPokemonData] = useState(() => null);

	useEffect(async () => {
		const { results } = (await axios.get(POKEMON_API_URL + "?limit=40")).data;
		let allPokemonData = [];
		results.forEach((pokemon, index) => {
			index++;
			const pokemonData = {
				id: index,
				url: IMAGE_URL_API + index + ".png",
				name: pokemon.name,
			};
			allPokemonData.push(pokemonData);
		});
		setPokemonData(allPokemonData);
	}, []);

	return (
		<div className="pokemon-container">
			{pokemonData ? (
				<Grid container spacing={2}>
					{pokemonData.map((pokemon) => {
						return (
							<PokemonCard
								pokemon={pokemon}
								image={pokemon.url}
								id={pokemon.id}
								key={pokemon.id}
							/>
						);
					})}
				</Grid>
			) : (
				<h1>No data</h1>
			)}
		</div>
	);
}

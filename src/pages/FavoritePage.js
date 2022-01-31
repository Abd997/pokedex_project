import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, withStyles, Grid } from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";

const styles = (theme) => ({
	pokedexContainer: {
		height: "100vh",
	},
});

export class FavoritePage extends Component {
	render() {
		const { classes, favourites } = this.props;
		return (
			<Box style={{ marginTop: 100 }}>
				<Grid container spacing={2} className={classes.pokedexContainer}>
					{favourites.map((pokemon) => {
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
			</Box>
		);
	}
}

const mapStateToProps = (state) => ({
	favourites: state.favourites,
});

const mapDispatchToProps = (dispatch) => ({});

export default withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(FavoritePage)
);

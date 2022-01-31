import {
	Box,
	Button,
	CircularProgress,
	Grid,
	makeStyles,
	Typography,
	withStyles,
} from "@material-ui/core";
import axios from "axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { POKEMON_API_URL } from "../config";
import { toggleFavourite } from "../redux/actions";
import { connect } from "react-redux";

class PokemonDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: null,
		};
	}

	componentDidMount() {
		const { match } = this.props;
		const { id } = match?.params;
		axios.get(POKEMON_API_URL + "/" + id).then((response) => {
			if (response.status >= 200 && response.status < 300) {
				this.setState({ pokemon: response.data });
			}
		});
	}

	favouriteChecker(pokemon) {
		let found = false;
		this.props.favourites?.map((p) => {
			if (p.id === pokemon.id) {
				found = true;
			}
		});
		return found;
	}

	render() {
		const { classes } = this.props;
		const { pokemon } = this.state;
		if (pokemon) {
			const { name, sprites, height, weight, types } = pokemon;
			return (
				<Box>
					<Box className={classes.pokedexContainer}>
						<Typography className={classes.textTitle} variant="h1">
							{name}
						</Typography>
						<img className={classes.pokemonImage} src={sprites.front_default} />
						<Box className={classes.pokemonInfoContainer}>
							<hr className={classes.seperator} />
							<Grid container>
								<Grid item md={1}>
									<Button
										className={classes.favourite}
										onClick={() => this.props.toggleFavourite(pokemon)}
									>
										<FavoriteIcon
											style={{
												color: this.favouriteChecker(pokemon) ? "red" : "white",
												fontSize: 50,
											}}
										/>
									</Button>
								</Grid>
								<Grid item md={2}>
									<Typography className={classes.text}>
										Name
										<br />
										{name}
									</Typography>
								</Grid>
								<Grid item md={2}>
									<Typography className={classes.text}>
										Height
										<br />
										{height}m
									</Typography>
								</Grid>
								<Grid item md={2}>
									<Typography className={classes.text}>
										Weight
										<br />
										{weight}kg
									</Typography>
								</Grid>
								{types.map((pokemonType) => {
									const { name } = pokemonType.type;
									return (
										<Grid item md={2}>
											<Typography className={classes.text}>
												Type
												<br />
												{name}
											</Typography>
										</Grid>
									);
								})}
							</Grid>
						</Box>
					</Box>
				</Box>
			);
		} else {
			return <CircularProgress />;
		}
	}
}

const styles = (theme) => ({
	pokedexContainer: {
		height: "80vh",
		backgroundColor: "rgb(220, 204, 204)",
		color: "white",
		marginTop: 80,
		textAlign: "center",
		borderRadius: 10,
		paddingTop: 30,
	},
	textTitle: {
		textTransform: "upperCase",
		fontFamily: "Fantasy",
	},
	pokemonImage: {
		width: "200px",
		height: "200px",
	},
	pokemonInfoContainer: {
		bottom: 60,
		position: "absolute",
		width: "100%",
	},
	separator: {
		height: "0.01mm",
		width: "95%",
	},
	favourite: {
		height: 50,
		width: 50,
		marginTop: 15,
	},
	text: {
		fontSize: 30,
		marginTop: 15,
	},
});

const mapStateToProps = (state) => ({
	favourites: state.favourites,
});

const mapDispatchToProps = (dispatch) => ({
	toggleFavourite: (pokemon) => dispatch(toggleFavourite(pokemon)),
});

export default withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
);

import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon, image, id }) {
	const { name } = pokemon;
	return (
		<Grid item xs={12} sm={2} key={id}>
			<Link to={"/pokemon/" + id} className={useStyles().link}>
				<Card className={useStyles().card}>
					<CardMedia className={useStyles().cardMedia} image={image} />
					<CardContent className={useStyles().cardContent}>
						<Typography>{name}</Typography>
					</CardContent>
				</Card>
			</Link>
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		margin: "auto",
		width: 130,
		height: 130,
	},
	card: {
		"&:hover": {
			backgroundColor: "rgb(90, 90, 90)",
		},
		cursor: "pointer",
		backgroundColor: "white",
	},
	cardContent: {
		textAlign: "center",
	},
	link: {
		textDecoration: "none",
	},
}));

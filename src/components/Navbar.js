import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<AppBar className={useStyles().AppBar}>
			<Toolbar>
				<Link to="/" className={useStyles().link}>
					<Typography
						className={useStyles().title}
						variant="h6"
						style={{ marginLeft: 15 }}
					>
						Pokedex
					</Typography>
				</Link>
				<Link to="/favourites" className={useStyles().link}>
					<Typography
						className={useStyles().title}
						variant="h6"
						style={{ marginLeft: 15 }}
					>
						Favourites
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
}

const useStyles = makeStyles((theme) => ({
	AppBar: {
		backgroundColor: "black",
	},
	link: {
		textDecoration: "none",
	},
	title: {
		cursor: "pointer",
		color: "white",
	},
}));

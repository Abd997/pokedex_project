import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import FavoritePage from "./pages/FavoritePage";

export default function App() {
	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Router>
						<Navbar />
						<Route exact path="/" component={HomePage} />
						<Route exact path="/pokemon/:id" component={PokemonDetailPage} />
						<Route exact path="/favourites" component={FavoritePage} />
					</Router>
				</PersistGate>
			</Provider>
		</div>
	);
}

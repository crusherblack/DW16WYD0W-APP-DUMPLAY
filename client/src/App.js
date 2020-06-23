import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import ModalLogin from './components/Login/Login';
import ModalRegister from './components/Register/Register';
import Home from './pages/Home';

import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Transaction from './pages/IncomingTransaction';

import AddMusik from './pages/Crud/AddMusic';
import AddArtist from './pages/Crud/AddArtist';

import PrivateAdminRoute from './components/Routing/PrivateAdminRoute';
import PrivateRoute from './components/Routing/PrivateRoute';
import NotFound from './components/404/NotFound';

import ScrollToTop from './components/utils/ScrollToTop';

import { loadUser, clearError } from './redux/actions/auth';
import { setAuthToken } from './config/api';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	const [ modalLogin, setModalLogin ] = useState(false);
	const [ modalRegister, setModalRegister ] = useState(false);

	const showModalLogin = () => {
		setModalLogin(!modalLogin);
		setModalRegister(false);
		store.dispatch(clearError());
	};

	const showModalRegister = () => {
		setModalRegister(!modalRegister);
		setModalLogin(false);
		store.dispatch(clearError());
	};

	return (
		<Provider store={store}>
			<div className="app">
				<Router>
					<Navbar
						showModalLogin={showModalLogin}
						showModalRegister={showModalRegister}
					/>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Home} />

							<PrivateRoute exact path="/profile" component={Profile} />
							<PrivateRoute exact path="/payment" component={Payment} />
							<PrivateAdminRoute
								exact
								path="/transaction"
								component={Transaction}
							/>
							<PrivateAdminRoute
								exact
								path="/add-music"
								component={AddMusik}
							/>
							<PrivateAdminRoute
								exact
								path="/add-artist"
								component={AddArtist}
							/>

							<Route component={NotFound} />
						</Switch>
					</ScrollToTop>

					{modalLogin && (
						<ModalLogin
							showModalLogin={showModalLogin}
							showModalRegister={showModalRegister}
							modalLogin={modalLogin}
						/>
					)}
					{modalRegister && (
						<ModalRegister
							showModalLogin={showModalLogin}
							showModalRegister={showModalRegister}
							modalRegister={modalRegister}
						/>
					)}
				</Router>
			</div>
		</Provider>
	);
}

export default App;

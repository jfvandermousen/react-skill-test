import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./pages/HomePage";
import MoviesPage from './pages/MoviesPage';
import MoviesDetails from './pages/MoviesDetails';

function App() {

	return (
		<Provider store={store}>
			<div className='App'>
				<BrowserRouter>
					<nav>
						<header className='absolut top-0 w-full'>
							<Link to="/">
								<img src={logo} className='w-32 h-auto mx-auto my-10' alt='logo' />
							</Link>
						</header>
						<menu className='flex justify-center gap-6 flex-wrap '>
							<Link className='hover:border-blue-600 hover:border-b-2' to="/">Home</Link>
							<Link className='hover:border-blue-600 hover:border-b-2' to="/movies">Studio Gambli movies</Link>
						</menu>
					</nav>
					<main className="mt-36 flex m-auto flex-col justify-center items-center w-4/5">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/movies" element={<MoviesPage />} />
							<Route path="/movies/:id" element={<MoviesDetails />} />
						</Routes>
					</main>
				</BrowserRouter>
			</div>	
		</Provider>
	);
}

export default App;

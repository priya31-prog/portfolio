import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				 <About />
				<Skills />
				<Projects />
				<Contact /> 
			</main>
			<footer className="footer">
				<p>&copy; 2025 Priyadarsini K. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default App;
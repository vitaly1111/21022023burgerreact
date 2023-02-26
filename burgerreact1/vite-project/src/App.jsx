/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css' */

import { Catalog } from "./components/catalog/Catalog"
import { Container } from "./components/container/Container"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/Navigation"

export const App=() => {
	return (
		<>
	
			<Header/>

			<main>
			<Navigation/>
			<Catalog/>
			</main>
			<Footer/>
		</>
	)
}



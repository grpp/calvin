import React from 'react'
import NavigationBar from './NavigationBar'
import HeroPanel from './HeroPanel'
import Footer from './Footer'
import {Grid} from 'reflexbox'
import 'normalize.css/normalize.css'

export default class App extends React.Component {
	render(){
		return (
			<div>
				<NavigationBar />
				<section style={{marginTop: '64px'}}>
					<HeroPanel />
				</section>
			</div>
		)
	}
}
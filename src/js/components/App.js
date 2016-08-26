import React from 'react'
import NavigationBar from './NavigationBar'
import HeroPanel from './HeroPanel'
import Footer from './Footer'
import {Grid} from 'reflexbox'
import 'normalize.css/normalize.css'
asdasdasdasasdasdasd
var style = {
	marginTop: '64px',
}

export default class App extends React.Component {
	render(){
		return (
			<div>
				<NavigationBar />
				<section style={style}>
					<HeroPanel />
				</section>
			</div>
		)
	}
}

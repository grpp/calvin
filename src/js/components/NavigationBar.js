import React from 'react'
import {AppBar} from 'react-toolbox/lib/app_bar'
import {Navigation} from 'react-toolbox/lib/navigation'
import style from './nav_bar/css/NavigationBar'
import {NavButton, LogoButton} from './nav_bar/NavButton'
import {Flex, Box} from 'reflexbox'

export default class NavContainer extends React.Component {
	render () {
		return (
			<AppBar theme={style} fixed>
				<LogoButton icon="menu" primary/>
				<Navigation>
					<NavButton label="Home" primary/>
					<NavButton label="About" primary/>
					<NavButton label="Contact" primary/>
				</Navigation>
			</AppBar>
		)
	}
}
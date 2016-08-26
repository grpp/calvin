import React from 'react'
import {Box} from 'reflexbox'
import {Button, IconButton} from 'react-toolbox/lib/button'
import theme from './css/ButtonTheme.scss'

export class NavButton extends React.Component {
	render() {
		return (
			<Button {...this.props} theme={theme}/>
		)
	}
}

export class LogoButton extends React.Component {
	render() {
		return (
			<IconButton {...this.props} theme={theme}/>
		)
	}
}
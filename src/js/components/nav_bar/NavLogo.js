import React from 'react'
import {Box} from 'reflexbox'
import {IconButton} from 'react-toolbox/lib/button'
import FontIcon from 'react-toolbox/lib/font_icon';

export default class NavLogo extends React.Component {
	render() {
		return (
			<Box sm={this.props.sm}>
				<IconButton icon='accessibility' accent/>
			</Box>
		)
	}
}
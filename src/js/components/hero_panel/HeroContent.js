import React from 'react'
import {Flex, Box} from 'reflexbox'
import {Button} from 'react-toolbox/lib/button'

export default class HeroContent extends React.Component{
	render(){
		return (
			<Flex column>
				<Box sm={3}>
					<h1>{this.props.title}</h1>
				</Box>
				<Box sm={3}>
					<p>{this.props.description}</p>
				</Box>
				<Box sm={3} wrap>
					<Button label={this.props.buttonLabel}/>
				</Box>
			</Flex>
		)
	}
}
import React from 'react'
import HeroContent from './HeroContent.js'
import style from './css/HeroImage.scss'

const staticData = {
	title: 'When you eat well, you feel great, and you can accomplish amazing things! ',
	description: 'I am a Registered Dietitian and a Chef. When you work with me, we will go beyond the consultation room. You will understand nutrition fundamentals and acquire the skills of meal planning, shopping, preparing, and cooking delicious meals. You and your family will eat well and adopt healthier eating habits.At Wellness Simplified, our mission is to empower, encourage, and equip individuals with the hands-on food skills to make healthy eating the easier choice. I can help you today.',
	buttonLabel: 'Request a Consultation' 
}

export default class HeroImage extends React.Component{
	render(){
		return (
			<div class={style.heroImage}>
				<HeroContent {...staticData}/>
			</div>
		)
	}
}
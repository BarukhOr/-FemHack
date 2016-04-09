import React,{Component} from 'react'

export default class Challenge extends Component{
	render(){
		return(
			<div className="challenge-div container-fluid padder">
				<div className="">
					<h2 className="challenge-header">// The Challenge</h2>
					div className="challenge-img-div">
					<img className="challenge-header-img" src={require('../css/images/binarylogotransparent.png')}/>
				</div>
					<div className="container about-div-list">
						<h3>How do we get more women involved in the Greater New Haven Tech Scene?</h3>
					</div>
				</div>
			</div>
		)
	}
}

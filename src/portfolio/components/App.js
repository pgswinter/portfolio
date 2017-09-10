import React, {Component} from 'react';
import * as api from '../../../api'

const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}

const onPopState = handler => {
	window.onpopstate = handler;
}

class App extends Component{
	constructor(props, context){
		super(props, context)

		this.state = this.props.initialData;
		this.fetchPerson = this.fetchPerson.bind(this);
	};

	componentDidMount(){
		onPopState((event) => {
			this.setState({
				currentIdPerson: (event.state || {}).currentIdPerson
			});
		});
	}

	componentWillUnmount(){
		onPopState(null)
	}

	fetchPerson = (idPerson) => {
		pushState(
			{currentIdPerson: idPerson},
			`/portfolio/${idPerson}`
		);
		// **** fetch Data from server
		api.fetchPerson(idPerson).then(portfolio => {
			this.setState({
				currentIdPerson: portfolio._id,
				portfolio:{
					...this.state.portfolio,
					[portfolio._id]: portfolio
				}
			});
		});
		// **** end fetch Data from server
	};

	render(){
		return(
			<div>
				<h1>Hello, I am here</h1>
				<p>{this.state.portfolio}</p>
			</div>
		)
	}
}

export default App
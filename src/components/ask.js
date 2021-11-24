import React, { Component } from 'react';
import axios from 'axios';
export default class Ask extends Component {
	constructor() {
		super();
		this.state = {
			datas: [],
			data: []
		};
	}
	componentDidMount() {
		this.getApiForHackerNewsId();
		this.getApiForHackerNews();
	}

	getApiForHackerNewsId = async () => {
		const res = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`);
		this.setState({ datas: res.data });
	};
	getApiForHackerNews = async (id) => {
		const res = await this.state.datas.map((data, index) =>
			axios.get(`https://hacker-news.firebaseio.com/v0/item/` + data + `.json`)
		);
		this.setState({ data: res.data });

		console.log(this.state.data);
	};
	render() {
		return (
			<div style={{ backgroundColor: '#f6f6ef' }}>
				{this.state.datas.map((item, index) => (
					<div key={index}>
						<li>{item}</li>
					</div>
				))}
			</div>
		);
	}
}

import React, { Component } from "react";

class BookSearch extends Component {
	constructor() {
		super();
		this.state = { query: "" };
		this.clicked = this.clicked.bind(this);
		this.collectChange = this.collectChange.bind(this);
	}

	collectChange(e) {
		this.setState({ query: e.target.value });
	}
	clicked(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.query);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.clicked}>
					<input
						type="search"
						placeholder="Search book title here"
						required
						onChange={this.collectChange}
					/>
					<input type="submit" value="Search" />
				</form>
			</div>
		);
	}
}

export default BookSearch;

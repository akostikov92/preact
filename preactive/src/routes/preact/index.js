/** @format */

import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
//import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Preact extends Component {
	render() {
		return (
			<div class={`${style.preact} page`}>
				<h1>Preact Test</h1>
				<img src="./assets/images/preact-logo.png" alt="Preact Logo" />
				<div class="btn">
					<Link
						id="btn"
						activeClassName="active"
						class="custom-button"
						href="/"
					>
						Home
					</Link>
				</div>
			</div>
		);
	}
}

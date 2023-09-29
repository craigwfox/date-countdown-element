import { LitElement, css, html } from "lit";

export class CountdownTimer extends LitElement {
	static get properties() {
		return {
			date: { type: String },
			_days: { type: String },
			_hours: { type: String },
			_minutes: { type: String },
			_seconds: { type: String },
		};
	}

	constructor() {
		super();
		this.date = "";
		this._days = "0";
		this._hours = "0";
		this._minutes = "0";
		this._seconds = "0";
		this._dateDifference = new Date(this.date) - new Date();
	}

	render() {
		console.log(this.date);
		this._countdown();

		setTimeout(() => {
			this._countdown();
		}, 1000);

		return html`
			<div class="grid">
				<div class="item">
					<span>${this._formatNumber(this._days)}</span>
					<span>Days</span>
				</div>
				<div class="item">
					<span>${this._formatNumber(this._hours)}</span>
					<span>Hours</span>
				</div>
				<div class="item">
					<span>${this._formatNumber(this._minutes)}</span>
					<span>Minutes</span>
				</div>
				<div class="item">
					<span>${this._formatNumber(this._seconds)}</span>
					<span>Seconds</span>
				</div>
			</div>
		`;
	}

	_countdown() {
		let seconds = Math.floor((new Date(this.date) - new Date()) / 1000);
		if (seconds > 0) {
			this._days = Math.floor(seconds / 86400);
			this._hours = Math.floor((seconds % (3600 * 24)) / 3600);
			this._minutes = Math.floor((seconds % 3600) / 60);
			this._seconds = Math.floor(seconds % 60);
		}
	}

	_formatNumber(num) {
		if (num < 10) {
			return "0" + num;
		} else {
			return num;
		}
	}

	static get styles() {
		return css`
			:host {
				--ct-font-size: 3rem;
				--ct-font-family: "Inter", system-ui, sans-serif;
				--ct-grid-gap: 0.5rem;
				--ct-grid-col: repeat(4, calc(var(--ct-font-size) * 2.7));
				--ct-item-pb: 0.5rem;
				--ct-item-pi: 1.5rem;
				--ct-item-bg: #29406d;
				--ct-item-border: 0.4rem solid #101623;
				--ct-item-radius: 2rem;
				--ct-number-color: #ffcc4c;
				--ct-number-size: 100%;
				--ct-number-weight: 700;
				--ct-label-color: aliceblue;
				--ct-label-size: 30%;
				--ct-label-weight: 600;

				font-size: var(--ct-font-size);
				font-family: var(--ct-font-family);
			}

			.grid {
				display: grid;
				gap: var(--ct-grid-gap);
				grid-template-columns: var(--ct-grid-col);
			}

			.item {
				display: grid;
				place-items: center;

				padding-block: var(--ct-item-pb);
				padding-inline: var(--ct-item-pi);

				background: var(--ct-item-bg);
				border: var(--ct-item-border);
				border-radius: var(--ct-item-radius);
			}

			.item span:first-child {
				color: var(--ct-number-color);
				font-size: var(--ct-number-size);
				font-weight: var(--ct-number-weight);
			}

			.item span:last-child {
				color: var(--ct-label-color);
				font-size: var(--ct-label-size);
				font-weight: var(--ct-label-weight);
			}
		`;
	}
}

window.customElements.define("countdown-timer", CountdownTimer);

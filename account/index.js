"use strict";

const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

const Dashboard = require("./dashboard.js");
const Prisioners = require("./prisioners.js");
const Occurences = require("./occurences.js");
const Factions = require("./factions.js");
const Visits = require("./visits.js");
const Rules = require("./rules.js");
const Districts = require("./districts.js");
const Garrisons = require("./garrisons.js");
const Zones = require("./zones.js");
const Users = require("./users.js");
const Geo = require("./geo.js");
const Reports = require("./reports.js");

class Account {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	login(data) {
		data = data || {};

		const {
			email,
			password
		} = data;

		const url = `${config.api_url}/auth?email=${email}&password=${password}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });

		return request(options);
	}

	getUserInfo() {
		const url = `${config.api_url}/auth/check`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });

		return request(options);
	}

	get dashboard() {
		return new Dashboard(this.token);
	}

	get prisioners() {
		return new Prisioners(this.token);
	}

	get occurences() {
		return new Occurences(this.token);
	}

	get factions() {
		return new Factions(this.token);
	}

	get visits() {
		return new Visits(this.token);
	}

	get rules() {
		return new Rules(this.token);
	}

	get districts() {
		return new Districts(this.token);
	}

	get garrisons() {
		return new Garrisons(this.token);
	}

	get zones() {
		return new Zones(this.token);
	}

	get users() {
		return new Users(this.token);
	}

	get geo() {
		return new Geo(this.token);
	}

	get reports() {
		return new Reports(this.token);
	}

}

module.exports = Account;
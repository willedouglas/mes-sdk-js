"use strict";

const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

const Prisioners = require("./prisioners.js");
const Visits = require("./visits.js");
const Rules = require("./rules.js");
const Districts = require("./districts.js");
const Garrisons = require("./garrisons.js");
const Zones = require("./zones.js");
const Users = require("./users.js");

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

	get prisioners() {
		return new Prisioners(this.token);
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

}

module.exports = Account;
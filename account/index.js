"use strict";

const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

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

}

module.exports = Account;
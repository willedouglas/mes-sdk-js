"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

class Rules {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	getRules() {
		const url = `${config.api_url}/rules`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}
}

module.exports = Rules;
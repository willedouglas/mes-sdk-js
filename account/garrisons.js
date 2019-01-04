"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

class Garrisons {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	getGarrisons() {
		const url = `${config.api_url}/garrisons`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}
}

module.exports = Garrisons;
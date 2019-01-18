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

	getGarrison(id) {
		const url = `${config.api_url}/garrisons/${id}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	createGarrison(data) {
		const url = `${config.api_url}/garrisons/`;
		data = data || {};
		const method = "POST";

		const options = Object.assign({}, this.default_options, { url, method, data });
		return request(options);
	}

	editGarrison(garrison_id, data) {
		const url = `${config.api_url}/garrisons/${garrison_id}`;
		data = data || {};
		const method = "PUT";

		const options = Object.assign({}, this.default_options, { url, method, data });
		return request(options);
	}
}

module.exports = Garrisons;
"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

class Geo {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	getStates() {
		const url = `${config.api_url}/states`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	getCities() {
		const url = `${config.api_url}/cities`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}
  
	getCitiesByState(state_id) {
		const url = `${config.api_url}/states/${state_id}/cities`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	getAddressInfo(key, address) {
		const url = `${config.geo_url}/maps/api/geocode/json?address=${address}&key=${key}`;
		const method = "GET";

		const options = Object.assign({}, {}, { url, method });
		return request(options);
	}
}

module.exports = Geo;
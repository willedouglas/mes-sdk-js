"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

class Zones {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	getZones() {
		const url = `${config.api_url}/zones`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	getZone(id) {
		const url = `${config.api_url}/zones/${id}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	createZone(data) {
		const url = `${config.api_url}/zones/`;
		data = data || {};
		const method = "POST";

		const options = Object.assign({}, this.default_options, { url, method, data });
		return request(options);
	}

	editZone(zone_id, data) {
		const url = `${config.api_url}/zones/${zone_id}`;
		data = data || {};
		const method = "PUT";

		const options = Object.assign({}, this.default_options, { url, method, data });
		return request(options);
	}
}

module.exports = Zones;
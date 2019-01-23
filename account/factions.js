"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

class Factions {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	getFactions() {
		const url = `${config.api_url}/factions`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	getFaction(id) {
		const url = `${config.api_url}/factions/${id}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	createFaction(data) {
		const url = `${config.api_url}/factions/`;
		data = data || {};
		const method = "POST";

		const options = Object.assign({}, this.default_options, { url, method, data });
		return request(options);
	}

	editFaction(faction_id, data) {
		const url = `${config.api_url}/factions/${faction_id}`;
		data = data || {};
		const method = "PUT";

		const options = Object.assign({}, this.default_options, { url, method, data });
		return request(options);
	}
}

module.exports = Factions;
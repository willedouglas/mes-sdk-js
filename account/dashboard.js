"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

class Dashboard {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	getCountCopsVisits() {
		const url = `${config.api_url}/dashboard/visits_cops`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	getPrisionersMoreVisited(limit) {
		const url = `${config.api_url}/dashboard/more_visiteds?limit=${limit}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}
  
	getPrisionersLessVisited(limit) {
		const url = `${config.api_url}/dashboard/less_visiteds?limit=${limit}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}
}

module.exports = Dashboard;
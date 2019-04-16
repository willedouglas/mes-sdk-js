"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

class Reports {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	getPrisionersPeriodVisited(visited_at_start, visited_at_end, prisioner_id, visited) {
		const url = `${config.api_url}/prisioners?show_disable=false&
			${visited_at_start ? `visited_at_start=${visited_at_start}` : ""}
			${visited_at_end ? `&visited_at_end=${visited_at_end}` : ""}
			${prisioner_id ? `&prisioner_id=${prisioner_id}` : ""}
			${visited ? `&visited=${visited}` : ""}`;
		
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}
}

module.exports = Reports;
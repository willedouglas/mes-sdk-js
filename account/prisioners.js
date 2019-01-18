"use strict";
const config = require("../config.js");
const default_headers = require("../comum/default_headers.js");
const request = require("../comum/request.js");

class Prisioners {
	constructor(token) {
		this.token = token;
		this.default_options = {
			"headers": default_headers(this)
		};
	}

	getPrisioners() {
		const url = `${config.api_url}/prisioners`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	getPrisioner(id) {
		const url = `${config.api_url}/prisioners/${id}`;
		const method = "GET";

		const options = Object.assign({}, this.default_options, { url, method });
		return request(options);
	}

	createPrisioner(data) {
		const url = `${config.api_url}/prisioners/`;
		data = data || {};
		const method = "POST";

		const options = Object.assign({}, this.default_options, { url, method, data });
		return request(options);
	}

	editPrisioner(prisioner_id, data) {
		const url = `${config.api_url}/prisioners/${prisioner_id}`;
		data = data || {};
		const method = "PUT";

		const options = Object.assign({}, this.default_options, { url, method, data });
		return request(options);
	}
}

module.exports = Prisioners;
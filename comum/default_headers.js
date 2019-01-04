"use strict";

const pkg = require("../package.json");

let isBrowser = false;

try {
    isBrowser = window !== undefined; // eslint-disable-line
} catch (e) { /*ignore */ }

function default_headers(class_context) {
	class_context = class_context || {};
	let headers = {};

	if (class_context.token) {
		headers["Authorization"] = class_context.token;
	}

	if (!isBrowser) {
		headers["User-Agent"] = `Flex-Nodelib-${pkg.version}`;
	}

	return headers;
}

module.exports = default_headers;
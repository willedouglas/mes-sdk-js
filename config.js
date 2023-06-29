"use strict";

module.exports = {
	"api_url": process.env.API_URL || "http://45.163.12.94:3000",
	"geo_url": process.env.GEO_URL || "https://maps.googleapis.com",
	"request_attempts": process.env.REQUEST_ATTEMPTS || 3
};

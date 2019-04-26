"use strict";

module.exports = {
	"api_url": process.env.API_URL || "http://177.2.17.247:3000",
	"geo_url": process.env.GEO_URL || "https://maps.googleapis.com",
	"request_attempts": process.env.REQUEST_ATTEMPTS || 3
};
"use strict";

module.exports = {
	"api_url": process.env.API_URL || "https://prison-go.herokuapp.com",
	"geo_url": process.env.GEO_URL || "https://www.mapquestapi.com",
	"request_attempts": process.env.REQUEST_ATTEMPTS || 3
};
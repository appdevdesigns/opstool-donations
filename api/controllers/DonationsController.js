/**
 * DonationsController
 *
 * @description :: Server-side logic for managing Donations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var AD = require('ad-utils');

module.exports = {
	find:function(req,res) {
    	AD.sal.http({
    		url:'http://localhost:1337/opstool-donations-stewardwise/donations',
    		method:'GET'
    	})
    	.fail(function(err){
    		res.serverError(err);
    	})
    	.then(function(data){
    		res.send(data);
    	})
    },
};


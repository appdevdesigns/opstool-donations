/**
 * DonorController
 *
 * @description :: Server-side logic for managing Donors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


var AD = require('ad-utils');

module.exports = {


    find:function(req,res) {

    	AD.sal.http({
    		url:'http://localhost:1337/opstool-donations-stewardwise/donor',
    		method:'GET'
    	})
    	.fail(function(err){
    		res.serverError(err);
    	})
    	.then(function(data){
    		res.send(data);
    	})

    }
	
};


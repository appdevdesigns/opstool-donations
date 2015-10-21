/**
 * DonorController
 *
 * @description :: Server-side logic for managing Donors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


var AD = require('ad-utils');
var path = require('path');
var fs = require('fs');
var donorData = null;

module.exports = {


    find:function(req,res) {
    	
        var url = 'http://localhost:'+sails.config.port+'/opstool-donations-stewardwise/donor';
        var method  = 'GET';

        var config = MobileManager.config('opstool-donations');
        url = config.url || url;
        method = config.method || method;

        AD.log('<green>donor: url:</green>'+url);

        AD.sal.http({
            url:url,
            method:method
        })
        .fail(function(err){
            res.serverError(err);
        })
        .then(function(data){
            res.send(data);
        })
    },
    
    describe:function(req, res) {
        if (donorData == null){
            
            var pathToFile = path.join(__dirname, "..", "..", "test", "fixtures", "DisplayData.json");
            fs.readFile(pathToFile, {encoding:'utf8'}, function(err, data){ 
                
                if (err) {
                    res.serverError(err);
                } else {
                    donorData = JSON.parse(data);
                    res.send(donorData);
                }
            })
            
        } else {
            res.send(donorData);
        }
    }
	
};
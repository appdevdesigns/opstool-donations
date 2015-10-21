/**
 * DonationsController
 *
 * @description :: Server-side logic for managing Donations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var AD = require('ad-utils');

module.exports = {
    find:function(req,res) {
        
        
        var url = 'http://localhost:'+sails.config.port+'/opstool-donations-stewardwise/donations';
        var method  = 'GET';

        var config = MobileManager.config('opstool-donations');
        url = config.url || url;
        method = config.method || method;

        AD.log('<green>donations: url:</green>'+url);

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
};


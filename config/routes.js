/**
 * Routes
 *
 * Use this file to add any module specific routes to the main Sails
 * route object.
 */


module.exports = {


  /*

  '/': {
    view: 'user/signup'
  },
  '/': 'opstool-donations/PluginController.inbox',
  '/': {
    controller: 'opstool-donations/PluginController',
    action: 'inbox'
  },
  'post /signup': 'opstool-donations/PluginController.signup',
  'get /*(^.*)' : 'opstool-donations/PluginController.profile'

  */
 
  'get /opstool-donations/donor' : 'opstool-donations/DonorController.find'


};


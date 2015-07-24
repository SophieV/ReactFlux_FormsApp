var AppDispatcher = require('../dispatcher/AppDispatcher');
var actionsConstants = require('../constants/actionsConstants');

var appActions = {
  updateSomething: function(item){
    AppDispatcher.handleAction({
      actionType: actionsConstants.UPDATE_SOMETHING,
      data: item
    })
  }
};

module.exports = appActions;
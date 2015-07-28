var AppDispatcher = require('../dispatcher/AppDispatcher');
var actionsConstants = require('../constants/actionsConstants');

var friendshipActions = {
  addFriend: function(item){
    AppDispatcher.handleAction({
      actionType: actionsConstants.ADD_FRIEND,
      data: item
    });
  },
  removeFriend: function(item){
    AppDispatcher.handleAction({
      actionType: actionsConstants.REMOVE_FRIEND,
      data: item
    })
  }
};

module.exports = friendshipActions;
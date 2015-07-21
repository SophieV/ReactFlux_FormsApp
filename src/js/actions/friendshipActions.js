var AppDispatcher = require('../dispatcher/AppDispatcher');
var actionsConstants = require('../constants/actionsConstants');

var friendshipActions = {
  addFriend: function(item){
    AppDispatcher.handleAction({
      actionType: actionsConstants.ADD_ITEM,
      data: item
    });
  },
  removeFriend: function(item){
    AppDispatcher.handleAction({
      actionType: actionsConstants.REMOVE_ITEM,
      data: item
    })
  },
  updateUsername: function(item){
    AppDispatcher.handleAction({
      actionType: actionsConstants.UPDATE_USERNAME,
      data: item
    })
  }
};

module.exports = friendshipActions;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var actionsConstants = require('../constants/actionsConstants');

var friendshipActions = {
  addFriend: function(item){
    AppDispatcher.handleAction({
      actionType: actionsConstants.ADD_ITEM,
      data: item
    });
  },
  removeFriend: function(index){
    AppDispatcher.handleAction({
      actionType: actionsConstants.REMOVE_ITEM,
      data: index
    })
  }
};

module.exports = friendshipActions;
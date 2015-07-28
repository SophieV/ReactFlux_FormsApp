var AppDispatcher = require('../dispatcher/AppDispatcher'),
    actionsConstants = require('../constants/actionsConstants'),
    objectAssign = require('react/lib/Object.assign'),
    EventEmitter = require('events').EventEmitter,
    eventsConstants = require('../constants/eventsConstants');

var _store = {
  list: []
};

var addFriend = function(item){
  _store.list.push(item);
};

var removeFriend = function(friend){
  var items = _store.list.filter(function(item){
       return item !== friend;
  });
  _store.list = items;
}

var friendshipStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(eventsConstants.CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(eventsConstants.CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case actionsConstants.ADD_FRIEND:
      addFriend(action.data);
      friendshipStore.emit(eventsConstants.CHANGE_EVENT);
      break;
    case actionsConstants.REMOVE_FRIEND:
      removeFriend(action.data);
      friendshipStore.emit(eventsConstants.CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = friendshipStore;
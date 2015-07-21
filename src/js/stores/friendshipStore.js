var AppDispatcher = require('../dispatcher/AppDispatcher');
var actionsConstants = require('../constants/actionsConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  list: [],
  username: ''
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

var updateUsername = function(item){
  _store.username = item;
}

var friendshipStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  },
  getUsername: function(){
    return _store.username;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case actionsConstants.ADD_ITEM:
      addFriend(action.data);
      friendshipStore.emit(CHANGE_EVENT);
      break;
    case actionsConstants.REMOVE_ITEM:
      removeFriend(action.data);
      friendshipStore.emit(CHANGE_EVENT);
      break;
    case actionsConstants.UPDATE_USERNAME:
      updateUsername(action.data);
      friendshipStore.emit(CHANGE_EVENT);
    break;
    default:
      return true;
  }
});

module.exports = friendshipStore;
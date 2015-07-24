var AppDispatcher = require('../dispatcher/AppDispatcher'),
    actionsConstants = require('../constants/actionsConstants'),
    objectAssign = require('react/lib/Object.assign'),
    EventEmitter = require('events'),
    eventsConstants = require('../constants/eventsConstants');

var _store = {
  something: ''
};

var updateSomething = function(item){
  _store.something = item;
}

var somethingStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(eventsConstants.CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(eventsConstants.CHANGE_EVENT, cb);
  },
  getSomething: function(){
    return _store.something;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case actionsConstants.UPDATE_SOMETHING:
      updateSomething(action.data);
      somethingStore.emit(eventsConstants.CHANGE_EVENT);
    break;
    default:
      return true;
  }
});

module.exports = somethingStore;
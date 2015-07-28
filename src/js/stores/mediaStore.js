var AppDispatcher = require('../dispatcher/AppDispatcher'),
    actionsConstants = require('../constants/actionsConstants'),
    objectAssign = require('react/lib/Object.assign'),
    EventEmitter = require('events').EventEmitter,
    eventsConstants = require('../constants/eventsConstants');

var _store = {
  list: ['<iframe width="100%" height="100%" src="//www.youtube.com/embed/ubGpDoyJvmI" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="100%" src="//www.youtube.com/embed/ApN31QRqgIk" frameborder="0" allowfullscreen></iframe>',
        '<img width="100%" src="http://ecx.images-amazon.com/images/I/817fRlqJ3PL._SL1500_.jpg"/>',
        '<img width="100%" src="http://finestayslovenia.com/wp-content/uploads/2014/11/triglav_national_park_02.jpg"/>']
};

var mediaStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(eventsConstants.CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(eventsConstants.CHANGE_EVENT, cb);
  },
  getSlides: function(){
    return _store.list;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    default:
      return true;
  }
});

module.exports = mediaStore;
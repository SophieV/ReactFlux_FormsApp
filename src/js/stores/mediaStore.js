var objectAssign = require('react/lib/Object.assign'),
    EventEmitter = require('events').EventEmitter,
    eventsConstants = require('../constants/eventsConstants'),
    // the injected component as slide content cannot be defined as a string ?
    // hence react will create the component here
    // this code should be refactored to decouple the store and the UI ; have a factory to create items based on type needed
    AddItem = require('../components/friends-form/AddItem'),
    React = require('react');

var _store = {
  list: [{html:'<iframe width="100%" height="100%" src="//www.youtube.com/embed/ubGpDoyJvmI" frameborder="0" allowfullscreen></iframe>', isComponent:false},
        {html:'<iframe width="100%" src="//www.youtube.com/embed/ApN31QRqgIk" frameborder="0" allowfullscreen></iframe>',isComponent:false},
        {html:'<img width="100%" src="http://ecx.images-amazon.com/images/I/817fRlqJ3PL._SL1500_.jpg"/>',isComponent:false},
        {html:'<img width="100%" src="http://finestayslovenia.com/wp-content/uploads/2014/11/triglav_national_park_02.jpg"/>',isComponent:false},
        {html:<AddItem addItemCustomTitleRef="Injected Component"/>,isComponent:true}]
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

module.exports = mediaStore;
var AppView = Backbone.View.extend({


initialize: function(params) {
  this.photoView = new PhotoView({model: this.model.get('currentPhoto')});
  this.albumView = new AlbumView({collection: this.model.get('album')});
},

render: function() {
  return this.$el.html([
    this.photoView.$el, 
    this.albumView.$el
  ]);
}

})

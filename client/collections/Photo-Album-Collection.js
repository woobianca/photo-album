var PhotoAlbum = Backbone.Collection.extend({

  model: PhotoModel,

  initialize: function() {
    this.on('showPhoto', function() {
      // this.model.set('display' )
    })
  }

});
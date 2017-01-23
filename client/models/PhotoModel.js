var PhotoModel = Backbone.Model.extend({

  defaults: function() {
    return {
      title: 'empty photo album...',
      imageURL: 'data/photos/MockUp0.png',
      rating: 5,
      displayPhoto: false
    };
  },

  togglePhoto: function() {
    this.trigger('toggle:photo', this.set('displayPhoto', !this.get('displayPhoto')));
  }



});

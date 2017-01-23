var AlbumView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {

    // this.$el.children().detach();

    return this.$el.html('<thead><tr><th>Title</th><th>Rating</th></tr></thead>').append(new PhotoView({model: PhotoModel}).render());
  }

});
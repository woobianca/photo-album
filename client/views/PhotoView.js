var PhotoView = Backbone.View.extend({

  tagName: 'tr',

  template:  _.template('<td><%= title %></td><td><%= rating %></td>'),

  templateWithPhoto: _.template('<td><%= title %></td><td><%= rating %></td><td><img src="<%= imageURL %>"</td>'),

  initialize: function() {
    this.render();
    // this.model.on('toggle:photo', this.render, this)
  },

  events: {
    'click': function(e) {
      console.log(this.model)
      // this.model.togglePhoto();
    }
  },

  render: function() {
    // var photoTemplate = this.model.get('displayPhoto') ? this.templateWithPhoto : this.template;
    // this.$el.html(this.template(this.model.attributes));
        this.$el.html(this.templateWithPhoto({
          title: 'Mock0',
          imageURL: 'data/photos/MockUp0.png',
          rating: 5
        }));

    return this;
  }

})


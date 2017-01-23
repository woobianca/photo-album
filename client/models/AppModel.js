var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentPhoto', new PhotoModel());

    // params.album.on('play', function(song) {
    //   this.set('currentSong', song);
    // }, this);

    // params.album.on('enqueue', function(song) {
    //   this.get('songQueue').add(song);
    // }, this);

    // this.get('songQueue').on('stop', function() {
    //   this.set('currentSong', null);
    // }, this);
  }

});
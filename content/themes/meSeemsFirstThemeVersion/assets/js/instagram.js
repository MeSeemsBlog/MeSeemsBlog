$(document).ready(function() {

  'use strict';

  // =====================
  // Instagram Feed
  // Get your userId and accessToken from the following URLs, then replace the new values with the
  // the current ones.
  // userId: http://codeofaninja.com/tools/find-instagram-user-id/
  // accessToken: http://instagram.pixelunion.net/
  // =====================

  var instagramFeed = new Instafeed({
    get: 'user',
    limit: 4,
    resolution: 'standard_resolution',
    userId: '11696947785',
    accessToken: '11696947785.1677ed0.f894dbc7e925444e9845cbe3d3b2807a',
    template:
      '<div class="c-widget-instagram__item"><a href="{{link}}" title="{{caption}}" aria-label="{{caption}}" target="_blank" class="c-widget-instagram__image" style="background-image: url({{image}})"></a></div>'
  });

  if ($('#instafeed').length) {
    instagramFeed.run();
  }
});
window.onload = function() {
  // find and remove all video ads
  document.querySelectorAll('.video-ads').forEach(function(ad) {
    ad.remove();
  });

  // for remove all banner ads
  document.querySelectorAll('.ytp-ad-overlay-container').forEach(function(ad) {
    ad.remove();
  });
};

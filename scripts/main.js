var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var index = 0;

function setDetails(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;

}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function prevOtter() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  var ONE = 1;
  index = (thumbnails.length + index - ONE) % thumbnails.length;
  setDetailsFromThumb(thumbnails[index]);
}

function nextOtter() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  var ONE = 1;
  index = (index + ONE) % thumbnails.length;
  setDetailsFromThumb(thumbnails[index]);
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  var next = document.getElementById('next');
  var prev = document.getElementById('prev');
  thumbnails.forEach(addThumbClickHandler);
  prev.onClick = function() {
    prevOtter();
  };
  next.onClick = function() {
    nextOtter();
  };
}

initializeEvents();

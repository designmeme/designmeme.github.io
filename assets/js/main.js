
function liftFootnotes() {
  var footnotes = $('.footnotes li');
  var breakpoint = 800;

  if (!footnotes.length) {
    return;
  }

  if ($(window).width() <= breakpoint) {
    $('html').removeClass('footnotes-lifted');
    return;
  } else {
    $('html').addClass('footnotes-lifted');
  }

  footnotes.each(function(i, el) {
    var el = $(el);
    var refId = $(el).find('.reversefootnote').attr('href');
    var ref = $('[id="' + refId.replace('#', '') + '"]');
    var top = ref.position().top;

    el.css('top', top);
  });
}

function stickySubNav() {
  var subNav = $('.sub-nav');
  var siteNav = $('.site-nav');
  var siteFooter = $('.site-footer');
  var margin = 100;
  var top, bottom, navTop, navBottom;

  if (!subNav.length || subNav.is(':hidden')) {
    return;
  }

  subNav.css({
    'margin-top': '',
    'margin-bottom': ''
  });

  navTop = subNav.offset().top;
  top = siteNav.offset().top + siteNav.outerHeight() + margin;
  if (navTop < top) {
    subNav.css('margin-top', top - navTop + 'px');
  }

  navBottom = subNav.offset().top + subNav.height() + margin;
  bottom = siteFooter.offset().top;
  if (navBottom > bottom) {
    subNav.css('margin-bottom', navBottom - bottom + 'px');
  }

  if (subNav.height() < margin * 1.5) {
    subNav.removeClass('visible');
  } else {
    subNav.addClass('visible');
  }
}

$(window).on('load resize orientationchange', liftFootnotes);
$(window).on('load resize orientationchange scroll', stickySubNav);

function gaEvent(category, action, label) {
  if (!window.ga) {
    return;
  }

  ga('send', 'event', category, action, label);
}

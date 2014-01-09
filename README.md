# typo (tīˈpō)
n. _Informal_ a simple theme for [Octopress](http://octopress.org/) and
[Jekyll](http://jekyllrb.com/) by [Sam Whited](https://samwhited.com).

A live preview can be found [here](https://blog.samwhited.com).

## Extra requirements

This theme requires that you update your Gemfile with the following changes:

    gem 'liquid', '~> 2.5.0'

## Configuration

    page.content_class: nil

Extra classes to add to the posts `.entry-content` div (eg. for centering
content: `content_class: centering`).

    page.cover: nil

An image to display above the post.

    page.cover_alt: nil

The alt text for the cover photo. Set to an empty string if not present.

    page.cover_caption: nil

A caption for the photo. Sets the `data-caption` attribute if present which is
then rendered below the photo using some CSS.

    page.cover_link: nil

Where `page.cover` should link too. If empty (default), no link is generated.

    page.cover_title: nil

The title text for the cover photo. No title attribute generated if left nil.

    page.cover_width: nil

The width in pixels (don't specify the units) of the cover image displayed above
the post. This overrides `site.cover_width` if present.

    page.excerpt: nil

Overrides the post excerpt that will be shown on the index page. If this is not
present then `page.description` is checked, if that is not present then the
actual excerpt is used. If the actual excerpt or `page.description` are used
they are stripped of all HTML and limited to `site.excerpt_max_length` words;
`page.excerpt` on the other hand will use the raw string and ignore length.

    page.lettrine: nil

Set to false to prevent generation of a lettrine (aka an
'[Initial](https://en.wikipedia.org/wiki/Initial)') for the first paragraph of a
post or for the first paragraph following the first h2.

    page.square_thumb: false

Set this to disable the circular effect on post thumbnails.

    page.thumbnail: nil

An image to display as the 150x150px thumbnail above the post on the index page.

    site.cover_width: 640

The width in pixels (don't specify the units) of the cover image displayed above
each post (does not affect the thumbnail image on the index page).

    site.disqus_short_name: nil

An ID for enabling comments with [Disqus](https://disqus.com/).

    site.excerpt_max_length: 25

The number of words from the post excerpt to show on the index page.

    site.google_plus_comments: false

Enable comments using Google Plus.

    site.header_title: nil

A title to be shown at the top of the index page (in case you want to style it
differently from the normal blog's title).

    site.posts_per_row: 4

The number of posts to include per row on the index page (make sure `paginate`
is high enough).

    site.search_posts: false

Turn on search suggestions from post titles, excerpts, and descriptions using a
technique derived from [François Zaninotto](http://redotheweb.com/2013/05/15/client-side-full-text-search-in-css.html)'s
client side full-text search implementation. For blogs with large numbers of
posts this may slow down page load times.

    site.typekit_kitid: nil

An Adobe [Typekit](https://typekit.com) kit ID for including webfonts.

# typo (tīˈpō)
n. _Informal_ a simple theme for [Octopress](http://octopress.org/) and
[Jekyll](http://jekyllrb.com/) by [Sam Whited](https://samwhited.com).

## Extra requirements

This Gem requires that you update your Gemfile with the following changes:

    gem 'liquid', '~> 2.5.0'

## Configuration

    post.cover: nil

An image to display above the post.

    post.cover_link: nil

Where `post.cover` should link too. If empty (default), no link is generated.

    post.thumbnail: nil

An image to display as the 150x150px thumbnail above the post on the index page.

    site.cover_width: 640

The width in pixels (don't specify the units) of the cover image displayed above
each post (does not affect the thumbnail image on the index page).

    site.excerpt_max_length: 25

The number of words from the post excerpt to show on the index page.

    site.header_title: nil

A title to be shown at the top of the index page (in case you want to style it
differently from the normal blog's title).

    site.posts_per_row: 4

The number of posts to include per row on the index page (make sure `paginate`
is high enough).

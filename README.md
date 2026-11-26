# snturk.com

Personal website and blog, built with [Astro](https://astro.build).

## Writing a post

1. Create `src/content/posts/my-post-slug.md`:

    ```md
    ---
    title: "My Post Title"
    description: "One or two sentences used in lists and link previews."
    date: 2026-01-15
    tags: ["software", "life"]
    cover: "https://images.unsplash.com/photo-..."   # optional, used in the list and link preview
    mediumUrl: "https://medium.com/@mcsnturk/..."     # optional, adds an "also on medium" link
    draft: false                                      # true hides the post
    ---

    Your post in Markdown: **bold**, _italic_, ## headings, > quotes, lists, links, code…

    ![Alt text](https://images.unsplash.com/photo-...)
    <figcaption>Optional caption under the image</figcaption>
    ```

2. Push to `main`. GitHub Actions builds the site and publishes it to the `gh-pages` branch.
   The post is live at `https://snturk.com/posts/my-post-slug/`.

3. To cross-post on Medium, open https://medium.com/p/import and paste the post URL.
   Medium imports the formatting and images and marks snturk.com as the original source.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

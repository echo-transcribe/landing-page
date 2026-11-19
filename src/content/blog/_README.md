# Blog posts

One Markdown file per post, named after its URL slug (e.g. `transcribe-lectures-offline.md`).
The frontmatter schema lives in `src/content.config.ts`. Posts with `draft: true` are not published.
Files starting with an underscore, like this one, are ignored by the loader.

`astro dev` shows drafts too (marked "Draft"), so a post can be previewed before it goes live.
While every post is a draft, the build makes no `/blog` pages, no `/rss.xml` and no footer link to the blog;
publishing the first post adds all three.

import rss from '@astrojs/rss';
import { getPosts, SITE } from '../lib';

export async function GET(context) {
    const posts = await getPosts();
    return rss({
        title: SITE.name,
        description: SITE.description,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/posts/${post.id}/`,
            categories: post.data.tags,
        })),
    });
}

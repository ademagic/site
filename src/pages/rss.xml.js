import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const blog = await getCollection('blog');
	return rss({
		title: "Miko Ademagic",
		description: "UI Developer from Sydney, Australia",
		site: context.site,
		items: blog.map(post => ({
			title: post.data.title,
			pubDate: post.data.publishDate,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
		})).sort((a,b) => (new Date(a.pubDate) - new Date(b.pubDate))).reverse(),
		customData: `<language>en-us</language>`,
	});
}

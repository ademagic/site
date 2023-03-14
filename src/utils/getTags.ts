type Post = {
  tags: string[],
}

export default function getTags(posts: Post[]) {
  return [...new Set(posts.map(p => p.tags).flat())];
}

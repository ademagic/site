type Post = {
  tags: string[],
}

export default function getTags(posts: Post[]) {
  // const tagsArr = [...new Set(posts.map(p => p.tags).flat())];
  const tagsPerPost = posts.map(p => p.tags);
  const tagsArr = tagsPerPost.flat();
  const tagsUnique = new Set(tagsArr);
  const tagCount = {}

  for (const tag of tagsArr) {
    if (tagCount[tag]) {
      tagCount[tag] += 1;
    } else {
      tagCount[tag] = 1;
    }
  }

  const output = {
    tags: [...tagsUnique],
    tagCount,
    total: tagsUnique.size,
  };

  return output;
}

import readingTime from 'reading-time'

type Post = {
  title: string
  slug: string
  body: string
}

export default function getPostData(post: Post) {
  return {
    slug: post.slug,
    readingTime: readingTime(post.body).text,
  }
}

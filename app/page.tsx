import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import dayjs from "dayjs"

export default function Home() {
  let posts = allPosts.sort((a, b) => { 
    return dayjs(b.date).unix() - dayjs(a.date).unix()
  });
  return (
    <div className="mx-auto my-4 prose-lg dark:prose-invert prose-headings:text-green-800 prose-headings:dark:text-green-400">
      <h1 className="mb-2 text-lg font-bold">Latest Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="flex flex-row gap-4 py-6 border-t border-opacity-50 border-t-gray-400 prose-headings:text-green-800 prose-headings:dark:text-green-400">
          <h2 className="w-1/6 mt-0 mb-0 text-lg">{dayjs(post.date).format('MMM D, YYYY')}</h2>
          <article className="w-5/6">
            <Link className="no-underline" href={post.slug}>
              <h2 className="mt-0 mb-0 text-3xl">{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        </div>
      ))}
    </div>
  )
}

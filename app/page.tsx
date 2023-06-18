import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import dayjs from "dayjs"

export default function Home() {
  let posts = allPosts.sort((a, b) => { 
    return dayjs(b.date).unix() - dayjs(a.date).unix()
  });
  return (
    <div className="mx-auto my-4 dark:prose-invert">
      <h1 className="mb-2 text-lg font-bold">Latest Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="flex flex-row gap-4 pt-4 pb-16 mb-2 border-t border-opacity-50 border-t-gray-400 prose-p:gray-200 prose-headings:text-green-800 prose-headings:dark:text-green-400">
          <h2 className="w-1/6 text-lg text-green-700 dark:text-green-200">{dayjs(post.date).format('MMM D, YYYY')}</h2>
          <article className="w-5/6 dark:prose-invert">
            <Link className="no-underline" href={post.slug}>
              <h2 className="mt-0 mb-4 text-3xl font-semibold ">{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        </div>
      ))}
    </div>
  )
}

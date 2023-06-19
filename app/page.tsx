import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import dayjs from "dayjs"

export default function Home() {
  let posts = allPosts.sort((a, b) => { 
    return dayjs(b.date).unix() - dayjs(a.date).unix()
  });
  return (
    <div className="mx-auto my-4 prose-lg sm:w-10/12 dark:prose-invert prose-headings:text-green-800 prose-headings:dark:text-green-400 prose-a:no-underline prose-h1:font-bold prose-h2:font-semibold">
      <h1 className="px-4 mb-2 text-lg font-bold">Latest Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="flex flex-col gap-4 px-4 py-6 border-t border-opacity-50 sm:flex-row border-t-gray-400">
          <h2 className="w-full mt-0 mb-0 text-lg sm:w-3/12">{dayjs(post.date).format('MMM D, YYYY')}</h2>
          <article className="w-full sm:w-9/12">
            <Link href={post.slug}>
              <h2 className="mt-0 mb-0 text-3xl">{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        </div>
      ))}
    </div>
  )
}

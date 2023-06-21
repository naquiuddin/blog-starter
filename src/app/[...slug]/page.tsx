import { notFound } from "next/navigation"
import { Metadata } from "next"
import { allPages } from "contentlayer/generated"
import { allPosts } from "contentlayer/generated"

import Post from "@/components/post"
import Page from "@/components/page"

interface PageProps {
  params: {
    slug: string[]
  }
}

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/")
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    return null
  }

  return page
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    return null
  }

  return post
}


export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);
  const post = await getPostFromParams(params);

  if(!post && !page) {
    notFound();
  }

  if(!!post) {
    return (<Post title={post.title} description={post.description} body={post.body} />);
  }   

  if(!!page) {
    return (<Page title={page.title} description={page.description} body={page.body} />);
  }
}

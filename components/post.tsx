import React from 'react'
import { Mdx } from "@/components/mdx-components"
import { MDX } from 'contentlayer/core';

type PostProps = {
  title: string;
  description: string | undefined;
  body: MDX;
}


const Post = function({ title, description, body}: PostProps) {
  return (
      <article className="w-10/12 py-6 mx-auto prose-lg sm:w-full max-w-none dark:prose-invert prose-headings:text-green-800 prose-headings:dark:text-green-400 prose-a:no-underline hover:prose-a:text-green-500">
        <h1 className="mt-4 mb-4 text-4xl">{title}</h1>
        {description && (
          <p className="mt-0 text-2xl leading-normal">
            {description}
          </p>
        )}
        <hr className="my-4" />
        <Mdx code={body.code} />
      </article>
  );
}

export default Post
import { Mdx } from "@/components/mdx-components"
import { MDX } from 'contentlayer/core';

type PageProps = {
  title: string;
  description: string | undefined;
  body: MDX;
}

const Page = function({ title, description, body}: PageProps) {
  return (
      <article className="w-full px-6 prose-lg sm:py-6 sm:mx-auto sm:w-9/12 max-w-none dark:prose-invert prose-headings:text-green-800 prose-headings:dark:text-green-400 prose-a:no-underline hover:prose-a:text-green-500 prose-h1:font-bold">
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

export default Page
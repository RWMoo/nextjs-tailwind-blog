import React, { createElement, useContext } from "react";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getPost, getSlugs } from "../../utils/queries";
import PageLayout from "../../components/layouts/PageLayout";
import { FaShare } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import {
  dracula,
  coldarkCold,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { formatGraphCMSDate } from "../../utils";

export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  return {
    paths: slugs.posts.map((event) => ({ params: { slug: event.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const data = await getPost(slug);

  if (!data.post) {
    return {
      notFound: true,
    };
  }

  const source = await serialize(data.post.content);

  return {
    props: { post: { ...data.post, source } },
    revalidate: 60 * 60,
  };
};

const components = (theme) => ({
  img: (props) => (
    <Image
      alt={props.alt}
      layout="responsive"
      width={100}
      height={50}
      className="max-h-sm"
      objectPosition="center"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={props.src}
      src={props.src}
      {...props}
    />
  ),
  code: (props) => {
    const { className, children } = props;
    const language = className?.replace("language-", "");
    return (
      <SyntaxHighlighter
        customStyle={{ margin: 0 }}
        style={theme === "dark" ? dracula : coldarkCold}
        language={language}
      >
        {children}
      </SyntaxHighlighter>
    );
  },
  pre: (props) => {
    return <pre className="not-prose bg-transparent">{props.children}</pre>;
  },
});

const Post = ({ post }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <PageLayout>
      <article className="prose prose-sm sm:prose-base sm:max-w-none md:max-w-none md:prose-lg ">
        <div className="relative  h-56 md:h-64 lg:h-72 xl:h-80 shadow-md">
          <Image
            alt={post.coverImage.alt}
            layout="fill"
            className="rounded-sm"
            objectPosition="center"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={post.coverImage.url}
            src={post.coverImage.url}
          />
        </div>
        <div className="px-2">
          <div className="flex space-x-5  items-center  mt-4 sm:mt-8 text-xs sm:text-sm md:text-base lg:text-lg">
            <p className="font-display flex text-accent items-center ">
              {post.category.title}
            </p>
            <p className="font-display flex items-center text-accent ">
              {formatGraphCMSDate(post.date)}
            </p>
            <p className="font-display flex items-center text-accent ">
              {post.minutes} minute read
            </p>
            <button>
              <FaShare className="text-title" />
            </button>
          </div>

          <h1 className="">{post.title}</h1>
          <MDXRemote {...post.source} components={components(theme)} />
        </div>
      </article>
    </PageLayout>
  );
};

export default Post;

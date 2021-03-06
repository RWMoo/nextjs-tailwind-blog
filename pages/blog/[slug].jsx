import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkCold,
  dracula,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import PageLayout from "../../components/layouts/PageLayout";
import SharePopover from "../../components/posts/SharePopover";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { formatGraphCMSDate, url } from "../../utils";
import { getPost, getSlugs } from "../../utils/queries";
import { GraphCMSImageLoader } from "../../utils/graphcmsImageLoader";

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
    return (
      <pre className="p-0 not-prose bg-transparent ">{props.children}</pre>
    );
  },
});

const Post = ({ post }) => {
  const { theme } = useContext(ThemeContext);
  const { title, excerpt, slug, coverImage } = post;
  const postURL = `${url}/blog/${slug}`
  return (
    <PageLayout>
      <NextSeo
        title={title}
        titleTemplate="%s | RM Dev Blog"
        description={excerpt}
        canonical={postURL}
        openGraph={{
          url: postURL,
          title: title,
          description: excerpt,
          images: [
            {
              url: coverImage.url,
              width: 800,
              height: 600,
              alt: coverImage.alt,
              type: "image/png",
            },
          ],
          site_name: title,
        }}
        twitter={{
          handle: "@robmooredev",
          site: "@robmooredev",
          cardType: "summary_large_image",
        }}
      />
      <article className="prose prose-sm sm:prose-sm sm:max-w-none md:max-w-none md:prose-base  md:mt-12 lg:mt-16 xl:mt-24 2xl:mt-20">
        <div className="relative h-56 md:h-64 lg:h-72 xl:h-80 shadow-md">
          <Image
            alt={post.coverImage.alt}
            layout="fill"
            className="rounded-sm"
            objectPosition="center"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={post.coverImage.url}
            src={post.coverImage.url}
            loader={GraphCMSImageLoader}
          />
        </div>

        <div className="flex space-x-5  items-center text-body mt-4 sm:mt-8 text-xs sm:text-sm md:text-base lg:text-lg">
          <Link href={`/blog/categories/${post.category.slug}`} passHref>
            <button className="font-display flex items-center transition duration-300 hover:text-accent">
              {post.category.title}
            </button>
          </Link>
          <p className="font-display flex items-center ">
            {formatGraphCMSDate(post.date)}
          </p>
          <p className="font-display flex items-center  ">
            {post.minutes} minute read
          </p>
          <SharePopover url={postURL} />
        </div>

        <h1 className="">{post.title}</h1>
        <MDXRemote {...post.source} components={components(theme)} />
      </article>
    </PageLayout>
  );
};

export default Post;

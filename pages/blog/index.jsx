import React from "react";
import Footer from "../../components/footer/Footer";
import CategoryList from "../../components/global/CategoryList";
import SearchBar from "../../components/global/SearchBar";
import PageLayout from "../../components/layouts/PageLayout";
import LargePost from "../../components/posts/LargePost";
import SmallPost from "../../components/posts/SmallPost";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { breakpoints, parseCategories } from "../../utils";
import { getPosts } from "../../utils/queries";

export const getStaticProps = async () => {
  const { posts } = await getPosts();
  const categories = parseCategories(posts);

  return {
    props: {
      posts,
      categories,
    },
  };
};

const Blog = ({ posts, categories }) => {
  const width = useWindowWidth();
  let parsedPosts = {};
  switch (true) {
    case width >= breakpoints.xl:
      parsedPosts = { large: posts.slice(0, 3), small: posts.slice(2) };
      break;
    case width >= breakpoints.lg:
      parsedPosts = { large: posts.slice(0, 2), small: posts.slice(2) };
      break;
    case width >= breakpoints.md:
      parsedPosts = { large: posts.slice(0, 2), small: posts.slice(2) };
      break;
    default:
      parsedPosts = { large: posts.slice(0, 2), small: posts.slice(1) };
      break;
  }

  return (
    <PageLayout>
      <div className="md:mt-12 lg:mt-16 xl:mt-24">
        <SearchBar />
        <CategoryList categories={categories} />
        <div className="space-y-4 xs:space-y-6 md:space-y-8 2xl:space-y-12 ">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-6 md:gap-8 2xl:gap-12">
            {parsedPosts.large.map((post) => (
              <LargePost key={post.id} {...post} />
            ))}
          </div>
          <div className="grid xl:grid-cols-2 gap-4 xs:gap-6 md:gap-8 2xl:gap-12">
            {parsedPosts.small.map((post) => (
              <SmallPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;

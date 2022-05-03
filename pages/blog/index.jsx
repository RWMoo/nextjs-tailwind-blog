import React from "react";
import Footer from "../../components/footer/Footer";
import CategoryList from "../../components/global/CategoryList";
import SearchBar from "../../components/global/SearchBar";
import PageLayout from "../../components/layouts/PageLayout";
import LargePost from "../../components/posts/LargePost";
import SmallPost from "../../components/posts/SmallPost";
import { getPosts } from "../../utils/queries";

export const getStaticProps = async () => {
  const { posts } = await getPosts();
  const categories = posts.map((post) => post.category);
  const filtered = Array.from(new Set(categories.map((a) => a.slug))).map(
    (slug) => {
      return categories.find((a) => a.slug === slug);
    }
  );
  return {
    props: {
      posts,
      categories: filtered,
    },
  };
};

const Blog = ({ posts, categories }) => {
  return (
    <PageLayout>
      <SearchBar />
      <CategoryList categories={categories} />
      <div className="space-y-4">
        <LargePost {...posts[0]} />
        {posts.slice(1).map((post) => (
          <SmallPost key={post.id} {...post} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Blog;

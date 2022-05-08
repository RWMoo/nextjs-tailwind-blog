import React from "react";
import CategoryCard from "../../../components/categories/CategoryCard";
import PageLayout from "../../../components/layouts/PageLayout";
import { parseCategories } from "../../../utils";
import { getCategories } from "../../../utils/queries";

export const getStaticProps = async () => {
  //querying through posts to ensure that only categories with posts resolve
  const { posts } = await getCategories();
  const categories = [...parseCategories(posts)];
  return {
    props: {
      categories,
    },
  };
};

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <PageLayout>
      <h1 className="page-title text-center text-primary mt-4  md:mt-12 lg:mt-16 xl:mt-24 2xl:mt-20">Categories</h1>
      <p className="text-center mt-4 lg:mt-8 text-secondary max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nunc
        euismod, tincidunt nibh eu, blandit urna. Curabitur sagittis tempus
        felis in pulvinar.
      </p>
      <div className="grid md:grid-cols-2 gap-6 justify-center mt-8 md:mt-20">
        {categories.map((category, i) => {
          return <CategoryCard key={category.slug} {...category} index={i} />;
        })}
      </div>
    </PageLayout>
  );
};

export default Categories;

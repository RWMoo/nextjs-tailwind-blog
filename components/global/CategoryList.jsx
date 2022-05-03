import React from "react";
import Link from "next/link";

const CategoryList = ({ categories }) => {
  return (
      <div className="space-x-2 mt-4 pb-1 mb-1 whitespace-nowrap custom-scroll overflow-x-scroll">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/categories/${category.slug}`}
            passHref
          >
            <button className="font-semibold text-accent text-sm py-1 px-3 border border-gray-400 rounded">
              {category.title}
            </button>
          </Link>
        ))}
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/categories/${category.slug}`}
            passHref
          >
            <button className="font-semibold text-accent text-sm py-1 px-3 border border-gray-400 rounded">
              {category.title}
            </button>
          </Link>
        ))}
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/categories/${category.slug}`}
            passHref
          >
            <button className="font-semibold text-accent text-sm py-1 px-3 border border-gray-400 rounded">
              {category.title}
            </button>
          </Link>
        ))}
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/categories/${category.slug}`}
            passHref
          >
            <button className="font-semibold text-accent text-sm py-1 px-3 border border-gray-400 rounded">
              {category.title}
            </button>
          </Link>
        ))}
      </div>
  );
};

export default CategoryList;

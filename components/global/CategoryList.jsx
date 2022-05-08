import React from "react";
import Link from "next/link";

const CategoryList = ({ categories }) => {
  return (
      <div className="space-x-3  my-5 md:my-8 mb-2 pb-2 lg:pt-3 whitespace-nowrap custom-scroll overflow-x-scroll">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/categories/${category.slug}`}
            passHref
          >
            <button className="text-sm pb-[7px] px-4 pt-[9px] hover:text-dark font-display align-middle font-semibold rounded transition duration-300 bg-secondary hover:bg-accent text-accent border hover:border-secondary border-accent">
              {category.title}
            </button>
          </Link>
        ))}
      </div>
  );
};

export default CategoryList;

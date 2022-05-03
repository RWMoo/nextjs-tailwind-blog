import React from "react";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const CategoryList = ({ categories }) => {
  return (
    <SimpleBar className=" pb-2" forceVisible="x">
      <div className="space-x-2 mt-4 pb-2 whitespace-nowrap">
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
    </SimpleBar>
  );
};

export default CategoryList;

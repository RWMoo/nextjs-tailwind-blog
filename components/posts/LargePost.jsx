import React from "react";
import Image from "next/image";
import { formatGraphCMSDate } from "../../utils";
import Link from "next/link";
import CategoryCard from "../categories/CategoryCard";
import { GraphCMSImageLoader } from "../../utils/graphcmsImageLoader";

const LargePost = (props) => {
  const { coverImage, category, date, title, excerpt, slug } = props;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="cursor-pointer transition duration-300 shadow hover:shadow-lg">
        <div className="relative w-full h-44 md:h-56 rounded-sm overflow-hidden">
          <Image
            alt={coverImage.alt}
            width={50}
            height={50}
            src={coverImage.url}
            loader={GraphCMSImageLoader}
          />
        </div>
        <div className="py-5 px-4 text-body bg-secondary">
          <div className="flex space-x-3 text-xs">
            <p className="font-display text-accent">
              {formatGraphCMSDate(date)}
            </p>
            <p className="font-display text-accent">{category.title}</p>
          </div>
          <h3 className="mt-2 text-2xl md:text-2xl line-clamp-2 font-display font-bold">
            {title}
          </h3>
          <p className="font-body text-sm md:text-base mt-3 line-clamp-3">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LargePost;

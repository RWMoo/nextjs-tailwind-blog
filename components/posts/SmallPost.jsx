import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatGraphCMSDate } from "../../utils";
import { GraphCMSImageLoader } from "../../utils/graphcmsImageLoader";

const SmallPost = (props) => {
  const { coverImage, title, category, date, slug, excerpt } = props;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="cursor-pointer flex items-center space-x-2 2xl:space-x-4">
        <div>
          <div className="relative h-32 sm:h-24 sm:w-24 2xl:h-32 w-32 2xl:w-32 shadow-md">
            <Image
              alt=""
              layout="fill"
              className="rounded-sm"
              src={coverImage.url}
              objectPosition="center"
              placeholder="blur"
              blurDataURL={coverImage.url}
              objectFit="cover"
              loader={GraphCMSImageLoader}
            />
          </div>
        </div>
        <div className="px-1 w-full text-body text-left">
          <div className="flex space-x-3 text-xs font-display text-accent">
            <p className="py-1 rounded">{formatGraphCMSDate(date)}</p>
            <Link href={`/blog/categories/${category.slug}`} passHref>
              <button className="py-1 rounded z-40">{category.title}</button>
            </Link>
          </div>
          <h3 className="mt-1 text-lg md:text-xl line-clamp-2 leading-snug font-display font-semibold">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallPost;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SmallPost = (props) => {
  const { coverImage, title, excerpt, slug } = props;
  return (
    <Link href={`/blog/posts/${slug}`} passHref>
      <div className="flex items-center space-x-2 bg-secondary cursor-pointer">
        <div>
          <div className="relative h-20 w-20 shadow-md">
            <Image
              alt=""
              layout="fill"
              className="rounded"
              src={coverImage.url}
              objectPosition="center"
              placeholder="blur"
              blurDataURL={coverImage.url}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="px-2 w-full text-body text-left">
          <h3 className=" line-clamp-2 text-sm font-display font-semibold">
            {title}
          </h3>
          <p className="font-body text-xs mt-1 line-clamp-2 ">{excerpt}</p>
        </div>
      </div>
  </Link>
  );
};

export default SmallPost;

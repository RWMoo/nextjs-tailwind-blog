import React from "react";
import Image from "next/image";
import { formatGraphCMSDate } from "../../utils";
import Link from "next/link";

const LargePost = (props) => {
  const { coverImage, minutes, date, title, excerpt, slug } = props;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="bg-gray-100 cursor-pointer">
        <div className="relative w-full h-52 shadow-md">
          <Image
            alt={coverImage.alt}
            layout="fill"
            className="rounded-sm"
            objectPosition="center"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={coverImage.url}
            src={coverImage.url}
          />
        </div>
        <div className="py-5 px-4 text-body">
          <div className="flex space-x-3 text-sm font-semibold">
            <p>{formatGraphCMSDate(date)}</p>
            <p>{minutes} minute read</p>
          </div>
          <h3 className="mt-3 text-2xl line-clamp-2 font-display font-bold">
            {title}
          </h3>
          <p className="font-body text-sm mt-3 line-clamp-2 italic">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LargePost;

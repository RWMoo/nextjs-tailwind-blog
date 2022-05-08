import React from "react";
import Link from "next/link";
import { classNamesHelper } from "../../utils";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import Image from "next/image";
const gradients = [
  "from-green-300 to-green-500",
  "from-emerald-300 to-emerald-500",
  "from-teal-300 to-teal-500",
  "from-cyan-400 to-cyan-500",
  "from-sky-400 to-sky-500",
  "from-blue-400 to-blue-500",
  "from-indigo-400 to-indigo-500",
  "from-violet-400 to-violet-500",
  "from-purple-400 to-purple-500",
  "from-fuchsia-400 to-fuchsia-500",
  "from-pink-400 to-pink-500",
  "from-rose-400 to-rose-500",
  "from-red-400 to-red-500",
  "from-rose-400 to-rose-500",
  "from-pink-400 to-pink-500",
  "from-fuchsia-400 to-fuchsia-500",
  "from-purple-400 to-purple-500",
  "from-violet-400 to-violet-500",
  "from-indigo-400 to-indigo-500",
  "from-blue-400 to-blue-500",
  "from-sky-400 to-sky-500",
  "from-cyan-400 to-cyan-500",
  "from-teal-400 to-teal-500",
  "from-emerald-400 to-emerald-500",
];

const CategoryCard = ({ title, description, image, slug }) => {
  return (
    <Link href={`/blog/categories/${slug}`} passHref>
      <div
        className={classNamesHelper(
          "bg-secondary shadow-lg cursor-pointer rounded-sm space-y-6 lg:space-y-8 flex flex-col justify-center items-center py-8 px-4 md:px-8 lg:px-12 text-center transition duration-300 translate hover:scale-102 hover:shadow-xl"
        )}
      >
        <h3 className="text-2xl lg:text-3xl bg-transparent text-primary font-semibold font-display">
          {title}
        </h3>
        <p className="line-clamp-3 text-secondary">{description}</p>

        <div className="relative w-12">
          <Image
            width={image.width}
            height={image.height}
            layout={"responsive"}
            alt={image.alt}
            placeholder="blur"
            blurDataURL={image.url}
            src={image.url}
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

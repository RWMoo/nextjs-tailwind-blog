import PageLayout from "../../../components/layouts/PageLayout";
import LargePost from "../../../components/posts/LargePost";
import SmallPost from "../../../components/posts/SmallPost";
import { getCategorySlugs, getPostsByCategory } from "../../../utils/queries";

export const getStaticPaths = async () => {
  const slugs = await getCategorySlugs();
  const paths = slugs.posts.map((event) => ({
    params: { slug: event.category.slug },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const { posts } = await getPostsByCategory(slug);
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: posts, category: posts[0].category },
    revalidate: 60 * 60,
  };
};

const CategoryPage = ({ posts, category }) => {
  return (
    <PageLayout>
      <h1 className="text-title text-primary text-4xl font-bold mt-4 md:mt-12 lg:mt-16 xl:mt-24 2xl:mt-20">
        {category.title}
      </h1>
      <p className="font-body text-secondary text-sm mt-4 md:mt-8">
        {category.description}
      </p>
      <section className="mt-8 md:mt-12 space-y-4 xs:space-y-6 md:space-y-8">
        <LargePost {...posts[0]} />
        {posts.length > 1 && (
          <div className="grid mt-4 gap-4 xs:gap-6 md:gap-8">
            {posts.slice(1).map((item) => (
              <SmallPost key={item.id} {...item} />
            ))}
          </div>
        )}
      </section>
    </PageLayout>
  );
};

export default CategoryPage;

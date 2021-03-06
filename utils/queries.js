import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_KEY}`,
  },
});

export const getSlugs = async () => {
  return client.request(gql`
    query getSlugs {
      posts {
        slug
      }
    }
  `);
};

export const getCategorySlugs = async () => {
  return client.request(gql`
    query getSlugs {
      posts {
        category {
          slug
        }
      }
    }
  `);
};

export const getCategories = async () => {
  return client.request(gql`
    query getCategories {
      posts {
        category {
          slug
          title
          description
          image {
            url
            alt
            width
            height
          }
          posts {
            __typename
          }
        }
      }
    }
  `);
};

export const getPost = async (slug) => {
  return client.request(
    gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          id
          slug
          title
          date
          excerpt
          content
          category {
            title
            slug
          }
          coverImage {
            url
            alt
            width
            height
          }
          minutes
        }
      }
    `,
    { slug }
  );
};

export const getPosts = async () => {
  return client.request(
    gql`
      query MyQuery {
        posts {
          id
          slug
          title
          date
          excerpt
          coverImage {
            url
            alt
            width
            height
          }
          category {
            title
            slug
          }
          minutes
        }
      }
    `
  );
};

export const getPostsByCategory = async (slug) => {
  return client.request(
    gql`
      query getPostsByCategory($slug: String!) {
        posts(where: { category: { slug: $slug } }) {
          id
          slug
          title
          date
          excerpt
          content
          category {
            title
            slug
            description
          }
          coverImage {
            url
            alt
            width
            height
          }
          minutes
        }
      }
    `,
    { slug }
  );
};

import { request, gql } from "graphql-request";
import { BlogsType } from "../interfaces/blogs.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          excerpt
          slug
          title
          image {
            url
          }
          authot {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          createdAt
        }
      }
    `;

    const result = await request<{ blogs: BlogsType }>(graphqlAPI, query);
    return result.blogs;
  },
};

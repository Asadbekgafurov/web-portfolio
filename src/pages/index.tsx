import Layout from "../layout/layout";
import { Content, Hero, Sidebar } from "../components";
import { Box } from "@mui/material";
import { BlogsService } from "../services/blog.service";
import { BlogsType } from "../interfaces/blogs.interface";
import { GetServerSideProps } from "next";

const IndexPage = ({ blogs }: HomePageProps) => {
  console.log(blogs);

  return (
    <Layout>
      <Hero />
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
        }}
      >
        <Sidebar />
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};

interface HomePageProps {
  blogs: BlogsType[];
}

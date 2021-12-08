import { NextPage } from "next";
import { Post } from "../components/Post";
import { MainLayout } from "../layouts/MainLayout";
import { Api } from "../utils/api";
import { PostItem } from "../utils/api/types";

interface HomeProps {
  posts: PostItem[] | null;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const posts = await Api().post.getAll();
    return { props: { posts } };
  } catch (error) {
    console.log(error);
  }

  return { props: { posts: null } };
};

export default Home;

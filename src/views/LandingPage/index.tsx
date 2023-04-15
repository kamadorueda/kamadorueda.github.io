import { Layout, Posts, PostsSection } from "./styles";
import { FunctionComponent } from "react";
import { Header } from "~/components/Header";
import { PostBigBallOfMudCard } from "~/views/PostBigBallOfMud";

export const LandingPage: FunctionComponent = () => (
  <Layout>
    <Header />
    <PostsSection>Posts</PostsSection>
    <Posts>
      <PostBigBallOfMudCard />
    </Posts>
  </Layout>
);

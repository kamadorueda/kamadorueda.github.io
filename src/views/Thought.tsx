import { FC } from "react";
// @ts-expect-error - React Router v7 type resolution issue
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { match } from "ts-pattern";
import * as FinancialLiteracy from "./Thoughts/FinancialLiteracy";
import { Body } from "~/components/Body";
import { Footer } from "~/components/Footer";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import { Header } from "~/components/Typography";

export const Thought: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  const thought = match(id)
    .with("financial-literacy", () => FinancialLiteracy)
    .otherwise(() => null);

  if (!thought) {
    return (
      <Body>
        <Nav />
        <Main>
          <Header>Thought not found</Header>
        </Main>
        <Footer />
      </Body>
    );
  }

  return (
    <Body>
      <Helmet>
        <title>{thought.metadata.title}</title>
        <meta content={thought.metadata.title} name="og:title" />
        <meta content={thought.metadata.summary} name="og:description" />
        <meta content="article" name="og:type" />
        <meta content="Kevin Amado" name="article:author" />
        <meta
          content={thought.metadata.timestamp}
          name="article:published_time"
        />
        {thought.metadata.tags.map((tag) => (
          <meta content={tag} key={tag} name="article:tag" />
        ))}
      </Helmet>
      <Nav />
      <Main>
        <Header>{thought.metadata.title}</Header>
        <thought.Content />
      </Main>
      <Footer />
    </Body>
  );
};

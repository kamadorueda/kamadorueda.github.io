import * as FinancialLiteracy from "./FinancialLiteracy";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { Body } from "~/components/Body";
import { Footer } from "~/components/Footer";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import {
  ButtonLink,
  Header,
  ListItem,
  Paragraph,
  UnorderedList,
} from "~/components/Typography";

const thoughts = {
  [FinancialLiteracy.metadata.id]: FinancialLiteracy,
} as const;

export const Thoughts: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const thoughtId = searchParams.get("id");
  const thought = thoughtId === null ? undefined : thoughts[thoughtId];

  return (
    <Body>
      <Helmet>
        <title>Kevin Amado's Thoughts</title>
        <meta content="Kevin Amado's Thoughts" name="og:title" />
        <meta content="Posts, Opinions, and more." name="og:description" />
        <meta content="website" name="og:type" />
      </Helmet>

      <Nav />

      <Main>
        {thought === undefined ? (
          <>
            <Header>Thoughts</Header>
            <Paragraph>
              This is a collection of writings on topics I've found interesting
              over time. You can click on any of them to read more.
            </Paragraph>
            <UnorderedList>
              {Object.values(thoughts)
                .toSorted((a, b) =>
                  a.metadata.timestamp.localeCompare(b.metadata.timestamp),
                )
                .map((thought) => (
                  <ListItem key={thought.metadata.id}>
                    <ButtonLink
                      onClick={() => {
                        setSearchParams({ id: thought.metadata.id });
                      }}
                    >
                      {thought.metadata.title}.
                    </ButtonLink>
                    <span className="ml-2 text-xs text-slate-600">
                      {thought.metadata.minutes} minutes read.
                    </span>
                  </ListItem>
                ))}
            </UnorderedList>
          </>
        ) : (
          <>
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
            <Header>{thought.metadata.title}</Header>
            <thought.Content />
          </>
        )}
      </Main>
      <Footer />
    </Body>
  );
};

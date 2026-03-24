import { FC } from "react";
// @ts-expect-error - React Router v7 type resolution issue
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as FinancialLiteracy from "./FinancialLiteracy";
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
import { routes } from "~/routes";

const allThoughts = [FinancialLiteracy];

export const Thoughts: FC = () => {
  const navigate = useNavigate();

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
        <Header>Thoughts</Header>
        <Paragraph>
          This is a collection of writings on topics I've found interesting
          over time. You can click on any of them to read more.
        </Paragraph>
        <UnorderedList>
          {allThoughts.map((thought) => (
              <ListItem key={thought.metadata.id}>
                <ButtonLink
                  onClick={() => {
                    navigate(
                      routes.Thought.path.replace(
                        ":id",
                        thought.metadata.id,
                      ),
                    );
                  }}
                >
                  {thought.metadata.title}.
                </ButtonLink>
                <span className="text-ctext ml-2 text-xs">
                  {thought.metadata.minutes} minutes read.
                </span>
              </ListItem>
            ))}
        </UnorderedList>
      </Main>
      <Footer />
    </Body>
  );
};

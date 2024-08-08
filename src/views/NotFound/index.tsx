import { FC } from "react";
import { Body } from "~/components/Body";
import { Footer } from "~/components/Footer";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import { Header, InternalLink, Paragraph } from "~/components/Typography";
import { routes } from "~/routes";

export const NotFound: FC = () => (
  <Body>
    <Nav />
    <Main className="text-center">
      <Header>Page not found</Header>
      <Paragraph>
        Perhaps you may want to visit our&nbsp;
        <InternalLink to={routes.About.path}>landing page</InternalLink>?
      </Paragraph>
    </Main>
    <Footer />
  </Body>
);

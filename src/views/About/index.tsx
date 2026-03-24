import { Helmet } from "react-helmet";
import { Body } from "~/components/Body";
import { Footer } from "~/components/Footer";
import { GithubIcon } from "~/components/icons/Github";
import { GmailIcon } from "~/components/icons/Gmail";
import { LinkedinIcon } from "~/components/icons/Linkedin";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import { ExternalLink } from "~/components/Typography/ExternalLink";
import { Header } from "~/components/Typography/Header";
import { Paragraph } from "~/components/Typography/Paragraph";
import { tw } from "~/utils/tw";

const a = tw("group inline-block transition");

const svg = tw(
  "fill-ctext h-8 w-8 p-1 transition",
  // Focus
  "group-focus-visible:fill-cfocus",
  // Hover
  "group-hover:fill-ctextdark group-hover:scale-110",
);

export const About = () => (
  <Body>
    <Helmet>
      <title>Kevin Amado's Thoughts</title>
      <meta content="Kevin Amado's Website" name="og:title" />
      <meta
        content="Information about me, Posts, Opinions, and more."
        name="og:description"
      />
      <meta content="website" name="og:type" />
    </Helmet>

    <Nav />

    <Main className="m-auto max-w-xl text-center">
      <Header>Kevin Amado</Header>
      <Paragraph>
        I'm a Software Engineer based in Calgary, Canada.
        <br />I share in this website some of the things that I do and think
        about.
      </Paragraph>
    </Main>

    <aside className="mt-8">
      <div className="m-auto w-fit space-x-8">
        <ExternalLink className={a} to="mailto:kamadorueda@gmail.com">
          <GmailIcon aria-label="Kevin's Email" className={svg} />
        </ExternalLink>
        <ExternalLink className={a} to="https://github.com/kamadorueda">
          <GithubIcon aria-label="Kevin's GitHub profile" className={svg} />
        </ExternalLink>
        <ExternalLink className={a} to="https://linkedin.com/in/kamadorueda">
          <LinkedinIcon aria-label="Kevin's LinkedIn profile" className={svg} />
        </ExternalLink>
      </div>
    </aside>

    <Footer />
  </Body>
);

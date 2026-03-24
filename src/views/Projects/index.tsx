import { FC } from "react";
import { Helmet } from "react-helmet";
import { match } from "ts-pattern";

import { Body } from "~/components/Body";
import { Footer } from "~/components/Footer";
import { BashIcon } from "~/components/icons/Bash";
import { CppIcon } from "~/components/icons/Cpp";
import { NixIcon } from "~/components/icons/Nix";
import { PythonIcon } from "~/components/icons/Python";
import { RustIcon } from "~/components/icons/Rust";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import {
  ExternalLink,
  Header,
  Header2,
  ListItem,
  Paragraph,
  UnorderedList,
} from "~/components/Typography";

type ProjectType = {
  name: string;
  url: string;
  description: string;
  icon?: string;
};

const PERSONAL_PROJECTS: readonly ProjectType[] = [
  {
    name: "Alejandra",
    url: "https://github.com/kamadorueda/alejandra",
    description: "The uncompromising Nix code formatter",
    icon: "rust",
  },
  {
    name: "Makes",
    url: "https://github.com/fluidattacks/makes",
    description: "A software supply chain framework powered by Nix",
    icon: "nix",
  },
  {
    name: "Machine",
    url: "https://github.com/kamadorueda/machine",
    description: "My OS, development tools, and dotfiles, as code",
    icon: "nix",
  },
  {
    name: "Nixel",
    url: "https://github.com/kamadorueda/nixel",
    description: "Parser for the Nix Expressions Language",
    icon: "rust",
  },
  {
    name: "Aioextensions",
    url: "https://github.com/fluidattacks/aioextensions",
    description: "High performance functions to work with the async IO",
    icon: "python",
  },
] as const;

const PROFESSIONAL_CONTRIBUTIONS: readonly ProjectType[] = [
  {
    name: "Fluid Attacks",
    url: "https://gitlab.com/fluidattacks/universe/-/merge_requests?scope=all&state=all&author_username=kamadoatfluid",
    description: "Core software repository",
  },
] as const;

const OPEN_SOURCE_CONTRIBUTIONS: readonly ProjectType[] = [
  {
    name: "Nix",
    url: "https://github.com/NixOS/nix",
    description: "The purely functional package manager",
    icon: "cpp",
  },
  {
    name: "Nixpkgs",
    url: "https://github.com/NixOS/nixpkgs",
    description: "Packages collection & NixOS",
    icon: "nix",
  },
  {
    name: "ts-rs",
    url: "https://github.com/Aleph-Alpha/ts-rs",
    description: "Generate TypeScript bindings from Rust types",
    icon: "rust",
  },
  {
    name: "rust-mime-sniffer",
    url: "https://github.com/flier/rust-mime-sniffer",
    description: "Detecting mime types base on content sniffer",
    icon: "rust",
  },
  {
    name: "chrono",
    url: "https://github.com/chronotope/chrono",
    description: "Date and time library for Rust",
    icon: "rust",
  },
] as const;

const OTHER_PERSONAL_PROJECTS: readonly ProjectType[] = [
  {
    name: "Mailmap Linter",
    url: "https://github.com/kamadorueda/mailmap-linter",
    description:
      "Small, easy to use, easy to install tool to lint your git mailmap",
    icon: "bash",
  },
  {
    name: "Santiago",
    url: "https://github.com/kamadorueda/santiago",
    description: "Lexing and parsing toolkit for Rust",
    icon: "rust",
  },
  {
    name: "Tracers",
    url: "https://github.com/fluidattacks/tracers",
    description: "Open-Source APM (Application monitoring) project",
    icon: "python",
  },
  {
    name: "B3",
    url: "https://github.com/kamadorueda/b3",
    description: "Reproducible builds, dev envs and deployments",
    icon: "rust",
  },
  {
    name: "modern-terminal",
    url: "https://github.com/kamadorueda/modern-terminal",
    description:
      "Rust library for rich text and beautiful formatting in the terminal",
    icon: "rust",
  },
  {
    name: "four-shells",
    url: "https://github.com/kamadorueda/four-shells/tree/ee5354474c2b467339c0fad8ce10670944cf49b7",
    description:
      "Technologies around Nix and IPFS that are published under an Open Source License",
    icon: "python",
  },
  {
    name: "nixpkgs-db",
    url: "https://github.com/on-nix/pkgs",
    description:
      "A database with packages from all versions, all commits and all channels",
    icon: "python",
  },
  {
    name: "Python on Nix",
    url: "https://github.com/on-nix/python",
    description: "Extensive collection of Python projects from PyPI, for Nix!",
    icon: "python",
  },
  {
    name: "metaloaders",
    url: "https://github.com/kamadorueda/metaloaders",
    description: "JSON/YAML loaders with column and line numbers",
    icon: "python",
  },
  {
    name: "oblivion",
    url: "https://github.com/kamadorueda/metaloaders",
    description: "RSA encryption and decryption client",
    icon: "python",
  },
] as const;

export const Projects: FC = () => (
  <Body>
    <Helmet>
      <title>Kevin Amado's Projects</title>
      <meta content="Kevin Amado's Projects" name="og:title" />
      <meta content="GitHub projects." name="og:description" />
      <meta content="website" name="og:type" />
    </Helmet>

    <Nav />

    <Main>
      <Header>Projects</Header>
      <Paragraph>
        I’ve worked on tons of projects over the years but here are the ones
        that I can show you.
      </Paragraph>

      <section>
        <Header2>Professional Contributions</Header2>
        <Paragraph>
          Some of my previous employers' code is public. Here are over 2500 pull
          requests I made during my time there:
        </Paragraph>
        <UnorderedList>
          {PROFESSIONAL_CONTRIBUTIONS.map((project) => (
            <ListItem key={project.name}>
              <Project {...project} />
            </ListItem>
          ))}
        </UnorderedList>
      </section>

      <section>
        <Header2>Personal Projects</Header2>
        <Paragraph>
          These are some of my personal projects that I’m most proud of. All of
          them are open-source, so if you see something that piques your
          interest, check out the code and contribute if you have ideas for how
          it can be improved.
        </Paragraph>
        <UnorderedList>
          {PERSONAL_PROJECTS.map((project) => (
            <ListItem key={project.name}>
              <Project {...project} />
            </ListItem>
          ))}
        </UnorderedList>
      </section>

      <section>
        <Header2>Open Source Contributions</Header2>
        <Paragraph>
          Other people's code offers a great opportunity to learn new paradigms
          and expose yourself to other domains. These are some projects I didn't
          author but that I've tried to make better with my contributions:
        </Paragraph>
        <UnorderedList>
          {OPEN_SOURCE_CONTRIBUTIONS.map((project) => (
            <ListItem key={project.name}>
              <Project
                {...project}
                url={project.url + "/pulls?q=is%3Apr+author%3Akamadorueda"}
              />
            </ListItem>
          ))}
        </UnorderedList>
      </section>

      <section>
        <Header2>Other Open Source Contributions</Header2>
        <Paragraph>
          Some of my projects didn't stick, but they definitely have an
          interesting use-case, and who knows, maybe one day I'll figure out a
          better way.
        </Paragraph>
        <UnorderedList>
          {OTHER_PERSONAL_PROJECTS.map((project) => (
            <ListItem key={project.name}>
              <Project {...project} />
            </ListItem>
          ))}
        </UnorderedList>
      </section>

      <Paragraph>
        Plus many others, which are either private or I've forgotten to include.
      </Paragraph>
    </Main>
    <Footer />
  </Body>
);

const Project: FC<ProjectType> = (props) => {
  const Icon = match(props.icon)
    .with("bash", () => BashIcon)
    .with("cpp", () => CppIcon)
    .with("nix", () => NixIcon)
    .with("python", () => PythonIcon)
    .with("rust", () => RustIcon)
    .with(undefined, () => null)
    .otherwise(() => null);

  return (
    <ExternalLink to={props.url}>
      {Icon && <Icon className="mr-2 inline h-4 w-4" />}
      {props.name}: {props.description}.
    </ExternalLink>
  );
};

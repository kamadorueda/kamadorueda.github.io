import { Avocado } from "./Avocado";
import { Koi } from "./Koi";
import { Ladybug } from "./Ladybug";
import { Orca } from "./Orca";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { Body } from "~/components/Body";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import { ExternalLink, Header, Paragraph } from "~/components/Typography";
import { tw } from "~/tw";

const link = tw(
  "group block rounded p-2 text-center outline outline-1 outline-slate-200 transition",
  // Focus
  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500",
  // Hover
  "hover:bg-slate-50",
);

const heading = tw("text-xl font-bold text-slate-900");

const image = tw(
  "object-scale-up w-full transition lg:grayscale",
  // Focus
  "group-focus-visible:grayscale-0",
  // Hover
  "group-hover:grayscale-0",
);

export const Gallery: FC = () => (
  <Body>
    <Helmet>
      <title>Kevin Amado's Paintings</title>
      <meta content="Kevin Amado's Paintings" name="og:title" />
      <meta content="Acrylic paintings." name="og:description" />
      <meta content="website" name="og:type" />
    </Helmet>

    <Nav />

    <Main>
      <Header>Gallery</Header>
      <Paragraph>
        This is a small collection of&nbsp;
        <ExternalLink to="https://en.wikipedia.org/wiki/Still_life">
          Still Life
        </ExternalLink>
        &nbsp;and animals that I painted with acrylics from&nbsp;
        <ExternalLink to="https://mgraham.com/artists-colors/acrylics/">
          M. Graham & Co
        </ExternalLink>
        . All paintings were made with four colors:&nbsp;
        <ExternalLink to="https://mgraham.com/artists-colors/acrylics/">
          Cadmium Red
        </ExternalLink>
        ,&nbsp;
        <ExternalLink to="https://mgraham.com/acrylic-paints/cadmium-yellow-060/">
          Cadmium Yellow
        </ExternalLink>
        ,&nbsp;
        <ExternalLink to="https://mgraham.com/acrylic-paints/ultramarine-blue-190/">
          Ultramarine Blue
        </ExternalLink>
        , and&nbsp;
        <ExternalLink to="https://mgraham.com/acrylic-paints/titanium-white-180/">
          Titanium White,
        </ExternalLink>
        &nbsp;which I mix by hand.
      </Paragraph>
      <Paragraph>
        You can click on any of the images below to see them in maximum
        resolution.
      </Paragraph>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
        <li>
          <a className={link} href={Koi._3000x4000}>
            <span aria-hidden className={heading}>
              Koi Fish
            </span>
            <picture>
              <source media="(max-width: 300px)" srcSet={Koi._300x400} />
              <source media="(max-width: 600px)" srcSet={Koi._600x800} />
              <source media="(max-width: 1200px)" srcSet={Koi._1200x1600} />
              <img
                alt="A koi fish Kevin painted"
                className={image}
                loading="lazy"
                src={Koi._3000x4000}
              />
            </picture>
          </a>
        </li>
        <li>
          <a className={link} href={Orca._3000x4000}>
            <span className={heading}>Orca</span>
            <picture>
              <source media="(max-width: 300px)" srcSet={Orca._300x400} />
              <source media="(max-width: 600px)" srcSet={Orca._600x800} />
              <source media="(max-width: 1200px)" srcSet={Orca._1200x1600} />
              <img
                alt="An Orca Kevin painted"
                className={image}
                loading="lazy"
                src={Orca._3000x4000}
              />
            </picture>
          </a>
        </li>
        <li>
          <a className={link} href={Avocado._2400x3200}>
            <span className={heading}>Avocado</span>
            <picture>
              <source media="(max-width: 300px)" srcSet={Avocado._300x400} />
              <source media="(max-width: 600px)" srcSet={Avocado._600x800} />
              <source media="(max-width: 1200px)" srcSet={Avocado._1200x1600} />
              <img
                alt="An avocado Kevin painted"
                className={image}
                loading="lazy"
                src={Avocado._2400x3200}
              />
            </picture>
          </a>
        </li>
        <li>
          <a className={link} href={Ladybug._3000x4000}>
            <span className={heading}>Ladybug</span>
            <picture>
              <source media="(max-width: 300px)" srcSet={Ladybug._300x400} />
              <source media="(max-width: 600px)" srcSet={Ladybug._600x800} />
              <source media="(max-width: 1200px)" srcSet={Ladybug._1200x1600} />
              <img
                alt="A ladybug Kevin painted"
                className={image}
                loading="lazy"
                src={Ladybug._3000x4000}
              />
            </picture>
          </a>
        </li>
      </ul>
      <Paragraph>
        I'd like to add a&nbsp;
        <ExternalLink to="https://en.wikipedia.org/wiki/Portrait">
          portrait
        </ExternalLink>
        &nbsp;to the collection at some point. For now, some of the paintings I
        like the most decorate the walls in my home.
      </Paragraph>
    </Main>
  </Body>
);

import * as FinancialLiteracy from "./FinancialLiteracy";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { Body } from "~/components/Body";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import { Time } from "~/components/Time";
import { Header } from "~/components/Typography";
import { tw } from "~/tw";

const thoughts = {
  [FinancialLiteracy.metadata.id]: FinancialLiteracy,
};

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

      {thought === undefined ? (
        <Main>
          <h1 className="sr-only">Thoughts</h1>
          <ul className="m-auto grid max-w-sm grid-cols-1 gap-4 lg:gap-8">
            {Object.values(thoughts)
              .toSorted((a, b) =>
                a.metadata.timestamp.localeCompare(b.metadata.timestamp),
              )
              .map((thought) => (
                <li
                  className={tw(
                    "relative rounded p-2 text-center  outline outline-1 outline-slate-200",
                    "hover:bg-slate-50",
                  )}
                  key={thought.metadata.id}
                >
                  <h2 className="text-xl font-bold text-slate-900">
                    {thought.metadata.title}
                  </h2>
                  <p className="text-slate-500">{thought.metadata.summary}</p>

                  <dl className="mt-2 text-xs *:inline">
                    <dt className="sr-only">Written at</dt>
                    <dd>
                      <Time
                        className="text-slate-500"
                        dateTime={thought.metadata.timestamp}
                      />
                    </dd>
                    <dt className="sr-only">Time to read</dt>
                    <dd className="ml-4 text-slate-500">
                      {thought.metadata.minutes} minutes read.
                    </dd>
                  </dl>
                  <button
                    className={tw(
                      "mt-2 text-slate-500 underline underline-offset-2 transition",
                      "rounded before:absolute before:inset-0",
                      // Focus
                      "focus-visible:outline-none before:focus-visible:text-blue-500 before:focus-visible:outline before:focus-visible:outline-1 before:focus-visible:outline-blue-500",
                      // Hover
                      "hover:text-slate-900",
                    )}
                    onClick={() => {
                      setSearchParams({ id: thought.metadata.id });
                    }}
                  >
                    Read more
                  </button>
                </li>
              ))}
          </ul>
        </Main>
      ) : (
        <Main>
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
          <p className="text-center text-slate-500">
            {thought.metadata.summary}
          </p>
          <div className="mt-8">
            <thought.Content />
          </div>
        </Main>
      )}
    </Body>
  );
};

# Plan: Route-Based View Logic for Thoughts

## Problem

The `Thoughts` view currently mixes routing logic with rendering:
- Uses `useSearchParams()` to read a query param (`?id=financial-literacy`)
- Contains conditional logic to show either a list of thoughts or a single thought
- Routing concerns (which thought to display) are entangled with view rendering

This makes the component harder to test and reason about. Concerns are mixed.

---

## Solution

Split routing logic from rendering by creating dedicated routes:
- Route list view: `/thoughts` (shows list of all thoughts)
- Route individual view: `/thoughts/:id` (shows a single thought by id)
- React Router handles routing/params; components receive data as props instead of parsing URL

This follows the principle of single responsibility: routes handle navigation, components handle rendering.

---

## Implementation Steps

### 1. Create `src/views/Thoughts/ThoughtsList.tsx`

Extract the list view into its own component:

```tsx
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as FinancialLiteracy from "./FinancialLiteracy";
import {
  ButtonLink,
  Header,
  ListItem,
  Paragraph,
  UnorderedList,
} from "~/components/Typography";
import { routes } from "~/routes";

const thoughts = {
  [FinancialLiteracy.metadata.id]: FinancialLiteracy,
} as const;

export const ThoughtsList: FC = () => {
  const navigate = useNavigate();

  return (
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
                  navigate(
                    routes.ThoughtsDetail.path.replace(
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
    </>
  );
};
```

**File:** `src/views/Thoughts/ThoughtsList.tsx` (new)

---

### 2. Create `src/views/Thoughts/ThoughtView.tsx`

Extract the individual thought view into its own component:

```tsx
import { FC } from "react";
import { Helmet } from "react-helmet";
import * as FinancialLiteracy from "./FinancialLiteracy";
import { Header } from "~/components/Typography";

const thoughts = {
  [FinancialLiteracy.metadata.id]: FinancialLiteracy,
} as const;

interface ThoughtViewProps {
  id: string;
}

export const ThoughtView: FC<ThoughtViewProps> = (props) => {
  const thought = thoughts[props.id as keyof typeof thoughts];

  if (!thought) {
    return <Header>Thought not found</Header>;
  }

  return (
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
  );
};
```

**File:** `src/views/Thoughts/ThoughtView.tsx` (new)

---

### 3. Update `src/views/Thoughts/index.tsx`

Simplify to just the page layout wrapper:

```tsx
import { FC } from "react";
import { Helmet } from "react-helmet";
import { Body } from "~/components/Body";
import { Footer } from "~/components/Footer";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";

interface ThoughtsLayoutProps {
  children: React.ReactNode;
}

export const Thoughts: FC<ThoughtsLayoutProps> = (props) => {
  return (
    <Body>
      <Helmet>
        <title>Kevin Amado's Thoughts</title>
        <meta content="Kevin Amado's Thoughts" name="og:title" />
        <meta content="Posts, Opinions, and more." name="og:description" />
        <meta content="website" name="og:type" />
      </Helmet>
      <Nav />
      <Main>{props.children}</Main>
      <Footer />
    </Body>
  );
};
```

**File:** `src/views/Thoughts/index.tsx` (modified)

---

### 4. Create `src/views/ThoughtsListPage.tsx`

Wrapper component that composes layout + list:

```tsx
import { FC } from "react";
import { ThoughtsList } from "~/views/Thoughts/ThoughtsList";
import { Thoughts } from "~/views/Thoughts";

export const ThoughtsListPage: FC = () => (
  <Thoughts>
    <ThoughtsList />
  </Thoughts>
);
```

**File:** `src/views/ThoughtsListPage.tsx` (new)

---

### 5. Create `src/views/ThoughtsDetailPage.tsx`

Wrapper component that composes layout + detail view:

```tsx
import { FC } from "react";
// @ts-expect-error - React Router v7 type resolution issue
import { useParams } from "react-router-dom";
import { ThoughtView } from "~/views/Thoughts/ThoughtView";
import { Thoughts } from "~/views/Thoughts";

export const ThoughtsDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null; // Should not happen if router is configured correctly
  }

  return (
    <Thoughts>
      <ThoughtView id={id} />
    </Thoughts>
  );
};
```

**File:** `src/views/ThoughtsDetailPage.tsx` (new)

---

### 6. Update `src/routes.tsx`

Add the new routes:

```ts
export const routes = {
  About: {
    path: "/about",
  },
  Disclaimers: {
    path: "/disclaimers",
  },
  Gallery: {
    path: "/gallery",
  },
  NotFound: {
    path: "/not-found",
  },
  Projects: {
    path: "/projects",
  },
  Thoughts: {
    path: "/thoughts",
  },
  ThoughtsDetail: {
    path: "/thoughts/:id",
  },
} as const;
```

**File:** `src/routes.tsx` (modified)

---

### 7. Update `src/router.tsx`

Add routes for both list and detail views:

```tsx
// @ts-expect-error - React Router v7 type resolution issue
import { createHashRouter } from "react-router-dom";
import { routes } from "~/routes";
import { About } from "~/views/About";
import { Disclaimers } from "~/views/Disclaimers";
import { Gallery } from "~/views/Gallery";
import { NotFound } from "~/views/NotFound";
import { Projects } from "~/views/Projects";
import { ThoughtsListPage } from "~/views/ThoughtsListPage";
import { ThoughtsDetailPage } from "~/views/ThoughtsDetailPage";

export const router = createHashRouter([
  { path: "/", element: <About /> },
  { path: routes.About.path, element: <About /> },
  { path: routes.Disclaimers.path, element: <Disclaimers /> },
  { path: routes.Gallery.path, element: <Gallery /> },
  { path: routes.Projects.path, element: <Projects /> },
  { path: routes.Thoughts.path, element: <ThoughtsListPage /> },
  { path: routes.ThoughtsDetail.path, element: <ThoughtsDetailPage /> },
  { path: routes.NotFound.path, element: <NotFound /> },
  { path: "*", element: <NotFound /> },
]);
```

**File:** `src/router.tsx` (modified)

---

### 8. Update `src/views/Thoughts/index.test.tsx`

Update tests to reflect the new structure:

```tsx
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Thoughts } from "./index";

describe("Thoughts", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Thoughts>
        <div>Test content</div>
      </Thoughts>,
    );

    expect(getByText("Test content")).toBeInTheDocument();
  });

  it("includes Nav, Main, and Footer components", () => {
    const { container } = render(
      <Thoughts>
        <div>Content</div>
      </Thoughts>,
    );

    const nav = container.querySelector("nav");
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");

    expect(nav).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
```

**File:** `src/views/Thoughts/index.test.tsx` (modified)

---

### 9. Create `src/views/Thoughts/ThoughtsList.test.tsx`

Test the list view in isolation:

```tsx
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThoughtsList } from "./ThoughtsList";

describe("ThoughtsList", () => {
  it("renders the header", () => {
    render(
      <BrowserRouter>
        <ThoughtsList />
      </BrowserRouter>,
    );

    expect(screen.getByText("Thoughts")).toBeInTheDocument();
  });

  it("renders all thoughts as list items", () => {
    render(
      <BrowserRouter>
        <ThoughtsList />
      </BrowserRouter>,
    );

    // Should have at least one thought
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });
});
```

**File:** `src/views/Thoughts/ThoughtsList.test.tsx` (new)

---

### 10. Create `src/views/Thoughts/ThoughtView.test.tsx`

Test individual thought view:

```tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { ThoughtView } from "./ThoughtView";

describe("ThoughtView", () => {
  it("renders thought content for valid id", () => {
    render(
      <HelmetProvider>
        <ThoughtView id="financial-literacy" />
      </HelmetProvider>,
    );

    expect(screen.getByText("Financial Literacy")).toBeInTheDocument();
  });

  it("shows not found message for invalid id", () => {
    render(
      <HelmetProvider>
        <ThoughtView id="nonexistent" />
      </HelmetProvider>,
    );

    expect(screen.getByText("Thought not found")).toBeInTheDocument();
  });
});
```

**File:** `src/views/Thoughts/ThoughtView.test.tsx` (new)

---

## Benefits

✅ **Separation of Concerns** — Routing handled by React Router, rendering by components
✅ **Easier Testing** — Components receive data as props; no URL parsing logic to test
✅ **Type Safety** — Route params are typed by React Router
✅ **Better URL Structure** — `/thoughts/:id` is more RESTful than query params
✅ **Cleaner Components** — No conditional rendering logic in Thoughts component
✅ **Easier to Extend** — Adding new thought pages is straightforward

---

## Verification

1. `pnpm test` — all tests pass
2. `pnpm lint` — no warnings
3. Navigate to `/thoughts` — list view displays correctly
4. Click on a thought — `/thoughts/financial-literacy` route displays detail view
5. Verify Helmet metadata updates correctly on both views
6. Check git diff — files are well-organized, separation is clear

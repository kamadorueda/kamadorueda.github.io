import cover200x100 from "./cover200x100.jpeg";
import cover400x200 from "./cover400x200.jpeg";
import cover800x400 from "./cover800x400.jpeg";
import { FunctionComponent } from "react";
import { Header } from "~/components/Header";
import { Post } from "~/components/Post";
import { PostCard } from "~/components/PostCard";
import { routes } from "~/routes";

export const PostBigBallOfMudCard: FunctionComponent = () => (
  <PostCard.Layout>
    <PostCard.Cover
      alt="big ball of mud"
      sources={{
        "200x100": cover200x100,
        "400x200": cover400x200,
        "800x400": cover800x400,
      }}
    />
    <PostCard.Title>Big Ball of Mud</PostCard.Title>
    <PostCard.Description>
      What forces drive good programmers to build ugly systems? Can we avoid
      this? Should we? How can we make such systems better?
    </PostCard.Description>
    <PostCard.Read to={routes.postBigBallOfMud.path}>Read</PostCard.Read>
  </PostCard.Layout>
);

export const PostBigBallOfMud: FunctionComponent = () => (
  <Post.Layout>
    <Header />
    <Post.Title>Big Ball of Mud</Post.Title>
    <Post.Content>
      <Post.Card>
        <Post.Cover
          alt="big ball of mud"
          sources={{
            "200x100": cover200x100,
            "400x200": cover400x200,
            "800x400": cover800x400,
          }}
        />
        <Post.Paragraph>
          <Post.Link
            href="http://www.laputan.org/mud/mud.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Big Ball of Mud
          </Post.Link>
          &nbsp;is a highly influential paper in software engineering, written
          by Brian Foote and Joseph Yoder in 1999. The paper describes a common
          phenomenon in software development where a software system becomes a
          "big ball of mud" - a complex, disorganized and difficult-to-maintain
          mess of code. Still, this approach endures and thrives. Why is this
          architecture so popular? Is it as bad as it seems, or might it serve
          as a way-station on the road to more enduring, elegant artifacts? What
          forces drive good programmers to build ugly systems? Can we avoid
          this? Should we? How can we make such systems better?
        </Post.Paragraph>
        <Post.Paragraph>
          The first thing that caught my attention from this paper is that at a
          first glance, calling our code a "big ball of mud" looks like an
          undesirable property, yet, this is not always the case, and we can
          look at it through the lenses of rational &nbsp;
          <Post.Link
            href="https://en.wikipedia.org/wiki/Decision-making"
            rel="noopener noreferrer"
            target="_blank"
          >
            decision making
          </Post.Link>
          : Architecture can be seen as a risk, it will consume short-term
          resources that in certain occasions are better directed towards
          catching a market opportunity. Furthermore, architecture is expensive,
          and an investment on it usually doesn't pay off immediately. Those
          expenses need to be weighed against allowing a system to slip into
          premature decline and obsolescence.
        </Post.Paragraph>

        <Post.Paragraph>
          That being said, and assuming that good architecture is the optional
          decision for your use case. It's very important to first understand
          what forces drive producing Big Balls of Mud:
          <Post.UnorderedList>
            <Post.UnorderedListItem>
              Inexperience: There is absolute, fresh out of school inexperience.
              A good architect may lack domain experience, or a domain expert
              may not have architectural experience. Employee turnover can wreak
              havoc on an organization’s institutional memory, with the perhaps
              dubious consolation of bringing fresh blood aboard.
            </Post.UnorderedListItem>
            <Post.UnorderedListItem>
              Visibility: Much of what architecture is is "under the hood",
              where nobody can see it. If the system works, and it can be
              shipped, who cares what it looks like on the inside?
            </Post.UnorderedListItem>
            <Post.UnorderedListItem>
              Complexity: Software often reflects the inherent complexity of the
              application domain (
              <Post.Link
                href="https://en.wikipedia.org/wiki/No_Silver_Bullet"
                rel="noopener noreferrer"
                target="_blank"
              >
                essential complexity
              </Post.Link>
              ) and often, the architecture of the system reflects the sprawl
              and history of the organization that built it (
              <Post.Link
                href="https://en.wikipedia.org/wiki/Conway%27s_law"
                rel="noopener noreferrer"
                target="_blank"
              >
                Conway's Law
              </Post.Link>
              ).
            </Post.UnorderedListItem>
            <Post.UnorderedListItem>
              Change: New requirements arise all the time. The "right" thing to
              do might be to redesign the system. The more likely result is that
              the architecture of the system will be perturbed to address the
              new requirements, without considering the effect of those changes
              in the integrity of the system.
            </Post.UnorderedListItem>
            <Post.UnorderedListItem>
              Scale: Managing a large project is a qualitatively different
              problem from managing a small one, just as leading a division of
              infantry into battle is different from commanding a small special
              forces team.
            </Post.UnorderedListItem>
            <Post.UnorderedListItem>
              Culture: Status in the programmer's primate pecking order is often
              earned through ritual displays of cleverness, rather than through
              workman-like displays of simplicity and clarity. That which a
              culture glorifies will flourish.
            </Post.UnorderedListItem>
          </Post.UnorderedList>
        </Post.Paragraph>
      </Post.Card>
    </Post.Content>
  </Post.Layout>
);

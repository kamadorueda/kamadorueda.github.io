// import cover200x100 from "./cover200x100.jpeg";
// import cover400x200 from "./cover400x200.jpeg";
// import cover800x400 from "./cover800x400.jpeg";
// import { FunctionComponent } from "react";
// import { Header } from "~/components/Header";
// import { Post } from "~/components/Post";
// import { PostCard } from "~/components/PostCard";
// import { routes } from "~/routes";

// export const PostBigBallOfMudCard: FunctionComponent = () => (
//   <PostCard.Layout>
//     <PostCard.Cover
//       alt="Big Ball of Mud"
//       sources={{
//         "200x100": cover200x100,
//         "400x200": cover400x200,
//         "800x400": cover800x400,
//       }}
//     />
//     <PostCard.Title>Big Ball of Mud</PostCard.Title>
//     <PostCard.Description>
//       What forces drive good programmers to build ugly systems? Can we avoid
//       this? Should we? How can we make such systems better?
//     </PostCard.Description>
//     <PostCard.Read to={routes.postBigBallOfMud.path}>Read</PostCard.Read>
//   </PostCard.Layout>
// );

// export const PostBigBallOfMud: FunctionComponent = () => (
//   <Post.Layout>
//     <Header />
//     <Post.Title>Big Ball of Mud</Post.Title>
//     <Post.Content>
//       <Post.Card>
//         <Post.Cover
//           alt="Big Ball of Mud"
//           sources={{
//             "200x100": cover200x100,
//             "400x200": cover400x200,
//             "800x400": cover800x400,
//           }}
//         />
//         <Post.Paragraph>
//           <Post.Link
//             href="http://www.laputan.org/mud/mud.html"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Big Ball of Mud
//           </Post.Link>
//           &nbsp;is a highly influential paper in software engineering, written
//           by Brian Foote and Joseph Yoder in 1999. The paper describes a common
//           phenomenon in software development where a software system becomes a
//           "Big Ball of Mud" - a complex, disorganized and difficult-to-maintain
//           mess of code. Still, it is relatively common to find in practice. Why
//           is this architecture so popular? Is it as bad as it seems, or might it
//           serve as a way-station on the road to more enduring, elegant
//           artifacts? What forces drive good programmers to build ugly systems?
//           Can we avoid this? Should we? How can we make such systems better?
//         </Post.Paragraph>
//         <Post.Paragraph>
//           The first thing that caught my attention from this paper is that at a
//           first glance, calling our code a Big Ball of Mud looks like an
//           undesirable property, yet, this is not always the case, we need to
//           look at the trade-offs. An investment on architecture usually doesn't
//           pay off immediately and will consume resources that in certain
//           occasions are better directed towards catching a market opportunity.
//           Those expenses need to be weighed against allowing a system to slip
//           into decline and obsolescence, trying to find a balance between wins
//           and consequences. Also, a certain amount of controlled chaos is
//           natural when building a new system and can be tolerated, particularly
//           when exploring a new domain, and more often than not, opportunities
//           and insights that can allow for architectural progress are present
//           later rather than earlier in the lifecycle. Lastly, sometimes the
//           project doesn't even merits it.
//         </Post.Paragraph>
//         <Post.Paragraph>
//           How to even tell if you are becoming a Big Ball of Mud? I have a
//           couple of questions for you:
//           <Post.UnorderedList>
//             <Post.UnorderedListItem>
//               What's your <Post.Bold>Change Fail Percentage</Post.Bold>? what
//               percentage of changes to production or releases to users result in
//               degraded service (for example, lead to service impairment or
//               service outage) and subsequently require remediation (for example,
//               require a hotfix, rollback, fix forward, patch)? Are your systems
//               disappointing your users often?
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               What's your <Post.Bold>Mean Time to Repair</Post.Bold>? When
//               changes disappoint your users, how long does it take to your team
//               to find the cause, fix it, and deploy a fix? Did you noticed the
//               problem before your users contacted your support department?
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               What's your <Post.Bold>Deploy Frequency</Post.Bold>? Can you
//               easily deploy it? Can you deploy it on-demand, as many times a day
//               as needed? Is it even in a releasable state at all times? Do you
//               need a human to operate the deployment?
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               What's your <Post.Bold>Lead Time to production</Post.Bold>? When a
//               new feature or requirement changes, how long does it take your
//               team to place a solution in the customer hands? Is change painful?
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               How much does it take you to onboard an experienced developer? Are
//               they still asking questions a couple of weeks in? Or can they
//               figure it out autonomously?
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               Try comparing the above answers to a couple of months ago. Is it
//               worsening?
//             </Post.UnorderedListItem>
//           </Post.UnorderedList>
//           You probably see the underlying concept now. There is no velocity in a
//           Big Ball of Mud, and when there is, it is not moving you in any
//           meaningful direction. In a Big Ball of Mud change is painful, failures
//           are common, and complexity accumulates.
//         </Post.Paragraph>
//         <Post.Paragraph>
//           But, where to start untangling it? We first need to understand what
//           forces drive producing Big Balls of Mud:
//           <Post.UnorderedList>
//             <Post.UnorderedListItem>
//               <Post.Bold>Inexperience</Post.Bold>: There is absolute, fresh out
//               of school inexperience, but also a good architect may lack domain
//               experience, or a domain expert may not have architectural
//               experience. Employee turnover also has an impact in an
//               organization’s institutional memory, with the perhaps dubious
//               consolation of bringing fresh blood aboard.
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               <Post.Bold>Visibility</Post.Bold>: Much of what architecture
//               represents is "under the hood", where nobody can see it. If the
//               system works, and it can be shipped, who cares what it looks like
//               on the inside?
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               <Post.Bold>Complexity</Post.Bold>: Software often reflects the
//               inherent complexity of the application domain (
//               <Post.Link
//                 href="https://en.wikipedia.org/wiki/No_Silver_Bullet"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Essential Complexity
//               </Post.Link>
//               ) and often, the architecture of the system reflects the sprawl
//               and history of the organization that built it (
//               <Post.Link
//                 href="https://en.wikipedia.org/wiki/Conway%27s_law"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Conway's Law
//               </Post.Link>
//               ).
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               <Post.Bold>Change</Post.Bold>: New requirements arise all the
//               time. The "right" thing to do might be to redesign the system, but
//               the more likely result is that the architecture of the system will
//               be perturbed to address the new requirements without considering
//               the effect of those changes in the integrity of the system.
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               <Post.Bold>Scale</Post.Bold>: Managing a large project is a
//               qualitatively different problem from managing a small one, just as
//               leading a division of infantry into battle is different from
//               commanding a small special forces team.
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               <Post.Bold>Permanent Prototypes</Post.Bold>: When you build a
//               prototype, there is always the risk that someone will say "that's
//               good enough, ship it". Likewise, quick-and-dirty coding is often
//               rationalized as being temporary, but often, resources are never
//               found for the required follow up work.
//             </Post.UnorderedListItem>
//             <Post.UnorderedListItem>
//               <Post.Bold>Culture</Post.Bold>: Status in the programmer's primate
//               pecking order is often earned through displays of cleverness,
//               rather than through workman-like displays of simplicity and
//               clarity.&nbsp;
//               <Post.Bold>
//                 That which a culture glorifies will flourish
//               </Post.Bold>
//               .
//             </Post.UnorderedListItem>
//           </Post.UnorderedList>
//         </Post.Paragraph>
//         <Post.Paragraph>
//           So the first thing to drain a swamp is to stop dumping dirt on it.
//           Start by making sure that you have the right people, and that they
//           stay long-term in your team. Do they find joy in simplicity and
//           clarity? Are they rewarded for it? Or do they try to make themselves
//           irreplaceable by creating labyrinths that nobody else understands?
//           Double check your culture and processes. Is there anything that can
//           motivate a developer to favour short-term gains that will bring
//           long-term decay? Are you measuring them by output instead of impact?
//           Are you using Vanity Metrics? Is your team given enough resources to
//           catch up on architecture integrity after a prototype or new
//           requirements arise or change? Are you paying down technical debt? When
//           a problem arise, do you apply a band aid or fix the root of the
//           problem?
//         </Post.Paragraph>
//         <Post.Paragraph></Post.Paragraph>
//         <Post.Paragraph>
//           Finally, I just want to leave you with a closing thought:
//         </Post.Paragraph>
//         <Post.Paragraph>
//           If you think good architecture is expensive, try bad architecture. It
//           may be wise sometimes. Other times it is not. It depends.
//         </Post.Paragraph>
//       </Post.Card>
//     </Post.Content>
//   </Post.Layout>
// );

# Big Ball of Mud

Big Ball of Mud is a highly influential paper in software engineering, written by
Brian Foote and Joseph Yoder in 1999. The paper describes a common
phenomenon in software development where a software system becomes a
"big ball of mud" - a complex, disorganized and difficult-to-maintain
mess of code.

<!-- Still, this approach endures and thrives. Why is this
architecture so popular? Is it as bad as it seems, or might it serve as
a way-station on the road to more enduring, elegant artifacts? What
forces drive good programmers to build ugly systems? Can we avoid this?
Should we? How can we make such systems better? -->

The first thing that caught my attention from this paper is that at a first glance, calling our code a "big ball of mud" looks like an undesirable property, yet, this is not always the case, and we can look at it through the lenses of rational [decision making](https://en.wikipedia.org/wiki/Decision-making): Architecture can be seen as a risk, it will consume short-term resources that in certain occasions are better directed towards catching a market opportunity. Furthermore, Architecture is expensive, and an investment on it usually doesn't pay off immediately. Those expenses need to be weighed against allowing a system to slip into premature decline and obsolescence.

That being said, and assuming that good architecture is the optional decision for your use case. It's very important to first understand what forces drive producing Big Balls of Mud:

- Inexperience: There is absolute, fresh out of school inexperience. A good architect may lack domain experience, or a domain expert may not have architectural experience. Employee turnover can wreak havoc on an organization’s institutional memory, with the perhaps dubious consolation of bringing fresh blood aboard.
- Visibility: Architecture is neglected is that much of it is "under the hood", where nobody can see it. If the system works, and it can be shipped, who cares what it looks like on the inside?
- Complexity: Software often reflects the inherent complexity of the application domain. See "essential complexity". And often, the architecture of the system reflects the sprawl and history of the organization that built it. See "conway's law".
- Change: New requirements arise all the time. The "right" thing to do might be to redesign the system. The more likely result is that the architecture of the system will be perturbed to address the new requirements, without considering the effect of those changes in the integrity of the system.
- Scale: Managing a large project is a qualitatively different problem from managing a small one, just as leading a division of infantry into battle is different from commanding a small special forces team

## Forces

<!-- Inexperience can take a number of guises. There is absolute, fresh out of school inexperience. A good architect may lack domain experience, or a domain expert who knows the code cold may not have architectural experience.

Employee turnover can wreak havoc on an organization’s institutional memory, with the perhaps dubious consolation of bringing fresh blood aboard. -->

<!--
Indeed, one of the reasons that architecture is neglected is that much of it is "under the hood", where nobody can see it. If the system works, and it can be shipped, who cares what it looks like on the inside?
 -->

<!--  a complex system may be an accurate reflection of our immature understanding of a complex problem.  -->

<!-- A somewhat ramshackle rat's nest might be a state-of-the-art architecture for a poorly understood domain -->

<!-- A certain amount of controlled chaos is natural during construction, and can be tolerated, as long as you clean up after yourself eventually. -->

<!-- gain more experience in such domains, we should increasingly direct our energies to gleaning more enduring architectural abstractions from them. -->

<!-- Indeed, to a substantial extent, much of this chapter describes the disease, while the patterns above describe what we believe can be the cure: a flexible, adaptive, feedback-driven development process in which design and refactoring pervade the lifecycle of each artifact, component, and framework, within and beyond the applications that incubate them.

Forces

 -->

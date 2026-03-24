import { FC } from "react";
import { Paragraph } from "~/components/Typography/Paragraph";

export const metadata = {
  id: "artificial-intelligence",
  minutes: 7,
  summary: "How AI agents are changing what it means to be a software engineer",
  tags: ["technology", "artificial-intelligence", "engineering"],
  title: "Artificial Intelligence",
  timestamp: "2026-03-24",
};

export const Content: FC = () => (
  <>
    <Paragraph>
      For most of my career, my job was exactly what you'd expect: understand a
      requirement, design a solution, write the code, test it, ship it. I spent
      the vast majority of my time with my hands on the keyboard. When I needed
      something built, I built it. When there was a bug, I fixed it. Simple.
    </Paragraph>

    <Paragraph>A year ago, I coded. Now I don't.</Paragraph>

    <Paragraph>
      I think. I describe what needs to be done, agents draft implementation
      plans, I review and guide them, and they execute while I move to the next
      problem. This is my daily reality now, and I think it's worth writing
      about. The agent is faster at coding. No question there. But the real
      benefit is that I can work on something else entirely while it's
      executing. I can think about the next problem instead of being stuck on
      the current one. And there's no physical stress anymore or tired hands.
      It's pure mental work. Often I just talk to the agent with my voice
      instead of typing.
    </Paragraph>

    <Paragraph>
      The philosophical shift is more significant. I review plans before they're
      executed and push back on approaches that seem inharmonious with the
      system or more complex than necessary, relying on my experience to keep
      solutions simple and aligned. I also break down big problems into smaller,
      additive scopes that agents can execute in parallel.
    </Paragraph>

    <Paragraph>
      But this means I can't just "fix it as I go" anymore. Every assumption
      needs to be stated. Every shortcut needs to be justified. The things I
      used to apply implicitly (conventions, patterns, what makes code "good" in
      this specific codebase) now need to be explicit enough that an agent can
      apply them. I codify the tacit knowledge I've built up over years: the
      little rules and patterns that make this codebase feel coherent instead of
      chaotic, the judgment that lets me see which decisions compound well and
      which ones quietly accumulate debt. When I have to articulate these
      things, and I write it down for others, their agents can apply them in the
      future, creating leverage for the team.
    </Paragraph>

    <Paragraph>
      I finally work at the speed of my thoughts. No more waiting for my fingers
      to catch up, no more bottlenecked by typing and manual implementation. My
      ideas execute in parallel, across multiple agents, as fast as I can
      articulate them. The workflow collapses the gap between thinking and
      doing.
    </Paragraph>

    <Paragraph>
      But speed isn't the only benefit. The quality is actually better. Every
      agent's work flows through me. I enforce consistency across all the code
      being written. The explicit knowledge I've codified becomes the standard
      that all agents follow. This review process prevents architectural drift.
      Each piece of work passes through my architectural gate. The productivity
      gains free me up to focus on more planning, more testing, more thinking
      about how things will integrate and fail. The iteration speed is brutal. I
      can refine a design in an hour instead of a week. So I'm not just
      producing more code faster, I'm producing cleaner, more maintainable code
      because I have both the bandwidth to think deeply and the control to
      enforce consistency.
    </Paragraph>

    <Paragraph>
      Quality also stems from better data access. Agents can fetch logs, extract
      key data points, summarize them, run statistical analysis. Things that
      would take me hours to do by hand (if I even had the patience to do them
      at all) happen in seconds. I can make architectural decisions backed by
      actual data instead of intuition, and still apply my intuition when I see
      fit. I can see patterns in system behavior that I would never have
      discovered manually. The agents give me visibility into the codebase in
      ways that were simply impractical before.
    </Paragraph>

    <Paragraph>
      Beyond the code itself, I've also automated the boring parts of my job
      with other agents I wrote. Tickets, commit descriptions, status updates to
      my team. These used to eat up time I didn't want to spend on them. Now I
      have a system, a process that allows for automation. I trigger the agents,
      and they handle the tedious documentation and communication work while I
      focus on the actual problem-solving.
    </Paragraph>

    <Paragraph>
      Some might wonder if I miss the flow state of writing code by hand, if I
      feel disconnected from the soul of the work. Honestly, I feel even more
      connected. The flow state now is architectural flow, and it's
      uninterrupted. I don't get distracted by fixing compiler errors or linting
      issues. I stay at a higher level of thinking: how systems compose, how
      decisions cascade, how to guide execution toward coherence. There's joy in
      seeing your vision materialize through someone else's hands, and deeper
      joy in the work of thinking clearly enough that someone else can execute
      it. That's deeper than any coding flow I experienced before.
    </Paragraph>

    <Paragraph>
      I don't know if this is the future for everyone. But for me, right now,
      this is what my job has become. And I wouldn't go back.
    </Paragraph>

    <Paragraph className="mt-8 text-sm text-gray-600 italic">
      Note: The thoughts, substance, and structure of this article are mine. AI
      worked on the prose, word choice, and connectors to improve clarity and
      articulation.
    </Paragraph>
  </>
);

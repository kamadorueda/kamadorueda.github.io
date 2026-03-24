import { FC } from "react";
import { ExternalLink } from "~/components/Typography/ExternalLink";
import { InternalLink } from "~/components/Typography/InternalLink";
import { ListItem } from "~/components/Typography/ListItem";
import { Paragraph } from "~/components/Typography/Paragraph";
import { UnorderedList } from "~/components/Typography/UnorderedList";
import { routes } from "~/routes";

export const metadata = {
  id: "financial-literacy",
  minutes: 4,
  summary: "Know your opportunity costs",
  tags: ["finances", "investing"],
  title: "Financial Literacy",
  timestamp: "2024-05-27",
};

export const Content: FC = () => (
  <>
    <Paragraph>
      Many people want to accumulate wealth throughout their lives. Some succeed,
      some fail. Luck plays a role, but many factors are within your control.
      The financial education you pursue will help you avoid mistakes and achieve
      an adequate investment return for the risk you can and want to take.
    </Paragraph>

    <Paragraph>
      Everyone starts somewhere. Until you have enough positive cash flow to
      accumulate assets, your priority should be growing your income and/or
      reducing your expenses. Most people increase their income by getting a
      better-paying job or starting a side hustle. Most reduce their expenses by
      controlling discretionary spending and managing debt responsibly.
    </Paragraph>

    <Paragraph>
      As your cash flow allows you to set money aside, financial planning becomes
      increasingly important to ensure you reach your goals. There's a point where
      losses from inflation and missed investment opportunities exceed any new
      savings you add, creating an illusion of progress while your wealth
      stagnates in real terms.
    </Paragraph>

    <Paragraph>
      As you approach this stage, I highly recommend you educate yourself
      financially and make a plan. Is it retirement? A trip a couple of years
      from now? Your kids' education? An emergency fund? Defining your goal lets
      you optimize your investments and reach it faster, with less effort and
      more certainty.
    </Paragraph>

    <Paragraph>
      Some resources I've found extremely valuable, in order of how easy they
      are to digest for a beginner are:
    </Paragraph>

    <UnorderedList>
      <ListItem>
        <ExternalLink to="https://www.youtube.com/@BenFelixCSI">
          Ben Felix's YouTube channel.
        </ExternalLink>
      </ListItem>
      <ListItem>
        <ExternalLink to="https://en.wikipedia.org/wiki/The_Little_Book_of_Common_Sense_Investing">
          The Little Book of Common Sense Investing by John Bogle.
        </ExternalLink>
      </ListItem>
      <ListItem>
        <ExternalLink to="https://en.wikipedia.org/wiki/The_Intelligent_Investor">
          The Intelligent Investor by Benjamin Graham.
        </ExternalLink>
      </ListItem>
      <ListItem>
        <ExternalLink to="https://en.wikipedia.org/wiki/Security_Analysis_(book)">
          Security Analysis by Benjamin Graham.
        </ExternalLink>
      </ListItem>
    </UnorderedList>

    <Paragraph>
      Alternatively, most banks offer financial advisors who can help you.
      However, ensure their incentives align with yours; otherwise, they may
      recommend a higher-cost version of simpler options like an&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/learning-centre/etf-education/asset-allocation-etfs">
        Asset Allocation Fund
      </ExternalLink>
      , a&nbsp;
      <ExternalLink to="https://www.ishares.com/us/strategies/what-is-a-target-date-fund">
        Target Date Fund
      </ExternalLink>
      , or a fixed-income security like a&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/products/239414/ishares-premium-money-market-etf">
        Money Market Fund
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      One factor many overlook is the impact of taxes on your returns. A small
      difference in annual taxes compounds significantly over decades. Being
      conscious of the tax efficiency of your investments, including which
      accounts to use and what types of investments fit where, can add up to
      substantial gains. This is especially true in low-tax-bracket accounts or
      jurisdictions with favorable treatment for long-term investments.
    </Paragraph>

    <Paragraph>
      Below I try to put some numbers to the different investment avenues that
      you may participate in. Their time horizons, risks and returns.
    </Paragraph>

    <Paragraph>
      If you leave your money in a checking account, inflation erodes your
      purchasing power. In Canada, the Consumer Price Index rose from 125.8 to
      160.6 over 10 years, a 27.6% loss. While future inflation may vary, central
      banks aim to maintain 2-3% annually, meaning you'll steadily lose
      purchasing power. Keep only the cash you'll spend within a month in your
      checking account.
    </Paragraph>
    <Paragraph>
      A mediocre savings account, one paying significantly below the risk-free
      rate, costs you through inflation plus the gap between what you earn and
      what you could earn. In Canada, the risk-free return is approximated by the&nbsp;
      <ExternalLink to="https://www.bankofcanada.ca/rates/interest-rates/corra/">
        Canadian Overnight Repo Rate
      </ExternalLink>
      . Over the last three years alone, using a mediocre account instead costs
      around 9.5% (before accounting for inflation, costs, and taxes). Use a
      savings account only for money you'll need within a couple of months. For
      better returns closer to the risk-free rate, consider a&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/products/239414/ishares-premium-money-market-etf">
        Money Market Fund
      </ExternalLink>
      , though it differs slightly from a traditional savings account.
    </Paragraph>
    <Paragraph>
      With a longer time horizon or higher risk tolerance, a diversified fund
      investing in stocks and bonds can compound significantly. A 3% annualized
      return after inflation, costs, and taxes is realistic. Eventually, you can
      withdraw returns without depleting the principal, which is how pension funds
      and university endowments work. In Canada, an&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/learning-centre/etf-education/asset-allocation-etfs">
        Asset Allocation Fund
      </ExternalLink>
      &nbsp;offers a low-cost, straightforward approach.
    </Paragraph>

    <Paragraph>
      I've outlined some of your options above. The best advice I can offer is
      to treat your finances with the same care as other important areas of your
      life. Define your objectives and eliminate opportunity costs accordingly.
      Do this if you want to accumulate wealth rather than watch it erode.
    </Paragraph>

    <aside className="mt-8">
      <Paragraph>
        <InternalLink to={routes.Disclaimers.path}>Disclaimers</InternalLink>
      </Paragraph>
    </aside>
  </>
);

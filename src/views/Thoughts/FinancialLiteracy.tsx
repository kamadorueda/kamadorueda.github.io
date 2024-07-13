import { FC } from "react";
import {
  ExternalLink,
  Paragraph,
  UnorderedList,
  ListItem,
  InternalLink,
} from "~/components/Typography";
import { routes } from "~/routes";

export const metadata = {
  id: "financial-literacy",
  minutes: 5,
  summary: "Know your opportunity costs",
  tags: ["finances", "investing"],
  title: "Financial Literacy",
  timestamp: "2024-05-27",
};

export const Content: FC = () => (
  <>
    <Paragraph>
      Many people want to accumulate wealth throughout their life. Some succeed,
      some fail. Luck plays a role for sure, but some factors are in our
      control. The financial education you expose yourself to will help you
      avoid mistakes and achieve an adequate investment return.
    </Paragraph>

    <Paragraph>
      Everybody starts somewhere. Until you have enough positive cash flow to
      start accumulating assets your priority should be growing your income
      and/or reducing your expenses. Most people increase their income by
      getting a better-paying job, starting a side hustle, and so on. Most
      people reduce their expenses by controlling their discretionary spending
      and being conscious and responsible with debt.
    </Paragraph>

    <Paragraph>
      As your cash flows allow you to set some money aside, it becomes
      increasingly important to engage in Financial Planning to ensure you can
      accomplish your goals. There is always a point where the money you lose
      due to inflation, plus the money you forego by not investing your money in
      the right place relative to your objectives will exceed any new savings
      you add, thus giving the illusion of saving but not getting you richer in
      practice.
    </Paragraph>

    <Paragraph>
      As you approach this stage, I highly recommend you educate yourself
      financially. Make a plan. Is it retirement? Is it a trip a couple of years
      from now? Is it your kids' education? Maybe you are saving for a rainy
      day? You can optimize your investments for that and get there faster, with
      less effort, and more certainty.
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
      Alternatively, most banks have a division of advisors that can help you.
      Simply make sure there is an alignment of incentives, otherwise, they may
      just try to sell you (for a commission) a more expensive and not
      necessarily better version of an&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/learning-centre/etf-education/asset-allocation-etfs">
        Asset Allocation Fund
      </ExternalLink>
      , a&nbsp;
      <ExternalLink to="https://www.ishares.com/us/strategies/what-is-a-target-date-fund">
        Target Date Fund
      </ExternalLink>
      , or some type of fixed-income security like a&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/products/239414/ishares-premium-money-market-etf">
        Money Market Fund
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      Below I try to put some numbers to the different investment avenues that
      you may participate in. Their time horizons, risks and returns.
    </Paragraph>

    <Paragraph>
      If you leave your money in a checking account, your loss equals inflation.
      In Canada, one way to measure it is through the Consumer Price Index,
      which increased from 125.8 to 160.6 in 10 years. That's a 27.6% loss. It
      may be lower or higher in the future, but it's the goal of the current
      monetary policy to keep it between 2% and 3% per year, thus guaranteeing
      you'll lose purchasing power in the same proportion. Ideally, you only
      keep cash in a checking account that you'll spend the following month.
    </Paragraph>
    <Paragraph>
      If you leave your money in a mediocre savings account, namely one that
      pays significantly less than the current return on the lowest possible
      risk. Then you lose Inflation plus the difference between what your
      savings account pays and what an optimal savings account would pay, plus
      costs and taxes, if any. For Canada, the return on the least possible risk
      can be measured through the&nbsp;
      <ExternalLink to="https://www.bankofcanada.ca/rates/interest-rates/corra/">
        Canadian Overnight Repo Rate
      </ExternalLink>
      , which in the last three years alone represents a loss of around 9.5%
      (not including Inflation, costs, or taxes). Ideally, you put in a savings
      account money that you'll need in less than a couple of months. Often, a
      savings account will pay less than the risk-free rate, and here an
      investment vehicle like a&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/products/239414/ishares-premium-money-market-etf">
        Money Market Fund
      </ExternalLink>
      &nbsp;will get you closer to the optimal return, although they have some
      differences compared to a traditional savings account.
    </Paragraph>
    <Paragraph>
      If you are willing to take on more risk, or you are investing your money
      for a longer time horizon, a fund that invests in stocks and bonds, and
      compounds over a couple of years may make a huge difference. A 3%
      annualized return or more after inflation, costs, and taxes is not
      uncommon. You may even start withdrawing the surplus after a while without
      depleting it. This is how many pension funds and university endowments
      work. In Canada, a low cost and simple way to achieve this is through
      an&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/learning-centre/etf-education/asset-allocation-etfs">
        Asset Allocation Fund
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      Hopefully, through this article, I've shown you some of the options
      available. The best advice I can give you is to treat your finances with
      the same importance you treat other aspects of your life. Know your
      objectives and eliminate opportunity costs accordingly. This, of course,
      is only if you want to accumulate wealth rather than lose it.
    </Paragraph>

    <aside className="mt-8">
      <Paragraph>
        <InternalLink to={routes.Disclaimers.path}>Disclaimers</InternalLink>
      </Paragraph>
    </aside>
  </>
);

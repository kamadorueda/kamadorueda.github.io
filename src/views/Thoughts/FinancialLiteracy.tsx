import {
  ExternalLink,
  OrderedList,
  Paragraph,
  UnorderedList,
  ListItem,
} from "./Content";
import { FC } from "react";

export const metadata = {
  id: "financial-literacy",
  minutes: 5,
  summary: "The hidden losses of doing nothing",
  tags: ["finances", "investing"],
  title: "Financial Literacy",
  timestamp: "2024-05-27",
};

export const Content: FC = () => (
  <>
    <Paragraph>
      Many people want to accumulate wealth throughout their life. Some succeed,
      some fail. Luck plays a role in this, but some factors are in our control.
      The financial education that you expose yourself to will help you avoid
      costly mistakes and achieve an adequate return on your investments.
    </Paragraph>

    <Paragraph>
      Everybody starts somewhere. Until you have enough positive cash flow to
      start accumulating assets your priority should be growing your income
      and/or reducing your expenses. Most people increase their income by
      getting a better paying job, starting a side-hustle, and so on. Most
      people reduce their expenses by controlling their discretionary spending
      and being conscious and responsible with debt.
    </Paragraph>

    <Paragraph>
      As your cash flows allow you to set some money aside, it becomes
      increasingly important to engage in Financial Planning as a mean to ensure
      you can accomplish your goals. There is always a point where the money you
      loose due to inflation, plus the money you forego by not investing your
      money in the right place relative to your objectives will exceed any new
      savings you add, thus giving the illusion of saving but not getting you
      richer in reality.
    </Paragraph>

    <Paragraph>
      As you approach this stage, I highly recommend you educate yourself
      financially. Make a plan. Is it retirement? Is it a trip a couple years
      from now? Is it your kids education? Maybe you are saving for a rainy day?
      You can optimize your investments for that and get there faster, with less
      effort, and with more certainty.
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
      Simply make sure there is an alignment of incentives, otherwise they may
      just try to sell you (for a commission) a more expensive and not
      necessarily better version of an&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/learning-centre/etf-education/asset-allocation-etfs">
        Asset Allocation Fund
      </ExternalLink>
      , a&nbsp;
      <ExternalLink to="https://www.ishares.com/us/strategies/what-is-a-target-date-fund">
        Target Date Fund.
      </ExternalLink>
      , or some type of fixed-income security like a&nbsp;
      <ExternalLink to="https://www.blackrock.com/ca/investors/en/products/239414/ishares-premium-money-market-etf">
        Money Market Fund
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      If my words still don't wake you up, maybe numbers will:
    </Paragraph>

    <OrderedList>
      <ListItem>
        For someone who leaves their money in a checking account, your loss is
        equivalent to inflation. In Canada, one way to measure it is through the
        Consumer Price Index, which increased from 125.8 to 160.6 in 10 years.
        That's a 27.6% loss.
      </ListItem>
      <ListItem>
        If you leave your money in a mediocre savings account, namely one that
        pays significantly less than the return on the lowest possible risk.
        Then you loose Inflation plus the difference between what your savings
        account pays and what a decent savings account would pay, minus costs
        and taxes, if any. For Canada, this can be measured through the&nbsp;
        <ExternalLink to="https://www.bankofcanada.ca/rates/interest-rates/corra/">
          Canadian Overnight Repo Rate
        </ExternalLink>
        , which in the last three years alone represents a loss around 9.5% (not
        including Inflation costs or taxes).
      </ListItem>
      <ListItem>
        If you are willing to take on more risk, a fund that invests in stocks
        and bonds and compounds over a couple years may make a huge difference.
        A 3% annualized return or more after inflation, costs and taxes is not
        uncommon. You may even start withdrawing the surplus after a while
        without depleting it, in fact, this is how many pension funds and
        university endowments work.
      </ListItem>
    </OrderedList>

    <Paragraph>
      This is a long way of saying: Treat your finances with the same priorities
      you treat other aspects of your life.
    </Paragraph>
  </>
);

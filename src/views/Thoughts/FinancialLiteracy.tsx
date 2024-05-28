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
  minutes: 4,
  summary: "Discounting luck, what makes an investor successful?",
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
      costly mistakes, protect your principal and achieve an adequate return on
      your investments.
    </Paragraph>

    <Paragraph>
      Until your have enough positive cash flow to start accumulating assets
      your priority should be growing your income and/or reducing your expenses.
      Most people increase their income by getting a better paying job, starting
      a side-hustle, and so on. Most people reduce their expenses by controlling
      their discretionary spending and being conscious and responsible with
      debt.
    </Paragraph>

    <Paragraph>
      As your cash flows allow you to set some money aside, it becomes
      increasingly important to engage in Financial Planning as a mean to ensure
      you can fund your future spending needs. Even though "invisible", the
      compounding effect of Inflation, Opportunity Costs, and Risk are always
      out there to get you.
    </Paragraph>

    <Paragraph>
      As you approach this stage, I highly recommend you consume the following
      resources, for they are rational and grounded, and after studying them
      myself, I can speak of their value:
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
    </UnorderedList>

    <Paragraph>
      If you are still not convinced, let's compare two scenarios from the
      lenses of a Canadian investor:
    </Paragraph>

    <OrderedList>
      <ListItem>
        In Canada, the Consumer Price Index has increased from 125.8 to 160.6 in
        10 years. That's a 27.6% loss on purchasing power.
      </ListItem>
      <ListItem>
        Now assume you invest your money and achieve a 3% yearly return on your
        Investments after inflation (nothing fancy, historically speaking), and
        assume a 50% tax rate (very high, for most people. Includes
        distributions and capital gains). That's a 17.2% gain after inflation.
      </ListItem>
    </OrderedList>

    <Paragraph>There is a performance gap of 44.8% between them.</Paragraph>

    <Paragraph>
      It may be luck if your income today is not 44.8% higher than the average.
      Maybe by chance you ended up in an industry that pays average wages. Most
      people could not have predicted the highest paying industry 10 years in
      advance and get on it ahead of time, but with the power of Financial
      Knowledge, it may not make any difference to your wealth 10 years from now
      when compared to someone that had luck but no Financial Literacy.
    </Paragraph>

    <Paragraph>Focus on what you can control.</Paragraph>
  </>
);

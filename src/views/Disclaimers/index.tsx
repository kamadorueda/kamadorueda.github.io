import { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import { Body } from "~/components/Body";
import { Footer } from "~/components/Footer";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import { Header, Paragraph } from "~/components/Typography";

export const Disclaimers: FunctionComponent = () => (
  <Body>
    <Helmet>
      <title>Kevin Amado's Disclaimers</title>
      <meta content="Kevin Amado's Disclaimers" name="og:title" />
      <meta content="Website disclaimers." name="og:description" />
      <meta content="website" name="og:type" />
    </Helmet>

    <Nav />

    <Main>
      <Header>Disclaimers</Header>

      <Paragraph>
        The information provided on this website is general in nature and is not
        personal financial product advice. It does not take into account your
        objectives, financial or personal situation or needs. It is for
        educational and illustrative purposes only, and does not constitute, and
        should not be relied upon as, financial advice. You should consider
        whether the information is appropriate to your needs and always seek
        independent personal financial advice that is tailored to your specific
        needs from a qualified financial advisor.
      </Paragraph>

      <Paragraph>
        Any hypotheticals, illustrations and examples discussed are provided for
        illustrative purposes only. They should not be relied on by individuals
        when they make investment decisions for themselves or on behalf of a
        business. Past performance information is not a reliable indicator of
        future performance of that company or product. Any reference to past
        performance is intended to be for general illustrative purposes only.
      </Paragraph>

      <Paragraph>
        We are not responsible or liable for the content provided by a third
        party that may be involved or linked to in this website. No judgement or
        warranty is made by us concerning the suitability, accuracy or
        timeliness of the content of any third party involved. By providing
        access to these content, we are not recommending or endorsing any brand,
        products or services offered by a third party.
      </Paragraph>

      <Paragraph>
        Although every effort has been made to verify the accuracy of the
        information contained on our website, we disclaim all liability (except
        for any liability which by law cannot be excluded), for any error,
        inaccuracy in, or omission from the information contained or supplied
        through our website, or any loss or damage suffered by any person or
        business directly or indirectly (including consequential loss) through
        relying on this information.
      </Paragraph>
    </Main>

    <Footer />
  </Body>
);

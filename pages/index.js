/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import styled, { css } from "styled-components"
import IconBrand from "components/icons/Brand"
import IconBrandColor from "components/icons/BrandColor"
import Phone from "components/icons/Phone"
import Email from "components/icons/Email"
import Facebook from "components/icons/Facebook"
import Twitter from "components/icons/Twitter"
import Instagram from "components/icons/Instagram"
import GetStartedIllustration from "components/icons/GetStartedIllustration"
import TestimonailIllustration from "components/icons/TestimonialIllustration"
import MuiButton from "@mui/material/Button"

const Button = styled(MuiButton)`
  text-transform: none;
  background-color: ${props => props.bgColor && props.bgColor};
  color: ${props => props.textColor && props.textColor};
  font-weight: ${props => props.textWeight && props.textWeight} !important;
  border-color: ${props => props.borderColor && props.borderColor} !important;
`
const CTALink = styled.a`
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  width: 150px;
  color: #3ca08e;
  border-bottom: 1px solid #3ca08e;
  text-decoration: none;
`

const Flex = styled.div`
  display: flex;
  ${props => props?.width && `width:${props.width}`};
  flex-direction:${props => (props?.column ? "column" : "row")};
  ${props => props.alignRowCenter && "justify-content: center;"}
  ${props => props.alignRowSpaceBetween && "justify-content: space-between;"}
  ${props => props.alignRowSpaceEvenly && "justify-content: space-evenly;"}
  ${props => props.alignRowSpaceAround && "justify-content: space-around;"}
  ${props => props.alignColumnCenter && "align-items: center;"}
 

  > * {
    ${props =>
      props?.childCssStyles &&
      css`
        ${props?.childCssStyles}
      `}
`
const Header = styled.header`
  margin: 70px 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Navigation = styled.nav`
  display: flex;
  flex-basis: 20vw;
  justify-content: space-around;
  align-items: center;
`
const Main = styled.main``
const Section = styled.section``
const SectionHeader = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2.3rem;
`
const SectionDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
`
const Footer = styled.footer``

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const GetStartedSection = styled(Section)`
  margin: 50px 50px;
  display: flex;
  justify-content: space-between;
`

const TestimonialSection = styled(Section)`
  padding: 50px 50px;
  background-color: hsl(240deg 56% 98%);
  display: flex;
  justify-content: space-between;
`
const GetEarlyAccessSection = styled(Section)`
  padding: 50px 50px;
  background-color: hsl(238, 22%, 44%);
`
const EmailInput = styled.input`
  outline: none;
  padding: 10px;
  width: ${props => (props.width ? props.width : "300px")};
  border: 2px solid #b4b4b4;
  border-radius: 3px;

  ::placeholder {
    color: #ccc;
  }
`

const TestimonialCard = styled.div`
  border-radius: 3px;
  width: 300px;
  box-shadow: 0px 0px 6px 5px #e4e3e3;
  padding: 25px;
  line-height: 1.5;
  font-size: 12px;

  .avatar-info {
    margin-top: 10px;
    display: flex;
    font-size: 10px;
    align-items: center;
    p {
      margin-left: 10px;
    }
    span {
      font-weight: bolder;
    }
  }
`

const Curve = styled.img`
  position: relative;
  top: 4px;
`

const Brand = styled(IconBrand)``
const BrandColor = styled(IconBrandColor)``

const PageLayout = styled.div`
  @media (max-width: 700px) {
    ${Brand},${BrandColor} {
      width: 100px;
      height: 50px;
    }
    ${Header} {
      margin: 25px 25px;
    }
    ${Navigation} {
      flex-basis: 200px;
      font-size: 14px;
      justify-content: end;
      > * {
        margin-left: 20px;
      }
    }

    ${GetStartedSection} {
      margin: 25px 25px;
      align-items: center;
      flex-direction: column;

      > div {
        order: 2;
        width: 100%;
      }
      svg {
        width: 300px;
        height: 300px;
      }
      input {
        width: 100%;
      }
      button {
        margin-top: 10px;
        width: 100%;
      }
    }

    ${TestimonialSection} {
      align-items: center;
      flex-direction: column;

      > div {
        order: 2;
        width: 100%;
        align-items: center;
      }
      svg {
        width: 300px;
        height: 300px;
      }
      input {
        width: 100%;
      }
      button {
        margin-top: 10px;
        width: 100%;
      }
    }

    ${GetEarlyAccessSection} {
      padding: 25px 25px;

      > div {
        flex-direction: column;
      }

      > div > * {
        width: 100% !important;
        margin-right: 0px !important;
      }

      input,
      button {
        margin-top: 15px;
        width: 100%;
      }
    }

    ${SectionHeader} {
      font-size: 1.8rem;
    }
    ${SectionDescription} {
      font-size: 0.8rem;
    }

    ${Footer} {
      flex-direction: column;
      height: auto !important;
      align-items: flex-start !important;
      > * {
        padding-left: 2rem;
        margin-top: 1rem;
      }
      > div:last-child {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PageLayout>
        <Header>
          <Brand />
          <Navigation>
            <div>Features</div>
            <div>Team</div>
            <div>Sign In</div>
          </Navigation>
        </Header>
        <Main>
          <GetStartedSection>
            <Flex
              column
              alignRowCenter
              width="50vw"
              childCssStyles="margin-top:20px;"
            >
              <SectionHeader>
                All your files in one secure location, accessible anywhere
              </SectionHeader>
              <SectionDescription>
                Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with
                friends, family, and co-workers.
              </SectionDescription>
              <div>
                <EmailInput
                  style={{ marginRight: "15px" }}
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                />
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  bgColor="hsl(224, 93%, 58%)"
                >
                  Get Started
                </Button>
              </div>
            </Flex>
            <GetStartedIllustration />
          </GetStartedSection>
          <Curve
            srcSet="/bg-curve-mobile.svg 375w,
          /bg-curve-desktop.svg 800w"
            sizes="(max-width: 700px) 375px,
            800px"
            src="/bg-curve-desktop.svg"
            width="100%"
            height="auto"
          />
          <TestimonialSection>
            <Flex
              column
              alignRowCenter
              width="50vw"
              childCssStyles="margin-top:20px"
            >
              <SectionHeader>Stay productive, wherever you are</SectionHeader>
              <SectionDescription>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </SectionDescription>
              <SectionDescription>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </SectionDescription>
              <CTALink href="#">
                See how Fylo works <img src="/icon-arrow.svg" alt="" />
              </CTALink>
              <TestimonialCard>
                <img src="/icon-quotes.svg" alt="" />
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="avatar-info">
                  <AvatarImage src="/avatar-testimonial.jpg" alt="" />
                  <p>
                    <span>Kyle Burton</span>
                    <br />
                    Founder & CEO, Huddle
                  </p>
                </div>
              </TestimonialCard>
            </Flex>
            <TestimonailIllustration />
          </TestimonialSection>
          <GetEarlyAccessSection>
            <Flex
              alignRowSpaceBetween
              alignColumnCenter
              childCssStyles="line-height:1.5"
            >
              <div
                style={{
                  width: "500px",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontFamily: '"Raleway", sans-serif',
                  }}
                >
                  Get early access today
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                    color: "white",
                    fontSize: "14px",
                    fontFamily: '"Open Sans", sans-serif',
                  }}
                >
                  It only takes a minute to sign up and our free starter tier is
                  extremely generous. If you have any questions, our support
                  team would be happy to help you.
                </p>
              </div>
              <div style={{ marginRight: "200px" }}>
                <EmailInput
                  style={{ marginRight: "15px" }}
                  type="email"
                  name=""
                  id=""
                  width="450px"
                  placeholder="Enter your email"
                />
                <br />
                <Button
                  style={{
                    marginTop: "10px",
                    fontSize: "13px",
                  }}
                  variant="contained"
                  color="secondary"
                  size="large"
                  bgColor="hsl(224, 93%, 58%)"
                >
                  Get Started for Free
                </Button>
              </div>
            </Flex>
          </GetEarlyAccessSection>
        </Main>
        <Footer
          style={{
            display: "flex",
            backgroundColor: "hsl(243, 87%, 12%)",
            color: "white",
            height: "300px",
            justifyContent: "space-around",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <Flex column childCssStyles="margin-top:20px;">
            <BrandColor />
            <div>
              <Phone />
              &nbsp; Phone: +1-543-123-4567
            </div>
            <div>
              <Email />
              &nbsp; example@fylo.com
            </div>
          </Flex>
          <Flex column childCssStyles="margin-top:20px;">
            <div>About Us</div>
            <div>Jobs</div>
            <div>Press</div>
            <div>Blog</div>
          </Flex>
          <Flex column childCssStyles="margin-top:20px;">
            <div>Contact Us</div>
            <div>Terms</div>
            <div>Privacy</div>
          </Flex>
          <Flex>
            <Facebook />
            &nbsp;
            <Twitter />
            &nbsp;
            <Instagram />
          </Flex>
        </Footer>
      </PageLayout>
    </>
  )
}

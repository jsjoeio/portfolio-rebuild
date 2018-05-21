/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Button from '../components/Button';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`;

const PortfolioList = styled.ul`
  list-style: none;
  margin-left: 0;
`;

const PortfolioItem = styled.li``;

const PortfolioItemImg = styled.img`
  height: auto;
`;

const PortfolioItemButtonContainer = styled.div`
  display: flex;

  a {
    margin-right: 15px;
  }

  @media ${media.phone} {
    flex-wrap: wrap;
    justify-content: left;

    a {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

const Portfolio = () => (
  <Wrapper>
    <Helmet title={`Portfolio | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Content>
      <h1>💼 Portfolio</h1>
      <p>Below, you'll find a list of projects I've worked on recently:</p>
      <PortfolioList>
        <PortfolioItem>
          <PortfolioItemImg
            alt="screenshot of text message"
            src="https://camo.githubusercontent.com/7f50ef8e82ba4f7d754e6f765f198c17aa2ded30/68747470733a2f2f692e696d6775722e636f6d2f68436a775031452e706e67"
            style={{ width: '300px' }}
          />
          <h3>Twilio Twitter</h3>
          <p>
            An app to help you keep track of your #100DaysOfCode progress. It keeps track of what day you're on, lets
            you send a text 📱 with what you worked on that day to post to Twitter🐦 and all you have to worry about is
            coding 🕺🏻💃
          </p>
          <PortfolioItemButtonContainer>
            <a href="https://github.com/jjprevite/100-days-twilio-twitter">
              <Button>GitHub Repo</Button>
            </a>
          </PortfolioItemButtonContainer>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioItemImg
            alt="screenshot of PR"
            src="http://res.cloudinary.com/dobfxs62e/image/upload/v1526865158/Habitica_Contribution.png"
          />
          <h3>Habitica Contribution</h3>
          <p>
            I contributed to an open-source project called{' '}
            <a alt="link to Habitica website" href="https://habitica.com/">
              Habitica
            </a>, which is a gamified task manager. I fixed an issue with a friend, submitted a pull request and it was
            merged into the project.
          </p>
          <PortfolioItemButtonContainer>
            <a href="https://medium.freecodecamp.org/i-made-my-first-open-source-contribution-within-200-days-and-how-you-can-too-4d5bdbd63fad">
              <Button>Read on Medium</Button>
            </a>
            <a href="https://github.com/HabitRPG/habitica/pull/8784">
              <Button>View PR on GitHub</Button>
            </a>
          </PortfolioItemButtonContainer>
        </PortfolioItem>
      </PortfolioList>
    </Content>
  </Wrapper>
);

export default Portfolio;

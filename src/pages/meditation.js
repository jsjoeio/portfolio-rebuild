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
    h1 {
      word-wrap: normal;
      font-size: 2.575rem;
    }
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

const Meditation = () => (
  <Wrapper>
    <Helmet title={`Meditation | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Content>
      <h1>Meditation Learning Circle</h1>
      <p>
        I lead a small meditation learning circle, or study group, based on the teachings of the{' '}
        <a href="http://namchak.org/">Namchak lineage</a>. We meet 2x/month over Google Hangout to discuss things
        happening in our lives and how meditation is helping be more mindful of what we do.
      </p>
      <h3>How long have you been meditating for?</h3>
      <p>
        My personal practice began in 2013 while I was studying abroad in Argentina. I picked up a book from the local
        bookstore and began teaching myself. I practiced on and off for a few years before I found the Namchak lineage.
        Since August 2016, meditation has become part of my daily routine. I sit everyday in the morning and,
        occasionally before bed.
      </p>
      <h3>Where can I learn how to meditate?</h3>
      <p>
        I suggest you check out{' '}
        <a href="https://namchak.org/teachings/e-course/">this free course offered by Lama Tsomo</a> and the Namchak
        community. The title of the course is "Always Smiling: An Introduction to Tibetan Buddhist Practice". The course
        lasts eight weeks and has short videos teaching you the basics of the practice. You do not need prior
        experience. Check it out!
      </p>
      <h3>Interested in joining a learning circle?</h3>
      <p>
        ➡️ Reach out to me on <a href="https://twitter.com/jjprevite">Twitter</a> or{' '}
        <Link to="/contact">send me an email</Link>
      </p>
    </Content>
  </Wrapper>
);

export default Meditation;

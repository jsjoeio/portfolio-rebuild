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

const BookList = styled.ul`
  list-style: none;
  margin-left: 0;
`;
const BookTitle = styled.h3`
  margin-bottom: 0.25rem;
`;

const BookAuthor = styled.p`
  margin-top: 0;
  font-style: italic;
`;

const Bookshelf = () => (
  <Wrapper>
    <Helmet title={`Bookshelf | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Content>
      <h1>📚 Bookshelf</h1>
      <p>
        The purpose of this page is to share the books on my 'virtual bookshelf'. Here's a short list of books that have
        changed my life or inspired me in some way:
      </p>
      <BookList>
        <li>
          <a href="https://www.amazon.com/Art-Non-Conformity-Rules-Change-Perigee/dp/0399536108">
            <BookTitle>The Art of Non-Conformity</BookTitle>
            <BookAuthor>By: Chris Guillebeau</BookAuthor>
          </a>
          <p>
            I think I first heard about this book in a blog post by{' '}
            <a href="https://www.fluentin3months.com/">Benny The Irish Polyglot</a>. I read it my freshman year of
            college in 2012 and it influenced me to start writing, read more and learn more about entrepreneurship. It's
            the one book I recommend to anyone who is interested in a "non-traditional" lifestyle.
          </p>
        </li>
        <li>
          <a href="https://www.amazon.com/Awakening-Buddha-Within-Tibetan-Western/dp/0767901576">
            <BookTitle>Awakening the Buddha Within: Tibetan Wisdom for the Western World</BookTitle>
            <BookAuthor>By: Lama Surya Das</BookAuthor>
          </a>
          <p>
            Soon after I first started meditating, I found this book as a top recommendation for meditation beginners.
            This was life-changing. I love the author's explanation of "love-kindness" - a concept I had never learned
            about before reading this. I recommend this if you're interested in meditation.
          </p>
        </li>
        <li>
          <a href="https://www.amazon.com/Art-Learning-Journey-Optimal-Performance/dp/0743277465">
            <BookTitle>The Art of Learning</BookTitle>
            <BookAuthor>By: Josh Waitzkin</BookAuthor>
          </a>
          <p>
            A good friend of mine recommended this book. Whenever I think of this book, I smile. It taught me that all
            skills can be broken down into smaller pieces. If you master the small parts, it will add up exponentially
            and you will be able to master the skill on a whole new level.
          </p>
        </li>
        <li>
          <a href="https://www.amazon.com/Compound-Effect-Darren-Hardy-ebook/dp/B005P1YCNK">
            <BookTitle>The Compound Effect</BookTitle>
            <BookAuthor>By: Darren Hardy</BookAuthor>
          </a>
          <p>
            A man whom I met at a coffee shop one day recommended this book. It talks about how fast time flies each
            day. In order to achieve success, he tells you you should create habits that will "compound" into success.
            Highly reocmmend for those interested in success/self-help.
          </p>
        </li>
        <li>
          <a href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted-ebook/dp/B00X47ZVXM">
            <BookTitle>Deep Work: Rules for Focused Success in a Distracted World</BookTitle>
            <BookAuthor>By: Cal Newport</BookAuthor>
          </a>
          <p>
            Another book in the self-help genre, this book taught me about the importance of "deep work" or undisturbed
            work. In this environment, you can reach the "flow state" where you are the most creative and productive. I
            recommend this to anyone interested in productivity.
          </p>
        </li>
      </BookList>
      <h3>Want to recommend a book?</h3>
      <p>
        <Link to="/contact">Contact me</Link> and let me know what I should read next 😁
      </p>
    </Content>
  </Wrapper>
);

export default Bookshelf;

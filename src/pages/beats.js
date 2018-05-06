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

const Beats = () => (
  <Wrapper>
    <Helmet title={`Tasty Beats | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Content>
      <h1>🎧 Tasty Beats</h1>
      <h3>What exactly are "tasty beats"?</h3>
      <p>
        It's a playlist of my top 10 favorite EDM/House songs to which I'm currently vibing. These are the songs I play
        in the morning to get the day started feeling good.
      </p>
      <iframe
        title="tasty-beats-playlist"
        src="https://open.spotify.com/embed/user/12140522458/playlist/4XMKibrbtfYeG83SdVD3Ez"
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
      <h3>Where does the name come from?</h3>
      <p>
        The name is a spin off the term "tasty treats" from a popular web development podcast called{' '}
        <a href="https://syntax.fm/" rel="noopener noreferrer" target="_blank">
          Syntax
        </a>{' '}
        where they share "treats" related to the web.
      </p>
      <h3>I know a few songs you might like! Can I share them with you?</h3>
      <p>
        I would love that! 😄 Shoot me a{' '}
        <a href="https://twitter.com/jjprevite" rel="noopener noreferrer" target="_blank">
          DM on Twitter
        </a>{' '}
        with a link to the song. 🙏
      </p>
    </Content>
  </Wrapper>
);

export default Beats;

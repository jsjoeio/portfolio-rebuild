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
      <h1>Tasty Beats</h1>
      <p>This will be a page about my Beats.</p>
      <iframe
        title="tasty-beats-playlist"
        src="https://open.spotify.com/embed/user/12140522458/playlist/4XMKibrbtfYeG83SdVD3Ez"
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </Content>
  </Wrapper>
);

export default Beats;

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  color: ${props => props.theme.text};

  @media (prefers-color-scheme: light) {
    color: black;
  }

  p {
    max-width: 60rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    z-index: -1;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>
        &copy; {year}{' '}
        <Link href="/" prefetch>
          <a>Logan McAnsh</a>
        </Link>
      </p>
    </StyledFooter>
  );
};

export default Footer;
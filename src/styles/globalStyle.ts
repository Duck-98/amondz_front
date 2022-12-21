import { css } from '@emotion/react';

export const style = css`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: 'Noto Sans KR', sans-serif !important;
    @media (max-width: 500px) {
      width: 100vw;
      height: 100vh;
      font-size: 1.6vw;
    }
  }

  h1 {
    font-size: 4rem;
  }
  ul,
  li {
    list-style: none;
  }
`;

import { css, Global } from "@emotion/react";

const color = css`
  :root {
    --primary: #5e13d8;
    --primary2: #3c039a;
    --primary3: #8e59e4;
    --primary4: #b49bdd;
    --primary5: #e8e3ef;
    --primary6: #ddccf6;
    --primary7: #f3e6f1;
    --primary8: #a383d7;

    --background: #fcf7ff;

    --backdrop: #14141478;
    --modal-background: #eff4ff;

    --black: #1a1a1a;
    --white: #ffffff;

    --gray2: #495057;
    --gray: #d4d4d4;

    --disabled: #877c9a;
    --font-base-color: #343a40;
  }
`;

const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  * {
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    :disabled {
      cursor: default;
      pointer-events: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    [type="number"] {
      -moz-appearance: textfield;
    }
    :focus {
      outline: none;
    }
  }
`;

const font = css`
  :root,
  * {
    font-family: "Noto Sans KR", sans-serif;
    color: #404040;
  }
`;

const constant = css`
  :root {
    --header-height: 40px;

    --100vh: calc(var(--vh, 1vh) * 100);
    @media screen and (max-width: 768px) {
      --header-height: 52px;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={[color, reset, font, constant]} />;
};

export default GlobalStyle;

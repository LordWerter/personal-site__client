import { css } from '@emotion/react';

const NormalizeStyle = css`
  /**
   * Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
   */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  /**
   * 1. Add border box sizing in all browsers (opinionated).
   * 2. Backgrounds do not repeat by default (opinionated).
   */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  /**
   * Displays for HTML 5
   */
  article,
  aside,
  audio,
  command,
  datagrid,
  details,
  dialog,
  embed,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  video,
  wbr {
    display: block;
    box-sizing: border-box;
  }

  bdi,
  figcaption,
  keygen,
  mark,
  meter,
  progress,
  rp,
  rt,
  ruby,
  time {
    display: inline;
  }

  /*
   * Deprecated tags
   */
  acronym,
  applet,
  big,
  center,
  dir,
  font,
  frame,
  frameset,
  noframes,
  s,
  strike,
  tt,
  u,
  xmp {
    display: none;
  }

  /**
   * Default styles for all structural tags
   */
  a,
  abbr,
  area,
  article,
  aside,
  audio,
  b,
  bdo,
  blockquote,
  body,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  command,
  datalist,
  dd,
  del,
  details,
  dialog,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figure,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  keygen,
  kbd,
  label,
  legend,
  li,
  map,
  mark,
  menu,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  pre,
  progress,
  q,
  rp,
  rt,
  ruby,
  samp,
  section,
  select,
  small,
  span,
  strong,
  sub,
  sup,
  table,
  tbody,
  td,
  textarea,
  tfoot,
  th,
  thead,
  time,
  tr,
  ul,
  var,
  video {
    background: transparent;
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    outline: none;
    padding: 0;
    text-align: left;
    text-decoration: none;
    vertical-align: baseline;
    z-index: auto;
    white-space: pre-line;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
  /* Document
   ========================================================================== */

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
   ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    display: flex;
    margin: 0;
  }

  /**
   * Render the "main" element consistently in IE.
   */

  main {
    display: block;
  }

  /**
   * Correct the font size and margin on "h1" elements within "section" and
   * "article" contexts in Chrome, Firefox, and Safari.
   */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
   ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd "em" font sizing in all browsers.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
   ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd "em" font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent "sub" and "sup" elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.15em;
  }

  /* Embedded content
   ========================================================================== */

  /**
   * 1. Remove the border on images inside links in IE 10.
   * 2. For images to not be able to exceed their container
   */

  img {
    max-width: 100%; /* 1 */
    border-style: none; /* 2 */
  }

  /* Forms
   ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   * 3. Remove the lighting around border of elements
   */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    outline: none; /* 3 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select {
    text-transform: none; /* 1 */
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Align to center captions of buttons
   */
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button; /* 1 */
    text-align: center;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from "fieldset" elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    "fieldset" elements in all browsers.
   */
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  progress {
    vertical-align: baseline;
  }

  /**
   * 1. Remove the default vertical scrollbar in IE 10+.
   * 2. Revert the 'white-space' property on Safari
   */
  textarea {
    overflow: auto; /* 1 */
    white-space: revert; /* 2 */
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to "inherit" in Safari.
   */
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /**
   * Correct the text style of placeholders in Chrome, Edge, and Safari.
   */
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  /* Interactive
   ========================================================================== */

  /**
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  details {
    display: block;
  }

  /**
   * Add the correct display in all browsers.
   */
  summary {
    display: list-item;
  }

  /* Misc
   ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */
  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */
  [hidden] {
    display: none;
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
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a,
  button,
  select,
  [type='button'],
  [type='reset'],
  [type='submit'],
  [type='checkbox'],
  [type='radio'],
  [type='search'] {
    cursor: pointer;
  }
`;

export default NormalizeStyle;

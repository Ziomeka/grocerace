export const preflights = [
  {
    getCSS: () => `
      *, *::before, *::after {
        box-sizing: border-box;
      }
      body, h1, h2, h3, h4, h5, h6, p, ol, ul, button {
        margin: 0;
        padding: 0;
        font-weight: normal;
        font-size: inherit;
        color: inherit;
      }
      ol, ul {
        padding: 0;
        list-style: none;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      button {
        border: none;
        background: transparent;
        line-height: normal;
      }
    `,
  },
]

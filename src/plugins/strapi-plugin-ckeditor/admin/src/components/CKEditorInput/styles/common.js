import { css } from "styled-components";

export const style = css`
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"),
      url(https://fonts.gstatic.com/s/montserrat/v10/SKK6Nusyv8QPNMtI4j9J2yEAvth_LlrfE80CYdSH47w.woff2)
        format("woff2");
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"),
      url(https://fonts.gstatic.com/s/montserrat/v10/gFXtEMCp1m_YzxsBpKl68iEAvth_LlrfE80CYdSH47w.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF;
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    src: local("Montserrat Regular"), local("Montserrat-Regular"),
      url(https://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYPk_vArhqVIZ0nv9q090hN8.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"),
      url(https://fonts.gstatic.com/s/montserrat/v10/IQHow_FEYlDC4Gzy_m8fcjh33M2A-6X0bdu871ruAGs.woff2)
        format("woff2");
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"),
      url(https://fonts.gstatic.com/s/montserrat/v10/IQHow_FEYlDC4Gzy_m8fchHJTnCUrjaAm2S9z52xC3Y.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF;
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    src: local("Montserrat Bold"), local("Montserrat-Bold"),
      url(https://fonts.gstatic.com/s/montserrat/v10/IQHow_FEYlDC4Gzy_m8fcoWiMMZ7xLd792ULpGE4W_Y.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  @font-face {
    font-family: Asap;
    font-style: normal;
    font-weight: 400;
    src: local("Asap Regular"), local("Asap-Regular"),
      url(https://fonts.gstatic.com/s/asap/v5/d_2oOOkhE5_uQ6s6D0T62A.woff2)
        format("woff2");
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: Asap;
    font-style: normal;
    font-weight: 400;
    src: local("Asap Regular"), local("Asap-Regular"),
      url(https://fonts.gstatic.com/s/asap/v5/iadKCBVahjA5ul3LDhwH7A.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF;
  }

  @font-face {
    font-family: Asap;
    font-style: normal;
    font-weight: 400;
    src: local("Asap Regular"), local("Asap-Regular"),
      url(https://fonts.gstatic.com/s/asap/v5/oiVlPAjaPL0EznW3E5Z2DQ.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  @font-face {
    font-family: Nexa-Bold;
    src: url(/fonts/Nexa-Bold.eot);
    src: url(/fonts/Nexa-Bold.woff2) format("woff2"),
      url(/fonts/Nexa-Bold.woff) format("woff"),
      url(/fonts/Nexa-Bold.ttf) format("truetype"),
      url(/fonts/Nexa-Bold.svg#Nexa-Bold) format("svg"),
      url(/fonts/Nexa-Bold.eot?#iefix) format("embedded-opentype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Nexa-Light;
    src: url(/fonts/Nexa-Light.eot);
    src: url(/fonts/Nexa-Light.woff2) format("woff2"),
      url(/fonts/Nexa-Light.woff) format("woff"),
      url(/fonts/Nexa-Light.ttf) format("truetype"),
      url(/fonts/Nexa-Light.svg#Nexa-Bold) format("svg"),
      url(/fonts/Nexa-Light.eot?#iefix) format("embedded-opentype");
    font-weight: 400;
    font-style: normal;
  }

  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 0.875rem;
  }

  .simple-box {
    padding: 10px;
    margin: 1em 0;

    background: rgba(0, 0, 0, 0.1);
    border: solid 1px hsl(0, 0%, 77%);
    border-radius: 2px;

    display: flex;
  }

  .simple-box > .ck-editor__nested-editable.simple-box-description {
    padding: 10px;
    margin: 0;

    background: #fff;
    border: solid 1px hsl(0, 0%, 77%);

    width: 100%;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue",
      "Helvetica", Arial, sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 0.6em;
      font-weight: 400;
    }

    h2 {
      font-size: 1.68em;
      margin-bottom: 0.4em;
      font-weight: 400;
    }

    h3 {
      font-size: 1.36em;
      margin-bottom: 0.2em;
      font-weight: 400;
    }

    h4 {
      font-size: 1.15em;
      margin-bottom: 0.1em;
      font-weight: 400;
    }

    p {
      font-size: 1em;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    blockquote {
      border-bottom: 1px solid #4a4a4a;
      border-top: 1px solid #4a4a4a;
      display: flex;
      margin: 0.625rem 0;
      padding: 1.25rem 0;
      color: #9b9b9b;
      font-weight: 200;
      font-size: 1.25rem;
      font-family: Asap;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }

  .ck.ck-editor h3.title-3 {
    font-size: 1.875rem;
    margin-top: 5rem;
  }

  .ck.ck-editor h4.title-4 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: Asap;
    color: #4a4a4a;
    margin: 1.5625rem 0;
  }

  .ck.ck-editor p.paragraph {
    color: #4a4a4a;
    font-family: Asap;
    font-size: 20px;
    margin: 25px 0;
  }

  .ck.ck-editor a.link {
    color: #ff0606;
    text-decoration: none;
  }

  .ck.ck-editor li.list {
    list-style: none;
    display: flex;
    align-items: center;
    color: #4a4a4a;
    font-family: Asap;
  }

  .ck.ck-editor li.list::before {
    display: block;
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    background: url("https://www.sostenibilidad.com/assets/icons/icon-leaf.png")
      no-repeat left center;
    background-size: cover;
    content: "";
  }

  .ck.ck-editor div.col-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    place-items: center;
  }

  .ck.ck-editor div.full-width-extra-content {
    display: inline-block;
    padding: 1.5625rem;
    background: #f0f0f0;
    text-align: justify;
    margin-right: 15px;
    font-size: 16px;
    color: #4a4a4a;

    .title-extra {
      font-family: Montserrat, sans-serif;
      font-size: 22px;
      color: #333;
      margin: 20px 0 10px;
      display: block;
    }

    p {
      font-family: Asap, sans-serif;
      font-size: 14px;
      margin: 25px 0;
    }
  }
`;

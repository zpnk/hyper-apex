const black     = '#000000'
const white     = '#FFFFFF'
const ocGray1   = '#f1f3f5'
const ocGray5   = '#adb5bd'
const ocGray6   = '#868e96'
const ocGray7   = '#495057'
const ocGray9   = '#212529'

const lightGray = ocGray6
const darkGray  = ocGray7

const foregroundColor = darkGray
const backgroundColor = white
const borderColor     = white
const cursorColor     = '#00BAFF'

const colors = {
  black,
  white,
  red          : lightGray,
  green        : lightGray,
  yellow       : lightGray,
  blue         : lightGray,
  magenta      : lightGray,
  cyan         : lightGray,
  lightBlack   : lightGray,
  lightRed     : lightGray,
  lightGreen   : lightGray,
  lightYellow  : lightGray,
  lightBlue    : lightGray,
  lightMagenta : lightGray,
  lightCyan    : lightGray,
  colorCubes   : white,
  grayscale    : darkGray
}

exports.decorateConfig = config => Object.assign({}, config, {
  foregroundColor,
  backgroundColor,
  borderColor,
  cursorColor,
  colors,
  termCSS: `
    ${config.termCSS || ''}
    .cursor-node {
      border-left: 2px solid;
    }
    ::selection {
      background: ${ocGray1};
    }
  `,
  css: `
    ${config.css || ''}
    .tab_tab {
      color: ${ocGray5};
      font-size: 11px;
      text-transform: uppercase;
      margin-top: -1px;
      border-top: 1px solid transparent !important;
    }
    .tab_tab.tab_active {
      color: ${ocGray9};
      font-weight: bold;
      border-top: 1px solid ${ocGray9} !important;
    }
  `
})

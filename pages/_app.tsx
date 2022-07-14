import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { ShellProvider } from '../components/ui/context'
import Layout from '../components/common/Layout'

const GlobalStyles = createGlobalStyle`
${normalize}

:root {
  font-size: 62.5%;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'CascadiaMono-Regular';
  src: url('/fonts/CascadiaMono.woff2') format('woff2');
  font-style: normal;
  font-weight: 400;
}

body {
  font-family: 'CascadiaMono-Regular', Courier, monospace;
  font-size: 1.6rem;
  line-height: 1.4;
  background-color: #1a1a1a;
  color: #ea549f;
  text-shadow: 0 0 .5rem;
}

body::after {
  content: '';
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ShellProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShellProvider>
    </>
  )
}

export default MyApp

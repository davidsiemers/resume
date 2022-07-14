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

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Terminal from '../components/common/Terminal'

const Home: NextPage = () => {
  const metaDescription = `David Siemers is a full-stack software engineer with a
      passion for creating awesome user-experiences`
  const metaTitle = 'David Siemers | Home'

  return (
    <>
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        openGraph={{
          url: 'https://davidsiemers.com',
          title: metaTitle,
          description: metaDescription,
          images: [
            {
              url: '/images/profile.jpg',
              width: 512,
              height: 512,
              alt: 'David Siemers',
            },
          ],
        }}
      />
      <Terminal />
    </>
  )
}

export default Home

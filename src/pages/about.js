import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const AboutPage = () => {
    return (
        <Layout>
              <main>
            <h1>About me</h1>
            <p>Would love to visit a mountain one day</p>
        </main>
        </Layout>
      
    )
}

export const Head = () => <Seo title="About"/>

export default AboutPage
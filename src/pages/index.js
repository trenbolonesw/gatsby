import * as React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
const IndexPage = () => {
  return (
    <>
    <Layout pageTitle={"welcome"}>
       
    <p>im making this with a tutorial...</p>
    <StaticImage
    src='../images/Alaska.webp'
    alt='large mountain'/>
    </Layout>
 
    </>
  )
}
export const Head = () => <Seo title="Home Page"/>



export default IndexPage
import * as React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
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
export const Head = () => <title>Home Page</title>



export default IndexPage
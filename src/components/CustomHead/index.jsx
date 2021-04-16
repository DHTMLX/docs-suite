import React from 'react';
import { arrayOf, string, shape } from 'prop-types';
import Head from '@docusaurus/Head';

const CustomHeader = ({
  meta = [],
  script = [],
  link = [],
  title
}) => {
  return (
    <Head>
      {
        title && (
          <title>{title}</title>
        )
      }
      {
        meta.length > 0 && meta.map(item => <meta {...item}/>)
      }
      {
        script.length > 0 && script.map(item => <script {...item}/>)
      }
      {
        link.length > 0 && link.map(item => <link  {...item}/>)
      }
    </Head>
  )
}

CustomHeader.propTypes = {
  meta: arrayOf(shape({
    name: string,
    property: string,
    content: string,
    charSet: string,
  })),
  script: arrayOf(shape({
    charSet: string,
    src: string,
    type: string
  })),
  link: arrayOf(shape({
    href: string,
    rel: string,
  })),
  title: string
} 

export default CustomHeader
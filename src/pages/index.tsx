import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import './index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <img style={{ width: 160, borderRadius: 120 }} src={require('../images/icon.png').default} />
      <a href="//github.com/lencx">GitHub</a>
      <a href="//www.producthunt.com/@lencx">Product Hunt</a>
      <span>公众号：浮之静</span>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>NoFWL</title>

import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import './index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h2>NoFWL</h2>
      <div className="links">
        <a href="//app.nofwl.com">NoFWL Applications</a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>nofwl</title>

import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import './index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <img className="logo" style={{ width: 160, borderRadius: 120 }} src={require('../images/icon.png').default} />
      <div className="info">
        <a href="//github.com/lencx">GitHub</a>
        <a href="//www.producthunt.com/@lencx">Product Hunt</a>
        <span>公众号：浮之静</span>
      </div>
      <div className="open-source">
        <h3>Project:</h3>
        <ul>
          <li>
            <a href="//github.com/lencx/ChatGPT" target="_blank">ChatGPT:</a>
            ChatGPT Desktop Application (Mac, Windows and Linux)
          </li>
          <li>
            <a href="//github.com/lencx/GPTHub" target="_blank">GPTHub:</a>
            Discover the Best in Custom GPT at OpenAI's GPT Store – Your Adventure Begins Here!
          </li>
        </ul>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>NoFWL</title>

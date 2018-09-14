import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Myself Vishang Soni. <br/>
      A front end devloper living in Toronto Canada.
      <br/>Currently, I am experimenting with React Native and looking for new opportunity in this area.</p>
    <p>You can reach me out at vishangsoni@gmail.com</p>
    <p>Link to my <a href="www.github.com/vish448">Github Repo</a></p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

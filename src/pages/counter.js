import React from 'react';
import Link from 'gatsby-link'


class counter extends React.Component{
  constructor(){
    super()
    this.state = {count:1}
  }
  render(){
    return(
        <div>
          <h1>Counter</h1>
          <p>Current Count: {this.state.count}</p>
          <button
            onClick={()=>
              this.setState(prevState => ({
                count:prevState.count + 1,
              }))
            }>Plus</button>
          <button
            onClick={()=>
              this.setState(prevState=>({
                count:prevState.count - 1,
              }))
            }>Minus</button><br/>
          <Link to="/">Go back to the homepage</Link>
        </div>

    )
  }
}

export default counter;

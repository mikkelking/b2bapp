// modules/Repo.js
import React from 'react'

export default React.createClass({
  render() {
  console.log(this.props);
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        user = {this.props.params.userName}
      </div>
    )
  }
})

import React from 'react';
import PropTypes from 'prop-types';

export default class PlayerInfo extends React.Component{

  render() {
    const info = this.props.info;

    return(
      <div>
        <ul>
          <li>Public repos: {info.public_repos}</li>
          <li>Public gists: {info.public_gists}</li>
          <li>Followers: {info.followers}</li>
          <li>Following: {info.following}</li>
          <li><a href={info.html_url} target='_blank'>User github page</a></li>
        </ul>
      </div>
    )
  }
}

PlayerInfo.propTypes = {
  info: PropTypes.object.isRequired
}

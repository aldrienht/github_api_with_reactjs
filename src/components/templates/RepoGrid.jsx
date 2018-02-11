// Stateless Component to be learn soon....

// Page code
// {!this.state.repos
//   ?
//   <div className="spinner-holder">
//     <MDSpinner className="spinner" size="150" />
//   </div>
//   :
//   <RepoGrid repos={this.state.repos} />
// }

import React from 'react';
import PropTypes from 'prop-types';

const RepoGrid = (props) => (
  <ul className="popular-list">
    {props.repos.map((data, index) => {
      <li key={index} className="popular-item">
        <div className="popular-rank">#{index + 1}</div>
        <ul className="space-list-items">
          <li>
            <img className="avatar" src={data.owner.avatar_url} alt={'Avatar for '+data.owner.login} />
          </li>
          <li><a href={data.html_url}>{data.name}</a></li>
          <li>@{data.owner.login}</li>
          <li>{data.stargazers_count} stars</li>
        </ul>
      </li>
    })
  }
  </ul>
);

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired, //PropTypes.object.isRequired
};

export default RepoGrid;

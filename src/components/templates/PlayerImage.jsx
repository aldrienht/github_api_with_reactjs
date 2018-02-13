import React from 'react';
import PropTypes from 'prop-types'
import ProgressiveImage from "react-progressive-image-loading";

export default class PlayerImage extends React.Component{
  constructor(props) {
      super(props);
      this.handleReset = this.handleReset.bind(this);
  }

  handleReset(){
    this.props.onReset(this.props.id)
  }

  render(){
    const playerImage = this.props.url;
    const playerUsername = this.props.username;
    return(
      <div className='col-md-4'>
        <ProgressiveImage
            preview="/images/loading.gif"
            src={playerImage}
            transitionTime={500}
            transitionFunction="ease"
            render={(src, style) =>
              <img
              className="avatar"
              src={playerImage}
              style={style}
              alt={'Avatar for '+ playerUsername}
              />
            }
        />
        <h1>@{playerUsername}</h1>
        <br/>
        <button className='btn btn-sm btn-danger' onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

PlayerImage.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

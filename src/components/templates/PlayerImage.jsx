import React from 'react';
import PropTypes from 'prop-types'

export default class PlayerImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: '',
      playerTwoImage: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    // id is equal to playerOne or playerTwo
    const id = this.props.id;
    const newState = {};
    this.setState(function(){
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = '';
      return newState
    });
  }

  render(){
    const playerImage = this.props.url;
    const playerUsername = this.props.username;
    return(
      <div className='col-md-4'>
        <img className="avatar" src={playerImage} alt={'Avatar for '+ playerUsername} />
        <h1>@{playerUsername}</h1>
        <br/>
        <button className='btn btn-sm btn-danger' onClick={(e) => {this.handleClick(e)}}>reset</button>
      </div>
    )
  }
}

PlayerImage.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

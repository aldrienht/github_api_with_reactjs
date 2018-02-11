import React from 'react';
import NavigationLinks from "../navigation_links";
import { withRouter } from 'react-router-dom';
import PlayerInput from '../templates/PlayerInput';
import PlayerImage from '../templates/PlayerImage';

class Battle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: '',
      playerTwoImage: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username){
    // id is equal to playerOne or playerTwo
    const newState = {};
    this.setState(function(){
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState
    });
  }

  render(){
    const playerOneName = this.state.playerOneName;
    const playerTwoName = this.state.playerTwoName;
    const playerOneImage = this.state.playerOneImage;
    const playerTwoImage = this.state.playerTwoImage;

    return(
      <React.Fragment>
        <NavigationLinks />
        <br/>
        <h1 className='text-center'>Battle Page</h1>
        <hr />
        <div className="battle-holder">
          <div className='row text-center'>
            <div className='col-md-6'>
              {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />}
            </div>
            <div className='col-md-6'>
              {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />}
            </div>
          </div>
        </div>

        <div className='row text-center'>
          {playerOneName && <PlayerImage id='playerOne' username={playerOneName} url={playerOneImage} />}
          {(playerOneName && playerTwoName) &&
            <div className='col-md-4'>
              <h1 className='vs'>VS</h1>
              <br/>
              <button className='btn btn-lg btn-primary'>Fight Now</button>
            </div>
          }
          {playerTwoName && <PlayerImage id='playerTwo' username={playerTwoName} url={playerTwoImage} />}
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Battle);

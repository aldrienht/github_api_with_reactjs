import React from 'react';
import NavigationLinks from "../navigation_links";
import { withRouter } from 'react-router-dom';
import PlayerInput from '../templates/PlayerInput';
import PlayerImage from '../templates/PlayerImage';
import PlayerInfo from '../templates/PlayerInfo';
import * as services from '../../services/Api';

class Battle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: '',
      playerTwoImage: '',
      playerOneInfo : null,
      playerTwoInfo: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleBattleNow = this.handleBattleNow.bind(this);
  }

  handleSubmit(id, username){
    // id is equal to playerOne or playerTwo
    const newState = {};
    this.setState(function(){
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState
    });

    // Just to focus on textbox
    if(id === 'playerOne'){
      var two = document.getElementById('playerTwo');
      two && two.focus();
    }else{
      var one = document.getElementById('playerOne');
      one && one.focus()
    }
  }

  handleReset(id) {
    // id is equal to playerOne or playerTwo
    const newState = {};
    this.setState(function(){
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = '';
      newState[id + 'Info'] = '';
      return newState
    });
  }

  handleBattleNow() {
    // Get playerOneInfo
    services.getUserInfo({username: this.state.playerOneName}, (response) => {
      this.setState({
        playerOneInfo: response,
        playerOneScore: response.public_repos + response.public_gists
      });
    });

    // Get playerTwoInfo
    services.getUserInfo({username: this.state.playerTwoName}, (response) => {
      this.setState({
        playerTwoInfo: response,
        playerTwoScore: response.public_repos + response.public_gists
      });
    });
  }

  render(){
    const {
      playerOneName,
      playerTwoName,
      playerOneImage,
      playerTwoImage,
      playerOneInfo,
      playerTwoInfo } = this.state;

    return(
      <React.Fragment>
        <NavigationLinks />
        <br/>
        <h1 className='text-center'>GitHub User Battle Page</h1>
        <hr />
        <div className="battle-holder">
          <div className='row text-center PlayerInputHolder'>
            <div className='col-md-6'>
              {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />}
            </div>
            <div className='col-md-6'>
              {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />}
            </div>
          </div>
        </div>

        <div className='row text-center PlayerImageHolder'>
          <div className='col-md-4 text-right'>
            {playerOneName && <PlayerImage id='playerOne' username={playerOneName} url={playerOneImage} onReset={this.handleReset} />}
          </div>
          <div className='col-md-4'>
            {(playerOneName && playerTwoName) &&
              <div>
                <h1 className='vs'>VS</h1>
                <br/>
                <button className='btn btn-lg btn-primary' onClick={this.handleBattleNow}>Fight Now</button>
              </div>
            }
          </div>
          <div className='col-md-4 text-left'>
            {playerTwoName && <PlayerImage id='playerTwo' username={playerTwoName} url={playerTwoImage} onReset={this.handleReset} />}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-right'>{playerOneInfo && <PlayerInfo info={playerOneInfo} />}</div>
          <div className='col-md-4'></div>
          <div className='col-md-4 text-left'>{playerTwoInfo && <PlayerInfo info={playerTwoInfo} />}</div>
        </div>

      </React.Fragment>
    )
  }
}

export default withRouter(Battle);

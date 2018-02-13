import React from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        username: ''
      }

      // This binding is necessary to make `this` work in the callback
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const value = event.target.value;
    this.setState(function(){
      return{
        username: value
      }
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render(){
    return(
      <form onSubmit={(e) => {this.handleSubmit(e)}}>
        <div className='form-group'>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">{this.props.label}</span>
            </div>
            <input
              id={this.props.id}
              className='form-control'
              placeholder='github username'
              type='text'
              autoComplete='off'
               aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              value={this.state.username}
              onChange={(e) => { this.handleChange(e) }}
            />
            <button
              className='btn btn-primary'
              type='submit'
              disabled={!this.state.username}>Submit</button>
          </div>
        </div>
      </form>
    )
  }
}
PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}


export default PlayerInput;

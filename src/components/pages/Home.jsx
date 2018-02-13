import React from "react";
import MDSpinner from "react-md-spinner";
import NavigationLinks from "../navigation_links";
import * as services from '../../services/Api';

/* ErrorBoundary return null (or can be element<h1>...) if something error happens with the record */
class ErrorBoundary extends React.Component{
  state = {
    hasError: false
  }
  componentDidCatch(error, info){
    console.log('Error happens...');
    this.setState({ hasError: true });
  }
  render(){
    return this.state.hasError ? null : this.props.children;
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentWillMount() {
    console.log('Component Will Mount ...');
  }

  componentDidMount() {
    this.getPopularRepos(this.state.selectedLanguage);
  }

  getPopularRepos(language) {
    services.getPopularRepos({language}, (response) => {
      this.setState({
        repos: response
      });
    });
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language,
      repos: null
    });
    this.getPopularRepos(language);
  }

  // setActiveSelectedLanguage(language){
  //   var ul = document.getElementById('language_selection');
  //   var lis = ul.getElementsByTagName("li");
  //   for (var i = 0; i < lis.length; i++) {
  //     if(lis[i].classList.contains('active_lang')){
  //       lis[i].classList.remove('active_lang');
  //     }
  //   }
  //   // set new active
  //   document.getElementById(language).classList.add('active_lang');
  // }

  renderLanguageSelection() {
    var all_languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    const language_list = all_languages.map((item, id) => {
      return <li
        key={id}
        onClick={() => {this.updateLanguage(item)}}
        className={this.state.selectedLanguage === item ? 'active_lang' : ''}
        id={item}>{item}</li>
    });

    return(
      <ul className="languages" id="language_selection">
        {language_list}
      </ul>
    )
  }

  renderRecords(){
    if(!this.state.repos){
      return (
        <div className="spinner-holder">
          <MDSpinner className="spinner" size="150" />
        </div>
      )
    }

    const list = this.state.repos.map((data, index) => {
      return(
        <ErrorBoundary key={index}>
          <li key={index} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img className="avatar" src={data.owner.avatar_url} alt={'Avatar for '+data.owner.login} />
              </li>
              <li><a target="_blank" href={data.html_url}>{data.name}</a></li>
              <li>@{data.owner.login}</li>
              <li>{data.stargazers_count} stars</li>
            </ul>
          </li>
        </ErrorBoundary>
      )
    })

    return <ul className="popular-list">{list}</ul>
  }

  render() {
    const self = this;
    return (
      <React.Fragment>
        <NavigationLinks />
        { self.renderLanguageSelection() }
        { self.renderRecords() }
      </React.Fragment>
    );
  }
}

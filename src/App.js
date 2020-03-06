import React, { Component } from 'react';
import {Title} from './components/Title'
import {SearchForm} from './components/SearchForm'
import { MoviesList } from "./components/MoviesList";
import { Detail } from "./pages/Detail";

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { useSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({results, useSearch: true})
  }

  _renderResults (){
    return this.state.results.length === 0
        ? <p>Dont Have Results</p>
        : <MoviesList movies={this.state.results}/>
  }

  render (){
    let url = new URL(document.location)
    let hasId = url.searchParams.has('id')

    if (hasId) {
      return <Detail id={url.searchParams.get('id')}></Detail>
    }
    return (
      <div className = "App">
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.useSearch 
          ? this._renderResults()
          : <small>Use the form to seach</small>
        }
      </div>
    );
  }
}

export default App;

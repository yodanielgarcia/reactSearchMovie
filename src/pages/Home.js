import React, {Component} from 'react'
import {Title} from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {
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
        return (
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.useSearch 
                ? this._renderResults()
                : <small>Use the form to seach</small>
                }
            </div>
        )
    }
}
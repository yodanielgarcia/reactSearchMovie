import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Movie} from './movie'

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render (){
        let {movies} = this.props
        return (
            <div className='MovieList'>
            {
                movies.map(movie =>{
                    return (
                        <div className='MovieList-item'
                        key={movie.imdbID}>
                        <Movie
                            id={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                        />
                        </div>
                    )
                })
            }
            </div>
        )
    }
}
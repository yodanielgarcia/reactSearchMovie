import React, {Component} from 'react'
import PropTypes from 'prop-types'
import service from '../service/Services'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie ({ id }){
        service.getRequest('i='+ id).then(movie => {
            console.log(movie);
            
            this.setState({movie})           
        })  
    }

    _goBack (){
        window.history.back()
    }
    
    componentDidMount () {
        let {id} = this.props.match.params
        this._fetchMovie({id})
    }

    render (){
        let {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return (
            <div>
                <button onClick={this._goBack}>back</button>
                <h1>{Title}</h1>
                <img src={Poster} alt='tal'></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}
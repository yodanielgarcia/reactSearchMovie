import React, {Component} from 'react'
import PropTypes from 'prop-types'
import service from '../service/Services'
export class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    state = { movie: {} }

    _fetchMovie ({ id }){
        service.getRequest('i='+ this.props.id).then(movie => {
            this.setState({movie})           
        })  
    }

    _goBack (){
        window.history.back()
    }
    
    componentDidMount () {
        let {id} = this.props
        this._fetchMovie({id})
    }

    render (){
        let {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return (
            <div>
                <button onClick={this._goBack}></button>
                <h1>{Title}</h1>
                <img src={Poster} alt='tal'></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}
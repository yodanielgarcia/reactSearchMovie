import React, {Component} from 'react'
import service from '../service/Services'
export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        service.getRequest('s='+ this.state.inputMovie).then(value => {
            let {Search = [], totalResults = "0"} = value
            this.props.onResults(Search)
        })        
    }
    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" onChange={this._handleChange} type="text" placeholder="Movie to search"></input>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
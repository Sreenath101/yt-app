import React from 'react'

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            term: 'Buildings'
        }
    }
    handleChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        this.props.onFormSubmit(this.state.term)
        event.preventDefault()
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' >
                    <div className='field' >
                        <label>Video Search</label>
                        <input type='text' value={this.state.term} onChange={this.handleChange} />
                    </div>
                </form>
                <p>{this.state.term}</p>
            </div>
        )
    }
}

export default SearchBar
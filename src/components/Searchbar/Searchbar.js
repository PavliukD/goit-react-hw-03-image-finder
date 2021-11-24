import { Component } from "react";


export default class Searchbar extends Component{
state = {
    inputValue: '',
}

onInput = (event) => {
    this.setState({inputValue: event.target.value})
}

onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.inputValue)
    this.setState({inputValue: ''})
}


    render(){
        return(
            <header className="searchbar">
                <form className="form" onSubmit = {this.onSubmit}>
                    <button type="submit" className="button" >
                    <span className="button-label">Search</span>
                    </button>
    
                    <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onInput = {this.onInput}
                    value = {this.state.inputValue}
                    />
                </form>
            </header>
        )
    }
}
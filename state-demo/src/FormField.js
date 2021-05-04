import React, { Component } from 'react';
import ClearButton from './ClearButton';
import Validation from './Validation';

class FormField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onInputChange = (event) => {
        const {value} = event.target;
        this.setState({ value });
    }

    clearField = (metaData) => {
        console.log('called with', metaData);
        return () => {
            this.setState({ value: '' });
        }
    }

    sideEffect = () => {
        console.log('side effect for ', this.props.name);
    }

    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onInputChange}
                />
                <Validation 
                    value={this.state.value} 
                    validationLength={this.props.validationLength} 
                />
                <ClearButton
                    onClickHandler={this.clearField}
                    sideEffect={this.sideEffect}
                />
            </div>
        )
    }
}

export default FormField;
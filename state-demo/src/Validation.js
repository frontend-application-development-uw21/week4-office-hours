import React, { Component } from 'react';

class Validation extends Component {
    render() {
        const {value, validationLength} = this.props;
        if (value && value.length >= validationLength) {
            return '✅';
        }

        return '❌';
    }
}

export default Validation;
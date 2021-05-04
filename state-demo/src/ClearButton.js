import React, { Component } from 'react';

class ClearButton extends Component {
    clickHandler = () => {
        const clearFieldHandler = this.props.onClickHandler('metadata');
        console.log(clearFieldHandler);
        clearFieldHandler();
        this.props.sideEffect();
    }

    render() {
        return (
            <button
                type="button"
                onClick={this.clickHandler}
            >
                Clear
            </button>
        )
    }
}

export default ClearButton;
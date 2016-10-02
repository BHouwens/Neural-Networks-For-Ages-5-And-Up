import React from 'react';
import { overrideCSS } from '../../utils';
import { connect } from 'react-redux';
import internalStyles from './Rhino.pcss';

class RhinoComponent extends React.Component {

    constructor(props) {
        super(props);

        let renderNumber = props.firstMulti ? props.firstMultiNumber : 
                           props.secondMulti ? props.secondMultiNumber :
                           props.number;

        this.state = { number: renderNumber };
        this.changeNumber = this.changeNumber.bind(this);
    }

    changeNumber(value) {
        this.setState({ number: value });
        if (this.props.changeNumber) this.props.changeNumber(value);
    }

    render() {
        let { disabled } = this.props,
            { number } = this.state,
            styles = this.props.styles ? overrideCSS(internalStyles, this.props.styles) : internalStyles;

        return (
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <input 
                        type="number" 
                        className={styles.number} 
                        value={number} 
                        max="99"
                        min="0"
                        disabled={disabled}
                        onChange={e => this.changeNumber(e.target.value) }/>
                </div>

                <img className={styles.rhino} src="src/images/rhino.svg" alt="This is a picture of the rhino" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        number: state.rhinoNumber,
        firstMultiNumber: state.firstMultiPathRhino,
        secondMultiNumber: state.secondMultiPathRhino
    };
}

export const Rhino = connect(
    mapStateToProps
)(RhinoComponent);
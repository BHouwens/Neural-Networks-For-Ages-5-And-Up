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

        this.state = { 
            number: renderNumber,
            shouldPulse: false
        };
        
        this.changeNumber = this.changeNumber.bind(this);
        this.focus = this.focus.bind(this);
    }

    componentWillMount() {
        let { disabled } = this.props;
        this.setState({ shouldPulse: !disabled });
    }

    changeNumber(value) {
        this.setState({ number: value });
        if (this.props.changeNumber) this.props.changeNumber(value);
    }

    focus() {
        this.setState({ shouldPulse: false });
    }

    render() {
        let { disabled } = this.props,
            { number, shouldPulse } = this.state,
            styles = this.props.styles ? overrideCSS(internalStyles, this.props.styles) : internalStyles;

        let pulseClass = shouldPulse ? styles.active : '';

        return (
            <div className={`${styles.container} ${pulseClass}`} onClick={() => this.focus()}>
                <div className={styles.inputContainer}>
                    <input 
                        type="number" 
                        className={styles.number} 
                        value={number} 
                        max="99"
                        min="0"
                        disabled={disabled}
                        onClick={() => this.focus()}
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
import React from 'react';
import { overrideCSS } from '../../utils';
import { connect } from 'react-redux';
import internalStyles from './Frog.pcss';

class FrogComponent extends React.Component {
    render() {
        let { number, multiNumber } = this.props,
            usedNumber = this.props.isMulti ? multiNumber : number;
        
        let styles = this.props.styles ? overrideCSS(internalStyles, this.props.styles) : internalStyles;

        return (
            <div className={styles.container}>
                <div className={styles.number}>{usedNumber}</div>
                <img className={styles.frog} src="src/images/frog.svg" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        number: state.frogNumber,
        multiNumber: state.multiPathFrog
    };
}

export const Frog = connect(
    mapStateToProps
)(FrogComponent);
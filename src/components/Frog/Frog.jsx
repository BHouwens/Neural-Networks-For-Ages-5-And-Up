import React from 'react';
import { connect } from 'react-redux';
import styles from './Frog.pcss';

class FrogComponent extends React.Component {
    render() {
        let { number, multiNumber } = this.props,
            usedNumber = this.props.isMulti ? multiNumber : number;
        
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
import React from 'react';
import { connect } from 'react-redux';
import styles from './Frog.pcss';

export class FrogComponent extends React.Component {
    render() {
        let { number } = this.props;
        
        return (
            <div className={styles.container}>
                <div className={styles.number}>{number}</div>
                <img className={styles.frog} src="src/images/frog.svg" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        number: state.frogNumber
    };
}

export const Frog = connect(
    mapStateToProps
)(FrogComponent);
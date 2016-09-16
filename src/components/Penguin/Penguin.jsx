import React from 'react';
import { connect } from 'react-redux';
import { overrideCSS } from '../../utils';
import internalStyles from './Penguin.pcss';

class PenguinComponent extends React.Component {

    render() {
        let { number, disabled, onPenguinChange } = this.props,
            styles = this.props.styles ? overrideCSS(internalStyles, this.props.styles) : internalStyles;

        let usedNumber = this.props.final ? this.props.finalNumber : this.props.initNumber;

        return (
            <div className={styles.container}>
                <input 
                    type="number" 
                    className={styles.number} 
                    value={usedNumber} 
                    max="99"
                    min="0"
                    disabled={disabled}
                    onChange={e => onPenguinChange(e.target.value) }/>

                <img className={styles.penguin} src="src/images/penguin.svg" alt="This is a picture of the baby penguin" />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { 
        initNumber: state.penguinNumber,
        finalNumber: state.finalPenguinNumber 
    };
}

export const Penguin = connect(
    mapStateToProps
)(PenguinComponent);
import React from 'react';
import { connect } from 'react-redux';
import { overrideCSS } from '../../utils';
import internalStyles from './Penguin.pcss';

class PenguinComponent extends React.Component {

    render() {
        let { initNumber, disabled, onPenguinChange } = this.props,
            styles = this.props.styles ? overrideCSS(internalStyles, this.props.styles) : internalStyles,
            usedNumber = initNumber;

        if (this.props.type) {
            switch (this.props.type) {
                case 'final':
                    usedNumber = this.props.finalNumber;
                    break

                case 'firstMulti':
                    usedNumber = this.props.firstMultiPath;
                    break

                case 'secondMulti':
                    usedNumber = this.props.secondMultiPath;
                    break

                case 'finalMulti':
                    usedNumber = this.props.finalMultiPath;
                    break

                default:
                    usedNumber = initNumber;
            }
        }

        return (
            <div className={styles.container}>
                <input
                    type="number"
                    className={styles.number}
                    value={usedNumber}
                    max="99"
                    min="0"
                    disabled={disabled}
                    onChange={e => onPenguinChange(e.target.value)} />

                <img className={styles.penguin} src="src/images/penguin.svg" alt="This is a picture of the baby penguin" />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        initNumber: state.penguinNumber,
        finalNumber: state.finalPenguinNumber,
        firstMultiPath: state.firstMultiPathPenguin,
        secondMultiPath: state.secondMultiPathPenguin,
        finalMultiPath: state.finalMultiPathPenguin
    };
}

export const Penguin = connect(
    mapStateToProps
)(PenguinComponent);
import React from 'react';
import { overrideCSS } from '../../utils';
import { connect } from 'react-redux';
import internalStyles from './Fly.pcss';

class FlyComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { number, disabled } = this.props,
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

                <img className={styles.fly} src="src/images/fly.svg" alt="This is a picture of the fly" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { number: state.flyNumber };
}

export const Fly = connect(
    mapStateToProps
)(FlyComponent);
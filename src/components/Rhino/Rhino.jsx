import React from 'react';
import { connect } from 'react-redux';
import styles from './Rhino.pcss';

class RhinoComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { number, disabled } = this.props;

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
    return { number: state.rhinoNumber };
}

export const Rhino = connect(
    mapStateToProps
)(RhinoComponent);
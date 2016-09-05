import React from 'react';
import styles from './Penguin.pcss';

export class Penguin extends React.Component {

    constructor(props) {
        super(props);

        this.state = { number : props.number };
        this.changeNumber = this.changeNumber.bind(this);
    }

    changeNumber(value) {
        this.setState({ number: value });
    }

    render() {
        let { number } = this.state;

        return (
            <div className={styles.container}>
                <input 
                    type="number" 
                    className={styles.number} 
                    value={number} 
                    max="99"
                    min="0"
                    onChange={e => this.changeNumber(e.target.value) }/>

                <img className={styles.penguin} src="src/images/penguin.svg" />
            </div>
        );
    }
}
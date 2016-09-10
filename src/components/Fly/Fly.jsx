import React from 'react';
import styles from './Fly.pcss';

export class Fly extends React.Component {
    render() {
        return <img className={styles.fly} src="src/images/fly.svg" alt="This is a picture of the Fly" />;
    }
}
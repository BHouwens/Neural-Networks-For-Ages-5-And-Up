import React from 'react';
import styles from './Road.pcss';

export class Road extends React.Component {
    render() {
        return (
            <img className={styles.road} src="src/images/network.svg" />
        );
    }
}
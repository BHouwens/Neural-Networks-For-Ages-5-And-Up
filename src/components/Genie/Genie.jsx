import React from 'react';
import styles from './Genie.pcss';

export class Genie extends React.Component {
    render() {
        return (
            <img className={styles.genie} src="src/images/genie.svg" />
        );
    }
}
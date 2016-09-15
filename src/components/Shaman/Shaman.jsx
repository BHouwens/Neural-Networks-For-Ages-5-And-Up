import React from 'react';
import styles from './Shaman.pcss';

export class Shaman extends React.Component {
    render() {
        if (this.props.reverse){
            return <img className={styles.shamanSwitched} src="src/images/shaman.svg" alt="This is a picture of the shaman" />;
        }else{
            return <img className={styles.shaman} src="src/images/shaman.svg" alt="This is a picture of the shaman" />;
        }
    }
}
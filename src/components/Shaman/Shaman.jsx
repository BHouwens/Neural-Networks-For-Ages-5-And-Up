import React from 'react';
import { overrideCSS } from '../../utils';
import internalStyles from './Shaman.pcss';

export class Shaman extends React.Component {
    render() {
        let styles = this.props.styles ? overrideCSS(internalStyles, this.props.styles) : internalStyles;
        
        if (this.props.reverse){
            return <img className={styles.shamanSwitched} src="src/images/shaman.svg" alt="This is a picture of the shaman" />;
        }else{
            return <img className={styles.shaman} src="src/images/shaman.svg" alt="This is a picture of the shaman" />;
        }
    }
}
import React from 'react';
import { overrideCSS } from '../../utils';
import internalStyles from './Genie.pcss';

export class Genie extends React.Component {
    render() {
        let styles = this.props.styles ? overrideCSS(internalStyles, this.props.styles) : internalStyles; 

        return (
            <img className={styles.genie} src="src/images/genie.svg" />
        );
    }
}
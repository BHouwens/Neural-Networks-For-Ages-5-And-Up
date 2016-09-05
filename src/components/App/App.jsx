import React from 'react';
import { Penguin } from '../Penguin/Penguin.jsx';
import styles from './App.pcss';

export class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            penguinNumber: 5
        };
    }

    render() {
        let { penguinNumber } = this.state;

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>Neural Networks for Ages 5 and Up</h1>

                <p>
                    This is a baby penguin. He looks like your average baby penguin, but you'll see he has a number attached to him. In this case he is a {penguinNumber}-penguin, but you can click on his number and change it to whatever you want.
                </p>
                
                <Penguin number={penguinNumber}/>

                <p>
                    Our penguin, let's call him Feature (stupid, I know, but that's his name), thinks he's pretty bad-ass but he's a baby so what does he know. He needs protection on a journey he has to make, so we're going to pair him up with some friends:
                </p> 
            </div>
        );
    }
}
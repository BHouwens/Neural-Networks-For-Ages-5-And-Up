import React from 'react';
import { connect } from 'react-redux';
import { Penguin, Rhino } from '../../components';

import styles from './App.pcss';

class AppComponent extends React.Component {

    render() {
        let { penguinNumber, genieNumber, rhinoNumber } = this.props;

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>Neural Networks for Ages 5 and Up</h1>

                <p>
                    This is a baby penguin. He looks like your average baby penguin, but you'll see he has a number attached to him. In this case he is a {penguinNumber}-penguin, but you can click on his number and change it to whatever you want.
                </p>
                
                <Penguin number={penguinNumber}/>

                <p>
                    Our penguin, let's call him Feature (stupid, I know, but that's his name), has to make an epic journey that consists of a bunch of paths connected by sign posts. He think he's pretty bad-ass and can make his way along these paths 
                    and past these sign posts on his own, but he's a baby so what does he know. What he really needs is friends along the way to help him, like these guys:
                </p> 

                <Rhino number={rhinoNumber}/>

                <p>
                    The rhino is called Weight (maybe because he's heavy?) and the fly is called Bias. When our three friends get to the first sign post, though, they meet a shaman who looks kind of like this:
                </p>

                {/*-- insert shaman --*/}

                <p>The shaman casts a special spell on all three of our friends and merges them all into a <i>new</i> penguin. Weird!</p>

                {/*-- show transformation --*/}

                <p>
                    Our new penguin, with a new number, makes his way on the next path and, if it's not the last one in the journey, is joined by another Weight and another Bias. 
                    They come to another shaman at the next sign post and the process repeats.
                </p>

                <p>
                    The last path in the journey is a bit different; instead of a shaman at the end, there's a genie! The genie also has a number (in this case it's a {genieNumber}-genie). The 
                    genie performs another kind of spell to transform our penguin for the very last time. If our penguin has the same number as the genie after the spell, then he wins! If he doesn't 
                    we have to start all over again with new numbers for our Weights and Biases (we cannot give a new number to Feature, but more on that later).
                </p> 
                
                <p>
                    Here's a journey that Feature has to make. The genie at the end is a {genieNumber}-genie, so see if you can change the numbers of the Weights to get Feature to have the right number.
                </p>           
            </div>
        );
    }
    
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToState(dispatch) {}

export const App = connect(
    mapStateToProps
)(AppComponent);
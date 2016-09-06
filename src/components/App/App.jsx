import React from 'react';
import { connect } from 'react-redux';
import { changePenguin, changeRhino } from '../../actions';
import { Penguin, Rhino } from '../../components';

import styles from './App.pcss';

class AppComponent extends React.Component {

    render() {
        let { penguinNumber, genieNumber, rhinoNumber, onPenguinChange } = this.props;

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>Neural Networks for Ages 5 and Up</h1>

                <p>
                    This is a baby penguin. She looks like your average baby penguin, but you'll see she has a number attached to her. In this case she is a <span className={styles.penguinHighlight}>{penguinNumber}-penguin</span>, but you can click on her number and change it to whatever you want.
                </p>
                
                <Penguin disabled={false} onPenguinChange={onPenguinChange} />

                <p>
                    Our penguin, let's call her Feature (stupid, I know, but that's her name), has to make an epic journey that consists of a bunch of paths connected by sign posts. She think she's pretty bad-ass and can make her way along these paths 
                    and past these sign posts on her own, but she's a baby so what does she know. What she really needs is friends along the way to help her, like these guys:
                </p> 

                <Rhino disabled={true} />

                <p>
                    The rhino is called Weight (maybe because he's heavy?) and this one is a {rhinoNumber}-rhino. Why is he green? It's actually not really clear. The fly is called Bias. When our three friends get to the first sign post, though, they meet a shaman who looks kind of like this:
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

function mapDispatchToState(dispatch) {
    return {
        onPenguinChange: value => {
            dispatch(changePenguin(value));
        }
    }
}

export const App = connect(
    mapStateToProps,
    mapDispatchToState
)(AppComponent);
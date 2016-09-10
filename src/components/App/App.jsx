import React from 'react';
import { connect } from 'react-redux';
import { changePenguin, changeRhino } from '../../actions';
import { 
    Penguin, 
    Rhino, 
    Shaman, 
    Fly, 
    Genie,
    Road
} from '../../components';

import styles from './App.pcss';
import roadPenguinStyles from './overrides/roadPenguin.pcss';

class AppComponent extends React.Component {

    render() {
        let { penguinNumber, genieNumber, rhinoNumber, onPenguinChange, flyNumber } = this.props;

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>Neural Networks for Ages 5 and Up</h1>

                <p>
                    This is a baby penguin. She looks like your average baby penguin, but you'll see she has a number attached to her. In this case she is a <span className={styles.penguinHighlight}>{penguinNumber}-penguin</span>, but you can click on her number and change it to whatever you want.
                </p>
                
                <Penguin disabled={false} onPenguinChange={onPenguinChange} />

                <p>
                    Our penguin, let's call her Feature (stupid, I know, but that's her name), has to make an epic journey that consists of a bunch of paths connected by sign posts. Check it out:
                </p>

                <section className={styles.penguinOnPath}>
                    <Penguin disabled={true} styles={roadPenguinStyles} onPenguinChange={onPenguinChange} />
                    <Road />
                </section>

                <p>
                    She think she's pretty bad-ass and can make her way along these paths 
                    and past these sign posts on her own, but she's a baby so what does she know. What she really needs is friends along the way to help her, like these guys:
                </p> 

                <section className={styles.friends}>
                    <Rhino disabled={true} />
                    <Fly disabled={true} />
                </section>

                <p>
                    The rhino is called Weight (maybe because he's heavy?) and this one is a {rhinoNumber}-rhino. Why is he green? It's actually not really clear. The fly is called Bias and he's a {flyNumber}-fly. When our three friends get to the first sign post, though, they meet a shaman who looks kind of like this:
                </p>

                <Shaman />

                <p>The shaman casts a special spell on all three of our friends and merges them all into a <i>new</i> penguin. More POWER!</p>

                {/*-- show transformation --*/}

                <p>
                    Our new penguin, with a new number, makes her way on the next path and is joined by another Weight and another Bias. 
                    They come to another shaman at the next sign post and the process repeats.
                </p>

                <p>
                    The last path in the journey is a bit different; instead of a shaman at the end, there's a genie and a red frog! 
                </p>

                <Genie />

                <p>
                    The genie performs a special kind of spell that transforms our friends for the very last time, but this time they come out 
                    looking like a frog as well (although it is a normal-looking frog)! The red frog is then compared to the new, normal frog. If 
                    they're the same then we're all good, but if they're not then our poor penguin has to start again, although this time with new
                    numbers for the Weights and Biases.
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
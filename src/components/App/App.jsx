import React from 'react';
import { connect } from 'react-redux';
import { changePenguin, changeFirstRhino, changeSecondRhino } from '../../actions';
import { 
    Penguin, 
    Rhino, 
    Shaman, 
    Fly, 
    Genie,
    Road,
    Frog
} from '../../components';

import styles from './App.pcss';
import roadPenguinStyles from './overrides/roadPenguin.pcss';
import transformationRhino from './overrides/transformationRhino.pcss';
import transformationFly from './overrides/transformationFly.pcss';
import transformationPenguin from './overrides/transformationPenguin.pcss';
import bigFinalPenguin from './overrides/bigFinalPenguin.pcss';
import lastShaman from './overrides/lastShaman.pcss';
import nextPathPenguin from './overrides/nextPathPenguin.pcss';

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
                    She think she&rsquo;s pretty bad-ass and can make her way along these paths 
                    and past these sign posts on her own, but she&rsquo;s a baby so what does she know. What she really needs is friends along the way to help her, like these guys:
                </p> 

                <section className={styles.friends}>
                    <Rhino disabled={true} />
                    <Fly disabled={true} />
                </section>

                <p>
                    The rhino is called Weight (maybe because he's heavy?) and this one is a <span className={styles.rhinoHighlight}>{rhinoNumber}-rhino</span>. Why is he green? It&rsquo;s actually not really clear. 
                    The fly is called Bias and he&rsquo;s a {flyNumber}-fly. When our three friends get to the first sign post, though, they meet 
                    a shaman who looks kind of like this:
                </p>

                <Shaman />

                <p>The shaman casts a special spell on all three of our friends added together, and they turn into a brand spanking new penguin with a new number!</p>

                <div className={styles.transformation}>
                    <Shaman reverse={true} />
                    <div className={styles.plus}>(</div>
                    <Rhino disabled={true} styles={transformationRhino} />
                    <div className={styles.plus}>+</div>
                    <Fly disabled={true} styles={transformationFly} />
                    <div className={styles.plus}>+</div>
                    <Penguin 
                        disabled={true}
                        onPenguinChange={onPenguinChange} 
                        styles={transformationPenguin} />
                    <div className={styles.endBracket}>)</div>
                </div>

                <div className={styles.finalPenguinContainer}>
                    <div className={styles.stars}></div>
                    <Penguin
                        disabled={true}
                        final={true}
                        onPenguinChange={onPenguinChange}
                        styles={bigFinalPenguin} />
                    <div className={styles.starsReversed}></div>
                </div>

                <p>
                    Our new penguin, with a new number, makes her way on the next path and is joined by <b>another</b> Weight and <b>another</b> Bias. 
                    They come to another shaman at the next sign post and the process repeats.
                </p>

                <div className={styles.nextPath}>
                    <Penguin
                        disabled={true}
                        final={true}
                        onPenguinChange={onPenguinChange}
                        styles={nextPathPenguin} />

                    <div className={styles.nextFriends}>
                        <Rhino disabled={true} />
                        <Fly disabled={true} />
                    </div>

                    <div className={styles.path}></div>
                    <div className={styles.nextShaman}></div>
                </div>

                <p>
                    The last path in the journey is a bit different: the shaman is joined this time by a frog!
                </p>

                <section className={styles.lastNode}>
                    <Shaman styles={lastShaman} />
                    <Frog />
                </section>

                <p>
                    The shaman does his magic thing once more, and then we have to compare the frog&rsquo;s number with our final 
                    penguin&rsquo;s number. See if you can help our bad-ass penguin&rsquo;s number match the frog&rsquo;s number by changing 
                    <span className={styles.important}>only the Weight (rhino) numbers</span>. This seems like a weird way 
                    to do it but, just as in life, we don&rsquo;t get to make the rules. We have made it a bit easier though by only 
                    having to worry about one journey for our penguin:      
                </p>

                <section className={styles.firstExercise}>
                    <Penguin 
                        disabled={true}
                        onPenguinChange={onPenguinChange} 
                        styles={transformationPenguin} />

                    <div className={styles.nextFriends}>
                        <Rhino disabled={false} />
                        <Fly disabled={true} />
                    </div>

                    <div className={styles.path}></div>

                    <div className={styles.finalTest}>
                        <div className={styles.nextShaman}></div>

                        <Penguin
                            disabled={true}
                            final={true}
                            onPenguinChange={onPenguinChange}
                            styles={nextPathPenguin} />

                        <Frog />
                        <div className={styles.answer}>
                            <div className={styles.tick}></div>
                            <div className={styles.cross}></div>
                        </div>
                    </div>
                </section>

                <p>
                    That shouldn&rsquo;t have been too difficult. Let&rsquo;s see if we can ramp up the difficulty by adding another 
                    penguin to the journey, with his own Weight (notice there&rsquo;s still only one Bias though): 
                </p>

                <section className={styles.secondExercise}>
                    <div className={styles.penguins}>
                        <Penguin 
                            disabled={true}
                            onPenguinChange={onPenguinChange} 
                            styles={transformationPenguin} />

                        <Penguin 
                            disabled={true}
                            onPenguinChange={onPenguinChange} 
                            styles={transformationPenguin} />
                    </div>

                    <div className={style.middleBit}>
                        <div className={styles.firstPath}>
                            <Rhino disabled={false} />
                            <div className={styles.firstPathImage}></div>
                        </div>

                        <Fly disabled={false} />

                        <div className={styles.secondPath}>
                            <Rhino disabled={false} />
                            <div className={styles.secondPathImage}></div>
                        </div>
                    </div>

                    <div className={styles.finalTest}>
                        <div className={styles.nextShaman}></div>

                        <Penguin
                            disabled={true}
                            final={true}
                            onPenguinChange={onPenguinChange}
                            styles={nextPathPenguin} />

                        <Frog />
                        <div className={styles.answer}>
                            <div className={styles.tick}></div>
                            <div className={styles.cross}></div>
                        </div>
                    </div>
                </section>

                <p> 
                    A little more difficult, but shouldn&rsquo;t have been too difficult right? But what if we had, say, 6 penguins?
                </p>

                {/*-- show "realistic" network --*/}

                <p>And what if there are multiple paths that they have to travel, each with their own Weight rhino?</p>

                {/*-- show multiple path --*/}

                <p>
                    Now things might start to get a good bit more difficult! Don&rsquo;t lose hope though, patient reader, because we have one more character who 
                    can help us: the genie.
                </p>

                <Genie />

                <p>
                    She has two powers: she can check the difference between the last penguin and the frog herself and, more importantly, she is powerful enough 
                    that she can change all the Weights&rsquo; numbers <i>across the whole network of paths</i>! Unfortunately she is not powerful to change them 
                    to the correct numbers all at once, so our poor penguins have to make the same trips many times until the genie gets it right by increments.
                </p>

                <p>
                    The exercise of finding the right numbers for the Weights (and Biases) is exactly what happens in a real neural network. 
                    These weights are then &ldquo;stored&rdquo; for future use on new, unseen Features for which we do not have &ldquo;frogs&rdquo; 
                    to test against and we say that the network is <span className={styles.important}>trained</span>. 
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
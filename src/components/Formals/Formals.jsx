import React from 'react';
import {
    Penguin,
    Rhino,
    Shaman,
    Frog,
    Fly,
    Genie
} from '../../components';

import styles from './Formals.pcss';
import penguinStyles from './overrides/penguin.pcss';
import rhinoStyles from './overrides/rhino.pcss';
import flyStyles from './overrides/fly.pcss';
import shamanStyles from './overrides/shaman.pcss';
import frogStyles from './overrides/frog.pcss';
import genieStyles from './overrides/genie.pcss';

export class Formals extends React.Component {
    render() {
        return (
            <div className={styles.formal}>
                <h2 className={styles.heading}>the formal stuff</h2>

                <p>
                    The above is a description of a simple neural network in simple language, devoid of any of the real mathematics.
                    The intention was not to present a like-for-like explanation of a neural network, but rather help develop an intuition
                    for how they work. So, the following is a breakdown of this analogy into its more formal elements:
                </p>

                <ul className={styles.formalList}>
                    <li>
                        <div>
                            <Penguin disabled={true} onPenguinChange={null} styles={penguinStyles} />
                        </div>

                        <div className={styles.description}>
                            <h3 className={styles.descTitle}>feature</h3>
                            <h4 className={styles.subtitle}>penguin</h4>

                            <p>
                                As mentioned in the story, the penguin represents a feature of the dataset to be learned.These
                            are what the network uses in order to model itself to a generalisation of the data. If you were
                            wanting to diagnose whether someone had a cold, for instance, a feature might be whether they
                            have a runny nose or not.
                        </p>
                        </div>


                    </li>

                    <li>
                        <div>
                            <Rhino disabled={true} styles={rhinoStyles} />
                        </div>

                        <div className={styles.description}>
                            <h3 className={styles.descTitle}>weight</h3>
                            <h4 className={styles.subtitle}>rhino</h4>

                            <p>
                                As mentioned in the story, the rhino is the equivalent of a weight, usually represented by the
                            symbol W, of a node in the system. The number of weights per node is equivalent to the number of
                            inputs to that node (thus if there are 5 &ldquo;penguin&rdquo; inputs to a node, there will be 5 
                            &ldquo;rhino&rdquo; weights).
                        </p>

                            <p>
                                It is these weights (along with the biases) that the network needs to lock down in order to generalise
                            over the data.
                        </p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <Fly styles={flyStyles} disabled={true} />
                        </div>

                        <div className={styles.description}>
                            <h3 className={styles.descTitle}>bias</h3>
                            <h4 className={styles.subtitle}>fly</h4>

                            <p>
                                As mentioned in the story, the fly is the equivalent of a bias, usually represented by the
                            symbol b, of a node in the system. Unlike the weight, there is generally only one bias per node
                            irrespective of the number of inputs. The point of the bias is out of scope for this little story, but
                            geometrically the bias allows us to &ldquo;shift&rdquo; the position of the
                            model along its axes, whereas the weights affect the model&rsquo;s curvature.
                        </p>

                            <p>
                                You can read more on this here: [link].
                        </p>
                        </div>
                    </li>

                    <li>

                        <div className={styles.description}>
                            <h3 className={styles.descTitle}>node</h3>
                            <h4 className={styles.subtitle}>sign post</h4>

                            <p>
                                The sign post is the same as a node in a real network. This acts as a &ldquo;step&rdquo; in the network where
                            inputs are combined with weights and a bias through a function in order to pass them off on to the
                            next node. The more nodes in a network, the better the model is able to generalise, but the more computing
                            power is needed.
                        </p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <Shaman styles={shamanStyles} />
                        </div>

                        <div className={styles.description}>
                            <h3 className={styles.descTitle}>activation function</h3>
                            <h4 className={styles.subtitle}>shaman</h4>

                            <p>
                                The shaman and his spell are a representation of the activation function used to convert
                                inputs, weights and the bias into a probability for the next node. The &ldquo;spell&rdquo;, or specific
                                function, can differ depending on the implementation; common choices are functions like <i>tanh</i> or 
                                the <i>sigmoid function</i> because finding their derivatives for backpropogation is trivial (backpropogation 
                                is not covered much in this story beyond this &ldquo;spell&rdquo;).
                            </p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <Frog styles={frogStyles} />
                        </div>

                        <div className={styles.description}>
                            <h3 className={styles.descTitle}>test data</h3>
                            <h4 className={styles.subtitle}>frog</h4>

                            <p>
                                The frog represents the true testing output with which to compare the network&rsquo;s predicted
                                output. It&rsquo;s basically the &ldquo;right&rdquo; answer that the network is trying to get to.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <Genie styles={genieStyles} />
                        </div>

                        <div className={styles.description}>
                            <h3 className={styles.descTitle}>loss function</h3>
                            <h4 className={styles.subtitle}>genie</h4>

                            <p>
                                Actually there&rsquo;s quite a lot rolled up into our genie character, but the core of her 
                                &ldquo;spell&rdquo; is the loss function which calculates the difference between the output predicted 
                                by a model at a point in training and the true output from the test data (our frog). 
                            </p>

                            <p>
                               I&rsquo;ve also rolled the backpropogation process into this character, as she is responsible for 
                               adjusting weight values in response to the result of the loss function. For the sake of intuition 
                               this is fine, but it&rsquo;s important to understand that there&rsquo;s much more happening under the 
                               hood at this step.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
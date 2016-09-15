import React from 'react';
import { 
    Penguin, 
    Rhino,
    Shaman,
    Frog
} from '../../components';
import styles from './Formals.pcss';

class Formals extends React.Component {
    render() {
        <section className={styles.formal}>
            <h2>the formal stuff</h2>

            <p>
                The above is a description of a simple neural network in simple language, devoid of the more difficult mathematics.The following is a breakdown
                of this analogy into its more formal elements.
            </p>

            <ul className={styles.formalList}>
                <li>
                    <Penguin disabled={true} styles={roadPenguinStyles} onPenguinChange={onPenguinChange} />

                    <div className={styles.description}>
                        <h3 className={styles.descTitle}>feature</h3>
                        <h4 className={styles.subtitle}>penguin</h4>

                        <p>
                            As mentioned in the story, the penguin represents a feature of the dataset to be learned.These
                            are what the network uses in order to model itself to a generalisation of the data.If you were
                            wanting to find out whether someone had a cold, for instance, a feature might be whether they 
                            have a runny nose or not.
                        </p>
                    </div>


                </li>

                <li>
                    <Rhino disabled={true} />

                    <div className={styles.description}>
                        <h3 className={styles.descTitle}>weight</h3>
                        <h4 className={styles.subtitle}>rhino</h4>

                        <p>
                            As mentioned in the story, the rhino is the equivalent of a weight, usually represented by the 
                            symbol W, of a node in the system. The number of weights per node is equivalent to the number of
                            inputs to that node (thus if there are 5 "penguin" inputs to a node, there will be 5 "rhino" weights).
                        </p>

                        <p>
                            It is these weights (along with the biases) that the network needs to lock down in order to generalise 
                            over the data.
                        </p>
                    </div>
                </li>

                <li>
                    <Fly />

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
                    <SignPost />

                    <div className={styles.description}>
                        <h3 className={styles.descTitle}>node</h3>
                        <h4 className={styles.subtitle}>sign post</h4>

                        <p>
                            The sign post is the same as a node in a real network. This acts as a "step" in the network where 
                            inputs are combined with weights and a bias through a function in order to pass them off on to the 
                            next node. The more nodes in a network, the better the model is able to generalise, but the more computing 
                            power is needed.
                        </p>
                    </div>
                </li>

                <li>
                    <Shaman />

                    <div className={styles.description}>
                        <h3 className={styles.descTitle}>activation function</h3>
                        <h4 className={styles.subtitle}>shaman</h4>

                        <p>
                            The shaman and his spell are a representation of the activation function used to convert 
                            inputs, weights and the bias into a probability for the next node. The "spell", or specific 
                            function, can differ depending on the implementation; common choices are functions like <i>tanh</i> 
                            or the <i>sigmoid function</i> because finding their derivatives for backpropogation is trivial (if 
                            that went over your head it&rsquo;s not because you&rsquo;re dumb; these are things that were glanced 
                            over or not mentioned in the story).
                        </p>
                    </div>
                </li>

                <li>
                    <Frog />

                    <div className={styles.description}>
                        <h3 className={styles.descTitle}>testing output</h3>
                        <h4 className={styles.subtitle}>frog</h4>

                        <p>
                            The frog represents the true testing output with which to compare the network&rsquo;s predicted 
                            output. It&rsquo;s basically the &ldquo;right&rdquo; answer that the network is trying to get to.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    }
}
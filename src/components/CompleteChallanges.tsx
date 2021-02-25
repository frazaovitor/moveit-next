import { useContext } from 'react';
import styles from '../styles/components/CompleteChallanges.module.css'
import { ChallengesContext } from '../contexts/ChallengesContexts';

export function CompleteChallanger() {
    const { challengesComplete } = useContext(ChallengesContext);

    return (
        <div className={styles.completeChallangesContainer}>
            <span>Desafios completos</span>
            <span>{challengesComplete}</span>
        </div>
    );
}
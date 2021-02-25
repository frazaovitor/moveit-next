
import { Profile } from "../components/Perfil";
import { ExperienceBar } from "../components/ExperienceBar";
import styles from '../styles/pages/Home.module.css'
import { CompleteChallanger } from "../components/CompleteChallanges";
import { Countdown } from "../components/Countdown";
import { ChallengerBox } from '../components/ChallengerBox';
import Head from 'next/head'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallanger/>
          <Countdown/>
        </div>
        <div>
          <ChallengerBox/>
        </div>
      </section>
    </div>
  )
}

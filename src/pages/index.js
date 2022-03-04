import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import HeroBackground from '../components/HeroBackground/HeroBackground';

const Home = () => {
  return (
    <Layout>
      <HeroBackground />
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;

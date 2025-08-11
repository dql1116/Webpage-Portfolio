import Layout from '../components/layout/Layout';
import Intro from '../components/home-page-sections/intro';
import Experience from '../components/home-page-sections/experience';
import Projects from '../components/home-page-sections/projects';

export default function Home() {
  return (
    <Layout>
      <section id="about" className="section"><Intro/></section>
      <section id="work" className="section"><Experience/></section>
      <section id="projects" className="section"><Projects/></section>
    </Layout>
  );
}

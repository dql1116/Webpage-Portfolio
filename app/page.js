import Layout from '../components/layout/Layout';
import Intro from '../components/home-page-sections/intro';
import Experience from '../components/home-page-sections/experience';

export default function Home() {
  return (
    <Layout>
      <section id="about" className="section"><Intro/></section>
      <section id="work" className="section"><Experience/></section>
      <section id="projects" className="section"></section>
    </Layout>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Programs from './components/Programs';
import OrgChart from './components/OrgChart';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <Programs />
        <OrgChart />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

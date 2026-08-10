import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Hook from '@/components/sections/Hook';
import Approach from '@/components/sections/Approach';
import ApproachAlt1 from '@/components/sections/ApproachAlt1';
import ApproachAlt2 from '@/components/sections/ApproachAlt2';
import Offers from '@/components/sections/Offers';
import AiNative from '@/components/sections/AiNative';
import BottlenecksB from '@/components/sections/BottlenecksB';
import WhoFor from '@/components/sections/WhoFor';
import WhoForB from '@/components/sections/WhoForB';
import SelfCheckCode from '@/components/sections/SelfCheckCode';
import TopicsColumns from '@/components/sections/TopicsColumns';
import FinalCta from '@/components/sections/FinalCta';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Hook />
      <BottlenecksB />
      <AiNative />
      {/* <Approach /> */}
      {/* <ApproachAlt1 /> */}
      <ApproachAlt2 />
      <WhoFor />
      {/* <WhoForB /> */}
      <Offers />
      <SelfCheckCode />
      <TopicsColumns />
      <FinalCta />
      <Footer />
    </main>
  );
}

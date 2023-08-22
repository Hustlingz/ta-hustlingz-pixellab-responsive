import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <header className="header container mt-lg-4">
        <Header></Header>
      </header>

      <main className="content"></main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}

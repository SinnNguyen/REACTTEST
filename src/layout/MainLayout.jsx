import { Footer } from './Footer'; 
import { Navbar } from './Navbar';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />

      <main className="h-full max-h-max max-w-full overflow-hidden">
        {children} 
      </main>

      <Footer />
    </div>
  );
}

export { MainLayout };
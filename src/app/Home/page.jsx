import Navbar from '../../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Fayn Cocktail Bar</h1>
      </main>
    </div>
  );
};

export default HomePage;

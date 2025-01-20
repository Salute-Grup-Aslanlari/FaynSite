'use client';

export default function MenuPage() {
    return (
      <div className="min-h-screen bg-black p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Our Menu</h1>
        <div className="space-y-4">
          <div className="flex justify-between text-white">
            <span className="font-medium">Cocktail 1</span>
            <span className="text-white">$12.00</span>
          </div>
          <div className="flex justify-between text-white">
            <span className="font-medium">Cocktail 2</span>
            <span className="text-white">$15.00</span>
          </div>
          <div className="flex justify-between text-white">
            <span className="font-medium">Cocktail 3</span>
            <span className="text-white">$10.00</span>
          </div>
        </div>
      </div>
    );
  }
  
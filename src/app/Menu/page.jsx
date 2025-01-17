// src/app/menu/page.jsx
export default function MenuPage() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Cocktail 1</span>
            <span className="text-gray-600">$12.00</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Cocktail 2</span>
            <span className="text-gray-600">$15.00</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Cocktail 3</span>
            <span className="text-gray-600">$10.00</span>
          </div>
        </div>
      </div>
    );
  }
  
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Golden Hills Ranch</h3>
            <p className="text-gray-300 mb-4">
              For over three generations, we've been raising premium grass-fed cattle 
              in the heart of Montana's rolling hills. Quality beef, sustainable farming, 
              and family values.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="/about-golden-hills-ranch" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/beef-cooking-guide" className="text-gray-300 hover:text-white">Cooking Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Montana, USA</li>
              <li>Email: info@goldenhillsranch.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Golden Hills Ranch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
import React from "react";


export const Component = () => {
  return (
<div id="webcrumbs"> 
        	<div className="w-[1200px] bg-gray-100 font-sans rounded-xl overflow-hidden shadow-xl">
	  <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
	    <div className="flex justify-between items-center">
	      <div className="flex items-center space-x-2">
	        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
	          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
	          <line x1="8" y1="21" x2="16" y2="21"></line>
	          <line x1="12" y1="17" x2="12" y2="21"></line>
	        </svg>
	        <h1 className="text-2xl font-bold">AppVerse</h1>
	      </div>
	      <div className="relative w-1/3">
	        <input type="text" placeholder="Search apps & games..." className="w-full py-2 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300" />
	        <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-500">search</span>
	      </div>
	      <div className="flex items-center space-x-4">
	        <button className="bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center">
	          <span className="material-symbols-outlined mr-1">account_circle</span>
	          Sign In
	        </button>
	        <span className="material-symbols-outlined cursor-pointer hover:text-purple-300 transition-transform duration-300 transform hover:scale-110">settings</span>
	      </div>
	    </div>
	    <nav className="mt-6">
	      <ul className="flex space-x-6">
	        <li className="hover:text-purple-300 transition-all duration-300 cursor-pointer font-semibold border-b-2 border-white pb-1">Home</li>
	        <li className="hover:text-purple-300 transition-all duration-300 cursor-pointer">Games</li>
	        <li className="hover:text-purple-300 transition-all duration-300 cursor-pointer">Apps</li>
	        <li className="hover:text-purple-300 transition-all duration-300 cursor-pointer">Top Charts</li>
	        <li className="hover:text-purple-300 transition-all duration-300 cursor-pointer">Categories</li>
	        <li className="hover:text-purple-300 transition-all duration-300 cursor-pointer">New Releases</li>
	      </ul>
	    </nav>
	  </header>
	
	  <div className="flex flex-col gap-4"><img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
	
	<main className="p-6">
	    <section className="mb-8">
	      <div className="relative h-[300px] rounded-xl overflow-hidden group">
	        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Featured game" />
	        
	        <div className="absolute bottom-0 left-0 p-8">
	          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm mb-3 inline-block">Game of the Week</span>
	          <h2 className="text-white text-3xl font-bold mb-2">Cyber Realm: Neon Dynasty</h2>
	          <div className="flex flex-col gap-4"><div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
	<p className="text-gray-200 mb-4 max-w-lg">Dive into a futuristic open world with advanced AI enemies and a revolutionary combat system.</p></div>
	          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center group">
	            <span className="material-symbols-outlined mr-2 group-hover:animate-pulse">download</span>
	            Download Now
	          </button>
	        </div>
	      </div>
	    </section>
	
	    <section className="mb-8">
	      <div className="flex justify-between items-center mb-4">
	        <h2 className="text-2xl font-bold">Top Games</h2>
	        <button className="text-indigo-600 hover:text-indigo-800 transition-all duration-300">See All</button>
	      </div>
	      <div className="grid grid-cols-5 gap-4">
	        {[
	          {id: 1, title: "Epic Quest", category: "RPG", rating: 4.8, image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"},
	          {id: 2, title: "Racing Legends", category: "Racing", rating: 4.6, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"},
	          {id: 3, title: "Zombie Survival", category: "Action", rating: 4.9, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"},
	          {id: 4, title: "Strategy Master", category: "Strategy", rating: 4.7, image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"},
	          {id: 5, title: "Space Explorer", category: "Adventure", rating: 4.5, image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"}
	        ].map(game => (
	          <div key={game.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
	            <div className="relative h-40">
	              
	              <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 rounded-full px-2 py-0.5 text-xs font-bold">
	                {game.rating} ★
	              </div>
	            </div>
	            <div className="p-4">
	              <h3 className="font-semibold mb-1 truncate">{game.title}</h3>
	              <p className="text-sm text-gray-600 mb-3">{game.category}</p>
	              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center group">
	                <span className="material-symbols-outlined mr-1 text-sm group-hover:animate-bounce">download</span>
	                Download
	              </button>
	            </div>
	          </div>
	        ))}
	      </div>
	    </section>
	
	    <section className="mb-8">
	      <div className="flex justify-between items-center mb-4">
	        <h2 className="text-2xl font-bold">Popular Apps</h2>
	        <button className="text-indigo-600 hover:text-indigo-800 transition-all duration-300">See All</button>
	      </div>
	      <div className="grid grid-cols-5 gap-4">
	        {[
	          {id: 1, title: "PhotoEdit Pro", category: "Photography", rating: 4.9, image: "https://images.unsplash.com/photo-1620674156044-52b714665610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"},
	          {id: 2, title: "Fitness Track", category: "Health", rating: 4.7, image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"},
	          {id: 3, title: "Money Manager", category: "Finance", rating: 4.8, image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"},
	          {id: 4, title: "Meditation Plus", category: "Lifestyle", rating: 4.6, image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"},
	          {id: 5, title: "Language Learn", category: "Education", rating: 4.9, image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=320&q=80"}
	        ].map(app => (
	          <div key={app.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
	            <div className="relative h-40">
	              <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
	              <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 rounded-full px-2 py-0.5 text-xs font-bold">
	                {app.rating} ★
	              </div>
	            </div>
	            <div className="p-4">
	              <h3 className="font-semibold mb-1 truncate">{app.title}</h3>
	              <p className="text-sm text-gray-600 mb-3">{app.category}</p>
	              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center group">
	                <span className="material-symbols-outlined mr-1 text-sm group-hover:animate-bounce">download</span>
	                Download
	              </button>
	            </div>
	          </div>
	        ))}
	      </div>
	    </section>
	
	    <section className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 mb-8">
	      <div className="flex justify-between items-center">
	        <div className="w-1/2">
	          <h2 className="text-2xl font-bold mb-3">Join our Developer Program</h2>
	          <p className="text-gray-700 mb-4">Publish your games and apps on our platform and reach millions of users worldwide. Get access to powerful tools and analytics.</p>
	          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center">
	            <span className="material-symbols-outlined mr-2">code</span>
	            Join Now
	          </button>
	        </div>
	        <div className="w-2/5">
	          <img src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80" alt="Developer Program" className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" />
	        </div>
	      </div>
	    </section>
	
	    <section className="mb-8">
	      <h2 className="text-2xl font-bold mb-4">Categories</h2>
	      <div className="grid grid-cols-6 gap-4">
	        {[
	          {name: "Action", icon: "sports_martial_arts"},
	          {name: "Adventure", icon: "explore"},
	          {name: "Racing", icon: "directions_car"},
	          {name: "Strategy", icon: "psychology"},
	          {name: "Puzzle", icon: "extension"},
	          {name: "Simulation", icon: "monitor"},
	          {name: "Productivity", icon: "work"},
	          {name: "Education", icon: "school"},
	          {name: "Health", icon: "monitoring"},
	          {name: "Finance", icon: "payments"},
	          {name: "Social", icon: "groups"},
	          {name: "Travel", icon: "flight"}
	        ].map((category, index) => (
	          <div key={index} className="bg-white rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 cursor-pointer group">
	            <span className="material-symbols-outlined text-4xl text-indigo-600 mb-2 group-hover:text-purple-600 transition-all duration-300 transform group-hover:scale-110">{category.icon}</span>
	            <span className="font-medium">{category.name}</span>
	          </div>
	        ))}
	      </div>
	    </section>
	
	    <section>
	      <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
	      <div className="grid grid-cols-4 gap-5">
	        {[
	          {id: 1, title: "Fantasy Heroes", category: "RPG", price: "Free", hasPurchases: true, image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"},
	          {id: 2, title: "Cooking Master", category: "Simulation", price: "$2.99", hasPurchases: false, image: "https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"},
	          {id: 3, title: "Podcast Hub", category: "Entertainment", price: "Free", hasPurchases: true, image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"},
	          {id: 4, title: "Weather Pro", category: "Utility", price: "$4.99", hasPurchases: false, image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"}
	        ].map(item => (
	          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
	            <div className="relative h-48">
	              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
	              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
	                <h3 className="text-white font-bold">{item.title}</h3>
	                <p className="text-gray-300 text-sm">{item.category}</p>
	              </div>
	            </div>
	            <div className="p-4 flex-grow">
	              <div className="flex justify-between items-center mb-3">
	                <span className="font-bold">{item.price}</span>
	                {item.hasPurchases && <span className="text-xs text-gray-500">In-app purchases</span>}
	              </div>
	              <div className="flex justify-between items-center">
	                <div className="flex space-x-1">
	                  {[1, 2, 3, 4, 5].map(star => (
	                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
	                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
	                    </svg>
	                  ))}
	                </div>
	                <span className="text-xs text-gray-500">10K+ downloads</span>
	              </div>
	            </div>
	            <button className="w-full bg-indigo-600 text-white py-3 font-medium hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center">
	              <span className="material-symbols-outlined mr-2">download</span>
	              Download
	            </button>
	          </div>
	        ))}
	      </div>
	    </section>
	  </main></div>
	
	  <footer className="bg-gray-800 text-white p-8">
	    <div className="grid grid-cols-4 gap-8 mb-8">
	      <div>
	        <h3 className="text-xl font-bold mb-4">AppVerse</h3>
	        <p className="text-gray-400">Your one-stop destination for all apps and games. Download, play, and enjoy!</p>
	      </div>
	      <div>
	        <h4 className="font-bold mb-4">Categories</h4>
	        <ul className="space-y-2 text-gray-400">
	          <li className="hover:text-white transition-colors duration-300 cursor-pointer">Games</li>
	          <li className="hover:text-white transition-colors duration-300 cursor-pointer">Apps</li>
	          <li className="hover:text-white transition-colors duration-300 cursor-pointer">Top Charts</li>
	          <li className="hover:text-white transition-colors duration-300 cursor-pointer">New Releases</li>
	        </ul>
	      </div>
	      <div>
	        <h4 className="font-bold mb-4">Support</h4>
	        <ul className="space-y-2 text-gray-400">
	          <li className="hover:text-white transition-colors duration-300 cursor-pointer">Help Center</li>
	          <li className="hover:text-white transition-colors duration-300 cursor-pointer">Contact Us</li>
	          <li className="hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</li>
	          <li className="hover:text-white transition-colors duration-300 cursor-pointer">Terms of Service</li>
	        </ul>
	      </div>
	      <div>
	        <h4 className="font-bold mb-4">Connect with Us</h4>
	        <div className="flex space-x-4 mb-4">
	          <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300">
	            <i className="fa-brands fa-facebook-f"></i>
	          </a>
	          <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300">
	            <i className="fa-brands fa-twitter"></i>
	          </a>
	          <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300">
	            <i className="fa-brands fa-instagram"></i>
	          </a>
	          <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300">
	            <i className="fa-brands fa-discord"></i>
	          </a>
	        </div>
	        <div>
	          <h4 className="font-bold mb-2">Subscribe to Our Newsletter</h4>
	          <div className="flex">
	            <input type="email" placeholder="Enter your email" className="bg-gray-700 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
	            <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-all duration-300">
	              Subscribe
	            </button>
	          </div>
	        </div>
	      </div>
	    </div>
	    <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
	      <p className="text-gray-400">© 2023 AppVerse. All rights reserved.</p>
	      <div className="flex space-x-6">
	        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
	        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
	        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
	      </div>
	    </div>
	  </footer>
	</div> 
        </div>
  )
}


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <header className="bg-white border-b fixed top-0 w-full z-50 shadow-sm md:hidden">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <h1 className="text-xl font-bold text-gray-900">PlanetSham</h1>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">🔍</button>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="bg-white border-b fixed top-0 w-full z-50 shadow-sm hidden md:block">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <h1 className="text-2xl font-bold text-gray-900">PlanetSham</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search PlanetSham..."
                className="w-full bg-gray-100 rounded-full px-4 py-2 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-500">
                🔍
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">🏠</button>
            <button className="p-2 rounded-full hover:bg-gray-100">📹</button>
            <button className="p-2 rounded-full hover:bg-gray-100">🛒</button>
            <button className="p-2 rounded-full hover:bg-gray-100">👥</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Left Sidebar - Hidden on mobile */}
        <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4 hidden md:block">
          <div className="space-y-2">
            {['Profile', 'Friends', 'Groups', 'Marketplace', 'Watch', 'Memories'].map((item) => (
              <button key={item} className="w-full text-left p-3 rounded-lg hover:bg-gray-200 flex items-center space-x-3">
                <span className="text-xl">{['👤', '👥', '👪', '🛒', '📹', '🕒'][['Profile', 'Friends', 'Groups', 'Marketplace', 'Watch', 'Memories'].indexOf(item)]}</span>
                <span className="font-medium">{item}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Center Feed */}
        <main className="flex-1 ml-0 md:ml-64 mr-0 lg:mr-80">
          <div className="max-w-2xl mx-auto px-4 py-4">
            {/* Twitter-style Create Post */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  Y
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="What's happening?"
                    className="w-full border-none resize-none focus:outline-none focus:ring-0 text-lg placeholder-gray-500 min-h-[60px]"
                    rows={2}
                  />
                  <div className="flex justify-between items-center pt-3 border-t">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full">🖼️</button>
                      <button className="p-2 text-green-500 hover:bg-green-100 rounded-full">📹</button>
                      <button className="p-2 text-yellow-500 hover:bg-yellow-100 rounded-full">📊</button>
                      <button className="p-2 text-red-500 hover:bg-red-100 rounded-full">❤️</button>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Twitter-style Trending Topics */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h3 className="font-bold text-xl mb-4">Trending Worldwide</h3>
              <div className="space-y-4">
                {[
                  { topic: '#AIRevolution', tweets: '125K' },
                  { topic: 'SpaceX Launch', tweets: '89K' },
                  { topic: '#WorldCup2026', tweets: '76K' },
                  { topic: 'Climate Change', tweets: '54K' }
                ].map((trend, index) => (
                  <div key={index} className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <p className="text-sm text-gray-500">Trending #{index + 1}</p>
                    <p className="font-bold">{trend.topic}</p>
                    <p className="text-sm text-gray-500">{trend.tweets} posts</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Posts with Twitter-style Interactions */}
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {post === 1 ? 'T' : post === 2 ? 'S' : 'A'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">
                        {post === 1 ? 'Tech News' : post === 2 ? 'Sports Update' : 'Art Daily'}
                      </h3>
                      <span className="text-gray-500">·</span>
                      <p className="text-xs text-gray-500">{post * 2}h ago</p>
                    </div>
                    
                    <p className="text-gray-800 mb-3">
                      {post === 1 
                        ? 'Breaking: New AI breakthrough changes everything! What do you think about the future of technology?'
                        : post === 2
                        ? 'Incredible game last night! Who do you think will win the championship this year?'
                        : 'Check out this amazing street art from downtown. The talent in our city is unbelievable!'
                      }
                    </p>
                    
                    {/* Twitter-style Actions */}
                    <div className="flex justify-between max-w-md">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                        <span>💬</span>
                        <span className="text-sm">{post * 12}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                        <span>🔄</span>
                        <span className="text-sm">{post * 3}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                        <span>❤️</span>
                        <span className="text-sm">{post * 64}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                        <span>📤</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* WhatsApp-style Comment Input */}
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 flex items-center bg-gray-100 rounded-full px-3">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="flex-1 bg-transparent py-2 text-sm focus:outline-none"
                    />
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-500 hover:text-blue-500">😊</button>
                      <button className="p-1 text-gray-500 hover:text-green-500">📷</button>
                      <button className="p-1 text-gray-500 hover:text-red-500">❤️</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar - Hidden on mobile */}
        <aside className="w-80 fixed right-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4 hidden lg:block">
          {/* Twitter-style Who to Follow */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold text-xl mb-4">Who to Follow</h3>
            <div className="space-y-4">
              {[
                { name: 'Elon Musk', handle: '@elonmusk', category: 'Technology' },
                { name: 'Taylor Swift', handle: '@taylorswift', category: 'Music' },
                { name: 'NASA', handle: '@NASA', category: 'Space' }
              ].map((person, index) => (
                <div key={person.handle} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                      {person.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-sm text-gray-500">{person.handle}</p>
                      <p className="text-xs text-gray-400">{person.category}</p>
                    </div>
                  </div>
                  <button className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-800">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp-style Recent Chats */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Chats</h3>
            <div className="space-y-3">
              {[
                { name: 'Alice Johnson', message: 'Hey! How are you?', time: '2 min ago', unread: 3 },
                { name: 'Bob Smith', message: 'Meeting tomorrow?', time: '1 hr ago', unread: 0 },
                { name: 'Carol Davis', message: 'Check this out!', time: '3 hrs ago', unread: 1 }
              ].map((chat, index) => (
                <div key={chat.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {chat.name[0]}
                    </div>
                    {chat.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{chat.name}</p>
                    <p className="text-xs text-gray-500 truncate">{chat.message}</p>
                  </div>
                  <div className="text-xs text-gray-400">{chat.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Twitter-style Trending Topics */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-bold text-xl mb-4">Trending in Tech</h3>
            <div className="space-y-3">
              {[
                { topic: 'Web Development', tweets: '45K' },
                { topic: 'AI Ethics', tweets: '32K' },
                { topic: 'Blockchain', tweets: '28K' }
              ].map((trend, index) => (
                <div key={index} className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <p className="font-semibold">{trend.topic}</p>
                  <p className="text-sm text-gray-500">{trend.tweets} posts</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* WhatsApp-style Floating Action Button */}
      <button className="fixed bottom-20 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 md:hidden">
        <span className="text-2xl">💬</span>
      </button>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t md:hidden z-50">
        <div className="flex justify-around py-3">
          <button className="p-2 rounded-full bg-blue-100 text-blue-600">🏠</button>
          <button className="p-2 rounded-full hover:bg-gray-100">🔍</button>
          <button className="p-2 rounded-full hover:bg-gray-100">📹</button>
          <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
          <button className="p-2 rounded-full hover:bg-gray-100">✉️</button>
        </div>
      </nav>
    </div>
  );
}
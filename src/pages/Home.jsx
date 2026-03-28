export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🌿</div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            <span className="text-green-600">Greenpost</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Automate your TikTok content publishing. Schedule, manage, and grow your presence effortlessly.
          </p>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything you need to grow on TikTok</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Videos</h3>
              <p className="text-gray-600">Easily upload your video content directly to TikTok through our streamlined interface.</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule Posts</h3>
              <p className="text-gray-600">Plan your content calendar and schedule posts for optimal engagement times.</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manage Content</h3>
              <p className="text-gray-600">Keep track of all your TikTok content in one organized, easy-to-use dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start automating your TikTok today</h2>
          <p className="text-green-100 mb-8">Join creators who use Greenpost to save time and stay consistent.</p>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors"
          >
            Connect TikTok Account
          </a>
        </div>
      </section>
    </div>
  )
}

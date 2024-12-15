
const PrivacyHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      {/* Header */}
      <header className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">SharpShooter Hub Privacy Policy</h1>
        <p className="text-gray-600">Last updated: December 14, 2024</p>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto">
        {/* Introduction */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
          <p className="text-gray-700">
            SharpShooter Hub respects your privacy and is committed to protecting your personal data. 
            This privacy policy explains how we handle your information when you use our iOS app.
          </p>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
          {/* Data Collection */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Data We Collect</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Account information (email, username)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                App usage statistics
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Device information
              </li>
            </ul>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">How We Use Your Data</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Provide and improve our services
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Send important updates
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Customer support
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Your Rights</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Request data deletion
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Access your information
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                Opt out of communications
              </li>
            </ul>
          </section>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm mt-4">
          <h2 className="text-lg font-medium text-gray-900 mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our privacy practices, please email us at:
            <a href="mailto:privacy@sharpshooterhub.com" className="text-blue-500 ml-1">
              privacy@sharpshooterhub.com
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto mt-8 text-center text-sm text-gray-500">
        <p>© 2024 SharpShooter Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyHome;
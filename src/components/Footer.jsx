function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">

          {/* Logo */}
          <div>
            <p className="text-2xl font-bold mr-8">weeb</p>
          </div>

          {/* Product */}
          <div>
            <p className="text-left font-medium text-gray_footer uppercase tracking-wide text-sm mb-4">Product</p>
            <ul className="space-y-4 text-left text-gray-700">
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Browse</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Five</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-left font-medium text-gray_footer uppercase tracking-wide text-sm mb-4">Solutions</p>
            <ul className="text-left space-y-4 text-gray-700">
              <li><a href="#">Brainstorming</a></li>
              <li><a href="#">Ideation</a></li>
              <li><a href="#">Wireframing</a></li>
              <li><a href="#">Research</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-left font-medium text-gray_footer uppercase tracking-wide text-sm mb-4">Resources</p>
            <ul className="text-left space-y-4 text-gray-700">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-left font-medium text-gray_footer uppercase tracking-wide text-sm mb-4">Company</p>
            <ul className="text-left space-y-4 text-gray-700">
              <li><a href="#">About</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">@ 2025 Weeb, Inc. All rights reserved.</p>
          <div className="flex space-x-4 text-lg mt-4 md:mt-0">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

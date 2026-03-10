export default function Footer() {
  return (
    <footer>
      {/* Info Section */}
      <div className="wood-bg text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Info</h3>
            <p className="text-sm leading-relaxed">
              <strong>Location:</strong><br />
              51 Arrowhead Drive<br />
              Evanston, WY 82930-9244<br />
              <strong>Phone:</strong><br />
              307-789-5818<br />
              <strong>E-mail:</strong><br />
              <a href="mailto:storagestable@gmail.com" className="hover:underline">
                storagestable@gmail.com
              </a>
            </p>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Office Hours</h3>
            <div className="text-sm leading-relaxed space-y-1">
              <p><strong>Sunday:</strong> Closed</p>
              <p><strong>Monday:</strong> 09:00 AM - 06:00 PM</p>
              <p><strong>Tuesday:</strong> 09:00 AM - 06:00 PM</p>
              <p><strong>Wednesday:</strong> 09:00 AM - 06:00 PM</p>
              <p><strong>Thursday:</strong> 09:00 AM - 06:00 PM</p>
              <p><strong>Friday:</strong> 09:00 AM - 06:00 PM</p>
              <p><strong>Saturday:</strong> 09:00 AM - 01:00 PM</p>
            </div>
          </div>

          {/* Gate Hours */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Gate Hours</h3>
            <div className="text-sm leading-relaxed space-y-1">
              <p><strong>Sunday:</strong> 07:00 AM - 09:00 PM</p>
              <p><strong>Monday:</strong> 07:00 AM - 09:00 PM</p>
              <p><strong>Tuesday:</strong> 07:00 AM - 09:00 PM</p>
              <p><strong>Wednesday:</strong> 07:00 AM - 09:00 PM</p>
              <p><strong>Thursday:</strong> 07:00 AM - 09:00 PM</p>
              <p><strong>Friday:</strong> 07:00 AM - 09:00 PM</p>
              <p><strong>Saturday:</strong> 07:00 AM - 09:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-neutral-900 text-gray-400 text-center py-3 px-4 text-xs">
        Copyright {new Date().getFullYear()} Storage Stable | All Rights Reserved
      </div>
    </footer>
  );
}

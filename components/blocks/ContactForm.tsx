"use client";

/**
 * ContactForm — generic contact form used on /contact and re-usable on the
 * advertise page. Client component because the wireframe demonstrates the form
 * interaction without any backend wiring.
 */
export default function ContactForm() {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Send us a message
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Our team typically replies within two business days.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Wireframe demo — form submission disabled.");
          }}
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          <label className="block text-sm">
            <span className="font-medium text-gray-700">First name</span>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              required
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-gray-700">Last name</span>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              required
            />
          </label>
          <label className="block text-sm sm:col-span-2">
            <span className="font-medium text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              required
            />
          </label>
          <label className="block text-sm sm:col-span-2">
            <span className="font-medium text-gray-700">Company</span>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </label>
          <label className="block text-sm sm:col-span-2">
            <span className="font-medium text-gray-700">Topic</span>
            <select className="mt-1 w-full border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900">
              <option>Editorial pitch</option>
              <option>Advertising & sponsorship</option>
              <option>Events & PAM Conference</option>
              <option>Magazine subscription</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block text-sm sm:col-span-2">
            <span className="font-medium text-gray-700">Message</span>
            <textarea
              rows={5}
              className="mt-1 w-full border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              required
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-gray-900 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-black"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

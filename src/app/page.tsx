export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-sky-700 to-sky-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Dale Hollow Tackle Co
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-sky-100">
            Your local source for quality fishing tackle on Dale Hollow Lake
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.claypowersports.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 font-semibold text-sky-800 shadow-lg transition hover:bg-sky-50 hover:shadow-xl"
            >
              Visit Clay Powersports
            </a>
            <a
              href="tel:9312434555"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-sky-800"
            >
              Call Us: (931) 243-4555
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* About Section */}
        <section className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-800">
            Part of Clay Powersports
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Dale Hollow Tackle Co is your destination for fishing tackle, proudly located at
            Clay Powersports in Celina, Tennessee. Whether you&apos;re heading out on Dale Hollow Lake
            or exploring the beautiful waters of the Upper Cumberland, we&apos;ve got the gear you need
            to enjoy life on the water.
          </p>
        </section>

        {/* Info Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Location Card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              <svg className="h-6 w-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-800">Location</h3>
            <p className="text-slate-600">
              615 W Lake Ave<br />
              Celina, TN 38551
            </p>
            <a
              href="https://maps.google.com/?q=615+W+Lake+Ave+Celina+TN+38551"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sky-700 hover:text-sky-800 hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Hours Card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-800">Hours</h3>
            <ul className="space-y-1 text-slate-600">
              <li><span className="font-medium">Mon-Fri:</span> 8:00 AM - 5:00 PM</li>
              <li><span className="font-medium">Saturday:</span> 8:00 AM - 12:00 PM</li>
              <li><span className="font-medium">Sunday:</span> Closed</li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <svg className="h-6 w-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-800">Contact</h3>
            <p className="text-slate-600">
              <a href="tel:9312434555" className="hover:text-sky-700">
                Phone: (931) 243-4555
              </a>
            </p>
            <p className="text-slate-600">
              <a href="sms:9312908237" className="hover:text-sky-700">
                Text: (931) 290-8237
              </a>
            </p>
            <p className="text-slate-600">
              <a href="mailto:eli@claypowersports.com" className="hover:text-sky-700">
                eli@claypowersports.com
              </a>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-sky-700 to-sky-800 p-10 text-center text-white shadow-xl">
          <h2 className="mb-4 text-3xl font-bold">Ready to Fish Dale Hollow?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sky-100">
            Stop by Clay Powersports to check out our selection of fishing tackle,
            boats, and marine equipment. We&apos;re here to help you enjoy life on the water.
          </p>
          <a
            href="https://www.claypowersports.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-sky-800 shadow-lg transition hover:bg-sky-50 hover:shadow-xl"
          >
            Explore Clay Powersports
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-slate-600">
            Dale Hollow Tackle Co at{" "}
            <a
              href="https://www.claypowersports.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 hover:underline"
            >
              Clay Powersports
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            615 W Lake Ave, Celina, TN 38551 | (931) 243-4555
          </p>
        </div>
      </footer>
    </div>
  );
}

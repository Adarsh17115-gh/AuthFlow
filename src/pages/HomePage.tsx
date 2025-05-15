import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex flex-col" data-id="ycjivf0en" data-path="src/pages/HomePage.tsx">
      <header className="py-6 px-8 border-b" data-id="q7hbj56gx" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto flex justify-between items-center" data-id="ffunbxu0m" data-path="src/pages/HomePage.tsx">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="aku2llw8y" data-path="src/pages/HomePage.tsx">
            MessageFlow
          </h1>
          <nav className="space-x-4" data-id="gjjgs7xh1" data-path="src/pages/HomePage.tsx">
            <Button variant="link" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1" data-id="eydlttt85" data-path="src/pages/HomePage.tsx">
        <section className="container mx-auto py-16 px-4 md:py-24" data-id="rot1tyku1" data-path="src/pages/HomePage.tsx">
          <div className="grid md:grid-cols-2 gap-12 items-center" data-id="a5jw49sqm" data-path="src/pages/HomePage.tsx">
            <div className="space-y-6" data-id="ybydxb5uq" data-path="src/pages/HomePage.tsx">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight" data-id="9ihe0ly9r" data-path="src/pages/HomePage.tsx">
                Team communication made <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="3yi5u4prx" data-path="src/pages/HomePage.tsx">simple</span>
              </h2>
              <p className="text-lg text-slate-600" data-id="svjh8owi5" data-path="src/pages/HomePage.tsx">
                MessageFlow helps your team communicate asynchronously with organized threads, channels, and integrations - all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4" data-id="zaaigeyiq" data-path="src/pages/HomePage.tsx">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/auth">Sign up for free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/auth">Sign in</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg shadow-2xl bg-white p-2 border" data-id="88janyc0q" data-path="src/pages/HomePage.tsx">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW0lMjBjb21tdW5pY2F0aW9ufGVufDB8fDB8fHww"
                alt="Team communication"
                className="rounded" data-id="4pqkor7lt" data-path="src/pages/HomePage.tsx" />

            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16 md:py-24" data-id="26xhe1x6u" data-path="src/pages/HomePage.tsx">
          <div className="container mx-auto px-4" data-id="ue7wueg42" data-path="src/pages/HomePage.tsx">
            <div className="text-center mb-16" data-id="h8804qx8c" data-path="src/pages/HomePage.tsx">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="gs81s08ns" data-path="src/pages/HomePage.tsx">Key Features</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-id="mbjco2rb3" data-path="src/pages/HomePage.tsx">
                Everything you need for effective team communication
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8" data-id="b3uh746ta" data-path="src/pages/HomePage.tsx">
              <div className="bg-white p-8 rounded-lg shadow-md" data-id="upyv8eqsc" data-path="src/pages/HomePage.tsx">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6" data-id="t555u1a0i" data-path="src/pages/HomePage.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600" data-id="y5eug4hhb" data-path="src/pages/HomePage.tsx">
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" data-id="tys4v8efi" data-path="src/pages/HomePage.tsx" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3" data-id="ycrodvei5" data-path="src/pages/HomePage.tsx">Organized Threads</h3>
                <p className="text-slate-600" data-id="9ylmnomzy" data-path="src/pages/HomePage.tsx">
                  Keep discussions organized in threads to improve focus and reduce noise.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md" data-id="4ucokhax3" data-path="src/pages/HomePage.tsx">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6" data-id="nyqc1grvi" data-path="src/pages/HomePage.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600" data-id="hr2wcrd5n" data-path="src/pages/HomePage.tsx">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" data-id="odcvybzdi" data-path="src/pages/HomePage.tsx" />
                    <path d="M10 2c1 .5 2 2 2 5" data-id="kvqui4pb0" data-path="src/pages/HomePage.tsx" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3" data-id="fgte6i8eu" data-path="src/pages/HomePage.tsx">Smart Notifications</h3>
                <p className="text-slate-600" data-id="p8fsjrqyl" data-path="src/pages/HomePage.tsx">
                  Get notifications only for what matters to you, with granular control over alerts.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md" data-id="rk4emwwqz" data-path="src/pages/HomePage.tsx">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6" data-id="55abi5rca" data-path="src/pages/HomePage.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600" data-id="fcc09po39" data-path="src/pages/HomePage.tsx">
                    <path d="M2 20h20" data-id="i2shfqhcb" data-path="src/pages/HomePage.tsx" />
                    <path d="M5 20V8.2a3 3 0 0 1 .87-2.13l6.5-6.5a1 1 0 0 1 1.41 0l6.5 6.5A3 3 0 0 1 21 8.2V20" data-id="b0ce2pyca" data-path="src/pages/HomePage.tsx" />
                    <path d="M9 20V9h8v11" data-id="xw9d4zt7i" data-path="src/pages/HomePage.tsx" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3" data-id="r0g85p7do" data-path="src/pages/HomePage.tsx">Team Workspaces</h3>
                <p className="text-slate-600" data-id="l1q6iq2gm" data-path="src/pages/HomePage.tsx">
                  Create dedicated workspaces for different teams or projects, all in one platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 md:py-24 px-4 text-center" data-id="92pndqecr" data-path="src/pages/HomePage.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-id="pfgvn5rva" data-path="src/pages/HomePage.tsx">Ready to get started?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8" data-id="lhy16kzbq" data-path="src/pages/HomePage.tsx">
            Join thousands of teams who use MessageFlow to improve their communication and productivity.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/auth">Sign up for free</Link>
          </Button>
        </section>
      </main>

      <footer className="border-t py-8" data-id="u7motdl1o" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="8kziqt2ba" data-path="src/pages/HomePage.tsx">
          <div className="grid md:grid-cols-3 gap-8" data-id="i9zy3j3fl" data-path="src/pages/HomePage.tsx">
            <div data-id="3y1rrh0ch" data-path="src/pages/HomePage.tsx">
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="iaern3vx9" data-path="src/pages/HomePage.tsx">MessageFlow</h3>
              <p className="text-slate-600" data-id="jwg89s7hb" data-path="src/pages/HomePage.tsx">
                Calm, asynchronous team communication.
              </p>
            </div>
            <div data-id="0wah0aq90" data-path="src/pages/HomePage.tsx">
              <h4 className="font-semibold mb-4" data-id="fxgguc4hr" data-path="src/pages/HomePage.tsx">Links</h4>
              <ul className="space-y-2 text-slate-600" data-id="0h91sj7sm" data-path="src/pages/HomePage.tsx">
                <li data-id="yqbnqk17n" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-blue-600" data-id="6381ti3if" data-path="src/pages/HomePage.tsx">Features</a></li>
                <li data-id="qxj7vdyng" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-blue-600" data-id="3yq3by5rn" data-path="src/pages/HomePage.tsx">Pricing</a></li>
                <li data-id="4r3w7rheq" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-blue-600" data-id="z423v38vp" data-path="src/pages/HomePage.tsx">FAQ</a></li>
              </ul>
            </div>
            <div data-id="polx0hl00" data-path="src/pages/HomePage.tsx">
              <h4 className="font-semibold mb-4" data-id="vj6993ekf" data-path="src/pages/HomePage.tsx">Legal</h4>
              <ul className="space-y-2 text-slate-600" data-id="kvx191b0g" data-path="src/pages/HomePage.tsx">
                <li data-id="50kj7nwl8" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-blue-600" data-id="uz72sqs4h" data-path="src/pages/HomePage.tsx">Terms of Service</a></li>
                <li data-id="mneyznzvf" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-blue-600" data-id="ov2jplept" data-path="src/pages/HomePage.tsx">Privacy Policy</a></li>
                <li data-id="vb9lx4i21" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-blue-600" data-id="3v0spchgg" data-path="src/pages/HomePage.tsx">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-slate-500" data-id="oy4wx7z8y" data-path="src/pages/HomePage.tsx">
            <p data-id="g3kfjf24o" data-path="src/pages/HomePage.tsx">© {new Date().getFullYear()} MessageFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default HomePage;
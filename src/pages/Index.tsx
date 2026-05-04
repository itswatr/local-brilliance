import heroImg from "@/assets/hero-cafe.jpg";
import menuImg from "@/assets/menu-coffee.jpg";
import aboutImg from "@/assets/about-owners.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Star, Instagram, Facebook } from "lucide-react";

const BUSINESS = {
  name: "Maple & Oak Coffee",
  tagline: "Neighborhood coffee, made with care.",
  phone: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  address: "123 Main Street, Springfield, IL 62701",
  mapsQuery: "123+Main+Street+Springfield+IL",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=coffee+shop+springfield",
  orderUrl: "#order",
  reserveUrl: "#reserve",
};

// Open Mon–Fri 7–18, Sat–Sun 8–16
function useOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 Sun .. 6 Sat
  const h = now.getHours() + now.getMinutes() / 60;
  const weekend = day === 0 || day === 6;
  const open = weekend ? h >= 8 && h < 16 : h >= 7 && h < 18;
  const closeAt = weekend ? "4:00 PM" : "6:00 PM";
  const openAt = weekend ? "8:00 AM" : "7:00 AM";
  return { open, closeAt, openAt };
}

const menu = [
  {
    category: "Coffee",
    items: [
      { name: "Drip Coffee", desc: "Single-origin, rotating", price: "3.25" },
      { name: "Espresso", desc: "House blend, double shot", price: "3.50" },
      { name: "Latte", desc: "Whole, oat, or almond", price: "4.75" },
      { name: "Cappuccino", desc: "Classic 6 oz", price: "4.25" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Almond Croissant", desc: "Baked daily in-house", price: "4.50" },
      { name: "Sourdough Toast", desc: "Local butter & jam", price: "4.00" },
      { name: "Banana Bread", desc: "Brown butter, walnut", price: "3.75" },
    ],
  },
  {
    category: "Lunch",
    items: [
      { name: "Turkey Avocado", desc: "On country sourdough", price: "11.50" },
      { name: "Garden Salad", desc: "Seasonal greens, vinaigrette", price: "10.00" },
      { name: "Tomato Soup", desc: "Cup with grilled cheese", price: "9.50" },
    ],
  },
];

const testimonials = [
  { name: "Sarah K.", text: "Best latte in town and the staff remember your name. My favorite Saturday morning spot.", rating: 5 },
  { name: "Marcus T.", text: "Cozy, quiet, and the pastries are unreal. The almond croissant alone is worth the trip.", rating: 5 },
  { name: "Priya R.", text: "Wonderful little café with real character. Highly recommend the seasonal latte.", rating: 5 },
];

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${className}`}>
    <div className="container max-w-6xl">{children}</div>
  </section>
);

const Index = () => {
  const status = useOpenStatus();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container max-w-6xl flex h-16 items-center justify-between">
          <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
            {BUSINESS.name}
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          </nav>
          <Button asChild size="sm">
            <a href={BUSINESS.phoneHref} aria-label={`Call ${BUSINESS.name}`}>
              <Phone className="h-4 w-4" /> Call
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Inside Maple & Oak Coffee café with warm wood interior"
              width={1600}
              height={1088}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
          </div>
          <div className="relative container max-w-6xl py-20 md:py-32 text-background">
            <p className="text-sm uppercase tracking-[0.18em] opacity-90">Springfield, IL</p>
            <h1 className="mt-3 font-serif text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
              {BUSINESS.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg opacity-90">
              Small-batch coffee, fresh pastries, and seasonal lunch — served by people
              who actually live in the neighborhood.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={BUSINESS.orderUrl}>Order Now</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={BUSINESS.reserveUrl}>Reserve a Table</a>
              </Button>
            </div>

            {/* Above-the-fold info bar */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3 max-w-3xl">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 rounded-lg bg-background/95 text-foreground px-4 py-3 hover:bg-background transition"
              >
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Tap to call</div>
                  <div className="text-sm font-medium truncate">{BUSINESS.phone}</div>
                </div>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${BUSINESS.mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg bg-background/95 text-foreground px-4 py-3 hover:bg-background transition"
              >
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Find us</div>
                  <div className="text-sm font-medium truncate">123 Main St, Springfield</div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-lg bg-background/95 text-foreground px-4 py-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${
                        status.open ? "bg-success" : "bg-destructive"
                      }`}
                      aria-hidden
                    />
                    <span className={status.open ? "text-success" : "text-destructive"}>
                      {status.open ? "Open now" : "Closed"}
                    </span>
                  </div>
                  <div className="text-sm font-medium truncate">
                    {status.open ? `Until ${status.closeAt}` : `Opens ${status.openAt}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why us — short trust strip */}
        <Section className="border-b border-border">
          <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">
            <div>
              <h3 className="font-serif text-xl">Made fresh, daily</h3>
              <p className="mt-2 text-muted-foreground">Pastries baked in-house every morning before we open.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl">From this neighborhood</h3>
              <p className="mt-2 text-muted-foreground">Family-owned since 2014. Local roasters, local farms.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl">Loved by 1,200+ locals</h3>
              <p className="mt-2 text-muted-foreground">4.9 stars on Google. Come see why we earn them.</p>
            </div>
          </div>
        </Section>

        {/* Menu */}
        <Section id="menu">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Menu</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Simple, seasonal, well-made.</h2>
              <p className="mt-4 text-muted-foreground max-w-prose">
                A short menu we can do really well. Prices include tax.
              </p>

              <div className="mt-10 space-y-10">
                {menu.map((cat) => (
                  <div key={cat.category}>
                    <h3 className="font-serif text-xl border-b border-border pb-2">{cat.category}</h3>
                    <ul className="mt-4 space-y-4">
                      {cat.items.map((item) => (
                        <li key={item.name} className="flex items-baseline gap-4">
                          <div className="min-w-0 flex-1">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                          </div>
                          <div className="flex-1 hidden sm:block border-b border-dotted border-border translate-y-[-4px]" />
                          <div className="font-medium tabular-nums">${item.price}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href={BUSINESS.orderUrl}>Order Online</a></Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.doordash.com" target="_blank" rel="noreferrer">DoorDash</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.ubereats.com" target="_blank" rel="noreferrer">Uber Eats</a>
                </Button>
              </div>
            </div>
            <div className="md:sticky md:top-24">
              <img
                src={menuImg}
                alt="Latte with leaf art and a fresh almond croissant"
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-xl w-full h-auto object-cover aspect-square shadow-sm"
              />
            </div>
          </div>
        </Section>

        {/* Visit */}
        <Section id="visit" className="bg-secondary/50">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Visit</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Come say hello.</h2>

              <div className="mt-6 flex items-center gap-2 text-sm">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    status.open ? "bg-success" : "bg-destructive"
                  }`}
                  aria-hidden
                />
                <span className={status.open ? "text-success font-medium" : "text-destructive font-medium"}>
                  {status.open ? `Open now — until ${status.closeAt}` : `Closed — opens ${status.openAt}`}
                </span>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <dt className="font-medium">Address</dt>
                    <dd className="text-muted-foreground">{BUSINESS.address}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <dt className="font-medium">Phone</dt>
                    <dd>
                      <a href={BUSINESS.phoneHref} className="text-primary hover:underline">{BUSINESS.phone}</a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <dt className="font-medium">Hours</dt>
                    <dd className="text-muted-foreground">
                      Mon–Fri · 7:00 AM – 6:00 PM<br />
                      Sat–Sun · 8:00 AM – 4:00 PM
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.mapsQuery}`} target="_blank" rel="noreferrer">
                    Get Directions
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={BUSINESS.phoneHref}><Phone className="h-4 w-4" /> Call us</a>
                </Button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Map to Maple & Oak Coffee"
                src={`https://www.google.com/maps?q=${BUSINESS.mapsQuery}&output=embed`}
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </Section>

        {/* About */}
        <Section id="about">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <img
              src={aboutImg}
              alt="Owners of Maple & Oak Coffee behind the counter"
              width={1024}
              height={1024}
              loading="lazy"
              className="rounded-xl w-full h-auto object-cover aspect-[4/5] md:aspect-square shadow-sm"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Our Story</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">A café built around our neighbors.</h2>
              <p className="mt-4 text-muted-foreground">
                We opened Maple & Oak in 2014 with a simple goal: a calm, welcoming spot where you can get a
                genuinely great cup of coffee and feel at home. We work with a small roaster two miles away,
                bake everything in-house, and try to know every regular by name.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <li className="rounded-lg bg-secondary px-4 py-3">
                  <div className="font-serif text-2xl">10+</div>
                  <div className="text-muted-foreground">Years serving Springfield</div>
                </li>
                <li className="rounded-lg bg-secondary px-4 py-3">
                  <div className="font-serif text-2xl">4.9★</div>
                  <div className="text-muted-foreground">1,200+ Google reviews</div>
                </li>
                <li className="rounded-lg bg-secondary px-4 py-3">
                  <div className="font-serif text-2xl">2024</div>
                  <div className="text-muted-foreground">“Best Local Café” — Springfield Weekly</div>
                </li>
                <li className="rounded-lg bg-secondary px-4 py-3">
                  <div className="font-serif text-2xl">100%</div>
                  <div className="text-muted-foreground">Locally roasted beans</div>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Reviews */}
        <Section id="reviews" className="bg-secondary/50">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Reviews</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">What locals are saying.</h2>
            </div>
            <Button asChild variant="outline">
              <a href={BUSINESS.reviewsUrl} target="_blank" rel="noreferrer">Read all on Google</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl bg-card border border-border p-6 shadow-sm">
                <div className="flex gap-0.5 text-primary" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed">“{t.text}”</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-muted-foreground">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* CTA / Signup */}
        <Section id="order">
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Get a free pastry on your next visit.</h2>
            <p className="mt-3 opacity-90 max-w-xl mx-auto">
              Join our list for occasional updates — seasonal menu, neighborhood events, and the
              occasional free croissant.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                form.reset();
                alert("Thanks! Check your inbox for your welcome offer.");
              }}
              className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-md px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50"
              />
              <Button type="submit" variant="secondary" size="lg">Sign up</Button>
            </form>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-sm">
        <div className="container max-w-6xl grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-serif text-lg font-semibold">{BUSINESS.name}</div>
            <p className="mt-2 text-muted-foreground">{BUSINESS.address}</p>
            <a href={BUSINESS.phoneHref} className="mt-1 inline-block text-primary hover:underline">{BUSINESS.phone}</a>
          </div>
          <div>
            <div className="font-medium">Hours</div>
            <p className="mt-2 text-muted-foreground">
              Mon–Fri · 7:00 AM – 6:00 PM<br />
              Sat–Sun · 8:00 AM – 4:00 PM
            </p>
          </div>
          <div>
            <div className="font-medium">Follow</div>
            <div className="mt-2 flex gap-3">
              <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-secondary transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-secondary transition">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="container max-w-6xl mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </div>
      </footer>

      {/* Mobile sticky call bar */}
      <a
        href={BUSINESS.phoneHref}
        className="md:hidden fixed bottom-4 inset-x-4 z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 shadow-lg shadow-foreground/20 font-medium"
      >
        <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
      </a>
    </div>
  );
};

export default Index;

import type { Route } from "./+types/_index";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, Wrench } from "lucide-react";
import { Gallery4 } from "@/components/ui/gallery4";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { getServices } from "@/data/services.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ron's Handyman Services | Denver, CO" },
    {
      name: "description",
      content:
        "Professional handyman services in Denver, CO. Home improvements, remodeling, appliance install, flooring, cabinetry, and more. Available 7 days a week.",
    },
  ];
}

export async function loader() {
  const services = getServices();
  const phoneRaw = process.env.PHONE_NUMBER ?? "6146782211";
  const phoneDisplay = phoneRaw.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  const address = process.env.ADDRESS ?? "{address}";
  return { services, phoneRaw, phoneDisplay, address };
}

const testimonials = [
  {
    text: "Ron fixed our deck and did an outstanding job. He showed up on time, worked efficiently, and the quality was excellent. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Tom Banton",
    role: "Homeowner, Littleton",
  },
  {
    text: "Had Ron assemble furniture for our new home. He was professional, fast, and everything looks great. Will definitely call him again.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Mitchell",
    role: "Homeowner, Denver",
  },
  {
    text: "Ron installed our new flooring and it looks amazing. He was careful, clean, and the finished product exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Chris Smith",
    role: "Homeowner, Littleton",
  },
  {
    text: "We needed drywall repair after some water damage. Ron came out quickly, did quality work, and the price was fair. Fantastic service.",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    name: "Angela Torres",
    role: "Homeowner, Highlands Ranch",
  },
  {
    text: "Ron remodeled our bathroom and the results are stunning. He communicated well throughout the project and delivered exactly what we wanted.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "David Park",
    role: "Homeowner, Englewood",
  },
  {
    text: "Had a fence installed and Ron did a perfect job. Solid, straight, and completed ahead of schedule. Great experience from start to finish.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Lisa Hernandez",
    role: "Homeowner, Littleton",
  },
  {
    text: "Ron installed our new dishwasher and microwave. Quick, tidy, and no issues at all. Reliable and professional — exactly what you want.",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    name: "Mark Johnson",
    role: "Homeowner, Morrison",
  },
  {
    text: "Ron handled our landscaping cleanup and the yard looks completely transformed. Hardworking and thorough — we are very happy with the results.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Emily Carter",
    role: "Homeowner, Littleton",
  },
  {
    text: "Our kitchen cabinets needed refacing and Ron delivered a beautiful result. He takes pride in his work and it shows in every detail.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    name: "James Rivera",
    role: "Homeowner, Centennial",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Index({ loaderData }: Route.ComponentProps) {
  const { services, phoneRaw, phoneDisplay, address } = loaderData;
  const telHref = `tel:${phoneRaw}`;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "hsl(var(--background))" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Wrench className="size-6" style={{ color: "hsl(var(--primary))" }} />
            <span className="text-lg font-bold tracking-tight">
              Ron's Handyman Services
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="transition-colors hover:opacity-70">
              Services
            </a>
            <a href="#testimonials" className="transition-colors hover:opacity-70">
              Reviews
            </a>
            <a href="#about" className="transition-colors hover:opacity-70">
              About
            </a>
          </nav>
          <a
            href={telHref}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
            }}
          >
            <Phone className="size-4" />
            {phoneDisplay}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1080&q=80"
          alt="Professional handyman at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1 text-sm font-medium text-white">
              Serving Denver, CO and surrounding areas
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Reliable Handyman Services You Can Trust
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/80">
              From minor repairs to full remodels, Ron handles every job with
              professionalism, quality craftsmanship, and honest pricing.
              Available 7 days a week.
            </p>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
              }}
            >
              <Phone className="size-5" />
              Call {phoneDisplay}
            </a>
          </motion.div>

          {/* Info bar */}
          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="size-4 shrink-0 text-white" />
              {address}
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock className="size-4 shrink-0 text-white" />
              Sunday – Saturday, All day
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Phone className="size-4 shrink-0 text-white" />
              <a href={telHref} className="hover:underline">
                {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery */}
      <section id="services">
        <Gallery4
          title="Our Services"
          description="Professional handyman services for every need. Browse our categories and call to get started today."
          items={services}
        />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="my-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
            <div className="flex justify-center">
              <div className="border py-1 px-4 rounded-lg">Testimonials</div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
              What our customers say
            </h2>
            <p className="text-center mt-5 opacity-75">
              See what our customers have to say about us.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </section>

      {/* About / CTA — no opacity in initial */}
      <section id="about" className="py-24 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Local, Dependable, and Done Right
              </h2>
              <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                Ron has been serving homeowners in Denver and the surrounding
                Denver metro area with honest, quality handyman work. Whether
                it's a leaky faucet, a new floor, or a full room remodel, every
                job gets the same level of care and attention to detail.
              </p>
              <p className="mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
                Available seven days a week, Ron works around your schedule to
                deliver results you'll be proud of. Call today for a free
                estimate.
              </p>
              <a
                href={telHref}
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                <Phone className="size-5" />
                Call {phoneDisplay}
              </a>
            </motion.div>

            <motion.div
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Professional handyman at work"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-10"
        style={{ backgroundColor: "hsl(var(--muted))" }}
      >
        <div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <div className="flex items-center gap-2 font-medium">
            <Wrench className="size-4" style={{ color: "hsl(var(--primary))" }} />
            Ron's Handyman Services
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>{address}</span>
            <span className="hidden md:inline">|</span>
            <a href={telHref} className="hover:underline">
              {phoneDisplay}
            </a>
            <span className="hidden md:inline">|</span>
            <span>Sun – Sat, All day</span>
          </div>
          <div>&copy; {new Date().getFullYear()} Ron's Handyman Services</div>
        </div>
      </footer>
    </div>
  );
}

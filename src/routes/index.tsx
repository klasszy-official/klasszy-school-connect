import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Bell,
  CalendarDays,
  MessageCircle,
  CalendarHeart,
  Megaphone,
  AlertCircle,
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  HeartHandshake,
  MapPin,
  GraduationCap,
  Phone,
  Mail,
  Star,
  Users,
  Settings,
  Rocket,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PhoneMockup } from "@/components/PhoneMockup";
import { CtaButtons, WHATSAPP_URL, DEMO_URL } from "@/components/CtaButtons";

export const Route = createFileRoute("/")({
  component: Index,
});

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:py-20 ${tone === "muted" ? "bg-muted/40" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          )}
        </div>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] px-4 pb-16 pt-12 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Made for schools in India
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Simple App for{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                School & Parent
              </span>{" "}
              Communication
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
              Send homework, updates and messages to parents easily — all from one friendly app
              your teachers will actually use.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <CtaButtons />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Setup in 1–2 days
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> No tech skills needed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Personal support
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section
        eyebrow="The Problem"
        title="Running a school today is harder than it should be"
        subtitle="Most schools still rely on paper notes, WhatsApp groups and phone calls. Important updates get lost."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: Send,
              title: "Manual messages",
              desc: "Teachers spend hours typing the same updates to dozens of parents.",
            },
            {
              icon: AlertCircle,
              title: "Parents miss updates",
              desc: "Notices buried in long WhatsApp groups never reach the right parent.",
            },
            {
              icon: Megaphone,
              title: "No proper system",
              desc: "Homework, fees and events live in different places — nothing is organised.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section
        tone="muted"
        eyebrow="The Solution"
        title="Klasszy makes school communication effortless"
        subtitle="One simple app that connects your teachers, students and parents — instantly."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Send homework in seconds" },
            { icon: Bell, title: "Instant notifications to parents" },
            { icon: Megaphone, title: "All school updates in one place" },
            { icon: HeartHandshake, title: "Easy for teachers to use" },
          ].map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex flex-col items-start rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-semibold text-foreground">{title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <Section
        id="features"
        eyebrow="Features"
        title="Everything your school needs"
        subtitle="Designed to be so simple, anyone can use it from day one."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: BookOpen, title: "Homework Sharing", desc: "Share daily homework with photos and notes — instantly." },
            { icon: MessageCircle, title: "Messages & Announcements", desc: "Reach the whole school or a single class in one tap." },
            { icon: CalendarDays, title: "Timetable", desc: "Class schedules always at parents' fingertips." },
            { icon: CalendarHeart, title: "Events", desc: "Sports day, PTM, holidays — everyone stays in the loop." },
            { icon: Bell, title: "Parent Notifications", desc: "Push alerts that parents actually see and read." },
            { icon: Users, title: "Class-wise Groups", desc: "Auto-organised groups by class and section." },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        id="how"
        tone="muted"
        eyebrow="How it works"
        title="Get your school online in 3 simple steps"
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { icon: Settings, step: "01", title: "We set up your school", desc: "Our team configures classes, teachers and parents for you." },
            { icon: Rocket, step: "02", title: "Teachers start using the app", desc: "Quick training so your staff feels confident from day one." },
            { icon: Bell, step: "03", title: "Parents receive updates instantly", desc: "Homework, notices and events delivered straight to their phone." },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div
              key={step}
              className="relative rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="absolute right-5 top-5 text-3xl font-bold text-primary/15">
                {step}
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section
        eyebrow="Why Klasszy"
        title="Built with Indian schools in mind"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: HeartHandshake, title: "Very easy to use", desc: "No training manuals. If you can use WhatsApp, you can use Klasszy." },
            { icon: Clock, title: "Fast setup", desc: "Up and running in 1–2 days. We handle the heavy lifting." },
            { icon: Phone, title: "Personal support", desc: "Talk to a real person whenever you need help." },
            { icon: MapPin, title: "Made for India", desc: "Designed for schools in small towns and growing cities." },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section
        id="pricing"
        tone="muted"
        eyebrow="Pricing"
        title="Affordable plans for every school"
        subtitle="No hidden charges. Simple, transparent pricing based on your school size."
      >
        <div className="mx-auto max-w-xl">
          <div className="rounded-3xl border border-primary/20 bg-card p-8 text-center shadow-[var(--shadow-soft)]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Custom plan
            </span>
            <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Plans that fit your school
            </h3>
            <p className="mt-3 text-muted-foreground">
              Whether you have 50 students or 5,000, we have a plan that works. Talk to us and
              we'll build the right package for you.
            </p>
            <ul className="mx-auto mt-6 max-w-sm space-y-3 text-left">
              {[
                "All features included",
                "Free setup & training",
                "Unlimited parent accounts",
                "Personal support over WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center">
              <CtaButtons />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Contact us for pricing</p>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="Loved by schools"
        title="What principals are saying"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Mr. Rajesh Verma",
              role: "Principal, Saraswati Public School",
              location: "Bareilly, UP",
              quote:
                "Parents finally see homework on time. Our teachers love how simple Klasszy is — no more long WhatsApp groups.",
            },
            {
              name: "Mrs. Anitha Reddy",
              role: "Correspondent, Sunrise English Medium",
              location: "Warangal, TS",
              quote:
                "Setup was done in just two days. The support team is very patient and responds on WhatsApp instantly.",
            },
            {
              name: "Mr. Suresh Patel",
              role: "Owner, Little Stars Academy",
              location: "Anand, GJ",
              quote:
                "We tried 3 apps before. Klasszy is the only one our teachers actually use every day. Highly recommend.",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-0.5 text-[oklch(0.75_0.18_85)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section id="contact" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] px-6 py-14 text-center shadow-[var(--shadow-soft)] sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Start your school's digital journey today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            Book a free demo and see how Klasszy can make your school's communication simpler in
            just a few days.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-muted/30 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-lg font-bold">Klasszy</span>
              </div>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Simple school & parent communication app — built for schools across India.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
                <li><a href="#how" className="hover:text-foreground">How it works</a></li>
                <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+919999999999" className="hover:text-foreground">+91 99999 99999</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hello@klasszy.com" className="hover:text-foreground">hello@klasszy.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    WhatsApp us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Klasszy. Made with care for schools in India.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

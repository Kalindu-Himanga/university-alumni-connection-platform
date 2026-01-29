import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import {
  GraduationCap,
  Users,
  Briefcase,
  Calendar,
  Trophy,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Quote,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Alumni Network",
    description: "Connect with graduates from your university. Build meaningful professional relationships that last a lifetime.",
  },
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description: "Discover career opportunities posted by fellow alumni. Help students find internships and kickstart their careers.",
  },
  {
    icon: BookOpen,
    title: "Mentorship Programs",
    description: "Share your expertise or find a mentor. Bridge the gap between experience and ambition.",
  },
  {
    icon: Calendar,
    title: "Events & Reunions",
    description: "Stay updated with university events, reunions, and networking sessions. Never miss a chance to reconnect.",
  },
  {
    icon: Trophy,
    title: "Achievement Showcase",
    description: "Celebrate success stories. Share your milestones and inspire the next generation of graduates.",
  },
  {
    icon: GraduationCap,
    title: "University Connection",
    description: "Stay connected with your alma mater. Contribute to its growth and legacy.",
  },
]

const stats = [
  { value: "5,000+", label: "Active Alumni" },
  { value: "1,200+", label: "Job Postings" },
  { value: "500+", label: "Mentorship Connections" },
  { value: "100+", label: "Annual Events" },
]

const testimonials = [
  {
    quote: "UniBondz helped me find my dream job through an alumni connection. The platform made networking effortless.",
    author: "Sarah Fernando",
    role: "Software Engineer, Class of 2020",
  },
  {
    quote: "As a mentor, I have guided over 20 students through their career journeys. This platform makes giving back so rewarding.",
    author: "Dr. Kamal Perera",
    role: "Senior Lecturer, Class of 2010",
  },
  {
    quote: "The events feature keeps me connected with old friends and helps me make new professional connections.",
    author: "Nimal Silva",
    role: "Entrepreneur, Class of 2015",
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="public" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sidebar py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] bg-card" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sidebar-border px-4 py-2 text-sm bg-[rgba(237,242,248,1)]">
              <GraduationCap className="h-4 w-4" />
              {"Connecting University Graduates"} 
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance text-black">Stay Connected with your  </span>
              <br />
              <span className="text-primary">Alma Mater</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-black">
              UniBondz is your gateway to a thriving alumni community. Share achievements, discover opportunities, find mentors, and stay connected with your university family.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/register?role=alumni">
                  Join as Alumni
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-sidebar-border hover:bg-sidebar-accent sm:w-auto bg-transparent text-card-foreground">
                <Link href="/register?role=student">
                  Join as Student
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need to Stay Connected
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A comprehensive platform designed to strengthen the bond between alumni, students, and the university.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get Started in Minutes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join the UniBondz community in three simple steps
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create Your Account",
                description: "Sign up as an alumni or student with your university credentials.",
              },
              {
                step: "02",
                title: "Complete Your Profile",
                description: "Add your professional details, achievements, and interests.",
              },
              {
                step: "03",
                title: "Start Connecting",
                description: "Explore opportunities, find mentors, and engage with the community.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Community Says
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from alumni and students who have benefited from UniBondz
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="relative">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-primary/20" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Connect?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands of alumni and students building meaningful connections.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/register">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">UniBondz</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Connecting graduates and empowering futures at Uva Wellassa University.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Platform</h3>
              <ul className="mt-4 space-y-2">
                {["Alumni Network", "Job Board", "Mentorship", "Events"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">University</h3>
              <ul className="mt-4 space-y-2">
                {["About UWU", "ICT Department", "Contact Us", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-4 space-y-2">
                {["Help Center", "FAQs", "Report Issue", "Feedback"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 UniBondz. Uva Wellassa University of Sri Lanka. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

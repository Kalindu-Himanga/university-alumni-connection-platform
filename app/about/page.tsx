import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import {
  GraduationCap,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react"

const teamMembers = [
  { name: "E.A. Didula Pabasara", regNo: "UWU/ICT/22/010" },
  { name: "K.P. Savindu Sathsara", regNo: "UWU/ICT/22/040" },
  { name: "B.G.K. Himanga", regNo: "UWU/ICT/22/041" },
  { name: "M.A.D. Tharindi Navodi", regNo: "UWU/ICT/22/042" },
  { name: "H.M. Anuththara Senuri Herath", regNo: "UWU/ICT/22/092" },
]

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in the power of community to transform lives and careers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from features to user experience.",
  },
  {
    icon: Globe,
    title: "Inclusivity",
    description: "We welcome all members of the university community, regardless of background.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We foster meaningful connections between alumni, students, and faculty.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="public" />

      {/* Hero Section */}
      <section className="bg-sidebar py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl">
              About UniBondz
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-sidebar-foreground/70">
              A university-focused platform designed to strengthen alumni engagement by connecting graduates with their alma mater.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To develop a centralized web-based alumni engagement platform that enhances communication and collaboration between graduates and the university. We aim to create an interactive digital bridge between former students, current students, and the academic community.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To be the leading platform for university alumni engagement in Sri Lanka, fostering a vibrant community where knowledge sharing, mentorship, and professional growth thrive. We envision a future where every graduate remains connected to their alma mater.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Challenge
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Universities face significant challenges in maintaining alumni relationships
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "No centralized platform for alumni interaction",
              "Difficulty maintaining updated alumni profiles",
              "No structured system for sharing achievements",
              "Job opportunities are scattered and unorganized",
              "Lack of formal mentorship systems",
              "Manual methods for managing alumni data",
            ].map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <span className="text-xs font-bold text-destructive">!</span>
                </div>
                <p className="text-sm text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Solution
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              UniBondz provides a comprehensive platform to address these challenges
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "User-friendly platform for alumni registration and profile management",
              "Achievement sharing and professional updates",
              "Job postings and internship opportunities for students",
              "Mentorship module connecting alumni and students",
              "Admin dashboard for managing events and announcements",
              "Secure authentication and role-based access control",
            ].map((solution) => (
              <div
                key={solution}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10">
                  <span className="text-xs font-bold text-success">✓</span>
                </div>
                <p className="text-sm text-foreground">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The dedicated students behind UniBondz
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {teamMembers.map((member) => (
              <Card key={member.regNo}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{member.regNo}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Supervised by <span className="font-semibold">Ms. K.R.R. Premathilaka</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Department of Information and Communication Technology
            </p>
            <p className="text-sm text-muted-foreground">
              Faculty of Technological Studies, Uva Wellassa University of Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Join the UniBondz Community
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Be part of a growing network of alumni and students.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            2025 UniBondz. Uva Wellassa University of Sri Lanka. ICT 321-2 Project.
          </p>
        </div>
      </footer>
    </div>
  )
}

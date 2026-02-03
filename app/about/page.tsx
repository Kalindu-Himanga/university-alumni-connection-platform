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
<section className="relative bg-white pt-2 pb-16 sm:pt-4 sm:pb-20">
{/* Rounded Hero Container */}

<div className="relative mx-auto max-w-[91rem] overflow-hidden rounded-3xl bg-white">
{/* Background Image */}
<img src="/hero-image.png" alt="Hero background" className="absolute inset-0 h-full w-full object-cover" />

{/* Dark Gradient Overlay */}

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/35" />
{/* Existing Grid Pattern */}

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
{/* Text Content on the left side (same font size for both lines) */}

<div className="absolute left-6 top-1/2 -translate-y-1/2 max-w-[40rem] px-4 sm:px-6"> {/* Use the same font size for both lines by applying the same classes */} <h1 className="text-[3rem] sm:text-[3rem] md:text-[3rem] font-extrabold tracking-tight text-white drop-shadow-md"> Stay Connected with your </h1> <h2 className="mt-0 text-[3rem] sm:text-[3rem] md:text-[3rem] font-extrabold text-white drop-shadow-md"> Alma Mater </h2> </div>
{/* Empty spacer to control height */}

<div className="relative h-[400px] sm:h-[500px] lg:h-[544px]" /> </div> </section>

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
              About Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              UniBondz is a digital platform created to connect students, faculty, and administrators within the university. It helps users manage profiles, stay updated on events, and communicate easily through a simple and secure system. UniBondz aims to improve campus connectivity and make university life more organized and engaging.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              
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

      {/* Values */}
      <section className="bg-white py-20">
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
            © 2026 UniBondz. Uva Wellassa University of Sri Lanka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

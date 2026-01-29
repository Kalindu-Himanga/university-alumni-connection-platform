import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Briefcase,
  BookOpen,
  Calendar,
  Users,
  ArrowRight,
  Clock,
  MapPin,
  Trophy,
  Building,
} from "lucide-react"

const recentJobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Solutions Lanka",
    location: "Colombo",
    type: "Full-time",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Junior Data Analyst",
    company: "Analytics Pro",
    location: "Remote",
    type: "Internship",
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Kandy",
    type: "Contract",
    posted: "5 days ago",
  },
]

const upcomingEvents = [
  {
    title: "Career Fair 2025",
    date: "Mar 5, 2025",
    location: "Faculty of Technology",
  },
  {
    title: "Tech Talk: AI in Industry",
    date: "Feb 20, 2025",
    location: "Virtual Event",
  },
]

const featuredAlumni = [
  {
    name: "Dr. Kamal Perera",
    title: "Senior Software Engineer",
    company: "Tech Solutions Lanka",
    class: "2015",
  },
  {
    name: "Sarah Fernando",
    title: "Data Scientist",
    company: "AI Labs",
    class: "2020",
  },
]

export default function StudentDashboard() {
  return (
    <DashboardLayout variant="student" userName="Nimal Fernando">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Welcome, Nimal!
          </h1>
          <p className="mt-1 text-muted-foreground">
            Explore opportunities and connect with alumni mentors.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Jobs Available"
            value={45}
            description="Open positions"
            icon={Briefcase}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Mentors Available"
            value={28}
            description="Ready to help"
            icon={BookOpen}
          />
          <StatCard
            title="Upcoming Events"
            value={6}
            description="This month"
            icon={Calendar}
          />
          <StatCard
            title="Alumni Network"
            value="2.5K+"
            description="Active members"
            icon={Users}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Job Postings */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Latest Job Opportunities</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/student/jobs">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-start gap-3 rounded-lg border border-border p-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-foreground">{job.title}</p>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {job.type}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {job.posted}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events & Featured Alumni */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/student/events">
                    View all
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-border p-3"
                    >
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{event.title}</p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Register
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Alumni */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Featured Mentors</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/student/alumni-directory">
                    View all
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {featuredAlumni.map((alumni, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg border border-border p-3"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {alumni.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{alumni.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {alumni.title} at {alumni.company}
                        </p>
                      </div>
                      <Badge variant="secondary">Class of {alumni.class}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Explore UniBondz</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent" asChild>
                <Link href="/student/jobs">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <span>Browse Jobs</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent" asChild>
                <Link href="/student/mentorship">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span>Find a Mentor</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent" asChild>
                <Link href="/student/alumni-directory">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Alumni Directory</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent" asChild>
                <Link href="/student/events">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span>View Events</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

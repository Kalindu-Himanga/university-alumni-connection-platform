import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Trophy,
  Briefcase,
  Calendar,
  Users,
  ArrowRight,
  Clock,
  MapPin,
} from "lucide-react"

const recentActivities = [
  {
    type: "achievement",
    title: "New achievement shared",
    description: "Your achievement \"Promoted to Senior Developer\" received 24 likes",
    time: "2 hours ago",
  },
  {
    type: "job",
    title: "Job posting approved",
    description: "Your job posting \"Full Stack Developer\" is now live",
    time: "5 hours ago",
  },
  {
    type: "event",
    title: "Event RSVP confirmed",
    description: "You are registered for \"Annual Alumni Meetup 2025\"",
    time: "1 day ago",
  },
  {
    type: "mentorship",
    title: "New mentorship request",
    description: "A student has requested to connect with you for mentorship",
    time: "2 days ago",
  },
]

const upcomingEvents = [
  {
    title: "Annual Alumni Meetup 2025",
    date: "Feb 15, 2025",
    time: "10:00 AM",
    location: "UWU Main Auditorium",
    attendees: 156,
  },
  {
    title: "Tech Talk: AI in Industry",
    date: "Feb 20, 2025",
    time: "2:00 PM",
    location: "Virtual Event",
    attendees: 89,
  },
  {
    title: "Career Fair 2025",
    date: "Mar 5, 2025",
    time: "9:00 AM",
    location: "Faculty of Technology",
    attendees: 234,
  },
]

export default function AlumniDashboard() {
  return (
    <DashboardLayout variant="alumni" userName="Kamal Perera">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Welcome back, Kamal!
          </h1>
          <p className="mt-1 text-muted-foreground">
            {"Here's"} what{"'s"} happening in your alumni network today.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Achievements"
            value={12}
            description="Total shared"
            icon={Trophy}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Job Postings"
            value={5}
            description="Active listings"
            icon={Briefcase}
          />
          <StatCard
            title="Events Attended"
            value={8}
            description="This year"
            icon={Calendar}
            trend={{ value: 25, isPositive: true }}
          />
          <StatCard
            title="Mentees"
            value={3}
            description="Active connections"
            icon={Users}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/alumni/notifications">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-border p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      {activity.type === "achievement" && <Trophy className="h-4 w-4 text-primary" />}
                      {activity.type === "job" && <Briefcase className="h-4 w-4 text-primary" />}
                      {activity.type === "event" && <Calendar className="h-4 w-4 text-primary" />}
                      {activity.type === "mentorship" && <Users className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-foreground">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/alumni/events">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <Badge variant="secondary">{event.attendees} attending</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent" asChild>
                <Link href="/alumni/achievements">
                  <Trophy className="h-6 w-6 text-primary" />
                  <span>Share Achievement</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent" asChild>
                <Link href="/alumni/jobs">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <span>Post a Job</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent" asChild>
                <Link href="/alumni/events">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span>Create Event</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent" asChild>
                <Link href="/alumni/mentorship">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Offer Mentorship</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

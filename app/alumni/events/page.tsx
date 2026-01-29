"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Calendar,
  Plus,
  MapPin,
  Clock,
  Users,
  Video,
  Building,
  CheckCircle,
  XCircle,
} from "lucide-react"

const events = [
  {
    id: 1,
    title: "Annual Alumni Meetup 2025",
    description: "Join us for the annual gathering of UWU alumni. Network with fellow graduates, share experiences, and celebrate our university community.",
    date: "Feb 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "UWU Main Auditorium",
    type: "in-person",
    organizer: "Dr. Kamal Perera",
    attendees: 156,
    maxAttendees: 200,
    status: "upcoming",
    isRegistered: true,
  },
  {
    id: 2,
    title: "Tech Talk: AI in Industry",
    description: "A virtual session exploring how AI is transforming various industries. Guest speakers from leading tech companies will share their insights.",
    date: "Feb 20, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Zoom Meeting",
    type: "virtual",
    organizer: "ICT Alumni Association",
    attendees: 89,
    maxAttendees: 500,
    status: "upcoming",
    isRegistered: false,
  },
  {
    id: 3,
    title: "Career Fair 2025",
    description: "Connect with top employers looking to hire UWU graduates. Bring your resume and be ready for on-the-spot interviews.",
    date: "Mar 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Faculty of Technology Building",
    type: "in-person",
    organizer: "Career Guidance Unit",
    attendees: 234,
    maxAttendees: 500,
    status: "upcoming",
    isRegistered: true,
  },
  {
    id: 4,
    title: "Alumni Networking Dinner",
    description: "An exclusive dinner event for ICT department alumni. Great food, great company, and great conversations.",
    date: "Jan 20, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Colombo Grand Hotel",
    type: "in-person",
    organizer: "Dr. Kamal Perera",
    attendees: 45,
    maxAttendees: 50,
    status: "past",
    isRegistered: true,
  },
]

const eventTypes = ["In-Person", "Virtual", "Hybrid"]

export default function AlumniEvents() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const upcomingEvents = events.filter((e) => e.status === "upcoming")
  const pastEvents = events.filter((e) => e.status === "past")
  const myEvents = events.filter((e) => e.organizer === "Dr. Kamal Perera")

  return (
    <DashboardLayout variant="alumni" userName="Kamal Perera">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Events</h1>
            <p className="mt-1 text-muted-foreground">
              Discover and manage alumni events and reunions
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
                <DialogDescription>
                  Organize an event for the alumni community
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="event-title">Event Title</Label>
                  <Input id="event-title" placeholder="e.g., Alumni Networking Night" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-description">Description</Label>
                  <Textarea
                    id="event-description"
                    placeholder="Describe the event..."
                    rows={4}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="event-date">Date</Label>
                    <Input id="event-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-time">Time</Label>
                    <Input id="event-time" type="time" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select>
                      <SelectTrigger id="event-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-capacity">Max Attendees</Label>
                    <Input id="event-capacity" type="number" placeholder="e.g., 100" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-location">Location/Link</Label>
                  <Input id="event-location" placeholder="Venue address or meeting link" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Event</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{upcomingEvents.length}</p>
                <p className="text-sm text-muted-foreground">Upcoming Events</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {events.filter((e) => e.isRegistered).length}
                </p>
                <p className="text-sm text-muted-foreground">Registered</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Building className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{myEvents.length}</p>
                <p className="text-sm text-muted-foreground">Events Organized</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Users className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{pastEvents.length}</p>
                <p className="text-sm text-muted-foreground">Events Attended</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming ({upcomingEvents.length})</TabsTrigger>
            <TabsTrigger value="my-events">My Events ({myEvents.length})</TabsTrigger>
            <TabsTrigger value="past">Past ({pastEvents.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-events" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {myEvents.map((event) => (
                <EventCard key={event.id} event={event} isOrganizer />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

interface EventCardProps {
  event: (typeof events)[0]
  isOrganizer?: boolean
  isPast?: boolean
}

function EventCard({ event, isOrganizer, isPast }: EventCardProps) {
  return (
    <Card className={isPast ? "opacity-70" : ""}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant={event.type === "virtual" ? "secondary" : "default"}>
              {event.type === "virtual" ? (
                <Video className="mr-1 h-3 w-3" />
              ) : (
                <Building className="mr-1 h-3 w-3" />
              )}
              {event.type}
            </Badge>
            {event.isRegistered && !isOrganizer && (
              <Badge variant="outline" className="gap-1 text-success border-success">
                <CheckCircle className="h-3 w-3" />
                Registered
              </Badge>
            )}
            {isOrganizer && (
              <Badge variant="outline" className="gap-1">
                Organizer
              </Badge>
            )}
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-foreground">{event.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{event.description}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {event.date}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {event.time}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {event.location}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            {event.attendees} / {event.maxAttendees} attendees
          </div>
        </div>

        <div className="mt-4 border-t border-border pt-4">
          {isPast ? (
            <Button variant="outline" className="w-full bg-transparent" disabled>
              Event Ended
            </Button>
          ) : isOrganizer ? (
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                Edit Event
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                View Attendees
              </Button>
            </div>
          ) : event.isRegistered ? (
            <Button variant="outline" className="w-full bg-transparent">
              <XCircle className="mr-2 h-4 w-4" />
              Cancel Registration
            </Button>
          ) : (
            <Button className="w-full">
              <CheckCircle className="mr-2 h-4 w-4" />
              Register Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

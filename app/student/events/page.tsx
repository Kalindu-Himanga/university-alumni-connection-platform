"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Search,
  Filter,
  Video,
  Building,
  CheckCircle,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Career Fair 2026",
    description:
      "Connect with top tech companies recruiting from our university. Meet recruiters, attend workshops, and discover internship opportunities.",
    date: "2026-02-15",
    time: "10:00 AM - 4:00 PM",
    location: "University Main Hall",
    type: "In-Person",
    category: "Career",
    attendees: 245,
    maxAttendees: 500,
    isRegistered: true,
    organizer: "Career Services",
  },
  {
    id: 2,
    title: "Alumni Success Stories: From Campus to Corporate",
    description:
      "Hear inspiring stories from successful alumni who made it to Fortune 500 companies. Learn about their journey and get career advice.",
    date: "2026-02-20",
    time: "6:00 PM - 8:00 PM",
    location: "Online (Zoom)",
    type: "Virtual",
    category: "Networking",
    attendees: 156,
    maxAttendees: 300,
    isRegistered: false,
    organizer: "Alumni Association",
  },
  {
    id: 3,
    title: "Resume Workshop with Industry Experts",
    description:
      "Get your resume reviewed by HR professionals from leading companies. Learn best practices and common mistakes to avoid.",
    date: "2026-02-28",
    time: "2:00 PM - 5:00 PM",
    location: "Room 302, Business Building",
    type: "In-Person",
    category: "Workshop",
    attendees: 42,
    maxAttendees: 50,
    isRegistered: false,
    organizer: "Career Services",
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    description:
      "Watch student and alumni entrepreneurs pitch their startup ideas. Network with investors and fellow innovators.",
    date: "2026-03-05",
    time: "7:00 PM - 9:30 PM",
    location: "Innovation Center Auditorium",
    type: "Hybrid",
    category: "Networking",
    attendees: 189,
    maxAttendees: 250,
    isRegistered: true,
    organizer: "Entrepreneurship Club",
  },
  {
    id: 5,
    title: "Data Science Bootcamp",
    description:
      "Intensive 3-day workshop covering Python, machine learning basics, and data visualization. Perfect for beginners.",
    date: "2026-03-12",
    time: "9:00 AM - 5:00 PM",
    location: "Computer Lab A",
    type: "In-Person",
    category: "Workshop",
    attendees: 28,
    maxAttendees: 30,
    isRegistered: false,
    organizer: "CS Department",
  },
];

const myRegisteredEvents = upcomingEvents.filter((e) => e.isRegistered);

const pastEvents = [
  {
    id: 101,
    title: "Winter Networking Mixer",
    date: "2026-01-15",
    type: "In-Person",
    category: "Networking",
    attended: true,
  },
  {
    id: 102,
    title: "Interview Skills Workshop",
    date: "2026-01-10",
    type: "Virtual",
    category: "Workshop",
    attended: true,
  },
  {
    id: 103,
    title: "Industry Panel: Finance Careers",
    date: "2025-12-12",
    type: "Virtual",
    category: "Career",
    attended: false,
  },
];

export default function StudentEventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      typeFilter === "all" ||
      event.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesCategory =
      categoryFilter === "all" ||
      event.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesType && matchesCategory;
  });

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "Virtual":
        return <Video className="h-4 w-4" />;
      case "In-Person":
        return <Building className="h-4 w-4" />;
      default:
        return <Video className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Career":
        return "bg-primary text-primary-foreground";
      case "Networking":
        return "bg-accent text-accent-foreground";
      case "Workshop":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Events</h1>
          <p className="text-muted-foreground mt-1">
            Discover and register for career events, workshops, and networking
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{upcomingEvents.length}</p>
                  <p className="text-sm text-muted-foreground">
                    Upcoming Events
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {myRegisteredEvents.length}
                  </p>
                  <p className="text-sm text-muted-foreground">Registered</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Users className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {pastEvents.filter((e) => e.attended).length}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Events Attended
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Calendar className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Feb 15</p>
                  <p className="text-sm text-muted-foreground">Next Event</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="registered">My Registrations</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search events..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-full md:w-40">
                      <SelectValue placeholder="Event Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="virtual">Virtual</SelectItem>
                      <SelectItem value="in-person">In-Person</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="w-full md:w-40">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="career">Career</SelectItem>
                      <SelectItem value="networking">Networking</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className={event.isRegistered ? "ring-2 ring-accent" : ""}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                          <Badge variant="outline" className="gap-1">
                            {getEventTypeIcon(event.type)}
                            {event.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                      </div>
                      {event.isRegistered && (
                        <Badge className="bg-success text-success-foreground shrink-0">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Registered
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>
                          {event.attendees} / {event.maxAttendees} registered
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="text-xs text-muted-foreground">
                        Organized by {event.organizer}
                      </span>
                      {event.isRegistered ? (
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      ) : (
                        <Button size="sm">Register Now</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="registered" className="space-y-4">
            {myRegisteredEvents.length > 0 ? (
              <div className="space-y-4">
                {myRegisteredEvents.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge className={getCategoryColor(event.category)}>
                              {event.category}
                            </Badge>
                            <Badge variant="outline" className="gap-1">
                              {getEventTypeIcon(event.type)}
                              {event.type}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Cancel Registration
                          </Button>
                          <Button size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    No Registered Events
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Browse upcoming events and register to get started
                  </p>
                  <Button>Browse Events</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            <div className="space-y-3">
              {pastEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-2 rounded-lg ${event.attended ? "bg-success/10" : "bg-muted"}`}
                        >
                          {event.attended ? (
                            <CheckCircle className="h-5 w-5 text-success" />
                          ) : (
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {event.type}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {event.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={event.attended ? "default" : "secondary"}
                        className={
                          event.attended
                            ? "bg-success text-success-foreground"
                            : ""
                        }
                      >
                        {event.attended ? "Attended" : "Missed"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

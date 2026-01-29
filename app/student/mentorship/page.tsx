"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Search,
  Users,
  MessageSquare,
  Calendar,
  Star,
  Clock,
  CheckCircle,
  Filter,
  Briefcase,
  GraduationCap,
  MapPin,
  Send,
} from "lucide-react";

const availableMentors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    avatar: "/placeholder.svg?height=80&width=80",
    title: "Senior Data Scientist",
    company: "Google",
    expertise: ["Machine Learning", "Data Analysis", "Python"],
    graduationYear: 2015,
    rating: 4.9,
    reviews: 28,
    availability: "Available",
    location: "San Francisco, CA",
    bio: "Passionate about helping students transition into tech careers. 10+ years of experience in data science.",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=80&width=80",
    title: "Product Manager",
    company: "Microsoft",
    expertise: ["Product Strategy", "UX Design", "Agile"],
    graduationYear: 2017,
    rating: 4.8,
    reviews: 22,
    availability: "Limited",
    location: "Seattle, WA",
    bio: "Former software engineer turned PM. Love sharing insights about product development.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=80&width=80",
    title: "Startup Founder",
    company: "TechVenture Inc.",
    expertise: ["Entrepreneurship", "Fundraising", "Leadership"],
    graduationYear: 2012,
    rating: 5.0,
    reviews: 35,
    availability: "Available",
    location: "Austin, TX",
    bio: "Built two successful startups. Ready to guide the next generation of entrepreneurs.",
  },
  {
    id: 4,
    name: "James Thompson",
    avatar: "/placeholder.svg?height=80&width=80",
    title: "Investment Banker",
    company: "Goldman Sachs",
    expertise: ["Finance", "Investment Analysis", "M&A"],
    graduationYear: 2014,
    rating: 4.7,
    reviews: 19,
    availability: "Available",
    location: "New York, NY",
    bio: "Helping students navigate the competitive world of finance and banking.",
  },
];

const myMentorships = [
  {
    id: 1,
    mentor: {
      name: "Dr. Sarah Mitchell",
      avatar: "/placeholder.svg?height=60&width=60",
      title: "Senior Data Scientist",
      company: "Google",
    },
    status: "Active",
    startDate: "2025-10-15",
    nextSession: "2026-02-05",
    sessionsCompleted: 6,
    topics: ["Career Guidance", "Technical Skills"],
  },
];

const pendingRequests = [
  {
    id: 1,
    mentor: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=60&width=60",
      title: "Startup Founder",
      company: "TechVenture Inc.",
    },
    requestDate: "2026-01-20",
    message: "I would love to learn about entrepreneurship and startup funding.",
    status: "Pending",
  },
];

export default function StudentMentorshipPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("all");

  const filteredMentors = availableMentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((exp) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExpertise =
      expertiseFilter === "all" ||
      mentor.expertise.some((exp) =>
        exp.toLowerCase().includes(expertiseFilter.toLowerCase())
      );
    return matchesSearch && matchesExpertise;
  });

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Mentorship Programs
          </h1>
          <p className="text-muted-foreground mt-1">
            Connect with experienced alumni mentors to guide your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-muted-foreground">
                    Active Mentorships
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-muted-foreground">
                    Pending Requests
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-sm text-muted-foreground">
                    Sessions Completed
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
                  <p className="text-2xl font-bold">Feb 5</p>
                  <p className="text-sm text-muted-foreground">Next Session</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="find" className="space-y-4">
          <TabsList>
            <TabsTrigger value="find">Find Mentors</TabsTrigger>
            <TabsTrigger value="active">My Mentorships</TabsTrigger>
            <TabsTrigger value="pending">Pending Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="find" className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name, company, or expertise..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select
                    value={expertiseFilter}
                    onValueChange={setExpertiseFilter}
                  >
                    <SelectTrigger className="w-full md:w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Expertise</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="entrepreneurship">
                        Entrepreneurship
                      </SelectItem>
                      <SelectItem value="product">Product Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                        <AvatarFallback className="text-lg">
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {mentor.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {mentor.title}
                            </p>
                          </div>
                          <Badge
                            variant={
                              mentor.availability === "Available"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              mentor.availability === "Available"
                                ? "bg-success text-success-foreground"
                                : ""
                            }
                          >
                            {mentor.availability}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {mentor.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <GraduationCap className="h-3 w-3" />
                            Class of {mentor.graduationYear}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          <span className="font-medium">{mentor.rating}</span>
                          <span className="text-muted-foreground text-sm">
                            ({mentor.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      {mentor.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {mentor.expertise.map((exp) => (
                        <Badge key={exp} variant="outline">
                          {exp}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {mentor.location}
                      </span>
                      <Button>
                        <Send className="h-4 w-4 mr-2" />
                        Request Mentorship
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {myMentorships.length > 0 ? (
              myMentorships.map((mentorship) => (
                <Card key={mentorship.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src={mentorship.mentor.avatar || "/placeholder.svg"}
                            alt={mentorship.mentor.name}
                          />
                          <AvatarFallback>
                            {mentorship.mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {mentorship.mentor.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {mentorship.mentor.title} at{" "}
                            {mentorship.mentor.company}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className="bg-success text-success-foreground">
                              {mentorship.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              Since{" "}
                              {new Date(
                                mentorship.startDate
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-success" />
                            {mentorship.sessionsCompleted} sessions completed
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          Next session:{" "}
                          {new Date(
                            mentorship.nextSession
                          ).toLocaleDateString()}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button size="sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Session
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-2">
                        Topics covered:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mentorship.topics.map((topic) => (
                          <Badge key={topic} variant="secondary">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    No Active Mentorships
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Start your mentorship journey by connecting with experienced
                    alumni
                  </p>
                  <Button>Find a Mentor</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {pendingRequests.length > 0 ? (
              pendingRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-14 w-14">
                          <AvatarImage
                            src={request.mentor.avatar || "/placeholder.svg"}
                            alt={request.mentor.name}
                          />
                          <AvatarFallback>
                            {request.mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">
                            {request.mentor.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {request.mentor.title} at {request.mentor.company}
                          </p>
                          <Badge variant="outline" className="mt-2">
                            <Clock className="h-3 w-3 mr-1" />
                            {request.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Requested on{" "}
                        {new Date(request.requestDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-1">Your message:</p>
                      <p className="text-sm text-muted-foreground">
                        {request.message}
                      </p>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        Cancel Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    No Pending Requests
                  </h3>
                  <p className="text-muted-foreground">
                    All your mentorship requests have been processed
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

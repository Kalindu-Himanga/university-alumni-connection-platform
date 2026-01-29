"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  BookOpen,
  Users,
  MessageCircle,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Calendar,
  Mail,
  GraduationCap,
} from "lucide-react"

const mentorshipRequests = [
  {
    id: 1,
    student: "Nimal Fernando",
    regNo: "UWU/ICT/22/015",
    email: "nimal@uwu.ac.lk",
    department: "ICT",
    year: "3rd Year",
    topic: "Career guidance in Software Engineering",
    message: "I am interested in pursuing a career in software engineering and would love to learn from your experience at Tech Solutions Lanka.",
    requestedAt: "Jan 15, 2025",
    status: "pending",
  },
  {
    id: 2,
    student: "Kumari Silva",
    regNo: "UWU/ICT/22/028",
    email: "kumari@uwu.ac.lk",
    department: "ICT",
    year: "4th Year",
    topic: "PhD Application Guidance",
    message: "I am planning to apply for PhD programs abroad and would appreciate your guidance on the application process and research opportunities.",
    requestedAt: "Jan 12, 2025",
    status: "pending",
  },
]

const activeMentees = [
  {
    id: 1,
    student: "Saman Kumara",
    regNo: "UWU/ICT/21/045",
    email: "saman@uwu.ac.lk",
    department: "ICT",
    year: "4th Year",
    topic: "Full Stack Development",
    startedAt: "Nov 1, 2024",
    lastSession: "Jan 10, 2025",
    sessions: 8,
    status: "active",
  },
  {
    id: 2,
    student: "Priya Mendis",
    regNo: "UWU/ICT/22/012",
    email: "priya@uwu.ac.lk",
    department: "ICT",
    year: "3rd Year",
    topic: "Machine Learning Basics",
    startedAt: "Dec 1, 2024",
    lastSession: "Jan 8, 2025",
    sessions: 5,
    status: "active",
  },
  {
    id: 3,
    student: "Ruwan Jayawardena",
    regNo: "UWU/ICT/21/089",
    email: "ruwan@uwu.ac.lk",
    department: "ICT",
    year: "4th Year",
    topic: "Interview Preparation",
    startedAt: "Oct 15, 2024",
    lastSession: "Dec 20, 2024",
    sessions: 12,
    status: "completed",
  },
]

export default function AlumniMentorship() {
  const [isAvailable, setIsAvailable] = useState(true)
  const [selectedRequest, setSelectedRequest] = useState<(typeof mentorshipRequests)[0] | null>(null)

  const pendingRequests = mentorshipRequests.filter((r) => r.status === "pending")
  const currentMentees = activeMentees.filter((m) => m.status === "active")
  const completedMentorships = activeMentees.filter((m) => m.status === "completed")

  return (
    <DashboardLayout variant="alumni" userName="Kamal Perera">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Mentorship</h1>
            <p className="mt-1 text-muted-foreground">
              Guide students and share your knowledge and experience
            </p>
          </div>
          <Card className="w-full sm:w-auto">
            <CardContent className="flex items-center justify-between gap-4 p-4">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${isAvailable ? "bg-success" : "bg-muted"}`} />
                <span className="text-sm font-medium">
                  {isAvailable ? "Available for Mentorship" : "Not Available"}
                </span>
              </div>
              <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{currentMentees.length}</p>
                <p className="text-sm text-muted-foreground">Current Mentees</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{pendingRequests.length}</p>
                <p className="text-sm text-muted-foreground">Pending Requests</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{completedMentorships.length}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <MessageCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {activeMentees.reduce((sum, m) => sum + m.sessions, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mentor Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              My Mentor Profile
            </CardTitle>
            <CardDescription>
              Information visible to students looking for mentors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label className="text-muted-foreground">Areas of Expertise</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Software Engineering", "Full Stack Development", "Machine Learning", "Career Guidance", "Research"].map((area) => (
                      <Badge key={area} variant="secondary">{area}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-muted-foreground">Preferred Topics</Label>
                  <p className="mt-1 text-sm text-foreground">
                    Technical skills development, career planning, interview preparation, research guidance
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label className="text-muted-foreground">Availability</Label>
                  <p className="mt-1 text-sm text-foreground">
                    Weekends (10 AM - 4 PM), Weekday evenings (6 PM - 8 PM)
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Session Format</Label>
                  <p className="mt-1 text-sm text-foreground">
                    Virtual meetings (Zoom/Google Meet), In-person at Colombo
                  </p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-4 bg-transparent">Edit Profile</Button>
          </CardContent>
        </Card>

        {/* Mentorship Tabs */}
        <Tabs defaultValue="requests" className="w-full">
          <TabsList>
            <TabsTrigger value="requests" className="gap-2">
              Requests
              {pendingRequests.length > 0 && (
                <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 text-xs">
                  {pendingRequests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="current">Current Mentees ({currentMentees.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedMentorships.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="mt-6 space-y-4">
            {pendingRequests.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Clock className="h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium text-foreground">No Pending Requests</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    New mentorship requests will appear here
                  </p>
                </CardContent>
              </Card>
            ) : (
              pendingRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-foreground">{request.student}</h3>
                          <p className="text-sm text-muted-foreground">{request.regNo}</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{request.department}</Badge>
                            <Badge variant="outline">{request.year}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {request.requestedAt}
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                      <p className="text-sm font-medium text-foreground">Topic: {request.topic}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{request.message}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button onClick={() => setSelectedRequest(request)}>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Accept Request
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Accept Mentorship Request</DialogTitle>
                            <DialogDescription>
                              Send a message to {request.student} to start the mentorship
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label>Welcome Message</Label>
                              <Textarea
                                placeholder="Write a welcome message..."
                                rows={4}
                                defaultValue={`Hi ${request.student.split(" ")[0]}, I'm happy to accept your mentorship request. Let's schedule our first session to discuss your goals.`}
                              />
                            </div>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline">Cancel</Button>
                              <Button>Accept & Send Message</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline">
                        <XCircle className="mr-2 h-4 w-4" />
                        Decline
                      </Button>
                      <Button variant="ghost">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="current" className="mt-6 space-y-4">
            {currentMentees.map((mentee) => (
              <Card key={mentee.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success/10">
                        <GraduationCap className="h-6 w-6 text-success" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{mentee.student}</h3>
                        <p className="text-sm text-muted-foreground">{mentee.regNo}</p>
                        <Badge variant="secondary">{mentee.topic}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant="outline" className="gap-1 text-success border-success">
                        <CheckCircle className="h-3 w-3" />
                        Active
                      </Badge>
                      <p className="text-sm text-muted-foreground">{mentee.sessions} sessions</p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Started</p>
                      <p className="text-sm font-medium text-foreground">{mentee.startedAt}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Last Session</p>
                      <p className="text-sm font-medium text-foreground">{mentee.lastSession}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">{mentee.email}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2 border-t border-border pt-4">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Session
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button variant="ghost" size="sm">
                      Mark as Complete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="mt-6 space-y-4">
            {completedMentorships.map((mentee) => (
              <Card key={mentee.id} className="opacity-70">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                        <GraduationCap className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{mentee.student}</h3>
                        <p className="text-sm text-muted-foreground">{mentee.topic}</p>
                        <p className="text-sm text-muted-foreground">
                          {mentee.startedAt} - {mentee.lastSession}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Completed</Badge>
                      <p className="mt-1 text-sm text-muted-foreground">{mentee.sessions} sessions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

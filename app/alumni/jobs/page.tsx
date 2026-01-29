"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Briefcase,
  Plus,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Eye,
  Edit2,
  Trash2,
  Building,
  Calendar,
} from "lucide-react"

const myJobPostings = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Solutions Lanka",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    salary: "LKR 150,000 - 250,000",
    posted: "Jan 10, 2025",
    expires: "Feb 10, 2025",
    applicants: 24,
    views: 156,
    status: "active",
    description: "We are looking for a skilled Full Stack Developer to join our team...",
  },
  {
    id: 2,
    title: "Junior Data Analyst",
    company: "Tech Solutions Lanka",
    location: "Remote",
    type: "Internship",
    salary: "LKR 50,000 - 75,000",
    posted: "Jan 5, 2025",
    expires: "Jan 31, 2025",
    applicants: 45,
    views: 234,
    status: "active",
    description: "Seeking a motivated Junior Data Analyst intern to support our analytics team...",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Tech Solutions Lanka",
    location: "Colombo, Sri Lanka",
    type: "Contract",
    salary: "LKR 100,000 - 150,000",
    posted: "Dec 15, 2024",
    expires: "Jan 15, 2025",
    applicants: 18,
    views: 98,
    status: "expired",
    description: "Looking for a creative UI/UX Designer to help design our new product...",
  },
]

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"]

export default function AlumniJobs() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const activeJobs = myJobPostings.filter((job) => job.status === "active")
  const expiredJobs = myJobPostings.filter((job) => job.status === "expired")

  return (
    <DashboardLayout variant="alumni" userName="Kamal Perera">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Job Postings</h1>
            <p className="mt-1 text-muted-foreground">
              Post job opportunities and help students kickstart their careers
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Post a Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Post a New Job</DialogTitle>
                <DialogDescription>
                  Share job opportunities with students and fellow alumni
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="e.g., Software Engineer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-company">Company</Label>
                    <Input id="job-company" placeholder="Company name" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="job-location">Location</Label>
                    <Input id="job-location" placeholder="e.g., Colombo, Sri Lanka" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select>
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="job-salary-min">Salary Range (LKR)</Label>
                    <div className="flex gap-2">
                      <Input id="job-salary-min" placeholder="Min" type="number" />
                      <span className="flex items-center text-muted-foreground">-</span>
                      <Input id="job-salary-max" placeholder="Max" type="number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-deadline">Application Deadline</Label>
                    <Input id="job-deadline" type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-description">Job Description</Label>
                  <Textarea
                    id="job-description"
                    placeholder="Describe the role, responsibilities, and requirements..."
                    rows={6}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-requirements">Requirements</Label>
                  <Textarea
                    id="job-requirements"
                    placeholder="List the required skills, qualifications, and experience..."
                    rows={4}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Post Job</Button>
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
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{myJobPostings.length}</p>
                <p className="text-sm text-muted-foreground">Total Postings</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <Clock className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{activeJobs.length}</p>
                <p className="text-sm text-muted-foreground">Active Jobs</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {myJobPostings.reduce((sum, job) => sum + job.applicants, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Applicants</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Eye className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {myJobPostings.reduce((sum, job) => sum + job.views, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Views</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList>
            <TabsTrigger value="active">Active ({activeJobs.length})</TabsTrigger>
            <TabsTrigger value="expired">Expired ({expiredJobs.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6 space-y-4">
            {activeJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <DollarSign className="h-3 w-3" />
                          {job.salary}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          Posted: {job.posted}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          Expires: {job.expires}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-foreground">{job.applicants}</p>
                        <p className="text-xs text-muted-foreground">Applicants</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-foreground">{job.views}</p>
                        <p className="text-xs text-muted-foreground">Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2 border-t border-border pt-4">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View Applicants
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit2 className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive bg-transparent">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="expired" className="mt-6 space-y-4">
            {expiredJobs.map((job) => (
              <Card key={job.id} className="opacity-70">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                          <Building className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                            <Badge variant="destructive">Expired</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-foreground">{job.applicants}</p>
                        <p className="text-xs text-muted-foreground">Applicants</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2 border-t border-border pt-4">
                    <Button variant="outline" size="sm">
                      Repost Job
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive bg-transparent">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
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

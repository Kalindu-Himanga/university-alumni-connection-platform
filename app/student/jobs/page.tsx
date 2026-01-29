"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Building,
  Briefcase,
  Calendar,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Users,
} from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Solutions Lanka",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    salary: "LKR 150,000 - 250,000",
    posted: "Jan 10, 2025",
    deadline: "Feb 10, 2025",
    applicants: 24,
    description: "We are looking for a skilled Full Stack Developer to join our team. You will be responsible for developing and maintaining web applications using React and Node.js.",
    requirements: ["Bachelor's degree in ICT or related field", "2+ years of experience with React and Node.js", "Strong problem-solving skills"],
    postedBy: "Dr. Kamal Perera",
    isBookmarked: true,
    isApplied: false,
  },
  {
    id: 2,
    title: "Junior Data Analyst",
    company: "Analytics Pro",
    location: "Remote",
    type: "Internship",
    salary: "LKR 50,000 - 75,000",
    posted: "Jan 5, 2025",
    deadline: "Jan 31, 2025",
    applicants: 45,
    description: "Seeking a motivated Junior Data Analyst intern to support our analytics team. Great opportunity to learn from industry experts.",
    requirements: ["Currently pursuing or completed Bachelor's in ICT/Statistics", "Knowledge of Python or R", "Understanding of data visualization"],
    postedBy: "Sarah Fernando",
    isBookmarked: false,
    isApplied: true,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Kandy, Sri Lanka",
    type: "Contract",
    salary: "LKR 100,000 - 150,000",
    posted: "Jan 8, 2025",
    deadline: "Feb 8, 2025",
    applicants: 18,
    description: "Looking for a creative UI/UX Designer to help design our new product line. You will work closely with our development team.",
    requirements: ["Portfolio demonstrating UI/UX work", "Proficiency in Figma or Adobe XD", "Understanding of design systems"],
    postedBy: "Priya Mendis",
    isBookmarked: false,
    isApplied: false,
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Global Tech Inc.",
    location: "Colombo, Sri Lanka",
    type: "Internship",
    salary: "LKR 40,000 - 60,000",
    posted: "Jan 12, 2025",
    deadline: "Feb 28, 2025",
    applicants: 67,
    description: "Join our engineering team as an intern and work on real-world projects. Mentorship provided by senior engineers.",
    requirements: ["Final year or recent graduate in Computer Science/ICT", "Knowledge of any programming language", "Eagerness to learn"],
    postedBy: "Alumni Network",
    isBookmarked: true,
    isApplied: false,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Cloud Systems Ltd.",
    location: "Remote",
    type: "Full-time",
    salary: "LKR 200,000 - 300,000",
    posted: "Jan 3, 2025",
    deadline: "Jan 31, 2025",
    applicants: 15,
    description: "Looking for an experienced DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines.",
    requirements: ["3+ years of DevOps experience", "AWS/GCP certification preferred", "Experience with Docker and Kubernetes"],
    postedBy: "Ruwan Jayasinghe",
    isBookmarked: false,
    isApplied: false,
  },
]

const jobTypes = ["All Types", "Full-time", "Part-time", "Internship", "Contract", "Remote"]

export default function StudentJobs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedJob, setSelectedJob] = useState(jobListings[0])

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "All Types" || job.type === selectedType
    return matchesSearch && matchesType
  })

  const savedJobs = jobListings.filter((job) => job.isBookmarked)
  const appliedJobs = jobListings.filter((job) => job.isApplied)

  return (
    <DashboardLayout variant="student" userName="Nimal Fernando">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Jobs & Internships</h1>
          <p className="mt-1 text-muted-foreground">
            Discover career opportunities posted by alumni and partner companies
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{jobListings.length}</p>
                <p className="text-sm text-muted-foreground">Available Jobs</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Bookmark className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{savedJobs.length}</p>
                <p className="text-sm text-muted-foreground">Saved Jobs</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <BookmarkCheck className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{appliedJobs.length}</p>
                <p className="text-sm text-muted-foreground">Applied</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Closing Soon</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="browse" className="w-full">
          <TabsList>
            <TabsTrigger value="browse">Browse Jobs</TabsTrigger>
            <TabsTrigger value="saved">Saved ({savedJobs.length})</TabsTrigger>
            <TabsTrigger value="applied">Applied ({appliedJobs.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="mt-6">
            {/* Search and Filter */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search jobs by title or company..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Job List and Details */}
            <div className="grid gap-6 lg:grid-cols-5">
              {/* Job List */}
              <div className="space-y-3 lg:col-span-2">
                {filteredJobs.map((job) => (
                  <Card
                    key={job.id}
                    className={`cursor-pointer transition-colors hover:border-primary ${
                      selectedJob.id === job.id ? "border-primary bg-primary/5" : ""
                    }`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <button
                          type="button"
                          className="text-muted-foreground hover:text-primary"
                          aria-label={job.isBookmarked ? "Remove from saved" : "Save job"}
                        >
                          {job.isBookmarked ? (
                            <BookmarkCheck className="h-5 w-5 text-primary" />
                          ) : (
                            <Bookmark className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.posted}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {job.applicants} applicants
                        </span>
                      </div>
                      {job.isApplied && (
                        <Badge variant="outline" className="mt-2 text-success border-success">
                          Applied
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Job Details */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{selectedJob.title}</CardTitle>
                      <p className="text-muted-foreground">{selectedJob.company}</p>
                    </div>
                    <Badge>{selectedJob.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      {selectedJob.salary}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Deadline: {selectedJob.deadline}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">Description</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {selectedJob.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">Requirements</h4>
                    <ul className="mt-2 space-y-1">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm text-muted-foreground">
                      Posted by <span className="font-medium text-foreground">{selectedJob.postedBy}</span> on {selectedJob.posted}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {selectedJob.applicants} people have applied
                    </p>
                  </div>

                  <div className="flex gap-2">
                    {selectedJob.isApplied ? (
                      <Button disabled className="flex-1">
                        <BookmarkCheck className="mr-2 h-4 w-4" />
                        Already Applied
                      </Button>
                    ) : (
                      <Button className="flex-1">
                        Apply Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="outline">
                      {selectedJob.isBookmarked ? (
                        <BookmarkCheck className="h-4 w-4" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {savedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            {savedJobs.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Bookmark className="h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium text-foreground">No Saved Jobs</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Save jobs you are interested in for later
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="applied" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {appliedJobs.map((job) => (
                <JobCard key={job.id} job={job} showAppliedBadge />
              ))}
            </div>
            {appliedJobs.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <BookmarkCheck className="h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium text-foreground">No Applications Yet</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Start applying to jobs that interest you
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

interface JobCardProps {
  job: (typeof jobListings)[0]
  showAppliedBadge?: boolean
}

function JobCard({ job, showAppliedBadge }: JobCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Building className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold text-foreground">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">{job.type}</Badge>
          {showAppliedBadge && (
            <Badge variant="outline" className="text-success border-success">Applied</Badge>
          )}
        </div>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {job.location}
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-3.5 w-3.5" />
            {job.salary}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            Deadline: {job.deadline}
          </div>
        </div>
        <Button className="mt-4 w-full bg-transparent" variant="outline">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

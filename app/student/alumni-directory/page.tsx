"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Linkedin,
  BookOpen,
  Filter,
} from "lucide-react"

const alumniData = [
  {
    id: 1,
    name: "Dr. Kamal Perera",
    title: "Senior Software Engineer",
    company: "Tech Solutions Lanka",
    location: "Colombo, Sri Lanka",
    department: "ICT",
    graduationYear: "2015",
    skills: ["JavaScript", "React", "Node.js", "Machine Learning"],
    isMentor: true,
    bio: "Passionate about software engineering with 10+ years of experience.",
  },
  {
    id: 2,
    name: "Sarah Fernando",
    title: "Data Scientist",
    company: "AI Labs",
    location: "Singapore",
    department: "ICT",
    graduationYear: "2020",
    skills: ["Python", "Data Science", "TensorFlow", "SQL"],
    isMentor: true,
    bio: "Specializing in machine learning and predictive analytics.",
  },
  {
    id: 3,
    name: "Ruwan Jayasinghe",
    title: "Product Manager",
    company: "Microsoft",
    location: "Seattle, USA",
    department: "ICT",
    graduationYear: "2012",
    skills: ["Product Management", "Agile", "Strategy", "UX"],
    isMentor: true,
    bio: "Leading product teams at top tech companies for 12 years.",
  },
  {
    id: 4,
    name: "Priya Mendis",
    title: "UX Designer",
    company: "Creative Studio",
    location: "Kandy, Sri Lanka",
    department: "ICT",
    graduationYear: "2018",
    skills: ["UI/UX", "Figma", "User Research", "Prototyping"],
    isMentor: false,
    bio: "Creating beautiful and intuitive user experiences.",
  },
  {
    id: 5,
    name: "Nimal Silva",
    title: "Entrepreneur",
    company: "StartupX",
    location: "Colombo, Sri Lanka",
    department: "Management",
    graduationYear: "2016",
    skills: ["Entrepreneurship", "Business Strategy", "Leadership", "Marketing"],
    isMentor: true,
    bio: "Founded multiple successful startups in the tech space.",
  },
  {
    id: 6,
    name: "Kumari Perera",
    title: "Research Scientist",
    company: "University of Colombo",
    location: "Colombo, Sri Lanka",
    department: "Science",
    graduationYear: "2014",
    skills: ["Research", "Data Analysis", "Academic Writing", "R"],
    isMentor: true,
    bio: "PhD in Computer Science with focus on NLP.",
  },
]

const departments = ["All Departments", "ICT", "Management", "Science", "Engineering", "Agriculture"]
const years = ["All Years", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "Before 2015"]

export default function AlumniDirectory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [showMentorsOnly, setShowMentorsOnly] = useState(false)

  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesDepartment =
      selectedDepartment === "All Departments" || alumni.department === selectedDepartment

    const matchesYear =
      selectedYear === "All Years" ||
      (selectedYear === "Before 2015"
        ? parseInt(alumni.graduationYear) < 2015
        : alumni.graduationYear === selectedYear)

    const matchesMentor = !showMentorsOnly || alumni.isMentor

    return matchesSearch && matchesDepartment && matchesYear && matchesMentor
  })

  return (
    <DashboardLayout variant="student" userName="Nimal Fernando">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Alumni Directory</h1>
          <p className="mt-1 text-muted-foreground">
            Discover and connect with alumni from Uva Wellassa University
          </p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name, title, company, or skills..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant={showMentorsOnly ? "default" : "outline"}
                  onClick={() => setShowMentorsOnly(!showMentorsOnly)}
                  className="gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Mentors Only
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredAlumni.length} of {alumniData.length} alumni
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAlumni.map((alumni) => (
            <Card key={alumni.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/5 p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {alumni.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{alumni.name}</h3>
                        {alumni.isMentor && (
                          <Badge variant="secondary" className="gap-1 text-xs">
                            <BookOpen className="h-3 w-3" />
                            Mentor
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{alumni.title}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      {alumni.company}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {alumni.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      {alumni.department} - Class of {alumni.graduationYear}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">{alumni.bio}</p>

                  <div className="flex flex-wrap gap-1">
                    {alumni.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {alumni.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{alumni.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 border-t border-border pt-4">
                    <Button variant="outline" size="sm" className="flex-1 gap-1 bg-transparent">
                      <Mail className="h-4 w-4" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-1 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    {alumni.isMentor && (
                      <Button size="sm" className="flex-1 gap-1">
                        <BookOpen className="h-4 w-4" />
                        Request
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredAlumni.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium text-foreground">No Alumni Found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedDepartment("All Departments")
                  setSelectedYear("All Years")
                  setShowMentorsOnly(false)
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}

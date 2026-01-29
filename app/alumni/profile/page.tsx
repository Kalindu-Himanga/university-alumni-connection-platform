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
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Linkedin,
  Globe,
  Github,
  Calendar,
  Edit2,
  Save,
  X,
  Plus,
} from "lucide-react"

const skills = ["JavaScript", "React", "Node.js", "Python", "Machine Learning", "Data Science"]

export default function AlumniProfile() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <DashboardLayout variant="alumni" userName="Kamal Perera">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">My Profile</h1>
            <p className="mt-1 text-muted-foreground">
              Manage your personal and professional information
            </p>
          </div>
          <Button
            variant={isEditing ? "outline" : "default"}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </>
            ) : (
              <>
                <Edit2 className="mr-2 h-4 w-4" />
                Edit Profile
              </>
            )}
          </Button>
        </div>

        {/* Profile Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    KP
                  </div>
                  {isEditing && (
                    <button
                      type="button"
                      className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80"
                      aria-label="Change profile photo"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">Dr. Kamal Perera</h2>
                <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
                <p className="text-sm text-muted-foreground">at Tech Solutions Lanka</p>
                
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <Badge>Class of 2015</Badge>
                  <Badge variant="secondary">ICT</Badge>
                </div>

                <div className="mt-6 w-full space-y-3 text-left">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">kamal.perera@email.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">+94 77 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Colombo, Sri Lanka</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="LinkedIn Profile">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="GitHub Profile">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Personal Website">
                      <Globe className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="space-y-6 lg:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          defaultValue="Kamal"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          defaultValue="Perera"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="kamal.perera@email.com"
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          defaultValue="+94 77 123 4567"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          defaultValue="Colombo, Sri Lanka"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        defaultValue="Passionate software engineer with 10+ years of experience in building scalable web applications. Alumni of UWU, proud to give back to the community through mentorship."
                        disabled={!isEditing}
                        rows={4}
                      />
                    </div>
                    {isEditing && (
                      <Button className="w-full sm:w-auto">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="professional" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Professional Information
                    </CardTitle>
                    <CardDescription>
                      Your work experience and professional details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        defaultValue="Senior Software Engineer"
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        defaultValue="Tech Solutions Lanka"
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select disabled={!isEditing} defaultValue="technology">
                        <SelectTrigger id="industry">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Information Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Skills</Label>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="gap-1">
                            {skill}
                            {isEditing && (
                              <button type="button" className="ml-1 hover:text-destructive" aria-label={`Remove ${skill}`}>
                                <X className="h-3 w-3" />
                              </button>
                            )}
                          </Badge>
                        ))}
                        {isEditing && (
                          <Button variant="outline" size="sm" className="h-6 gap-1 bg-transparent">
                            <Plus className="h-3 w-3" />
                            Add
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          defaultValue="linkedin.com/in/kamalperera"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          defaultValue="github.com/kamalperera"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          defaultValue="kamalperera.dev"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    {isEditing && (
                      <Button className="w-full sm:w-auto">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Education
                    </CardTitle>
                    <CardDescription>
                      Your academic background and qualifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg border border-border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            BSc in Information and Communication Technology
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Uva Wellassa University of Sri Lanka
                          </p>
                        </div>
                        <Badge>2011 - 2015</Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Graduated with First Class Honours. Specialized in Software Engineering.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            MSc in Computer Science
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            University of Colombo
                          </p>
                        </div>
                        <Badge>2016 - 2018</Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Research focus on Machine Learning and Data Analytics.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            PhD in Artificial Intelligence
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            University of Moratuwa
                          </p>
                        </div>
                        <Badge variant="secondary">2019 - 2023</Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Thesis on Natural Language Processing for low-resource languages.
                      </p>
                    </div>

                    {isEditing && (
                      <Button variant="outline" className="w-full bg-transparent">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Education
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

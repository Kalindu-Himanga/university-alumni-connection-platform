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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Trophy,
  Plus,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Award,
  Briefcase,
  GraduationCap,
  Star,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const achievements = [
  {
    id: 1,
    type: "career",
    title: "Promoted to Senior Software Engineer",
    description: "Excited to share that I have been promoted to Senior Software Engineer at Tech Solutions Lanka! This journey has been incredible, and I'm grateful for the mentorship and opportunities.",
    date: "Jan 15, 2025",
    likes: 48,
    comments: 12,
    image: null,
  },
  {
    id: 2,
    type: "award",
    title: "Best Research Paper Award",
    description: "Honored to receive the Best Research Paper Award at the International Conference on AI & ML 2024 for our work on NLP for Sinhala language processing.",
    date: "Dec 10, 2024",
    likes: 92,
    comments: 24,
    image: null,
  },
  {
    id: 3,
    type: "education",
    title: "Completed PhD in Artificial Intelligence",
    description: "Finally completed my PhD journey at University of Moratuwa! Four years of research on Natural Language Processing for low-resource languages. Thank you to everyone who supported me.",
    date: "Sep 5, 2023",
    likes: 156,
    comments: 38,
    image: null,
  },
  {
    id: 4,
    type: "milestone",
    title: "10 Years in Tech Industry",
    description: "Celebrating a decade in the tech industry! From a fresh graduate to leading teams, every step has been a learning experience. Here's to the next 10 years!",
    date: "Aug 20, 2023",
    likes: 87,
    comments: 21,
    image: null,
  },
]

const achievementTypes = [
  { value: "career", label: "Career", icon: Briefcase },
  { value: "award", label: "Award/Recognition", icon: Award },
  { value: "education", label: "Education", icon: GraduationCap },
  { value: "milestone", label: "Milestone", icon: Star },
]

export default function AlumniAchievements() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "career":
        return <Briefcase className="h-4 w-4" />
      case "award":
        return <Award className="h-4 w-4" />
      case "education":
        return <GraduationCap className="h-4 w-4" />
      case "milestone":
        return <Star className="h-4 w-4" />
      default:
        return <Trophy className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    const found = achievementTypes.find((t) => t.value === type)
    return found ? found.label : "Achievement"
  }

  return (
    <DashboardLayout variant="alumni" userName="Kamal Perera">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">My Achievements</h1>
            <p className="mt-1 text-muted-foreground">
              Share your professional milestones and inspire others
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Share Achievement
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Share an Achievement</DialogTitle>
                <DialogDescription>
                  Share your professional milestone with the UniBondz community
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="achievement-type">Achievement Type</Label>
                  <Select>
                    <SelectTrigger id="achievement-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {achievementTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <type.icon className="h-4 w-4" />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="achievement-title">Title</Label>
                  <Input id="achievement-title" placeholder="e.g., Promoted to Senior Developer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="achievement-description">Description</Label>
                  <Textarea
                    id="achievement-description"
                    placeholder="Share the details of your achievement..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="achievement-date">Date</Label>
                  <Input id="achievement-date" type="date" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Share Achievement</Button>
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
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{achievements.length}</p>
                <p className="text-sm text-muted-foreground">Total Achievements</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Heart className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {achievements.reduce((sum, a) => sum + a.likes, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Likes</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <MessageCircle className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {achievements.reduce((sum, a) => sum + a.comments, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Comments</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Award className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {achievements.filter((a) => a.type === "award").length}
                </p>
                <p className="text-sm text-muted-foreground">Awards Received</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements List */}
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <Card key={achievement.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      KP
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">Dr. Kamal Perera</span>
                        <Badge variant="secondary" className="gap-1">
                          {getTypeIcon(achievement.type)}
                          {getTypeLabel(achievement.type)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>

                <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Heart className="h-4 w-4" />
                    {achievement.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {achievement.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

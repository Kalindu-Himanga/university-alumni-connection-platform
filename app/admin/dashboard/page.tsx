"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  GraduationCap,
  Briefcase,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  UserPlus,
  FileText,
  Flag,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const platformStats = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12%",
    trend: "up" as const,
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Alumni Members",
    value: "8,234",
    change: "+8%",
    trend: "up" as const,
    icon: GraduationCap,
    description: "verified profiles",
  },
  {
    title: "Active Students",
    value: "4,613",
    change: "+15%",
    trend: "up" as const,
    icon: Users,
    description: "registered users",
  },
  {
    title: "Job Postings",
    value: "342",
    change: "+24%",
    trend: "up" as const,
    icon: Briefcase,
    description: "active listings",
  },
];

const pendingApprovals = [
  {
    id: 1,
    type: "User Registration",
    name: "John Smith",
    email: "john.smith@university.edu",
    requestDate: "2026-01-28",
    category: "Alumni",
  },
  {
    id: 2,
    type: "Job Posting",
    name: "Senior Developer at TechCorp",
    email: "hr@techcorp.com",
    requestDate: "2026-01-27",
    category: "Job",
  },
  {
    id: 3,
    type: "Achievement",
    name: "Published Research Paper",
    email: "sarah.wilson@alumni.edu",
    requestDate: "2026-01-27",
    category: "Achievement",
  },
  {
    id: 4,
    type: "Event",
    name: "Alumni Networking Night",
    email: "events@university.edu",
    requestDate: "2026-01-26",
    category: "Event",
  },
];

const recentActivities = [
  {
    id: 1,
    action: "New user registered",
    user: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "5 minutes ago",
    type: "registration",
  },
  {
    id: 2,
    action: "Job posting approved",
    user: "Admin: Mark Thompson",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "15 minutes ago",
    type: "approval",
  },
  {
    id: 3,
    action: "Content flagged for review",
    user: "System",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "32 minutes ago",
    type: "flag",
  },
  {
    id: 4,
    action: "Event created",
    user: "Career Services",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "1 hour ago",
    type: "event",
  },
  {
    id: 5,
    action: "User profile verified",
    user: "Admin: Lisa Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "2 hours ago",
    type: "verification",
  },
];

const flaggedContent = [
  {
    id: 1,
    type: "Post",
    title: "Spam promotional content",
    reportedBy: 3,
    date: "2026-01-28",
    severity: "High",
  },
  {
    id: 2,
    type: "Comment",
    title: "Inappropriate language",
    reportedBy: 2,
    date: "2026-01-27",
    severity: "Medium",
  },
  {
    id: 3,
    type: "Profile",
    title: "Fake account suspected",
    reportedBy: 5,
    date: "2026-01-26",
    severity: "High",
  },
];

export default function AdminDashboardPage() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "registration":
        return <UserPlus className="h-4 w-4 text-accent" />;
      case "approval":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "flag":
        return <Flag className="h-4 w-4 text-destructive" />;
      case "event":
        return <Calendar className="h-4 w-4 text-primary" />;
      case "verification":
        return <CheckCircle className="h-4 w-4 text-success" />;
      default:
        return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Medium":
        return "bg-warning text-warning-foreground";
      case "Low":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout variant="admin">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's your platform overview for today.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button>
              <TrendingUp className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformStats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Pending Approvals</CardTitle>
              <Badge variant="secondary" className="gap-1">
                <Clock className="h-3 w-3" />
                {pendingApprovals.length} pending
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingApprovals.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          item.category === "Alumni"
                            ? "bg-primary/10"
                            : item.category === "Job"
                              ? "bg-accent/10"
                              : item.category === "Achievement"
                                ? "bg-success/10"
                                : "bg-warning/10"
                        }`}
                      >
                        {item.category === "Alumni" ? (
                          <UserPlus className="h-4 w-4 text-primary" />
                        ) : item.category === "Job" ? (
                          <Briefcase className="h-4 w-4 text-accent" />
                        ) : item.category === "Achievement" ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <Calendar className="h-4 w-4 text-warning" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.type} • {item.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {new Date(item.requestDate).toLocaleDateString()}
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <AlertTriangle className="h-4 w-4 mr-2" />
                            Reject
                          </DropdownMenuItem>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View All Pending Items
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.user}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Flagged Content</CardTitle>
              <Badge variant="destructive" className="gap-1">
                <AlertTriangle className="h-3 w-3" />
                {flaggedContent.length} items
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {flaggedContent.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Flag className="h-4 w-4 text-destructive" />
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.type} • Reported by {item.reportedBy} users
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getSeverityColor(item.severity)}>
                        {item.severity}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View All Flagged Content
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2 bg-transparent"
                >
                  <UserPlus className="h-5 w-5" />
                  <span className="text-sm">Add User</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2 bg-transparent"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm">Create Event</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2 bg-transparent"
                >
                  <Briefcase className="h-5 w-5" />
                  <span className="text-sm">Post Job</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2 bg-transparent"
                >
                  <FileText className="h-5 w-5" />
                  <span className="text-sm">Send Announcement</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

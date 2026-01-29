"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  Flag,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Trash2,
  MoreHorizontal,
  MessageSquare,
  FileText,
  ImageIcon,
  Briefcase,
  Calendar,
  Award,
  Clock,
  Shield,
} from "lucide-react";

const flaggedContent = [
  {
    id: 1,
    type: "Post",
    title: "Promotional spam about cryptocurrency",
    content:
      "Make $10,000 a day trading crypto! Click here to learn my secret...",
    author: {
      name: "Unknown User",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "suspicious@email.com",
    },
    reports: 12,
    reasons: ["Spam", "Misleading"],
    severity: "High",
    date: "2026-01-28",
    status: "Pending",
  },
  {
    id: 2,
    type: "Comment",
    title: "Inappropriate language in discussion",
    content: "[Content hidden due to policy violation]",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "john.d@student.edu",
    },
    reports: 5,
    reasons: ["Harassment", "Inappropriate Language"],
    severity: "High",
    date: "2026-01-27",
    status: "Pending",
  },
  {
    id: 3,
    type: "Profile",
    title: "Suspected fake alumni profile",
    content: "Profile claims to be CEO of multiple Fortune 500 companies",
    author: {
      name: "Fake Alumni",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "fake.profile@gmail.com",
    },
    reports: 8,
    reasons: ["Fake Profile", "Impersonation"],
    severity: "Medium",
    date: "2026-01-26",
    status: "Under Review",
  },
  {
    id: 4,
    type: "Job Posting",
    title: "Suspicious job listing - potential scam",
    content: "Work from home - No experience needed - $500/day guaranteed!",
    author: {
      name: "Quick Money LLC",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "jobs@quickmoney.xyz",
    },
    reports: 15,
    reasons: ["Scam", "Misleading"],
    severity: "High",
    date: "2026-01-25",
    status: "Pending",
  },
  {
    id: 5,
    type: "Achievement",
    title: "Unverifiable achievement claim",
    content: "Claims to have won Nobel Prize in Physics",
    author: {
      name: "Robert Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "r.smith@alumni.edu",
    },
    reports: 3,
    reasons: ["False Information"],
    severity: "Low",
    date: "2026-01-24",
    status: "Resolved",
  },
];

const pendingApprovals = [
  {
    id: 1,
    type: "Job Posting",
    title: "Software Engineer at TechCorp",
    submittedBy: "TechCorp HR",
    date: "2026-01-28",
    status: "Pending",
  },
  {
    id: 2,
    type: "Event",
    title: "Alumni Networking Night 2026",
    submittedBy: "Alumni Association",
    date: "2026-01-27",
    status: "Pending",
  },
  {
    id: 3,
    type: "Achievement",
    title: "Published in Nature Journal",
    submittedBy: "Dr. Sarah Mitchell",
    date: "2026-01-26",
    status: "Pending",
  },
];

export default function AdminContentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [selectedContent, setSelectedContent] = useState<
    (typeof flaggedContent)[0] | null
  >(null);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

  const filteredContent = flaggedContent.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      typeFilter === "all" ||
      item.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesSeverity =
      severityFilter === "all" ||
      item.severity.toLowerCase() === severityFilter.toLowerCase();
    return matchesSearch && matchesType && matchesSeverity;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Post":
        return <FileText className="h-4 w-4" />;
      case "Comment":
        return <MessageSquare className="h-4 w-4" />;
      case "Profile":
        return <ImageIcon className="h-4 w-4" />;
      case "Job Posting":
        return <Briefcase className="h-4 w-4" />;
      case "Event":
        return <Calendar className="h-4 w-4" />;
      case "Achievement":
        return <Award className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "High":
        return <Badge variant="destructive">{severity}</Badge>;
      case "Medium":
        return (
          <Badge className="bg-warning text-warning-foreground">{severity}</Badge>
        );
      case "Low":
        return <Badge variant="secondary">{severity}</Badge>;
      default:
        return <Badge variant="outline">{severity}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <Badge variant="outline" className="gap-1">
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
        );
      case "Under Review":
        return (
          <Badge className="bg-warning text-warning-foreground gap-1">
            <Eye className="h-3 w-3" />
            Under Review
          </Badge>
        );
      case "Resolved":
        return (
          <Badge className="bg-success text-success-foreground gap-1">
            <CheckCircle className="h-3 w-3" />
            Resolved
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const openReviewDialog = (content: (typeof flaggedContent)[0]) => {
    setSelectedContent(content);
    setIsReviewDialogOpen(true);
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Content Moderation
            </h1>
            <p className="text-muted-foreground mt-1">
              Review and moderate flagged content and pending submissions
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="gap-1 px-3 py-1">
              <AlertTriangle className="h-4 w-4" />
              {flaggedContent.filter((c) => c.status === "Pending").length}{" "}
              Pending Review
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <Flag className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{flaggedContent.length}</p>
                  <p className="text-sm text-muted-foreground">Total Flagged</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Clock className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {flaggedContent.filter((c) => c.status === "Pending").length}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Pending Review
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {
                      flaggedContent.filter((c) => c.status === "Under Review")
                        .length
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">Under Review</p>
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
                  <p className="text-2xl font-bold">
                    {flaggedContent.filter((c) => c.status === "Resolved").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Resolved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="flagged" className="space-y-4">
          <TabsList>
            <TabsTrigger value="flagged">Flagged Content</TabsTrigger>
            <TabsTrigger value="approvals">
              Pending Approvals ({pendingApprovals.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flagged" className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search flagged content..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-full md:w-40">
                      <SelectValue placeholder="Content Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="post">Post</SelectItem>
                      <SelectItem value="comment">Comment</SelectItem>
                      <SelectItem value="profile">Profile</SelectItem>
                      <SelectItem value="job posting">Job Posting</SelectItem>
                      <SelectItem value="achievement">Achievement</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={severityFilter}
                    onValueChange={setSeverityFilter}
                  >
                    <SelectTrigger className="w-full md:w-40">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severity</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {filteredContent.map((item) => (
                <Card
                  key={item.id}
                  className={
                    item.severity === "High" ? "border-destructive/50" : ""
                  }
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className={`p-2 rounded-lg shrink-0 ${
                            item.severity === "High"
                              ? "bg-destructive/10"
                              : item.severity === "Medium"
                                ? "bg-warning/10"
                                : "bg-muted"
                          }`}
                        >
                          {getTypeIcon(item.type)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <Badge variant="outline" className="gap-1">
                              {getTypeIcon(item.type)}
                              {item.type}
                            </Badge>
                            {getSeverityBadge(item.severity)}
                            {getStatusBadge(item.status)}
                          </div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {item.content}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage
                                  src={item.author.avatar || "/placeholder.svg"}
                                  alt={item.author.name}
                                />
                                <AvatarFallback className="text-xs">
                                  {item.author.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-muted-foreground">
                                {item.author.name}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              <Flag className="h-3 w-3 inline mr-1" />
                              {item.reports} reports
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.reasons.map((reason) => (
                              <Badge
                                key={reason}
                                variant="secondary"
                                className="text-xs"
                              >
                                {reason}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openReviewDialog(item)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve Content
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <XCircle className="h-4 w-4 mr-2" />
                              Dismiss Reports
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove Content
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Shield className="h-4 w-4 mr-2" />
                              Ban User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-4">
            {pendingApprovals.length > 0 ? (
              <div className="space-y-3">
                {pendingApprovals.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {getTypeIcon(item.type)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline">{item.type}</Badge>
                            </div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Submitted by {item.submittedBy} on{" "}
                              {new Date(item.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive bg-transparent"
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
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
                  <CheckCircle className="h-12 w-12 mx-auto text-success mb-4" />
                  <h3 className="font-semibold text-lg mb-2">All Clear!</h3>
                  <p className="text-muted-foreground">
                    No pending content approvals at the moment
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Review Flagged Content</DialogTitle>
              <DialogDescription>
                Take action on this flagged content
              </DialogDescription>
            </DialogHeader>
            {selectedContent && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="gap-1">
                    {getTypeIcon(selectedContent.type)}
                    {selectedContent.type}
                  </Badge>
                  {getSeverityBadge(selectedContent.severity)}
                  <Badge variant="secondary" className="gap-1">
                    <Flag className="h-3 w-3" />
                    {selectedContent.reports} reports
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{selectedContent.title}</h4>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm">{selectedContent.content}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={selectedContent.author.avatar || "/placeholder.svg"}
                      alt={selectedContent.author.name}
                    />
                    <AvatarFallback>
                      {selectedContent.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedContent.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedContent.author.email}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Report Reasons:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedContent.reasons.map((reason) => (
                      <Badge key={reason} variant="secondary">
                        {reason}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Add Note (Optional):</p>
                  <Textarea placeholder="Add a note about your decision..." />
                </div>
              </div>
            )}
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                onClick={() => setIsReviewDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="outline" className="text-success bg-transparent">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve Content
              </Button>
              <Button variant="destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Remove Content
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}

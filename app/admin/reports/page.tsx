"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  TrendingUp,
  TrendingDown,
  Briefcase,
  Calendar,
  GraduationCap,
  Award,
  MessageSquare,
  Download,
  ArrowUpRight,
  BarChart3,
  PieChart,
  Activity,
  Target,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const userGrowthData = [
  { month: "Aug", alumni: 7800, students: 3900, total: 11700 },
  { month: "Sep", alumni: 7950, students: 4100, total: 12050 },
  { month: "Oct", alumni: 8050, students: 4250, total: 12300 },
  { month: "Nov", alumni: 8120, students: 4400, total: 12520 },
  { month: "Dec", alumni: 8180, students: 4500, total: 12680 },
  { month: "Jan", alumni: 8234, students: 4613, total: 12847 },
];

const engagementData = [
  { month: "Aug", logins: 8500, posts: 320, messages: 1200 },
  { month: "Sep", logins: 9200, posts: 380, messages: 1450 },
  { month: "Oct", logins: 10100, posts: 420, messages: 1680 },
  { month: "Nov", logins: 9800, posts: 390, messages: 1520 },
  { month: "Dec", logins: 8900, posts: 350, messages: 1380 },
  { month: "Jan", logins: 11500, posts: 480, messages: 1890 },
];

const jobsData = [
  { month: "Aug", posted: 45, applications: 380, hired: 28 },
  { month: "Sep", posted: 52, applications: 420, hired: 32 },
  { month: "Oct", posted: 68, applications: 510, hired: 41 },
  { month: "Nov", posted: 55, applications: 445, hired: 35 },
  { month: "Dec", posted: 42, applications: 320, hired: 25 },
  { month: "Jan", posted: 78, applications: 620, hired: 48 },
];

const userDistribution = [
  { name: "Alumni", value: 8234, color: "hsl(var(--primary))" },
  { name: "Students", value: 4613, color: "hsl(var(--accent))" },
];

const industryDistribution = [
  { name: "Technology", count: 3245 },
  { name: "Finance", count: 2180 },
  { name: "Healthcare", count: 1520 },
  { name: "Education", count: 1280 },
  { name: "Consulting", count: 980 },
  { name: "Others", count: 3642 },
];

const topMetrics = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12%",
    trend: "up",
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Active Users",
    value: "9,234",
    change: "+18%",
    trend: "up",
    icon: Activity,
    description: "monthly active",
  },
  {
    title: "Job Placements",
    value: "209",
    change: "+24%",
    trend: "up",
    icon: Briefcase,
    description: "this quarter",
  },
  {
    title: "Mentorship Matches",
    value: "156",
    change: "+8%",
    trend: "up",
    icon: Target,
    description: "active pairs",
  },
];

const recentReports = [
  {
    id: 1,
    name: "Monthly User Report",
    type: "User Analytics",
    date: "2026-01-15",
    status: "Generated",
  },
  {
    id: 2,
    name: "Q4 2025 Job Market Analysis",
    type: "Job Analytics",
    date: "2026-01-10",
    status: "Generated",
  },
  {
    id: 3,
    name: "Engagement Metrics Report",
    type: "Engagement",
    date: "2026-01-05",
    status: "Generated",
  },
  {
    id: 4,
    name: "Annual Alumni Survey Results",
    type: "Survey",
    date: "2025-12-20",
    status: "Generated",
  },
];

export default function AdminReportsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Reports & Analytics
            </h1>
            <p className="text-muted-foreground mt-1">
              Platform insights and performance metrics
            </p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="30days">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <metric.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      metric.trend === "up"
                        ? "text-success border-success"
                        : "text-destructive border-destructive"
                    }
                  >
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {metric.change}
                  </Badge>
                </div>
                <div className="mt-3">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {metric.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">User Analytics</TabsTrigger>
            <TabsTrigger value="jobs">Job Analytics</TabsTrigger>
            <TabsTrigger value="reports">Generated Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    User Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="alumni"
                        stackId="1"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.6}
                        name="Alumni"
                      />
                      <Area
                        type="monotone"
                        dataKey="students"
                        stackId="1"
                        stroke="hsl(var(--accent))"
                        fill="hsl(var(--accent))"
                        fillOpacity={0.6}
                        name="Students"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Platform Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="logins"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        name="Logins"
                      />
                      <Line
                        type="monotone"
                        dataKey="posts"
                        stroke="hsl(var(--accent))"
                        strokeWidth={2}
                        name="Posts"
                      />
                      <Line
                        type="monotone"
                        dataKey="messages"
                        stroke="hsl(var(--warning))"
                        strokeWidth={2}
                        name="Messages"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    User Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <RechartsPieChart>
                      <Pie
                        data={userDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {userDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-6 mt-2">
                    {userDistribution.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-muted-foreground">
                          {item.name}: {item.value.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Industry Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={industryDistribution} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis type="number" className="text-xs" />
                      <YAxis dataKey="name" type="category" width={80} className="text-xs" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar
                        dataKey="count"
                        fill="hsl(var(--primary))"
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">User Registration Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="total"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.3}
                        name="Total Users"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key User Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span>Total Alumni</span>
                    </div>
                    <span className="font-bold">8,234</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-accent" />
                      <span>Total Students</span>
                    </div>
                    <span className="font-bold">4,613</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-warning" />
                      <span>Verified Profiles</span>
                    </div>
                    <span className="font-bold">11,892</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-success" />
                      <span>Mentorship Connections</span>
                    </div>
                    <span className="font-bold">456</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Job Market Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={jobsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="posted"
                      fill="hsl(var(--primary))"
                      name="Jobs Posted"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="hired"
                      fill="hsl(var(--accent))"
                      name="Successful Hires"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-10 w-10 mx-auto text-primary mb-3" />
                  <p className="text-3xl font-bold">342</p>
                  <p className="text-muted-foreground">Active Job Listings</p>
                  <Badge className="mt-2 bg-success text-success-foreground">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +24% this month
                  </Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 mx-auto text-accent mb-3" />
                  <p className="text-3xl font-bold">2,890</p>
                  <p className="text-muted-foreground">Total Applications</p>
                  <Badge className="mt-2 bg-success text-success-foreground">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18% this month
                  </Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-10 w-10 mx-auto text-success mb-3" />
                  <p className="text-3xl font-bold">209</p>
                  <p className="text-muted-foreground">Successful Placements</p>
                  <Badge className="mt-2 bg-success text-success-foreground">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +31% this quarter
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Generated Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <BarChart3 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {report.type}
                            </Badge>
                            <span>
                              Generated on{" "}
                              {new Date(report.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Generate New Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto py-6 flex flex-col items-center gap-2 bg-transparent"
                  >
                    <Users className="h-8 w-8" />
                    <span className="font-medium">User Analytics Report</span>
                    <span className="text-xs text-muted-foreground">
                      Demographics, growth, engagement
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-6 flex flex-col items-center gap-2 bg-transparent"
                  >
                    <Briefcase className="h-8 w-8" />
                    <span className="font-medium">Job Market Report</span>
                    <span className="text-xs text-muted-foreground">
                      Listings, applications, placements
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-6 flex flex-col items-center gap-2 bg-transparent"
                  >
                    <Calendar className="h-8 w-8" />
                    <span className="font-medium">Events Report</span>
                    <span className="text-xs text-muted-foreground">
                      Attendance, engagement, feedback
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

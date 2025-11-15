"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const revenueData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
]

const visitorData = [
  { date: "Mon", visitors: 400 },
  { date: "Tue", visitors: 300 },
  { date: "Wed", visitors: 200 },
  { date: "Thu", visitors: 278 },
  { date: "Fri", visitors: 190 },
  { date: "Sat", visitors: 239 },
  { date: "Sun", visitors: 349 },
]

export function AnalyticsPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">Track your performance metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", value: "$45,231", change: "+12.5%" },
          { label: "Total Visitors", value: "2,847", change: "+8.2%" },
          { label: "Conversion Rate", value: "3.24%", change: "+2.1%" },
          { label: "Avg. Order Value", value: "$156.89", change: "+5.3%" },
        ].map((metric, i) => (
          <Card key={i} className="bg-card border-border">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-bold text-foreground mt-2">{metric.value}</p>
              <p className="text-xs text-green-600 mt-2">{metric.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
            <CardDescription>Monthly comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" />
                <Bar dataKey="expenses" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Weekly Visitors</CardTitle>
            <CardDescription>Visitor trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Area type="monotone" dataKey="visitors" fill="#8b5cf6" stroke="#8b5cf6" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Top Performing Pages</CardTitle>
          <CardDescription>Your best performing pages this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-foreground">Page</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Visitors</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Bounce Rate</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Avg. Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { page: "/products", visitors: 1234, bounce: "32%", time: "2m 45s" },
                  { page: "/pricing", visitors: 892, bounce: "28%", time: "3m 12s" },
                  { page: "/about", visitors: 654, bounce: "45%", time: "1m 30s" },
                  { page: "/contact", visitors: 432, bounce: "52%", time: "1m 15s" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-accent transition-colors">
                    <td className="py-3 px-4 text-foreground">{row.page}</td>
                    <td className="py-3 px-4 text-foreground">{row.visitors}</td>
                    <td className="py-3 px-4 text-foreground">{row.bounce}</td>
                    <td className="py-3 px-4 text-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { useState } from "react"

export default function TicketsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const tickets = [
    {
      id: "TKT-001",
      title: "Network Connectivity Issue",
      description: "VPN connection dropping intermittently",
      status: "In Progress",
      priority: "High",
      created: "2025-01-15",
      assignee: "John Smith",
    },
    {
      id: "TKT-002",
      title: "Software License Renewal",
      description: "Need to renew Microsoft Office licenses",
      status: "Pending",
      priority: "Medium",
      created: "2025-01-14",
      assignee: "Sarah Johnson",
    },
    {
      id: "TKT-003",
      title: "Server Maintenance",
      description: "Scheduled maintenance completed",
      status: "Resolved",
      priority: "Low",
      created: "2025-01-13",
      assignee: "Mike Davis",
    },
    {
      id: "TKT-004",
      title: "Email Configuration",
      description: "Setting up new email accounts",
      status: "In Progress",
      priority: "Medium",
      created: "2025-01-12",
      assignee: "John Smith",
    },
    {
      id: "TKT-005",
      title: "Data Backup Verification",
      description: "Monthly backup verification completed",
      status: "Resolved",
      priority: "High",
      created: "2025-01-11",
      assignee: "Sarah Johnson",
    },
    {
      id: "TKT-006",
      title: "Printer Setup",
      description: "Configure network printer",
      status: "Pending",
      priority: "Low",
      created: "2025-01-10",
      assignee: "Mike Davis",
    },
  ]

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Support Tickets</h1>
          <p className="text-muted-foreground">Manage and track your support requests</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
          <Plus className="h-4 w-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tickets by ID or title..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tickets Table */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>All Tickets</CardTitle>
          <CardDescription>{filteredTickets.length} tickets found</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Ticket ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Title</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Priority</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Assignee</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Created</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-blue-600">{ticket.id}</td>
                    <td className="py-3 px-4">{ticket.title}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          ticket.status === "Resolved"
                            ? "outline"
                            : ticket.status === "In Progress"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          ticket.priority === "High"
                            ? "destructive"
                            : ticket.priority === "Medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {ticket.priority}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">{ticket.assignee}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{ticket.created}</td>
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

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, MoreVertical } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Building a modern e-commerce solution",
    status: "In Progress",
    progress: 65,
    team: 5,
    dueDate: "Dec 15, 2024",
  },
  {
    id: 2,
    name: "Mobile App Redesign",
    description: "Redesigning the mobile application UI/UX",
    status: "In Progress",
    progress: 45,
    team: 3,
    dueDate: "Jan 10, 2025",
  },
  {
    id: 3,
    name: "API Integration",
    description: "Integrating third-party APIs",
    status: "Completed",
    progress: 100,
    team: 2,
    dueDate: "Nov 30, 2024",
  },
  {
    id: 4,
    name: "Database Migration",
    description: "Migrating to new database infrastructure",
    status: "Pending",
    progress: 0,
    team: 4,
    dueDate: "Feb 1, 2025",
  },
]

const statusColors = {
  "In Progress": "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
}

export function ProjectsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-2">Manage and track your projects</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium text-foreground">{project.progress}%</span>
                </div>
                <div className="w-full bg-accent rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Team Members</p>
                      <p className="font-medium text-foreground">{project.team}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Due Date</p>
                      <p className="font-medium text-foreground">{project.dueDate}</p>
                    </div>
                  </div>
                  <Badge className={statusColors[project.status as keyof typeof statusColors]}>{project.status}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

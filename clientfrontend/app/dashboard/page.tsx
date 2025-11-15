// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { AlertCircle, CheckCircle2, Clock, Zap } from "lucide-react"
// import { Badge } from "@/components/ui/badge"

// export default function DashboardHome() {
//   const stats = [
//     {
//       title: "Active Services",
//       value: "12",
//       description: "All systems operational",
//       icon: Zap,
//       color: "text-emerald-500",
//       bgColor: "bg-emerald-50",
//     },
//     {
//       title: "Open Tickets",
//       value: "3",
//       description: "2 high priority",
//       icon: AlertCircle,
//       color: "text-orange-500",
//       bgColor: "bg-orange-50",
//     },
//     {
//       title: "Resolved This Month",
//       value: "24",
//       description: "+8 from last month",
//       icon: CheckCircle2,
//       color: "text-blue-500",
//       bgColor: "bg-blue-50",
//     },
//     {
//       title: "Avg Response Time",
//       value: "2.5h",
//       description: "↓ 30% improvement",
//       icon: Clock,
//       color: "text-purple-500",
//       bgColor: "bg-purple-50",
//     },
//   ]

//   return (
//     <div className="p-6 space-y-6">
//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat) => {
//           const Icon = stat.icon
//           return (
//             <Card key={stat.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
//                 <div className={`p-2 rounded-lg ${stat.bgColor}`}>
//                   <Icon className={`h-4 w-4 ${stat.color}`} />
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">{stat.value}</div>
//                 <p className="text-xs text-muted-foreground">{stat.description}</p>
//               </CardContent>
//             </Card>
//           )
//         })}
//       </div>

//       {/* Recent Tickets */}
//       <Card className="border-0 shadow-md">
//         <CardHeader>
//           <CardTitle>Recent Support Tickets</CardTitle>
//           <CardDescription>Your latest support requests</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {[
//               {
//                 id: "TKT-001",
//                 title: "Network Connectivity Issue",
//                 status: "In Progress",
//                 priority: "High",
//                 time: "2 hours ago",
//               },
//               {
//                 id: "TKT-002",
//                 title: "Software License Renewal",
//                 status: "Pending",
//                 priority: "Medium",
//                 time: "5 hours ago",
//               },
//               { id: "TKT-003", title: "Server Maintenance", status: "Resolved", priority: "Low", time: "1 day ago" },
//               {
//                 id: "TKT-004",
//                 title: "Email Configuration",
//                 status: "In Progress",
//                 priority: "Medium",
//                 time: "3 hours ago",
//               },
//               {
//                 id: "TKT-005",
//                 title: "Data Backup Verification",
//                 status: "Resolved",
//                 priority: "High",
//                 time: "2 days ago",
//               },
//             ].map((ticket) => (
//               <div key={ticket.id} className="flex items-center justify-between border-b pb-4 last:border-0">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2">
//                     <p className="font-medium text-sm">{ticket.id}</p>
//                     <p className="font-medium">{ticket.title}</p>
//                   </div>
//                   <p className="text-sm text-muted-foreground">{ticket.time}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Badge
//                     variant={
//                       ticket.priority === "High"
//                         ? "destructive"
//                         : ticket.priority === "Medium"
//                           ? "default"
//                           : "secondary"
//                     }
//                   >
//                     {ticket.priority}
//                   </Badge>
//                   <Badge variant={ticket.status === "Resolved" ? "outline" : "secondary"}>{ticket.status}</Badge>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Service Status */}
//       <Card className="border-0 shadow-md">
//         <CardHeader>
//           <CardTitle>Service Status</CardTitle>
//           <CardDescription>Current status of your IT services</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-3">
//             {[
//               { name: "Cloud Storage", status: "Operational", uptime: "99.9%" },
//               { name: "Email Services", status: "Operational", uptime: "99.8%" },
//               { name: "VPN Access", status: "Operational", uptime: "99.7%" },
//               { name: "Backup Systems", status: "Operational", uptime: "99.9%" },
//             ].map((service) => (
//               <div
//                 key={service.name}
//                 className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg"
//               >
//                 <div>
//                   <p className="font-medium text-sm">{service.name}</p>
//                   <p className="text-xs text-muted-foreground">Uptime: {service.uptime}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
//                   <span className="text-sm font-medium text-emerald-600">{service.status}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Clock, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DashboardHome() {
  const stats = [
    {
      title: "Active Services",
      value: "12",
      description: "All systems operational",
      icon: Zap,
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
    },
    {
      title: "Open Tickets",
      value: "3",
      description: "2 high priority",
      icon: AlertCircle,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      title: "Resolved This Month",
      value: "24",
      description: "+8 from last month",
      icon: CheckCircle2,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Avg Response Time",
      value: "2.5h",
      description: "↓ 30% improvement",
      icon: Clock,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.bgGradient}`}>
                  <Icon className={`h-5 w-5 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="border-b bg-gradient-to-r from-orange-50 to-purple-50">
          <CardTitle>Recent Support Tickets</CardTitle>
          <CardDescription>Your latest support requests</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {[
              {
                id: "TKT-001",
                title: "Network Connectivity Issue",
                status: "In Progress",
                priority: "High",
                time: "2 hours ago",
              },
              {
                id: "TKT-002",
                title: "Software License Renewal",
                status: "Pending",
                priority: "Medium",
                time: "5 hours ago",
              },
              { id: "TKT-003", title: "Server Maintenance", status: "Resolved", priority: "Low", time: "1 day ago" },
              {
                id: "TKT-004",
                title: "Email Configuration",
                status: "In Progress",
                priority: "Medium",
                time: "3 hours ago",
              },
              {
                id: "TKT-005",
                title: "Data Backup Verification",
                status: "Resolved",
                priority: "High",
                time: "2 days ago",
              },
            ].map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors border border-border/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                      {ticket.id}
                    </span>
                    <p className="font-medium text-sm">{ticket.title}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{ticket.time}</p>
                </div>
                <div className="flex items-center gap-2">
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
                  <Badge variant={ticket.status === "Resolved" ? "outline" : "secondary"}>{ticket.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-teal-50">
          <CardTitle>Service Status</CardTitle>
          <CardDescription>Current status of your IT services</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {[
              { name: "Cloud Storage", status: "Operational", uptime: "99.9%", gradient: "from-teal-400 to-cyan-400" },
              {
                name: "Email Services",
                status: "Operational",
                uptime: "99.8%",
                gradient: "from-purple-400 to-pink-400",
              },
              { name: "VPN Access", status: "Operational", uptime: "99.7%", gradient: "from-green-400 to-emerald-400" },
              {
                name: "Backup Systems",
                status: "Operational",
                uptime: "99.9%",
                gradient: "from-orange-400 to-red-400",
              },
            ].map((service) => (
              <div
                key={service.name}
                className={`flex items-center justify-between p-4 rounded-lg bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-current border-opacity-20 shadow-md hover:shadow-lg transition-all`}
              >
                <div>
                  <p className="font-semibold text-sm">{service.name}</p>
                  <p className="text-xs text-muted-foreground">Uptime: {service.uptime}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-400/50"></div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


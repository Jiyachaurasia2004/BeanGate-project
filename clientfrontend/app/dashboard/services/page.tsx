import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Server, Shield, Cloud, Database, Lock } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      name: "Cloud Storage",
      icon: Cloud,
      status: "Active",
      description: "Secure cloud storage with 1TB capacity",
      price: "$99/month",
      features: ["1TB Storage", "24/7 Access", "Automatic Backup"],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      name: "Email Services",
      icon: Lock,
      status: "Active",
      description: "Professional email hosting with security",
      price: "$49/month",
      features: ["Custom Domain", "Spam Filter", "Mobile Sync"],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      name: "Server Management",
      icon: Server,
      status: "Active",
      description: "Dedicated server management and monitoring",
      price: "$299/month",
      features: ["24/7 Monitoring", "Updates", "Security Patches"],
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      name: "Backup & Recovery",
      icon: Database,
      status: "Active",
      description: "Automated backup and disaster recovery",
      price: "$149/month",
      features: ["Daily Backups", "Quick Recovery", "Redundancy"],
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      name: "Security Suite",
      icon: Shield,
      status: "Active",
      description: "Comprehensive security and threat protection",
      price: "$199/month",
      features: ["Firewall", "Antivirus", "Intrusion Detection"],
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      name: "VPN Access",
      icon: Zap,
      status: "Active",
      description: "Secure remote access for your team",
      price: "$79/month",
      features: ["Unlimited Users", "Encryption", "Multi-Device"],
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">IT Services</h1>
        <p className="text-muted-foreground">Manage your active services and subscriptions</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Card key={service.name} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className={`h-1 bg-gradient-to-r from-blue-500 to-cyan-500`}></div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${service.bgColor}`}>
                      <Icon className={`h-5 w-5 ${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <Badge className="mt-1 bg-emerald-100 text-emerald-800">{service.status}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <p className="font-bold text-lg text-blue-600">{service.price}</p>
                  <Button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    Manage Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

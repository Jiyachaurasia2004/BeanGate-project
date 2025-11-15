import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, Download } from "lucide-react"

export default function BillingPage() {
  const invoices = [
    { id: "INV-2025-001", date: "2025-01-01", amount: "$1,299.00", status: "Paid", dueDate: "2025-01-15" },
    { id: "INV-2024-012", date: "2024-12-01", amount: "$1,299.00", status: "Paid", dueDate: "2024-12-15" },
    { id: "INV-2024-011", date: "2024-11-01", amount: "$1,299.00", status: "Paid", dueDate: "2024-11-15" },
    { id: "INV-2024-010", date: "2024-10-01", amount: "$1,299.00", status: "Paid", dueDate: "2024-10-15" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Billing & Invoices</h1>
        <p className="text-muted-foreground">Manage your billing information and invoices</p>
      </div>

      {/* Billing Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">$0.00</div>
            <p className="text-xs text-muted-foreground mt-1">All payments up to date</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-cyan-600">$1,299.00</div>
            <p className="text-xs text-muted-foreground mt-1">For all active services</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Next Invoice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">Feb 1, 2025</div>
            <p className="text-xs text-muted-foreground mt-1">Automatic billing</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Method */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Your current payment method</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/2026</p>
              </div>
            </div>
            <Button variant="outline">Update</Button>
          </div>
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription>Download and view your invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div>
                  <p className="font-medium">{invoice.id}</p>
                  <p className="text-sm text-muted-foreground">{invoice.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">{invoice.amount}</p>
                    <Badge variant={invoice.status === "Paid" ? "outline" : "default"}>{invoice.status}</Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

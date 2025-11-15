import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "support@itcompany.com",
      description: "For general inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Tech Street",
      description: "San Francisco, CA 94105",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "Average response time",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="bg-[#ff6200] p-2 rounded-lg mt-1">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{method.title}</h4>
                  <p className="text-[#ff6200] font-medium text-sm">{method.details}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Social Links */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
        <div className="flex gap-3">
          {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="flex-1 bg-[#ff6200] text-primary-foreground py-2 px-3 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              {social}
            </a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-bold text-foreground mb-3">Business Hours</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monday - Friday</span>
            <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Saturday</span>
            <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sunday</span>
            <span className="font-semibold text-foreground">Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

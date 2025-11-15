import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold  mb-4 text-balance ">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Have a question or ready to transform your business?
            </p>
            <p className="text-muted-foreground">
              Our team is here to help you succeed with cutting-edge IT
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Connect with our experts today and discover how we can help your
            business thrive in the digital age.
          </p>
          <button className="bg-white text-[#ff6200] px-8 py-3 rounded-lg font-semibold  transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}

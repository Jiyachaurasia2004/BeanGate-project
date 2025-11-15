import ServiceCategories from "@/components/Services/ServiceCategory";
import ServiceCTA from "@/components/Services/ServiceCTA";
import ServiceProcess from "@/components/Services/ServiceProcess";
import ServicesHero from "@/components/Services/ServicesHero";



export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceCategories />
      <ServiceProcess />
      <ServiceCTA />
  
    </main>
  )
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgressCounter } from "@/components/ProgressCounter";
import { Gift, Heart, Users, Shield, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Fëmijët e gëzuar me dhurata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full text-secondary mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Sezoni i Dhurimit 2024</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Thesët e{" "}
              <span className="text-gradient-gold">Gëzimit</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Duke sjellë gëzimin e Krishtlindjeve për fëmijët në nevojë në Kosovë. 
              Një thes me dhurata dhe çokollata - €25 për të ndryshuar një festë.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/donate">
                <Button variant="hero" size="xl">
                  <Gift className="w-5 h-5" />
                  Dhuro Tani - €25
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="heroOutline" size="xl">
                  <Users className="w-5 h-5" />
                  Regjistro Familjen
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "500+", label: "Fëmijë" },
                { value: "25+", label: "Komuna" },
                { value: "100%", label: "Transparencë" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold text-secondary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 md:py-24 bg-warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Përparimi Drejt Objektivit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Shikoni se sa afër jemi arritjes së qëllimit tonë për këtë sezon festiv.
            </p>
          </div>
          <ProgressCounter goal={500} donated={347} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Si Funksionon?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Procesi ynë i thjeshtë dhe transparent siguron që çdo donacion arrin tek fëmija në nevojë.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Dhuroni",
                description: "Zgjidhni numrin e thesëve që dëshironi të dhuroni. Çdo thes kushton €25 dhe përmban dhurata të përzgjedhura me kujdes.",
                bgColor: "bg-primary/10",
                iconColor: "text-primary",
              },
              {
                icon: Users,
                title: "Regjistrohuni",
                description: "Familjet në nevojë aplikojnë përmes formës sonë të sigurt. Ne verifikojmë çdo aplikim me kujdes.",
                bgColor: "bg-secondary/20",
                iconColor: "text-secondary",
              },
              {
                icon: Gift,
                title: "Shpërndani",
                description: "Thesët e gëzimit dorëzohen drejtpërdrejt tek familjet para Krishtlindjeve, duke sjellë buzëqeshje në fytyrat e fëmijëve.",
                bgColor: "bg-accent/10",
                iconColor: "text-accent",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="bg-card rounded-2xl shadow-card p-8 text-center hover:shadow-elevated transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl ${step.bgColor} flex items-center justify-center mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Transparencë dhe Besim
              </h2>
              <p className="text-muted-foreground mb-6">
                Ne besojmë në transparencë të plotë. Çdo donacion dokumentohet dhe
                raportohet. Të dhënat e donatorëve dhe familjeve mbahen të ndara
                dhe të mbrojtura.
              </p>
              <ul className="space-y-4">
                {[
                  "Pagesa e sigurt përmes Stripe",
                  "Raportim i rregullt i shpërndarjes",
                  "Mbrojtja e të dhënave personale",
                  "Organizatë jo-fitimprurëse e regjistruar",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl shadow-elevated p-8">
              <blockquote className="text-lg italic text-foreground/80 mb-4">
                "Faleminderit që na mundësuat të shijojmë Krishtlindjet si çdo familje tjetër. 
                Fëmijët tanë ishin aq të lumtur kur pranuan thesët."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                — Familje përfituese, Prishtinë 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Bëhu Pjesë e Gëzimit
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Bashkohuni me qindra donatorë të tjerë që po ndryshojnë festën e Krishtlindjeve
            për fëmijët në nevojë në Kosovë.
          </p>
          <Link to="/donate">
            <Button variant="gold" size="xl">
              Dhuro Tani
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

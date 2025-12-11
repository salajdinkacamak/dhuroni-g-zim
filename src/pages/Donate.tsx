import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DonationCard } from "@/components/DonationCard";
import { ProgressCounter } from "@/components/ProgressCounter";
import { Shield, Heart, Clock } from "lucide-react";

export default function Donate() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 bg-hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Dhuroni një Thes Gëzimi
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Çdo thes prej €25 përmban dhurata dhe çokollata të zgjedhura me kujdes
              për të sjellë buzëqeshje në fytyrën e një fëmije.
            </p>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Donation Card */}
              <div className="order-2 lg:order-1">
                <DonationCard />
              </div>

              {/* Info Side */}
              <div className="order-1 lg:order-2 space-y-8">
                <ProgressCounter goal={500} donated={347} />

                {/* Trust Badges */}
                <div className="bg-card rounded-2xl shadow-card p-6">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    Pse të Dhuroni me Ne?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Shield,
                        title: "Pagesa e Sigurt",
                        description: "Pagesa përpunohet përmes Stripe, lider botëror në pagesa online.",
                      },
                      {
                        icon: Heart,
                        title: "100% Për Fëmijët",
                        description: "Çdo euro shkon drejtpërdrejt për blerjen dhe shpërndarjen e dhuratave.",
                      },
                      {
                        icon: Clock,
                        title: "Konfirmim i Menjëhershëm",
                        description: "Merrni konfirmimin përmes emailit sapo të përfundojë pagesa.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-muted/50 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    Pyetje të Shpeshta
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Çfarë përmban një thes?</p>
                      <p className="text-muted-foreground">
                        Çdo thes përmban çokollata, lodra të vogla, dhe dhurata
                        të përshtatshme për moshën e fëmijës.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Si dorëzohen thesët?</p>
                      <p className="text-muted-foreground">
                        Vullnetarët tanë i dorëzojnë thesët drejtpërdrejt te
                        familjet para Krishtlindjeve.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">A mund të dhuroj në mënyrë anonime?</p>
                      <p className="text-muted-foreground">
                        Po, emri juaj nuk do të ndahet publikisht. Vetëm ekipi
                        ynë do të ketë qasje në të dhënat tuaja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

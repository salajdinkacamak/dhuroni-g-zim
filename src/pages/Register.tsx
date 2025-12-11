import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FamilyRegistrationForm } from "@/components/FamilyRegistrationForm";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-accent-foreground mb-4">
              Regjistroni Familjen Tuaj
            </h1>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              Plotësoni formularin më poshtë për të aplikuar për një Thes Gëzimi
              për fëmijët tuaj këtë sezon festiv.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Info Boxes */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">
                      Kriteret e Aplikimit
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Banorë i Kosovës</li>
                      <li>• Fëmijë të moshës 1-17 vjeç</li>
                      <li>• Maksimumi 5 fëmijë për familje</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">
                      Shënim i Rëndësishëm
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Aplikimi nuk garanton pranimin. Çdo aplikim shqyrtohet
                      individualisht nga ekipi ynë.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <FamilyRegistrationForm />

            {/* Privacy Note */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                Të dhënat tuaja janë të mbrojtura dhe përdoren vetëm për
                qëllimin e shpërndarjes së dhuratave. Lexoni{" "}
                <a href="#" className="text-primary hover:underline">
                  Politikën e Privatësisë
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

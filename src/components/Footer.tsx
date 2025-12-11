import { Gift, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Thesët e Gëzimit</h3>
                <p className="text-xs text-primary-foreground/70">Babadimri.org</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Duke sjellë gëzimin e Krishtlindjeve për çdo fëmijë në Kosovë.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Lidhje të Shpejta</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Ballina
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-secondary transition-colors">
                  Dhuro Tani
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-secondary transition-colors">
                  Regjistro Familjen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Kontakti</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                info@babadimri.org
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                +383 44 XXX XXX
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                Prishtinë, Kosovë
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p className="flex items-center justify-center gap-1">
            Krijuar me <Heart className="w-4 h-4 text-primary fill-primary" /> për fëmijët e Kosovës
          </p>
          <p className="mt-2">© 2024 Babadimri.org. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  );
}

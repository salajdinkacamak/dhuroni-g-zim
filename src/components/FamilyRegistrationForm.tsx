import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { User, Phone, Mail, MapPin, Baby, Plus, Trash2, Send } from "lucide-react";

interface Child {
  id: string;
  name: string;
  age: string;
  gender: string;
}

const municipalities = [
  "Prishtinë", "Prizren", "Pejë", "Gjakovë", "Mitrovicë", "Ferizaj", "Gjilan",
  "Podujevë", "Vushtrri", "Suharekë", "Rahovec", "Malishevë", "Lipjan",
  "Drenas", "Skënderaj", "Kamenicë", "Viti", "Deçan", "Istog", "Klinë",
  "Fushë Kosovë", "Kaçanik", "Shtime", "Obiliq", "Hani i Elezit"
];

export function FamilyRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    municipality: "",
  });
  const [children, setChildren] = useState<Child[]>([
    { id: "1", name: "", age: "", gender: "" },
  ]);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addChild = () => {
    if (children.length >= 5) {
      toast.error("Maksimumi i fëmijëve është 5 për aplikim.");
      return;
    }
    setChildren([
      ...children,
      { id: Date.now().toString(), name: "", age: "", gender: "" },
    ]);
  };

  const removeChild = (id: string) => {
    if (children.length <= 1) return;
    setChildren(children.filter((child) => child.id !== id));
  };

  const updateChild = (id: string, field: keyof Child, value: string) => {
    setChildren(
      children.map((child) =>
        child.id === id ? { ...child, [field]: value } : child
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast.error("Ju lutem pranoni kushtet për të vazhduar.");
      return;
    }

    const invalidChildren = children.some(
      (child) => !child.name || !child.age || !child.gender
    );
    if (invalidChildren) {
      toast.error("Ju lutem plotësoni të dhënat e të gjithë fëmijëve.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Aplikimi u dërgua me sukses!", {
      description: "Do të kontaktoheni kur aplikimi të shqyrtohet.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      municipality: "",
    });
    setChildren([{ id: "1", name: "", age: "", gender: "" }]);
    setConsent(false);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Family Information */}
      <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
        <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          Të Dhënat e Familjes
        </h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Emri i Plotë *</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="fullName"
                placeholder="Filan Fisteku"
                className="pl-10"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Numri i Telefonit *</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="+383 44 XXX XXX"
                className="pl-10"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Adresa e Emailit</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="email@shembull.com"
                className="pl-10"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="municipality">Komuna *</Label>
            <Select
              value={formData.municipality}
              onValueChange={(value) => setFormData({ ...formData, municipality: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Zgjidhni komunën" />
              </SelectTrigger>
              <SelectContent>
                {municipalities.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Adresa e Plotë *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                id="address"
                placeholder="Rruga, numri, lagjja..."
                className="pl-10"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Children Information */}
      <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-semibold flex items-center gap-2">
            <Baby className="w-5 h-5 text-primary" />
            Të Dhënat e Fëmijëve
          </h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addChild}
            disabled={children.length >= 5}
          >
            <Plus className="w-4 h-4 mr-1" />
            Shto Fëmijë
          </Button>
        </div>

        <div className="space-y-4">
          {children.map((child, index) => (
            <div
              key={child.id}
              className="p-4 bg-muted/50 rounded-xl border border-border animate-scale-in"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-sm">
                  Fëmija {index + 1}
                </span>
                {children.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeChild(child.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="space-y-1">
                  <Label className="text-xs">Emri i Plotë *</Label>
                  <Input
                    placeholder="Emri i fëmijës"
                    value={child.name}
                    onChange={(e) => updateChild(child.id, "name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Mosha *</Label>
                  <Select
                    value={child.age}
                    onValueChange={(value) => updateChild(child.id, "age", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Mosha" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 17 }, (_, i) => i + 1).map((age) => (
                        <SelectItem key={age} value={age.toString()}>
                          {age} vjeç
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Gjinia *</Label>
                  <Select
                    value={child.gender}
                    onValueChange={(value) => updateChild(child.id, "gender", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Gjinia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Djalë</SelectItem>
                      <SelectItem value="female">Vajzë</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          * Maksimumi 5 fëmijë për aplikim
        </p>
      </div>

      {/* Consent */}
      <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked as boolean)}
            className="mt-1"
          />
          <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
            Unë pranoj që të dhënat e mia dhe të fëmijëve të mij të përdoren vetëm
            për qëllimin e shpërndarjes së dhuratave të Krishtlindjeve. Të dhënat
            do të trajtohen në përputhje me rregullat e privatësisë dhe nuk do të
            ndahen me palë të treta. *
          </Label>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin">⏳</span>
            Duke dërguar...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Dërgo Aplikimin
          </>
        )}
      </Button>
    </form>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Lock,
  Users,
  Gift,
  Download,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  LogOut,
  BarChart3,
} from "lucide-react";

// Mock data - in real app this would come from backend
const mockApplications = [
  {
    id: "1",
    familyName: "Krasniqi",
    phone: "+383 44 123 456",
    municipality: "Prishtinë",
    children: 3,
    status: "pending",
    submittedAt: "2024-12-01",
  },
  {
    id: "2",
    familyName: "Berisha",
    phone: "+383 44 234 567",
    municipality: "Prizren",
    children: 2,
    status: "approved",
    submittedAt: "2024-12-02",
  },
  {
    id: "3",
    familyName: "Gashi",
    phone: "+383 44 345 678",
    municipality: "Pejë",
    children: 4,
    status: "rejected",
    submittedAt: "2024-12-03",
  },
];

const mockDonations = [
  {
    id: "1",
    donorName: "Anonim",
    email: "donor1@email.com",
    bags: 5,
    amount: 125,
    date: "2024-12-01",
  },
  {
    id: "2",
    donorName: "Kompania XYZ",
    email: "info@xyz.com",
    bags: 20,
    amount: 500,
    date: "2024-12-02",
  },
  {
    id: "3",
    donorName: "Anonim",
    email: "donor3@email.com",
    bags: 2,
    amount: 50,
    date: "2024-12-03",
  },
];

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"applications" | "donations">("applications");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would be proper authentication
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast.success("Hyrja u krye me sukses!");
    } else {
      toast.error("Fjalëkalimi i gabuar!");
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    toast.success(`Statusi u ndryshua në: ${newStatus}`);
  };

  const handleExport = () => {
    toast.success("Eksportimi filloi! Skedari CSV do të shkarkohet.");
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; className: string }> = {
      pending: { label: "Në Shqyrtim", className: "bg-secondary/20 text-secondary-foreground" },
      approved: { label: "Aprovuar", className: "bg-accent/20 text-accent" },
      rejected: { label: "Skualifikuar", className: "bg-destructive/20 text-destructive" },
    };
    const variant = variants[status] || variants.pending;
    return <Badge className={variant.className}>{variant.label}</Badge>;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-card rounded-2xl shadow-elevated p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-2xl font-bold">Paneli i Adminit</h1>
            <p className="text-muted-foreground mt-2">
              Hyni për të menaxhuar aplikacionet dhe donacionet
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Fjalëkalimi</Label>
              <Input
                id="password"
                type="password"
                placeholder="Shkruani fjalëkalimin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" variant="hero" className="w-full">
              Hyr
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Demo: përdorni "admin123" si fjalëkalim
          </p>
        </div>
      </div>
    );
  }

  const filteredApplications = mockApplications.filter((app) => {
    const matchesSearch = app.familyName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display font-bold">Paneli i Adminit</h1>
                <p className="text-xs text-muted-foreground">Thesët e Gëzimit</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAuthenticated(false)}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Dil
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Aplikime Totale", value: "156", color: "primary" },
            { icon: CheckCircle, label: "Të Aprovuara", value: "89", color: "accent" },
            { icon: Gift, label: "Thesë të Dhuruar", value: "347", color: "secondary" },
            { icon: BarChart3, label: "Të Ardhura (€)", value: "8,675", color: "forest" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl shadow-card p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                </div>
                <div>
                  <p className="font-display text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === "applications" ? "default" : "outline"}
            onClick={() => setActiveTab("applications")}
          >
            <Users className="w-4 h-4 mr-2" />
            Aplikimet
          </Button>
          <Button
            variant={activeTab === "donations" ? "default" : "outline"}
            onClick={() => setActiveTab("donations")}
          >
            <Gift className="w-4 h-4 mr-2" />
            Donacionet
          </Button>
        </div>

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <div className="bg-card rounded-2xl shadow-card">
            {/* Filters */}
            <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Kërko familjen..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtro sipas statusit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Të gjitha</SelectItem>
                  <SelectItem value="pending">Në Shqyrtim</SelectItem>
                  <SelectItem value="approved">Të Aprovuara</SelectItem>
                  <SelectItem value="rejected">Të Skualifikuara</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={handleExport}>
                <Download className="w-4 h-4 mr-2" />
                Eksporto CSV
              </Button>
            </div>

            {/* Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Familja</TableHead>
                  <TableHead>Telefoni</TableHead>
                  <TableHead>Komuna</TableHead>
                  <TableHead>Fëmijë</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Statusi</TableHead>
                  <TableHead>Veprime</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.familyName}</TableCell>
                    <TableCell>{app.phone}</TableCell>
                    <TableCell>{app.municipality}</TableCell>
                    <TableCell>{app.children}</TableCell>
                    <TableCell>{app.submittedAt}</TableCell>
                    <TableCell>{getStatusBadge(app.status)}</TableCell>
                    <TableCell>
                      <Select
                        value={app.status}
                        onValueChange={(value) => handleStatusChange(app.id, value)}
                      >
                        <SelectTrigger className="w-[140px] h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Në Shqyrtim</SelectItem>
                          <SelectItem value="approved">Aprovo</SelectItem>
                          <SelectItem value="rejected">Skualifiko</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Donations Tab */}
        {activeTab === "donations" && (
          <div className="bg-card rounded-2xl shadow-card">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h2 className="font-display font-semibold">Lista e Donacioneve</h2>
              <Button variant="outline" onClick={handleExport}>
                <Download className="w-4 h-4 mr-2" />
                Eksporto CSV
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donatori</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Thesë</TableHead>
                  <TableHead>Shuma (€)</TableHead>
                  <TableHead>Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockDonations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell className="font-medium">{donation.donorName}</TableCell>
                    <TableCell>{donation.email}</TableCell>
                    <TableCell>{donation.bags}</TableCell>
                    <TableCell>€{donation.amount}</TableCell>
                    <TableCell>{donation.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
}

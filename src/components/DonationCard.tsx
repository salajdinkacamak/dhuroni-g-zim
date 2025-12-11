import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Minus, Plus, ShoppingBag, CreditCard } from "lucide-react";
import { toast } from "sonner";

const PRICE_PER_BAG = 25;

export function DonationCard() {
  const [quantity, setQuantity] = useState(1);

  const total = quantity * PRICE_PER_BAG;

  const incrementQuantity = () => setQuantity((q) => Math.min(q + 1, 100));
  const decrementQuantity = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleDonate = () => {
    toast.success(
      `Faleminderit! Po përpunojmë donacionin tuaj prej €${total} për ${quantity} thes.`,
      {
        description: "Do të ridrejtoheni te faqja e pagesës.",
      }
    );
  };

  const presetAmounts = [1, 2, 5, 10];

  return (
    <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-float">
          <Gift className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold">Dhuroni një Thes Gëzimi</h3>
        <p className="text-muted-foreground mt-2">
          Çdo thes përmban dhurata dhe çokollata për një fëmijë
        </p>
      </div>

      {/* Price Display */}
      <div className="bg-muted rounded-xl p-4 text-center mb-6">
        <p className="text-sm text-muted-foreground mb-1">Çmimi për thes</p>
        <p className="font-display text-4xl font-bold text-gradient-gold">€{PRICE_PER_BAG}</p>
      </div>

      {/* Preset Amounts */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {presetAmounts.map((amount) => (
          <Button
            key={amount}
            variant={quantity === amount ? "default" : "outline"}
            size="sm"
            onClick={() => setQuantity(amount)}
            className="font-semibold"
          >
            {amount}
          </Button>
        ))}
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={decrementQuantity}
          disabled={quantity <= 1}
          className="rounded-full"
        >
          <Minus className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-2 px-6 py-3 bg-muted rounded-xl">
          <ShoppingBag className="w-5 h-5 text-primary" />
          <span className="font-display text-2xl font-bold min-w-[3ch] text-center">
            {quantity}
          </span>
          <span className="text-muted-foreground">thes</span>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={incrementQuantity}
          disabled={quantity >= 100}
          className="rounded-full"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* Total */}
      <div className="bg-gradient-to-r from-primary to-burgundy-light rounded-xl p-4 text-center mb-6">
        <p className="text-primary-foreground/80 text-sm mb-1">Totali</p>
        <p className="font-display text-4xl font-bold text-primary-foreground">€{total}</p>
        <p className="text-primary-foreground/70 text-sm mt-1">
          {quantity} {quantity === 1 ? "fëmijë do të buzëqeshë" : "fëmijë do të buzëqeshin"}
        </p>
      </div>

      {/* Donate Button */}
      <Button variant="gold" size="xl" className="w-full" onClick={handleDonate}>
        <CreditCard className="w-5 h-5" />
        Dhuro Tani
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Pagesa e sigurt përmes Stripe. Të dhënat tuaja janë të mbrojtura.
      </p>
    </div>
  );
}

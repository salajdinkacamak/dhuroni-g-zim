import { Gift, Target, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface ProgressCounterProps {
  goal: number;
  donated: number;
}

export function ProgressCounter({ goal, donated }: ProgressCounterProps) {
  const [displayDonated, setDisplayDonated] = useState(0);
  const percentage = Math.min((donated / goal) * 100, 100);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = donated / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= donated) {
        setDisplayDonated(donated);
        clearInterval(timer);
      } else {
        setDisplayDonated(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [donated]);

  return (
    <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
      <h3 className="font-display text-xl md:text-2xl font-semibold text-center mb-6">
        Përparimi Ynë
      </h3>

      {/* Progress Bar */}
      <div className="relative h-6 bg-muted rounded-full overflow-hidden mb-6">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-burgundy-light rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-foreground">
            {percentage.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <Gift className="w-6 h-6 text-primary" />
          </div>
          <p className="font-display text-2xl md:text-3xl font-bold text-primary">
            {displayDonated}
          </p>
          <p className="text-sm text-muted-foreground">Dhuruar</p>
        </div>

        <div className="space-y-1">
          <div className="w-12 h-12 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
            <Target className="w-6 h-6 text-secondary" />
          </div>
          <p className="font-display text-2xl md:text-3xl font-bold text-secondary">
            {goal}
          </p>
          <p className="text-sm text-muted-foreground">Objektivi</p>
        </div>

        <div className="space-y-1">
          <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          <p className="font-display text-2xl md:text-3xl font-bold text-accent">
            {goal - donated}
          </p>
          <p className="text-sm text-muted-foreground">Mbetur</p>
        </div>
      </div>
    </div>
  );
}

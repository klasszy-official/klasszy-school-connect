import { BookOpen, Bell, CalendarDays, MessageCircle } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
            
      <div className="relative rounded-[2.5rem] border-[10px] border-foreground/90 bg-foreground/90 shadow-[var(--shadow-phone)]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/90" />
        <div className="overflow-hidden rounded-[1.8rem] bg-[image:var(--gradient-hero)] p-4 pt-8">
          {/* Status bar */}
          <div className="mb-4 flex items-center justify-between text-[10px] font-semibold text-foreground/70">
            <span>9:41</span>
            <span>Klasszy</span>
          </div>

          {/* Greeting card */}
          <div className="rounded-2xl bg-white p-3 shadow-[var(--shadow-card)]">
            <p className="text-[11px] text-muted-foreground">Good morning</p>
            <p className="text-sm font-bold text-foreground">Greenfield School</p>
          </div>

          {/* Quick tiles */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              { icon: BookOpen, label: "Homework", tone: "bg-[oklch(0.95_0.05_240)] text-primary" },
              { icon: Bell, label: "Notice", tone: "bg-[oklch(0.95_0.05_160)] text-accent" },
              { icon: CalendarDays, label: "Timetable", tone: "bg-[oklch(0.96_0.05_60)] text-[oklch(0.55_0.15_60)]" },
              { icon: MessageCircle, label: "Messages", tone: "bg-[oklch(0.95_0.05_320)] text-[oklch(0.5_0.18_320)]" },
            ].map(({ icon: Icon, label, tone }) => (
              <div key={label} className="rounded-xl bg-white p-2.5 shadow-[var(--shadow-card)]">
                <span className={`mb-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg ${tone}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-[11px] font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>

          {/* Notification */}
          <div className="mt-3 rounded-2xl bg-white p-3 shadow-[var(--shadow-card)]">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Bell className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-foreground">New Homework</p>
                <p className="text-[10px] leading-snug text-muted-foreground">Class 5 — Maths Ch. 3, Q1–10</p>
              </div>
            </div>
          </div>

          <div className="mt-2 rounded-2xl bg-white p-3 shadow-[var(--shadow-card)]">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <CalendarDays className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-foreground">Annual Sports Day</p>
                <p className="text-[10px] leading-snug text-muted-foreground">Saturday • 9:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
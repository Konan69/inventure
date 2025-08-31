"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";

export interface MetricItem {
  value: string;
  label: string;
}

export interface MetricsDisplayProps {
  metrics?: MetricItem[];
}

const DEFAULT_METRICS: MetricItem[] = [
  { value: "5x Faster", label: "Time-to-hire" },
  { value: "500+", label: "Companies" },
  { value: "95%", label: "Success Rate" },
  { value: "24/7", label: "Support" },
];

// Helper function to extract numeric value and suffix
function parseMetricValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) {
    return { number: parseInt(match[1], 10), suffix: match[2] };
  }
  return { number: 0, suffix: value };
}

// Helper function to determine if metric should be animated
function shouldAnimateMetric(value: string): boolean {
  // Don't animate "3x Faster" and "24/7 Support"
  return !value.includes("x") && !value.includes("/");
}

export function MetricsDisplay({
  metrics = DEFAULT_METRICS,
}: MetricsDisplayProps) {
  return (
    <section className="bg-muted/50">
      <div className="max-w-4xl mx-auto px-2 py-12 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => {
            const shouldAnimate = shouldAnimateMetric(m.value);
            const { number, suffix } = parseMetricValue(m.value);

            return (
              <div key={i} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold flex items-center justify-center">
                  {shouldAnimate ? (
                    <>
                      <NumberTicker
                        value={number}
                        className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white"
                        delay={i * 0.2}
                      />
                      <span className="ml-1">{suffix}</span>
                    </>
                  ) : (
                    <span className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white">
                      {m.value}
                    </span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MetricsDisplay;

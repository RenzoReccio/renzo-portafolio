'use client';

import PageHead from '@/components/layout/pageHead';
import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FiPlay } from 'react-icons/fi';

const headInfo = {
  headline: "Collatz Conjecture",
  text: "The conjecture states that repeating two simple arithmetic operations (n/2 if even, 3n+1 if odd) will always eventually transform any positive integer into 1.",
  eyebrow: "Interactive Math Lab",
  number: "02",
};

export default function CollatzConjecture() {
  const [inputNumber, setInputNumber] = useState<number>(27);
  const [activeNumber, setActiveNumber] = useState<number>(27);

  function calculateCollatz(n: number): number[] {
    const result: number[] = [];
    let current = n;
    while (current !== 1 && current > 0) {
      result.push(current);
      if (current % 2 === 0) {
        current = current / 2;
      } else {
        current = 3 * current + 1;
      }
    }
    result.push(1);
    return result;
  }

  const mapData = useMemo(() => {
    if (activeNumber <= 0) return [];
    const data = calculateCollatz(activeNumber);
    return data.map((item, index) => ({ name: index, uv: item }));
  }, [activeNumber]);

  const maxVal = useMemo(() => {
    if (!mapData.length) return 0;
    return Math.max(...mapData.map((d) => d.uv));
  }, [mapData]);

  function onSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (inputNumber > 0) {
      setActiveNumber(inputNumber);
    }
  }

  return (
    <div data-testid="projects-index" className="space-y-8">
      <PageHead {...headInfo} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 ui-card p-6 shadow-ui-card">
          <h2 className="text-base font-bold text-ink">
            Parameters
          </h2>
          <p className="text-xs text-muted mt-1">
            Choose a starting positive integer to track its path to 1.
          </p>

          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="collatz-input-field"
                className="block text-xs font-mono font-medium text-muted mb-1.5"
              >
                Initial Integer (n)
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="collatz-input-field"
                  value={inputNumber || ''}
                  onChange={(e) => setInputNumber(Number(e.target.value))}
                  name="name"
                  className="min-w-0 flex-1 bg-paper-3 border border-rule rounded-xl px-3.5 py-2 text-sm text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all font-mono"
                  type="number"
                  min="1"
                  data-testid="collatz-input"
                  placeholder="e.g. 27"
                />
                <button
                  type="submit"
                  className="shrink-0 ui-btn-primary apple-press !text-xs !px-3.5 !py-2 flex items-center gap-1.5 font-bold whitespace-nowrap"
                >
                  <FiPlay className="text-xs" />
                  <span>Run</span>
                </button>
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-muted block mb-2">
                Curated Examples
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[7, 19, 27, 97, 871].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setInputNumber(preset);
                      setActiveNumber(preset);
                    }}
                    className={`px-2.5 py-1 text-xs font-mono rounded-full border transition-all apple-press ${activeNumber === preset
                      ? "bg-amber-300 text-zinc-950 border-amber-400 font-bold shadow-sm"
                      : "bg-paper-3 border-rule text-muted hover:text-ink hover:border-rule-2"
                      }`}
                  >
                    n = {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics Overview */}
            <div className="pt-4 border-t border-rule grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-paper-3 border border-rule/60">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  Total Steps
                </span>
                <span className="text-lg font-bold font-mono text-ink">
                  {mapData.length > 0 ? mapData.length - 1 : 0}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-paper-3 border border-rule/60">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                  Peak Value
                </span>
                <span className="text-lg font-bold font-mono text-ink">
                  {maxVal.toLocaleString()}
                </span>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:col-span-8 ui-card p-6 shadow-ui-card flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-rule mb-4">
            <div>
              <h2 className="text-base font-bold text-ink">
                Sequence Trajectory
              </h2>
              <p className="text-xs font-mono text-muted">
                Step-by-step convergence path for n = {activeNumber}
              </p>
            </div>
          </div>

          <div className="w-full h-80 sm:h-96">
            <ResponsiveContainer height="100%" width="100%">
              <LineChart data={mapData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="currentColor"
                  className="text-rule/60"
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="ui-nav p-3 rounded-xl shadow-lg border border-rule text-xs font-mono">
                          <p className="font-semibold text-ink">
                            Step {payload[0].payload.name}
                          </p>
                          <p className="text-amber-500 font-bold text-sm mt-0.5">
                            Value: {Number(payload[0].value).toLocaleString()}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <XAxis
                  dataKey="name"
                  stroke="currentColor"
                  className="text-muted text-xs font-mono"
                  tickLine={false}
                />
                <YAxis
                  stroke="currentColor"
                  className="text-muted text-xs font-mono"
                  tickLine={false}
                  tickFormatter={(val) => (val > 1000 ? `${(val / 1000).toFixed(0)}k` : val)}
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  dot={mapData.length < 50 ? { r: 3, fill: '#f59e0b', strokeWidth: 0 } : false}
                  activeDot={{ r: 5, fill: '#d97706' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

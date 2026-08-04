import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Activity } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

function EquityChart({ data }) {

  return (
    <section className="flex h-[260px] flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm sm:h-[300px] sm:p-5 lg:h-[320px] lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Equity Curve</h2>
          <p className="mt-1 text-sm text-slate-400">Performance trend overview</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 text-sky-400">
          <Activity className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-4 min-h-0 flex-1 rounded-xl bg-slate-950/70 p-2 sm:p-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.04} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis dataKey="tradeNumber" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip formatter={(value) => formatCurrency(value)} />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#38bdf8"
              strokeWidth={2.5}
              fill="url(#balanceFill)"
              dot={false}
              activeDot={{ r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default EquityChart;

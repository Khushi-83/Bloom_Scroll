import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const data = Array.from({ length: 90 }, (_, i) => ({
  date: new Date(2024, 0, i + 1).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  mobile: Math.floor(Math.random() * 50) + 30,
  desktop: Math.floor(Math.random() * 60) + 40,
}));

export function ProgressGraph() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">Your Growth Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
              <XAxis 
                dataKey="date" 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8' }}
                tickLine={{ stroke: '#94a3b8' }}
              />
              <YAxis 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                tickLine={{ stroke: '#94a3b8' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
                labelStyle={{ color: '#e2e8f0', marginBottom: '0.5rem' }}
                itemStyle={{ color: '#e2e8f0', padding: '0.25rem 0' }}
              />
              <Area
                type="monotone"
                dataKey="mobile"
                stroke="#0EA5E9"
                fillOpacity={1}
                fill="url(#colorMobile)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="desktop"
                stroke="#2563EB"
                fillOpacity={1}
                fill="url(#colorDesktop)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
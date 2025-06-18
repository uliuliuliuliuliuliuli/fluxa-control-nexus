
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Calendar, Download } from "lucide-react"

// Mock historical data
const historicalData = [
  { time: '00:00', temperature: 24.2, pressure: 1.15, flow: 43.5 },
  { time: '04:00', temperature: 23.8, pressure: 1.18, flow: 44.1 },
  { time: '08:00', temperature: 25.1, pressure: 1.22, flow: 45.8 },
  { time: '12:00', temperature: 26.3, pressure: 1.25, flow: 46.2 },
  { time: '16:00', temperature: 25.7, pressure: 1.20, flow: 45.0 },
  { time: '20:00', temperature: 24.9, pressure: 1.17, flow: 44.3 },
]

export default function History() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Historical Data</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="bg-slate-800 border-slate-700 text-white">
            <Calendar className="w-4 h-4 mr-2" />
            Select Date Range
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-sm">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">PLC Unit</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All PLCs</SelectItem>
                  <SelectItem value="plc-001">PLC-001</SelectItem>
                  <SelectItem value="plc-002">PLC-002</SelectItem>
                  <SelectItem value="plc-003">PLC-003</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Parameter</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Parameters</SelectItem>
                  <SelectItem value="temperature">Temperature</SelectItem>
                  <SelectItem value="pressure">Pressure</SelectItem>
                  <SelectItem value="flow">Flow Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-slate-300 text-sm mb-2 block">Time Range</label>
              <Select defaultValue="24h">
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1h">Last Hour</SelectItem>
                  <SelectItem value="24h">Last 24 Hours</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Parameter Trends - Last 24 Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="temperature" 
                    stroke="#EF4444" 
                    strokeWidth={2} 
                    name="Temperature (°C)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="pressure" 
                    stroke="#3B82F6" 
                    strokeWidth={2} 
                    name="Pressure (bar)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="flow" 
                    stroke="#10B981" 
                    strokeWidth={2} 
                    name="Flow (L/min)" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

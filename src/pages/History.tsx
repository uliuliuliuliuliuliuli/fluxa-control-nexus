
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Calendar, Download } from "lucide-react"

// Mock historical data with all greenhouse parameters
const historicalData = [
  { time: '00:00', temperature: 24.2, pressure: 1.15, flow: 43.5, humidity: 45, ventPosition: 75, energyConsumption: 24.5, pipeTemp: 45.8, co2: 420, screenPosition: 85, dli: 15.2 },
  { time: '04:00', temperature: 23.8, pressure: 1.18, flow: 44.1, humidity: 47, ventPosition: 78, energyConsumption: 25.1, pipeTemp: 46.2, co2: 425, screenPosition: 88, dli: 15.8 },
  { time: '08:00', temperature: 25.1, pressure: 1.22, flow: 45.8, humidity: 48, ventPosition: 80, energyConsumption: 25.8, pipeTemp: 47.1, co2: 430, screenPosition: 90, dli: 16.1 },
  { time: '12:00', temperature: 26.3, pressure: 1.25, flow: 46.2, humidity: 46, ventPosition: 75, energyConsumption: 24.9, pipeTemp: 46.8, co2: 428, screenPosition: 87, dli: 15.9 },
  { time: '16:00', temperature: 25.7, pressure: 1.20, flow: 45.0, humidity: 45, ventPosition: 72, energyConsumption: 24.2, pipeTemp: 46.0, co2: 422, screenPosition: 85, dli: 15.5 },
  { time: '20:00', temperature: 24.9, pressure: 1.17, flow: 44.3, humidity: 44, ventPosition: 70, energyConsumption: 23.8, pipeTemp: 45.5, co2: 418, screenPosition: 82, dli: 15.0 },
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
              <label className="text-slate-300 text-sm mb-2 block">Greenhouse</label>
              <Select defaultValue="greenhouse-001">
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="greenhouse-001">Greenhouse-001</SelectItem>
                  <SelectItem value="greenhouse-002">Greenhouse-002</SelectItem>
                  <SelectItem value="greenhouse-003">Greenhouse-003</SelectItem>
                  <SelectItem value="greenhouse-004">Greenhouse-004</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Parameter</label>
              <Select defaultValue="temperature">
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="temperature">Temperature</SelectItem>
                  <SelectItem value="humidity">Humidity</SelectItem>
                  <SelectItem value="pressure">Pressure</SelectItem>
                  <SelectItem value="flow">Flow Rate</SelectItem>
                  <SelectItem value="ventPosition">Vent Position</SelectItem>
                  <SelectItem value="energyConsumption">Energy Consumption</SelectItem>
                  <SelectItem value="pipeTemp">Pipe Temperature</SelectItem>
                  <SelectItem value="co2">CO2 Level</SelectItem>
                  <SelectItem value="screenPosition">Screen Position</SelectItem>
                  <SelectItem value="dli">DLI</SelectItem>
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

            <div>
              <label className="text-slate-300 text-sm mb-2 block">Date Range</label>
              <div className="space-y-2">
                <input 
                  type="date" 
                  className="w-full bg-slate-700 border-slate-600 text-white rounded px-3 py-2 text-sm"
                  defaultValue="2024-01-01"
                />
                <input 
                  type="date" 
                  className="w-full bg-slate-700 border-slate-600 text-white rounded px-3 py-2 text-sm"
                  defaultValue="2024-01-31"
                />
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Apply Filters
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Parameter Trends - Greenhouse-001 Temperature</CardTitle>
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
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-slate-400">
              <p>Showing data for the last 24 hours. Use filters to change parameters and time range.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

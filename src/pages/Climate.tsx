
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Thermometer, Wind, Droplets, Zap, Activity } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Mock real-time data for charts
const climateData = [
  { time: '14:00', temperature: 23.2, humidity: 45, ventPosition: 75, energyConsumption: 24.5, pipeTemp: 45.8, co2: 420, screenPosition: 85, dli: 15.2 },
  { time: '14:15', temperature: 23.5, humidity: 47, ventPosition: 78, energyConsumption: 25.1, pipeTemp: 46.2, co2: 425, screenPosition: 88, dli: 15.8 },
  { time: '14:30', temperature: 24.1, humidity: 48, ventPosition: 80, energyConsumption: 25.8, pipeTemp: 47.1, co2: 430, screenPosition: 90, dli: 16.1 },
  { time: '14:45', temperature: 24.0, humidity: 46, ventPosition: 75, energyConsumption: 24.9, pipeTemp: 46.8, co2: 428, screenPosition: 87, dli: 15.9 },
  { time: '15:00', temperature: 23.8, humidity: 45, ventPosition: 72, energyConsumption: 24.2, pipeTemp: 46.0, co2: 422, screenPosition: 85, dli: 15.5 },
]

export default function Climate() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Climate Adjustment</h1>
        <Badge className="bg-green-600">System Active</Badge>
      </div>

      {/* Control Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-red-400" />
              Temperature Control
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold text-white">23.5°C</div>
            <div>
              <Label className="text-slate-300">Target Temperature</Label>
              <Input 
                type="number" 
                defaultValue="24.0"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Setting
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-400" />
              Humidity Control
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold text-white">45.2%</div>
            <div>
              <Label className="text-slate-300">Target Humidity</Label>
              <Input 
                type="number" 
                defaultValue="50"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Setting
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Wind className="w-5 h-5 text-green-400" />
              Ventilation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold text-white">1250 CFM</div>
            <div>
              <Label className="text-slate-300">Fan Speed (%)</Label>
              <Input 
                type="number" 
                defaultValue="75"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Setting
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Temperature & Humidity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={climateData}>
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
                  <Line type="monotone" dataKey="temperature" stroke="#EF4444" strokeWidth={2} name="Temperature (°C)" />
                  <Line type="monotone" dataKey="humidity" stroke="#3B82F6" strokeWidth={2} name="Humidity (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Ventilation & Energy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={climateData}>
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
                  <Line type="monotone" dataKey="ventPosition" stroke="#10B981" strokeWidth={2} name="Vent Position (%)" />
                  <Line type="monotone" dataKey="energyConsumption" stroke="#F59E0B" strokeWidth={2} name="Energy (kW)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Environmental Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={climateData}>
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
                  <Line type="monotone" dataKey="co2" stroke="#8B5CF6" strokeWidth={2} name="CO2 (ppm)" />
                  <Line type="monotone" dataKey="pipeTemp" stroke="#EC4899" strokeWidth={2} name="Pipe Temp (°C)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Screen & Light</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={climateData}>
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
                  <Line type="monotone" dataKey="screenPosition" stroke="#06B6D4" strokeWidth={2} name="Screen Position (%)" />
                  <Line type="monotone" dataKey="dli" stroke="#84CC16" strokeWidth={2} name="DLI (mol/m²/d)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

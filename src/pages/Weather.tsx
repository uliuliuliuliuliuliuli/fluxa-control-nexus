
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Thermometer, Cloud, Wind, Droplets, Sun, CloudRain } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Mock weather data
const weatherData = [
  { time: '14:00', temperature: 18.3, humidity: 67, windSpeed: 8, pressure: 1013 },
  { time: '14:15', temperature: 18.5, humidity: 65, windSpeed: 9, pressure: 1012 },
  { time: '14:30', temperature: 18.7, humidity: 64, windSpeed: 10, pressure: 1011 },
  { time: '14:45', temperature: 18.9, humidity: 62, windSpeed: 11, pressure: 1010 },
  { time: '15:00', temperature: 19.1, humidity: 61, windSpeed: 12, pressure: 1009 },
]

export default function Weather() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Weather Station</h1>
        <Badge className="bg-blue-600">Live Data</Badge>
      </div>

      {/* Current Weather Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-red-400" />
              Temperature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">18.3°C</div>
            <div className="text-sm text-slate-400">Feels like 19.1°C</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-400" />
              Humidity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">67%</div>
            <div className="text-sm text-slate-400">Dew point: 12.1°C</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <Wind className="w-5 h-5 text-green-400" />
              Wind Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">8 km/h</div>
            <div className="text-sm text-slate-400">Direction: NW</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-gray-400" />
              Pressure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">1013 hPa</div>
            <div className="text-sm text-slate-400">Stable</div>
          </CardContent>
        </Card>
      </div>

      {/* Weather Chart */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Weather Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weatherData}>
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
                <Line type="monotone" dataKey="windSpeed" stroke="#10B981" strokeWidth={2} name="Wind Speed (km/h)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Forecast */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">5-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {['Today', 'Tomorrow', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
              <div key={day} className="text-center">
                <div className="text-white font-medium mb-2">{day}</div>
                <div className="flex justify-center mb-2">
                  {index % 2 === 0 ? <Sun className="w-8 h-8 text-yellow-400" /> : <CloudRain className="w-8 h-8 text-blue-400" />}
                </div>
                <div className="text-white text-sm">
                  {20 - index}° / {15 - index}°
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  {index % 2 === 0 ? 'Sunny' : 'Rain'}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

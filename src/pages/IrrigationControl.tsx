
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Droplets, Clock, Sprout, Beaker, Activity, Thermometer, Zap } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts"

export default function IrrigationControl() {
  const [selectedGroup, setSelectedGroup] = useState("Group A")

  const activeIrrigations = [
    { group: "Group A", mixNumber: "Mix-003", ec: "2.1 mS/cm", status: "Running", duration: "15 min" },
    { group: "Group C", mixNumber: "Mix-001", ec: "1.8 mS/cm", status: "Starting", duration: "20 min" }
  ]

  const upcomingIrrigations = [
    { time: "14:30", group: "Group B", mix: "Mix-001", duration: "18 min" },
    { time: "16:00", group: "Group C", mix: "Mix-002", duration: "22 min" },
    { time: "18:15", group: "Group A", mix: "Mix-004", duration: "15 min" },
    { time: "20:00", group: "Group D", mix: "Mix-003", duration: "25 min" }
  ]

  const tankLevels = [
    { name: "Mix 1", level: 85, capacity: 1000, color: "bg-blue-500" },
    { name: "Mix 2", level: 62, capacity: 1000, color: "bg-green-500" },
    { name: "Mix 3", level: 94, capacity: 1000, color: "bg-yellow-500" },
    { name: "Mix 4", level: 38, capacity: 1000, color: "bg-purple-500" },
    { name: "pH", level: 78, capacity: 500, color: "bg-red-500" }
  ]

  const monitoringData = [
    { time: "00:00", soilMoisture: 65, ec: 2.1, ph: 6.8, temperature: 22 },
    { time: "04:00", soilMoisture: 58, ec: 2.3, ph: 6.7, temperature: 21 },
    { time: "08:00", soilMoisture: 72, ec: 2.0, ph: 6.9, temperature: 23 },
    { time: "12:00", soilMoisture: 68, ec: 2.2, ph: 6.8, temperature: 25 },
    { time: "16:00", soilMoisture: 61, ec: 2.4, ph: 6.6, temperature: 24 },
    { time: "20:00", soilMoisture: 75, ec: 1.9, ph: 7.0, temperature: 22 }
  ]

  const chartConfig = {
    soilMoisture: { label: "Soil Moisture (%)", color: "#3b82f6" },
    ec: { label: "EC (mS/cm)", color: "#10b981" },
    ph: { label: "pH", color: "#f59e0b" },
    temperature: { label: "Temperature (°C)", color: "#ef4444" }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Irrigation Control</h1>
      </div>

      {/* Active and Upcoming Irrigations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Irrigations */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <Sprout className="w-5 h-5 text-green-400" />
              Active Irrigations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeIrrigations.map((irrigation, index) => (
              <div key={index} className="bg-slate-700 p-4 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{irrigation.group}</span>
                  <Badge className={irrigation.status === "Running" ? "bg-green-600" : "bg-yellow-600"}>
                    {irrigation.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400">Mix:</span>
                    <div className="text-blue-300">{irrigation.mixNumber}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">EC:</span>
                    <div className="text-white">{irrigation.ec}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Duration:</span>
                    <div className="text-white">{irrigation.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Irrigations */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              Upcoming Irrigations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {upcomingIrrigations.map((irrigation, index) => (
              <div key={index} className="bg-slate-700/50 p-3 rounded text-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-mono">{irrigation.time}</span>
                    <span className="text-white">{irrigation.group}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">{irrigation.mix}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{irrigation.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Tank Levels */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center gap-2">
            <Beaker className="w-5 h-5 text-blue-400" />
            Tank Levels
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {tankLevels.map((tank, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{tank.name}</span>
                  <span className="text-slate-400 text-sm">{tank.level}%</span>
                </div>
                <div className="relative bg-slate-700 rounded-lg h-32">
                  <div 
                    className={`absolute bottom-0 w-full ${tank.color} rounded-lg transition-all duration-500`}
                    style={{ height: `${tank.level}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-sm font-medium z-10">
                      {Math.round(tank.capacity * tank.level / 100)}L
                    </span>
                  </div>
                </div>
                <div className="text-center text-xs text-slate-400">
                  / {tank.capacity}L
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monitoring Graph */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-400" />
            Group Monitoring
          </CardTitle>
          <div className="flex items-center gap-4 mt-3">
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Select irrigation group" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="Group A">Group A</SelectItem>
                <SelectItem value="Group B">Group B</SelectItem>
                <SelectItem value="Group C">Group C</SelectItem>
                <SelectItem value="Group D">Group D</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monitoringData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9ca3af"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9ca3af"
                  fontSize={12}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="soilMoisture" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="ec" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="ph" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  dot={{ fill: "#f59e0b", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-slate-300 text-sm">Soil Moisture (%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-slate-300 text-sm">EC (mS/cm)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span className="text-slate-300 text-sm">pH</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-slate-300 text-sm">Temperature (°C)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

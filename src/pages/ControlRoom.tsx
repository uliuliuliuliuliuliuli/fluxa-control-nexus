
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AlertTriangle, Settings, Thermometer, Droplets, Wind, Sprout, FlaskConical, Zap } from "lucide-react"
import { ClimateAlarmSheet } from "@/components/ClimateAlarmSheet"

// Mock alarm data
const alarmData = [
  {
    id: 1,
    greenhouse: "Greenhouse-001",
    type: "Temperature",
    severity: "high",
    message: "Temperature too high: 28.5°C",
    timestamp: "2024-01-15 14:23",
    active: true,
    icon: Thermometer,
    color: "text-red-500"
  },
  {
    id: 2,
    greenhouse: "Greenhouse-002",
    type: "Humidity",
    severity: "medium",
    message: "Humidity below optimal: 42%",
    timestamp: "2024-01-15 14:15",
    active: true,
    icon: Droplets,
    color: "text-yellow-500"
  },
  {
    id: 3,
    greenhouse: "Greenhouse-001",
    type: "CO2",
    severity: "low",
    message: "CO2 levels optimal: 420 ppm",
    timestamp: "2024-01-15 14:10",
    active: false,
    icon: Wind,
    color: "text-green-500"
  },
  {
    id: 4,
    greenhouse: "Greenhouse-003",
    type: "Soil Moisture",
    severity: "high",
    message: "Soil moisture critically low: 15%",
    timestamp: "2024-01-15 14:05",
    active: true,
    icon: Sprout,
    color: "text-red-500"
  },
  {
    id: 5,
    greenhouse: "Greenhouse-002",
    type: "pH",
    severity: "medium",
    message: "pH slightly acidic: 5.8",
    timestamp: "2024-01-15 13:58",
    active: true,
    icon: FlaskConical,
    color: "text-yellow-500"
  },
  {
    id: 6,
    greenhouse: "Greenhouse-004",
    type: "EC",
    severity: "low",
    message: "EC within range: 2.1 mS/cm",
    timestamp: "2024-01-15 13:45",
    active: false,
    icon: Zap,
    color: "text-green-500"
  }
]

const getSeverityBadge = (severity: string, active: boolean) => {
  if (!active) return <Badge className="bg-green-600">Resolved</Badge>
  
  switch (severity) {
    case "high":
      return <Badge className="bg-red-600">Critical</Badge>
    case "medium":
      return <Badge className="bg-yellow-600">Warning</Badge>
    case "low":
      return <Badge className="bg-blue-600">Info</Badge>
    default:
      return <Badge className="bg-gray-600">Unknown</Badge>
  }
}

const getSeverityColor = (severity: string, active: boolean) => {
  if (!active) return "border-l-green-500"
  
  switch (severity) {
    case "high":
      return "border-l-red-500"
    case "medium":
      return "border-l-yellow-500"
    case "low":
      return "border-l-blue-500"
    default:
      return "border-l-gray-500"
  }
}

export default function ControlRoom() {
  const [selectedGreenhouse, setSelectedGreenhouse] = useState<string | null>(null)
  
  const activeAlarms = alarmData.filter(alarm => alarm.active)
  const resolvedAlarms = alarmData.filter(alarm => !alarm.active)
  
  const greenhouses = [...new Set(alarmData.map(alarm => alarm.greenhouse))]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Control Room - Alarm Management</h1>
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          <span className="text-white font-medium">{activeAlarms.length} Active Alarms</span>
        </div>
      </div>

      {/* Active Alarms Section */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            Active Alarms ({activeAlarms.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeAlarms.length === 0 ? (
            <div className="text-center text-slate-400 py-8">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-slate-600" />
              <p>No active alarms</p>
            </div>
          ) : (
            activeAlarms.map((alarm) => (
              <div
                key={alarm.id}
                className={`p-4 rounded-lg bg-slate-700 border-l-4 ${getSeverityColor(alarm.severity, alarm.active)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <alarm.icon className={`w-5 h-5 ${alarm.color}`} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white">{alarm.greenhouse}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-300">{alarm.type}</span>
                        {getSeverityBadge(alarm.severity, alarm.active)}
                      </div>
                      <p className="text-slate-400">{alarm.message}</p>
                      <p className="text-xs text-slate-500 mt-1">{alarm.timestamp}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setSelectedGreenhouse(alarm.greenhouse)}
                          className="flex items-center gap-1"
                        >
                          <Settings className="w-4 h-4" />
                          Adjust Limits
                        </Button>
                      </SheetTrigger>
                      <ClimateAlarmSheet greenhouse={alarm.greenhouse} />
                    </Sheet>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Acknowledge
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Climate Control Quick Access */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
            Climate Control Access
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {greenhouses.map((greenhouse) => (
              <Sheet key={greenhouse}>
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="p-4 h-auto flex flex-col items-center gap-2"
                    onClick={() => setSelectedGreenhouse(greenhouse)}
                  >
                    <Settings className="w-6 h-6" />
                    <span>{greenhouse}</span>
                    <span className="text-xs text-slate-400">Adjust Alarm Limits</span>
                  </Button>
                </SheetTrigger>
                <ClimateAlarmSheet greenhouse={greenhouse} />
              </Sheet>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resolved Alarms Section */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            Recent Resolved Alarms ({resolvedAlarms.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {resolvedAlarms.map((alarm) => (
            <div
              key={alarm.id}
              className={`p-3 rounded-lg bg-slate-700/50 border-l-4 ${getSeverityColor(alarm.severity, alarm.active)} opacity-75`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <alarm.icon className="w-4 h-4 text-slate-400" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-slate-300">{alarm.greenhouse}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{alarm.type}</span>
                      {getSeverityBadge(alarm.severity, alarm.active)}
                    </div>
                    <p className="text-slate-500 text-sm">{alarm.message}</p>
                    <p className="text-xs text-slate-600 mt-1">{alarm.timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

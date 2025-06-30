
import { useState } from "react"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Wind, Sprout, FlaskConical, Zap, Save, RotateCcw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ClimateAlarmSheetProps {
  greenhouse: string
}

// Mock current alarm limits data
const defaultLimits = {
  temperature: { low: 18, high: 26, current: 24.5, unit: "°C" },
  humidity: { low: 60, high: 80, current: 67.2, unit: "%" },
  co2: { low: 350, high: 1200, current: 420, unit: "ppm" },
  soilMoisture: { low: 40, high: 80, current: 65, unit: "%" },
  ph: { low: 5.5, high: 7.0, current: 6.2, unit: "" },
  ec: { low: 1.5, high: 3.0, current: 2.1, unit: "mS/cm" }
}

const sensorConfig = [
  {
    key: "temperature",
    name: "Temperature",
    icon: Thermometer,
    color: "text-red-400"
  },
  {
    key: "humidity", 
    name: "Humidity",
    icon: Droplets,
    color: "text-blue-400"
  },
  {
    key: "co2",
    name: "CO₂ Level",
    icon: Wind,
    color: "text-green-400"
  },
  {
    key: "soilMoisture",
    name: "Soil Moisture", 
    icon: Sprout,
    color: "text-yellow-400"
  },
  {
    key: "ph",
    name: "pH Level",
    icon: FlaskConical,
    color: "text-purple-400"
  },
  {
    key: "ec",
    name: "EC Level",
    icon: Zap,
    color: "text-orange-400"
  }
]

export function ClimateAlarmSheet({ greenhouse }: ClimateAlarmSheetProps) {
  const [limits, setLimits] = useState(defaultLimits)
  const { toast } = useToast()

  const handleLimitChange = (sensor: string, type: 'low' | 'high', value: string) => {
    const numValue = parseFloat(value)
    if (!isNaN(numValue)) {
      setLimits(prev => ({
        ...prev,
        [sensor]: {
          ...prev[sensor as keyof typeof prev],
          [type]: numValue
        }
      }))
    }
  }

  const handleSave = () => {
    // Here you would typically save to backend/database
    toast({
      title: "Alarm Limits Updated",
      description: `Successfully updated alarm limits for ${greenhouse}`,
    })
  }

  const handleReset = () => {
    setLimits(defaultLimits)
    toast({
      title: "Limits Reset",
      description: "Alarm limits have been reset to default values",
    })
  }

  const getStatusBadge = (current: number, low: number, high: number) => {
    if (current < low) return <Badge className="bg-red-600">Below Limit</Badge>
    if (current > high) return <Badge className="bg-red-600">Above Limit</Badge>
    return <Badge className="bg-green-600">Normal</Badge>
  }

  return (
    <SheetContent className="w-[600px] sm:max-w-[600px] bg-slate-900 border-slate-700">
      <SheetHeader>
        <SheetTitle className="text-white flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-blue-400" />
          Climate Alarm Settings - {greenhouse}
        </SheetTitle>
        <SheetDescription className="text-slate-400">
          Adjust alarm limits for temperature, humidity, CO₂, soil moisture, pH, and EC levels
        </SheetDescription>
      </SheetHeader>

      <div className="space-y-6 mt-6">
        {/* Current Status Overview */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-lg">Current Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {sensorConfig.map((sensor) => {
                const sensorData = limits[sensor.key as keyof typeof limits]
                return (
                  <div key={sensor.key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <sensor.icon className={`w-4 h-4 ${sensor.color}`} />
                      <span className="text-slate-300 text-sm">{sensor.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">
                        {sensorData.current}{sensorData.unit}
                      </div>
                      {getStatusBadge(sensorData.current, sensorData.low, sensorData.high)}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Separator className="bg-slate-600" />

        {/* Alarm Limit Settings */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Alarm Limit Settings</h3>
          
          {sensorConfig.map((sensor) => {
            const sensorData = limits[sensor.key as keyof typeof limits]
            return (
              <Card key={sensor.key} className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-base flex items-center gap-2">
                    <sensor.icon className={`w-4 h-4 ${sensor.color}`} />
                    {sensor.name}
                    <span className="text-slate-400 text-sm font-normal">
                      Current: {sensorData.current}{sensorData.unit}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-slate-300 text-sm">Low Limit</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={sensorData.low}
                          onChange={(e) => handleLimitChange(sensor.key, 'low', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                          step="0.1"
                        />
                        <span className="text-slate-400 text-sm">{sensorData.unit}</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-slate-300 text-sm">High Limit</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={sensorData.high}
                          onChange={(e) => handleLimitChange(sensor.key, 'high', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                          step="0.1"
                        />
                        <span className="text-slate-400 text-sm">{sensorData.unit}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4">
          <Button 
            variant="outline" 
            onClick={handleReset}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset to Defaults
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </SheetContent>
  )
}

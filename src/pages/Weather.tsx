
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { thermometer, Droplets, Wind, Cloud, Sun, CloudRain } from "lucide-react"

export default function Weather() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Weather Management</h1>
        <Badge className="bg-blue-600">Weather System Active</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Current Weather */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-400" />
              Current Weather
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-white">18.3°C</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-1">
                  <Droplets className="w-4 h-4 text-blue-400" />
                  Humidity
                </span>
                <span className="text-white">67%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-1">
                  <Wind className="w-4 h-4 text-green-400" />
                  Wind Speed
                </span>
                <span className="text-white">8 km/h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Pressure</span>
                <span className="text-white">1013 hPa</span>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Refresh Data
            </Button>
          </CardContent>
        </Card>

        {/* Weather Forecast */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CloudRain className="w-5 h-5 text-gray-400" />
              24h Forecast
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                { time: "12:00", temp: "22°C", icon: Sun, condition: "Sunny" },
                { time: "15:00", temp: "24°C", icon: Cloud, condition: "Cloudy" },
                { time: "18:00", temp: "20°C", icon: CloudRain, condition: "Rain" },
                { time: "21:00", temp: "18°C", icon: Cloud, condition: "Cloudy" }
              ].map((forecast, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <forecast.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">{forecast.time}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{forecast.temp}</div>
                    <div className="text-xs text-slate-400">{forecast.condition}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weather Station Settings */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <thermometer className="w-5 h-5 text-red-400" />
              Station Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-slate-300">Update Interval (minutes)</Label>
              <Input 
                type="number" 
                defaultValue="5"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label className="text-slate-300">Temperature Alert (°C)</Label>
              <Input 
                type="number" 
                defaultValue="30"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label className="text-slate-300">Humidity Alert (%)</Label>
              <Input 
                type="number" 
                defaultValue="80"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

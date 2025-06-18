
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { thermometer, Droplets, Wind } from "lucide-react"

export function WeatherStation() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <thermometer className="w-5 h-5 text-blue-400" />
            Weather Station
          </CardTitle>
          <Badge className="bg-blue-600">Live</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-white">
          18.3°C
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Droplets className="w-3 h-3 text-blue-400" />
            <span className="text-slate-400">Humidity</span>
            <p className="text-white font-medium ml-auto">67%</p>
          </div>
          <div className="flex items-center gap-1">
            <Wind className="w-3 h-3 text-green-400" />
            <span className="text-slate-400">Wind</span>
            <p className="text-white font-medium ml-auto">8 km/h</p>
          </div>
        </div>
        <div className="text-xs text-slate-400">
          Last update: 2 min ago
        </div>
      </CardContent>
    </Card>
  )
}

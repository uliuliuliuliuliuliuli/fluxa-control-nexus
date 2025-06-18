
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CloudRain, Sun } from "lucide-react"

export function WeatherForecast() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-gray-400" />
            Weather Forecast
          </CardTitle>
          <Badge className="bg-gray-600">24h</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Sun className="w-6 h-6 text-yellow-400" />
          <div>
            <div className="text-xl font-bold text-white">22°C</div>
            <div className="text-sm text-slate-400">Partly cloudy</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center">
            <div className="text-slate-400">12:00</div>
            <div className="text-white">24°C</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400">18:00</div>
            <div className="text-white">20°C</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400">00:00</div>
            <div className="text-white">16°C</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

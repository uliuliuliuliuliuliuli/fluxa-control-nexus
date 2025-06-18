
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingUp } from "lucide-react"

export function EnergyConsumption() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Energy Consumption
          </CardTitle>
          <Badge className="bg-green-600">Normal</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-white">
          24.8 kW
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-400">Today</p>
            <p className="text-white font-medium">124.5 kWh</p>
          </div>
          <div>
            <p className="text-slate-400">Peak</p>
            <p className="text-white font-medium">32.1 kW</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-green-400 text-sm">
          <TrendingUp className="w-3 h-3" />
          <span>-5.2% vs yesterday</span>
        </div>
      </CardContent>
    </Card>
  )
}

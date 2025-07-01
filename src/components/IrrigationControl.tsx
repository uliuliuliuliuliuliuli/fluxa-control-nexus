
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Clock, Sprout } from "lucide-react"

export function IrrigationControl() {
  const activeIrrigation = {
    group: "Group A",
    mixNumber: "Mix-003",
    ec: "2.1 mS/cm",
    status: "Running"
  }

  const upcomingIrrigations = [
    { time: "14:30", group: "Group B", mix: "Mix-001" },
    { time: "16:00", group: "Group C", mix: "Mix-002" },
    { time: "18:15", group: "Group A", mix: "Mix-004" }
  ]

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-white flex items-center gap-2">
          <Droplets className="w-5 h-5 text-blue-400" />
          Irrigation Control
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Active Irrigation */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-green-400" />
            <span className="text-slate-300 text-sm font-medium">Active Irrigation</span>
            <Badge className="bg-green-600 hover:bg-green-700 text-xs">Running</Badge>
          </div>
          <div className="bg-slate-700 p-3 rounded-lg space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Group:</span>
              <span className="text-white">{activeIrrigation.group}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Mix:</span>
              <span className="text-white">{activeIrrigation.mixNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">EC:</span>
              <span className="text-white">{activeIrrigation.ec}</span>
            </div>
          </div>
        </div>

        {/* Upcoming Irrigations */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span className="text-slate-300 text-sm font-medium">Upcoming</span>
          </div>
          <div className="space-y-1">
            {upcomingIrrigations.map((irrigation, index) => (
              <div key={index} className="bg-slate-700/50 p-2 rounded text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">{irrigation.time}</span>
                  <div className="flex gap-2">
                    <span className="text-white">{irrigation.group}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-blue-300">{irrigation.mix}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function AlarmsOverview() {
  const navigate = useNavigate()

  const alarmSummary = {
    critical: 2,
    warning: 3,
    resolved: 8
  }

  const recentAlarms = [
    { id: 1, greenhouse: "Greenhouse-001", type: "Temperature", severity: "critical", time: "14:23" },
    { id: 2, greenhouse: "Greenhouse-003", type: "Soil Moisture", severity: "critical", time: "14:05" },
    { id: 3, greenhouse: "Greenhouse-002", type: "Humidity", severity: "warning", time: "14:15" }
  ]

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertTriangle className="w-3 h-3 text-red-400" />
      case 'warning':
        return <AlertTriangle className="w-3 h-3 text-yellow-400" />
      default:
        return <CheckCircle className="w-3 h-3 text-green-400" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400'
      case 'warning':
        return 'text-yellow-400'
      default:
        return 'text-green-400'
    }
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          System Alarms
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Alarm Summary */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-red-900/20 p-2 rounded">
            <div className="text-red-400 font-bold text-lg">{alarmSummary.critical}</div>
            <div className="text-red-300 text-xs">Critical</div>
          </div>
          <div className="bg-yellow-900/20 p-2 rounded">
            <div className="text-yellow-400 font-bold text-lg">{alarmSummary.warning}</div>
            <div className="text-yellow-300 text-xs">Warning</div>
          </div>
          <div className="bg-green-900/20 p-2 rounded">
            <div className="text-green-400 font-bold text-lg">{alarmSummary.resolved}</div>
            <div className="text-green-300 text-xs">Resolved</div>
          </div>
        </div>

        {/* Recent Alarms */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="text-slate-300 text-sm font-medium">Recent Activity</span>
          </div>
          <div className="space-y-1">
            {recentAlarms.map((alarm) => (
              <div key={alarm.id} className="bg-slate-700/50 p-2 rounded text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getSeverityIcon(alarm.severity)}
                    <span className="text-white">{alarm.greenhouse}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={getSeverityColor(alarm.severity)}>{alarm.type}</span>
                    <span className="text-slate-400">{alarm.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button 
          onClick={() => navigate('/alarm-management')}
          className="w-full bg-red-600 hover:bg-red-700 text-sm"
        >
          View All Alarms
        </Button>
      </CardContent>
    </Card>
  )
}

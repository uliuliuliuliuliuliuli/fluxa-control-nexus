
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Activity } from "lucide-react"

export function AiApiStatus() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            AI API
          </CardTitle>
          <Badge className="bg-green-600">Active</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-white">
          Online
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-400">Requests</p>
            <p className="text-white font-medium">1,247</p>
          </div>
          <div>
            <p className="text-slate-400">Response</p>
            <p className="text-white font-medium">120ms</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-green-400 text-sm">
          <Activity className="w-3 h-3" />
          <span>99.8% uptime</span>
        </div>
      </CardContent>
    </Card>
  )
}

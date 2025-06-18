
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Wind } from "lucide-react"

export default function Climate() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Climate Control & Adjustment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-red-400" />
              Temperature Zones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Zone 1</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">22.5°C</span>
                  <Badge className="bg-green-600">Normal</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Zone 2</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">24.1°C</span>
                  <Badge className="bg-yellow-600">High</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Zone 3</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">21.8°C</span>
                  <Badge className="bg-green-600">Normal</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-400" />
              Humidity Control
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Zone 1</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">45%</span>
                  <Badge className="bg-green-600">Normal</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Zone 2</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">52%</span>
                  <Badge className="bg-green-600">Normal</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Zone 3</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">38%</span>
                  <Badge className="bg-yellow-600">Low</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Wind className="w-5 h-5 text-cyan-400" />
              Air Flow Systems
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">HVAC-01</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">85%</span>
                  <Badge className="bg-green-600">Active</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">HVAC-02</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">72%</span>
                  <Badge className="bg-green-600">Active</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">HVAC-03</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">0%</span>
                  <Badge className="bg-red-600">Offline</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

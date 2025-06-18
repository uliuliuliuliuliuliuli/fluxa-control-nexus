
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Thermometer, Wind, Droplets } from "lucide-react"

export default function Climate() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Climate Adjustment</h1>
        <Badge className="bg-green-600">System Active</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-red-400" />
              Temperature Control
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold text-white">23.5°C</div>
            <div>
              <Label className="text-slate-300">Target Temperature</Label>
              <Input 
                type="number" 
                defaultValue="24.0"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Setting
            </Button>
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
            <div className="text-2xl font-bold text-white">45.2%</div>
            <div>
              <Label className="text-slate-300">Target Humidity</Label>
              <Input 
                type="number" 
                defaultValue="50"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Setting
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Wind className="w-5 h-5 text-green-400" />
              Ventilation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold text-white">1250 CFM</div>
            <div>
              <Label className="text-slate-300">Fan Speed (%)</Label>
              <Input 
                type="number" 
                defaultValue="75"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Setting
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

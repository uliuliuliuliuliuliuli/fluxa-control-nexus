
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Settings, Activity, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface PlcDetailViewProps {
  plcId: string
  plcName: string
  onBack: () => void
}

export function PlcDetailView({ plcId, plcName, onBack }: PlcDetailViewProps) {
  const [tempSetpoint, setTempSetpoint] = useState(25.0)
  const [pressureSetpoint, setPressureSetpoint] = useState(1.2)
  const [flowSetpoint, setFlowSetpoint] = useState(45.0)

  // Mock real-time data
  const realtimeData = [
    { time: '14:00', temperature: 24.8, pressure: 1.18, flow: 44.2 },
    { time: '14:05', temperature: 25.1, pressure: 1.21, flow: 45.1 },
    { time: '14:10', temperature: 24.9, pressure: 1.19, flow: 44.8 },
    { time: '14:15', temperature: 25.3, pressure: 1.23, flow: 45.5 },
    { time: '14:20', temperature: 25.0, pressure: 1.20, flow: 45.0 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          onClick={onBack}
          variant="outline" 
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Control Room
        </Button>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-white">{plcName} - Detailed View</h1>
          <Badge className="bg-green-600">Online</Badge>
        </div>
      </div>

      <Tabs defaultValue="realtime" className="w-full">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="realtime" className="data-[state=active]:bg-blue-600">
            <Activity className="w-4 h-4 mr-2" />
            Real-time Values
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600">
            <Settings className="w-4 h-4 mr-2" />
            Settings & Control
          </TabsTrigger>
          <TabsTrigger value="trends" className="data-[state=active]:bg-blue-600">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="realtime" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  Temperature
                  <Badge variant="outline" className="text-green-400 border-green-400">Normal</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">24.8°C</div>
                <div className="text-sm text-slate-400">Setpoint: {tempSetpoint}°C</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  Pressure
                  <Badge variant="outline" className="text-green-400 border-green-400">Normal</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">1.18 bar</div>
                <div className="text-sm text-slate-400">Setpoint: {pressureSetpoint} bar</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  Flow Rate
                  <Badge variant="outline" className="text-green-400 border-green-400">Normal</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">44.2 L/min</div>
                <div className="text-sm text-slate-400">Setpoint: {flowSetpoint} L/min</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Temperature Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-slate-300">Temperature Setpoint (°C)</Label>
                  <Input 
                    type="number" 
                    value={tempSetpoint}
                    onChange={(e) => setTempSetpoint(parseFloat(e.target.value))}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Update Temperature Setpoint
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Pressure Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-slate-300">Pressure Setpoint (bar)</Label>
                  <Input 
                    type="number" 
                    step="0.1"
                    value={pressureSetpoint}
                    onChange={(e) => setPressureSetpoint(parseFloat(e.target.value))}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Update Pressure Setpoint
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Flow Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-slate-300">Flow Setpoint (L/min)</Label>
                  <Input 
                    type="number" 
                    value={flowSetpoint}
                    onChange={(e) => setFlowSetpoint(parseFloat(e.target.value))}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Update Flow Setpoint
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">System Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Start Process
                </Button>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Emergency Stop
                </Button>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Reset Alarms
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Parameter Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={realtimeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '6px',
                        color: '#F9FAFB'
                      }} 
                    />
                    <Line type="monotone" dataKey="temperature" stroke="#EF4444" strokeWidth={2} name="Temperature (°C)" />
                    <Line type="monotone" dataKey="pressure" stroke="#3B82F6" strokeWidth={2} name="Pressure (bar)" />
                    <Line type="monotone" dataKey="flow" stroke="#10B981" strokeWidth={2} name="Flow (L/min)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

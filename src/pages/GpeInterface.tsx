
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun, 
  Leaf, 
  Zap, 
  TrendingUp, 
  Bot, 
  Settings,
  Activity,
  Target,
  FlaskConical,
  Gauge,
  Brain
} from "lucide-react"

// Mock data for GPE balances
const gpeBalances = {
  energy: { value: 85, status: "optimal", color: "green" },
  assimilation: { value: 72, status: "borderline", color: "yellow" },
  water: { value: 91, status: "optimal", color: "green" }
}

// Mock AI recommendations
const aiRecommendations = [
  {
    id: 1,
    action: "Increase CO₂ in next 2 hours",
    reason: "Light levels rising, photosynthesis capacity increasing",
    confidence: "High",
    icon: Wind,
    priority: "medium"
  },
  {
    id: 2,
    action: "Reduce heating by 20% based on solar forecast",
    reason: "Solar radiation expected to increase by 15% this afternoon",
    confidence: "Medium",
    icon: Sun,
    priority: "high"
  },
  {
    id: 3,
    action: "Expected irrigation volume tomorrow: 110 liters",
    reason: "Based on transpiration models and weather forecast",
    confidence: "High",
    icon: Droplets,
    priority: "low"
  }
]

// Mock sensor data
const sensorData = [
  { name: "Temperature", value: "22.5°C", trend: "+0.3", icon: Thermometer },
  { name: "Humidity", value: "68%", trend: "-2", icon: Droplets },
  { name: "CO₂", value: "890 ppm", trend: "+15", icon: Wind },
  { name: "Solar Radiation", value: "245 W/m²", trend: "+12", icon: Sun },
  { name: "Substrate EC", value: "2.1 mS/cm", trend: "0", icon: Zap },
  { name: "Substrate pH", value: "6.2", trend: "-0.1", icon: FlaskConical }
]

// Donut chart component
function DonutChart({ value, status, title }: { value: number; status: string; title: string }) {
  const getColor = () => {
    if (status === "optimal") return "stroke-green-500"
    if (status === "borderline") return "stroke-yellow-500"
    return "stroke-red-500"
  }

  const circumference = 2 * Math.PI * 45
  const strokeDasharray = `${(value / 100) * circumference} ${circumference}`

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-slate-700"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          className={getColor()}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{value}%</div>
          <div className="text-xs text-slate-400">{status}</div>
        </div>
      </div>
    </div>
  )
}

export default function GpeInterface() {
  const [yieldPriority, setYieldPriority] = useState([75])
  const [maxCO2, setMaxCO2] = useState([1200])
  const [nightTemp, setNightTemp] = useState([18])
  const [aiAutonomy, setAiAutonomy] = useState("suggest")

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case "High": return "bg-green-600"
      case "Medium": return "bg-yellow-600"
      case "Low": return "bg-red-600"
      default: return "bg-gray-600"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-red-500"
      case "medium": return "border-l-yellow-500"
      case "low": return "border-l-green-500"
      default: return "border-l-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <Brain className="w-8 h-8 text-green-400" />
          GPE Balance Interface
        </h1>
        <Badge className="bg-green-600">AI Active</Badge>
      </div>

      {/* Top Panel: GPE Balance Overview */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Gauge className="w-5 h-5 text-green-400" />
            GPE Balance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-white">Energy Balance</h3>
              <DonutChart 
                value={gpeBalances.energy.value} 
                status={gpeBalances.energy.status}
                title="Energy"
              />
              <p className="text-sm text-slate-400">Temperature • Radiation • Insulation</p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-white">Assimilation Balance</h3>
              <DonutChart 
                value={gpeBalances.assimilation.value} 
                status={gpeBalances.assimilation.status}
                title="Assimilation"
              />
              <p className="text-sm text-slate-400">Photosynthesis • Light • CO₂</p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-white">Water Balance</h3>
              <DonutChart 
                value={gpeBalances.water.value} 
                status={gpeBalances.water.status}
                title="Water"
              />
              <p className="text-sm text-slate-400">Transpiration • Irrigation • Moisture</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Central Panel: AI Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-400" />
                AI Recommendations & Forecasts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiRecommendations.map((rec) => (
                <div 
                  key={rec.id} 
                  className={`p-4 rounded-lg bg-slate-700 border-l-4 ${getPriorityColor(rec.priority)}`}
                >
                  <div className="flex items-start gap-3">
                    <rec.icon className="w-5 h-5 text-green-400 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{rec.action}</h4>
                      <p className="text-sm text-slate-400 mt-1">{rec.reason}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={`${getConfidenceColor(rec.confidence)} text-xs`}>
                          {rec.confidence} Confidence
                        </Badge>
                        <Button size="sm" variant="outline" className="text-xs">
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Bottom Panel: Control Settings */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-orange-400" />
                Control Settings & Priorities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Priority: Yield vs Energy Savings
                    </label>
                    <Slider
                      value={yieldPriority}
                      onValueChange={setYieldPriority}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>Energy Savings</span>
                      <span>{yieldPriority[0]}% Yield Focus</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Max CO₂ Level (ppm)
                    </label>
                    <Slider
                      value={maxCO2}
                      onValueChange={setMaxCO2}
                      min={400}
                      max={1500}
                      step={50}
                      className="w-full"
                    />
                    <div className="text-xs text-slate-400 mt-1">{maxCO2[0]} ppm</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Night Temperature Limit (°C)
                    </label>
                    <Slider
                      value={nightTemp}
                      onValueChange={setNightTemp}
                      min={12}
                      max={25}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="text-xs text-slate-400 mt-1">{nightTemp[0]}°C</div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      AI Autonomy Level
                    </label>
                    <div className="space-y-2">
                      {["off", "suggest", "auto"].map((mode) => (
                        <div key={mode} className="flex items-center space-x-2">
                          <Switch
                            checked={aiAutonomy === mode}
                            onCheckedChange={() => setAiAutonomy(mode)}
                          />
                          <span className="text-sm text-white capitalize">{mode}-mode</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel: Sensor Data Live Feed */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-400" />
              Sensor Data Live Feed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sensorData.map((sensor, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <sensor.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-slate-400">{sensor.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{sensor.value}</div>
                    <div className={`text-xs ${
                      sensor.trend.startsWith('+') ? 'text-green-400' : 
                      sensor.trend.startsWith('-') ? 'text-red-400' : 'text-slate-400'
                    }`}>
                      {sensor.trend !== "0" && (sensor.trend.startsWith('+') ? '↗' : '↘')} {sensor.trend}
                    </div>
                  </div>
                </div>
                {index < sensorData.length - 1 && <Separator className="bg-slate-600 mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Optional Tabs */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="pt-6">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="history">History & Trends</TabsTrigger>
              <TabsTrigger value="health">System Health</TabsTrigger>
              <TabsTrigger value="sandbox">Sandbox Mode</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history" className="space-y-4 mt-6">
              <div className="text-center text-slate-400">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <p>Timeline graphs of all GPE balances would be displayed here</p>
                <p className="text-sm">Connect to your data source to view historical trends</p>
              </div>
            </TabsContent>
            
            <TabsContent value="health" className="space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-white font-medium">Network Status</p>
                  <p className="text-xs text-slate-400">Online</p>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-white font-medium">Hardware Status</p>
                  <p className="text-xs text-slate-400">All systems operational</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sandbox" className="space-y-4 mt-6">
              <div className="text-center text-slate-400">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <p>Test setting changes before applying them</p>
                <Button className="mt-4" variant="outline">
                  Enter Sandbox Mode
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

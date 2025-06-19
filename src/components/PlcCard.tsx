import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, AlertCircle, CheckCircle } from "lucide-react"

interface PlcCardProps {
  id: string
  name: string
  status: 'online' | 'offline' | 'warning'
  temperature: number
  humidity: number
  co2: number
  onViewDetails: (id: string) => void
}

export function PlcCard({ id, name, status, temperature, humidity, co2, onViewDetails }: PlcCardProps) {
  const getStatusIcon = () => {
    switch (status) {
      case 'online':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case 'offline':
        return <AlertCircle className="w-4 h-4 text-red-500" />
    }
  }

  const getStatusBadge = () => {
    switch (status) {
      case 'online':
        return <Badge className="bg-green-600 hover:bg-green-700">Online</Badge>
      case 'warning':
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">Warning</Badge>
      case 'offline':
        return <Badge className="bg-red-600 hover:bg-red-700">Offline</Badge>
    }
  }

  return (
    <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-400" />
            <CardTitle className="text-white text-lg">{name}</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            {getStatusBadge()}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-slate-400 mb-1">Temperature</p>
            <p className="text-white font-medium">{temperature}°C</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">Humidity</p>
            <p className="text-white font-medium">{humidity}%</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">CO2</p>
            <p className="text-white font-medium">{co2} ppm</p>
          </div>
        </div>
        
        <Button 
          onClick={() => onViewDetails(id)}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          View Details & Settings
        </Button>
      </CardContent>
    </Card>
  )
}

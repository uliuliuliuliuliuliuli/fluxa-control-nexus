import { useState } from "react"
import { PlcCard } from "@/components/PlcCard"
import { PlcDetailView } from "@/components/PlcDetailView"
import { EnergyConsumption } from "@/components/EnergyConsumption"
import { WeatherStation } from "@/components/WeatherStation"
import { WeatherForecast } from "@/components/WeatherForecast"
import { AiApiStatus } from "@/components/AiApiStatus"

// Mock PLC data with Climate Control naming
const plcData = [
  {
    id: "greenhouse-001",
    name: "Greenhouse-001 Climate Control",
    status: "online" as const,
    temperature: 24.8,
    humidity: 67.2,
    co2: 420
  },
  {
    id: "greenhouse-002", 
    name: "Greenhouse-002 Climate Control",
    status: "warning" as const,
    temperature: 28.5,
    humidity: 72.1,
    co2: 380
  },
  {
    id: "greenhouse-003",
    name: "Greenhouse-003 Climate Control",
    status: "online" as const,
    temperature: 22.1,
    humidity: 65.8,
    co2: 440
  },
  {
    id: "greenhouse-004",
    name: "Greenhouse-004 Climate Control", 
    status: "offline" as const,
    temperature: 0,
    humidity: 0,
    co2: 0
  }
]

export default function ControlRoom() {
  const [selectedPlc, setSelectedPlc] = useState<string | null>(null)

  const handleViewDetails = (plcId: string) => {
    setSelectedPlc(plcId)
  }

  const handleBack = () => {
    setSelectedPlc(null)
  }

  const selectedPlcData = selectedPlc ? plcData.find(plc => plc.id === selectedPlc) : null

  if (selectedPlc && selectedPlcData) {
    return (
      <PlcDetailView 
        plcId={selectedPlc}
        plcName={selectedPlcData.name}
        onBack={handleBack}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Control Room Overview</h1>
        <div className="text-sm text-slate-400">
          Last Updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* System Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <EnergyConsumption />
        <WeatherStation />
        <WeatherForecast />
        <AiApiStatus />
      </div>

      {/* PLC Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plcData.map((plc) => (
          <PlcCard
            key={plc.id}
            id={plc.id}
            name={plc.name}
            status={plc.status}
            temperature={plc.temperature}
            humidity={plc.humidity}
            co2={plc.co2}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  )
}

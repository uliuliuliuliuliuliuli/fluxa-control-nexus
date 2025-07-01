
import { useState } from "react"
import { PlcCard } from "@/components/PlcCard"
import { EnergyConsumption } from "@/components/EnergyConsumption"
import { WeatherForecast } from "@/components/WeatherForecast"
import { AiApiStatus } from "@/components/AiApiStatus"
import { WeatherStation } from "@/components/WeatherStation"

export default function ControlRoom() {
  const [selectedPlc, setSelectedPlc] = useState<string | null>(null)

  const handleViewDetails = (plcId: string) => {
    setSelectedPlc(plcId)
  }

  const plcData = [
    {
      id: "plc-001",
      name: "PLC1",
      status: "online" as const,
      temperature: 24.5,
      humidity: 68,
      co2: 420
    },
    {
      id: "plc-002", 
      name: "PLC2",
      status: "online" as const,
      temperature: 23.8,
      humidity: 72,
      co2: 415
    },
    {
      id: "plc-003",
      name: "PLC3", 
      status: "warning" as const,
      temperature: 26.2,
      humidity: 65,
      co2: 450
    },
    {
      id: "plc-irrigation",
      name: "Irrigation PLC",
      status: "online" as const,
      temperature: 22.1,
      humidity: 75,
      co2: 400
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Control Room</h1>
      </div>

      {/* Status Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <EnergyConsumption />
        <WeatherStation />
        <WeatherForecast />
        <AiApiStatus />
      </div>

      {/* PLC Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

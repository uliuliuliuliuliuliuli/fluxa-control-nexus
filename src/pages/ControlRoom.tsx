
import { useState } from "react"
import { PlcCard } from "@/components/PlcCard"
import { EnergyConsumption } from "@/components/EnergyConsumption"
import { WeatherForecast } from "@/components/WeatherForecast"
import { AiApiStatus } from "@/components/AiApiStatus"
import { WeatherStation } from "@/components/WeatherStation"
import { IrrigationControl } from "@/components/IrrigationControl"
import { AlarmsOverview } from "@/components/AlarmsOverview"

export default function ControlRoom() {
  const [selectedPlc, setSelectedPlc] = useState<string | null>(null)

  const handleViewDetails = (plcId: string) => {
    setSelectedPlc(plcId)
  }

  const plcData = [
    {
      id: "greenhouse-001",
      name: "Greenhouse-001",
      status: "online" as const,
      temperature: 24.5,
      humidity: 68,
      co2: 420
    },
    {
      id: "greenhouse-002", 
      name: "Greenhouse-002",
      status: "online" as const,
      temperature: 23.8,
      humidity: 72,
      co2: 415
    },
    {
      id: "greenhouse-003",
      name: "Greenhouse-003", 
      status: "warning" as const,
      temperature: 26.2,
      humidity: 65,
      co2: 450
    },
    {
      id: "greenhouse-004",
      name: "Greenhouse-004",
      status: "online" as const,
      temperature: 25.1,
      humidity: 70,
      co2: 435
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Control Room</h1>
      </div>

      {/* Status Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <EnergyConsumption />
        <WeatherStation />
        <WeatherForecast />
        <AiApiStatus />
        <IrrigationControl />
      </div>

      {/* PLC Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        
        {/* Alarms Overview as 5th card */}
        <div className="md:col-span-1">
          <AlarmsOverview />
        </div>
      </div>
    </div>
  )
}

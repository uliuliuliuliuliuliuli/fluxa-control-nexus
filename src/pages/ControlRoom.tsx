
import { useState } from "react"
import { PlcCard } from "@/components/PlcCard"
import { PlcDetailView } from "@/components/PlcDetailView"

// Mock PLC data
const plcData = [
  {
    id: "plc-001",
    name: "PLC-001 Main Process",
    status: "online" as const,
    temperature: 24.8,
    pressure: 1.18,
    flow: 44.2
  },
  {
    id: "plc-002", 
    name: "PLC-002 Cooling System",
    status: "warning" as const,
    temperature: 28.5,
    pressure: 0.95,
    flow: 38.7
  },
  {
    id: "plc-003",
    name: "PLC-003 Heating Unit",
    status: "online" as const,
    temperature: 22.1,
    pressure: 1.25,
    flow: 42.8
  },
  {
    id: "plc-004",
    name: "PLC-004 Backup System", 
    status: "offline" as const,
    temperature: 0,
    pressure: 0,
    flow: 0
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plcData.map((plc) => (
          <PlcCard
            key={plc.id}
            id={plc.id}
            name={plc.name}
            status={plc.status}
            temperature={plc.temperature}
            pressure={plc.pressure}
            flow={plc.flow}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  )
}

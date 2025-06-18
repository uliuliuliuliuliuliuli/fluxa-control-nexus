
import { useState } from "react"
import { PlcCard } from "@/components/PlcCard"
import { PlcDetailView } from "@/components/PlcDetailView"

export default function ControlRoom() {
  const [selectedPlc, setSelectedPlc] = useState<string | null>(null)

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
      name: "PLC-002 Secondary",
      status: "warning" as const,
      temperature: 26.1,
      pressure: 1.35,
      flow: 42.8
    },
    {
      id: "plc-003",
      name: "PLC-003 Backup Unit",
      status: "online" as const,
      temperature: 23.9,
      pressure: 1.15,
      flow: 46.1
    },
    {
      id: "plc-004",
      name: "PLC-004 Quality Control",
      status: "offline" as const,
      temperature: 0,
      pressure: 0,
      flow: 0
    }
  ]

  const handleViewDetails = (plcId: string) => {
    setSelectedPlc(plcId)
  }

  const handleBack = () => {
    setSelectedPlc(null)
  }

  if (selectedPlc) {
    const plc = plcData.find(p => p.id === selectedPlc)
    return (
      <PlcDetailView 
        plcId={selectedPlc}
        plcName={plc?.name || "Unknown PLC"}
        onBack={handleBack}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Control Room Overview</h1>
        <div className="text-sm text-slate-400">
          Last Updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">System Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Total PLCs:</span>
              <span className="text-white font-medium">4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Online:</span>
              <span className="text-green-400 font-medium">2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Warnings:</span>
              <span className="text-yellow-400 font-medium">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Offline:</span>
              <span className="text-red-400 font-medium">1</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Alarms</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-slate-300">14:23 - PLC-002 Pressure High</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-slate-300">13:45 - PLC-004 Communication Lost</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-slate-300">12:30 - PLC-001 Process Started</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

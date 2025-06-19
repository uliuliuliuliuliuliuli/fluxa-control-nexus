
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Thermometer, Cloud, Wind, Droplets, Sun, CloudRain, Navigation } from "lucide-react"

// Mock current weather data
const currentWeather = {
  windSpeed: 12.5,
  windDirection: 225, // SW
  temperature: 18.3,
  humidity: 67,
  radiation: 450, // W/m²
  isRaining: false,
  lastUpdate: new Date()
}

// Wind rose component
function WindRose({ direction, speed }: { direction: number; speed: number }) {
  const getDirectionText = (deg: number) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    return directions[Math.round(deg / 22.5) % 16]
  }

  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Wind rose circle */}
      <div className="absolute inset-0 border-2 border-slate-600 rounded-full">
        {/* Compass points */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs text-slate-400">N</div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-slate-400">S</div>
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">E</div>
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">W</div>
        
        {/* Wind direction arrow */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) rotate(${direction}deg)` }}
        >
          <Navigation className="w-8 h-8 text-green-400" />
        </div>
      </div>
      
      {/* Speed indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center mt-8">
          <div className="text-sm font-bold text-white">{speed}</div>
          <div className="text-xs text-slate-400">km/h</div>
        </div>
      </div>
    </div>
  )
}

// Forecast data (this would come from a real API)
const mockForecast = [
  { day: 'Today', date: '19/06', icon: 'sun', high: 22, low: 16, condition: 'Sunny', humidity: 65, wind: 12 },
  { day: 'Tomorrow', date: '20/06', icon: 'cloud', high: 20, low: 14, condition: 'Cloudy', humidity: 70, wind: 15 },
  { day: 'Friday', date: '21/06', icon: 'rain', high: 18, low: 12, condition: 'Rain', humidity: 85, wind: 18 },
  { day: 'Saturday', date: '22/06', icon: 'sun', high: 24, low: 17, condition: 'Sunny', humidity: 60, wind: 10 },
  { day: 'Sunday', date: '23/06', icon: 'cloud', high: 21, low: 15, condition: 'Partly Cloudy', humidity: 68, wind: 14 },
  { day: 'Monday', date: '24/06', icon: 'rain', high: 19, low: 13, condition: 'Light Rain', humidity: 80, wind: 16 },
  { day: 'Tuesday', date: '25/06', icon: 'sun', high: 23, low: 16, condition: 'Sunny', humidity: 62, wind: 11 }
]

export default function Weather() {
  const [forecastDays, setForecastDays] = useState(7)
  
  const getWeatherIcon = (iconType: string) => {
    switch (iconType) {
      case 'sun':
        return <Sun className="w-8 h-8 text-yellow-400" />
      case 'cloud':
        return <Cloud className="w-8 h-8 text-gray-400" />
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-400" />
      default:
        return <Sun className="w-8 h-8 text-yellow-400" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Weather Station</h1>
        <Badge className="bg-blue-600">Live Data</Badge>
      </div>

      {/* Weather Station Box */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-blue-400" />
            Current Weather Station
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Wind Rose */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Wind Data</h3>
              <WindRose direction={currentWeather.windDirection} speed={currentWeather.windSpeed} />
              <div className="text-center space-y-2">
                <div className="text-white">
                  <span className="text-xl font-bold">{currentWeather.windSpeed}</span>
                  <span className="text-sm text-slate-400 ml-1">km/h</span>
                </div>
                <div className="text-white">
                  <span className="text-lg font-bold">{currentWeather.windDirection}°</span>
                  <span className="text-sm text-slate-400 ml-1">SW</span>
                </div>
              </div>
            </div>

            {/* Environmental Data */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Environmental</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-red-400" />
                    <span className="text-slate-400">Temperature</span>
                  </div>
                  <span className="text-white font-medium">{currentWeather.temperature}°C</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-400">Humidity</span>
                  </div>
                  <span className="text-white font-medium">{currentWeather.humidity}%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-400" />
                    <span className="text-slate-400">Solar Radiation</span>
                  </div>
                  <span className="text-white font-medium">{currentWeather.radiation} W/m²</span>
                </div>
              </div>
            </div>

            {/* Rain and Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Conditions</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CloudRain className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-400">Rain Status</span>
                  </div>
                  <Badge className={currentWeather.isRaining ? "bg-blue-600" : "bg-green-600"}>
                    {currentWeather.isRaining ? "Raining" : "Dry"}
                  </Badge>
                </div>
                
                <div className="text-center pt-4">
                  <div className="text-xs text-slate-400">
                    Last Update: {currentWeather.lastUpdate.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Forecast Controls */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-white">Weather Forecast</h2>
        <div className="flex gap-2">
          {[1, 3, 7].map((days) => (
            <Button
              key={days}
              onClick={() => setForecastDays(days)}
              variant={forecastDays === days ? "default" : "outline"}
              size="sm"
              className={forecastDays === days ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {days} Day{days > 1 ? 's' : ''}
            </Button>
          ))}
        </div>
      </div>

      {/* Weather Forecast */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">{forecastDays}-Day Weather Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {mockForecast.slice(0, forecastDays).map((forecast, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-slate-700 border border-slate-600">
                <div className="text-white font-medium mb-2">{forecast.day}</div>
                <div className="text-slate-400 text-sm mb-3">{forecast.date}</div>
                
                <div className="flex justify-center mb-3">
                  {getWeatherIcon(forecast.icon)}
                </div>
                
                <div className="text-white text-sm mb-2">
                  <span className="font-bold">{forecast.high}°</span>
                  <span className="text-slate-400 ml-1">/ {forecast.low}°</span>
                </div>
                
                <div className="text-slate-400 text-xs mb-2">{forecast.condition}</div>
                
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Humidity:</span>
                    <span className="text-white">{forecast.humidity}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Wind:</span>
                    <span className="text-white">{forecast.wind} km/h</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Integration Notice */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="pt-6">
          <div className="text-center text-slate-400">
            <p className="text-sm">
              💡 <strong>Integration Ready:</strong> This weather page is designed to work with weather APIs like OpenWeatherMap, WeatherAPI, or similar services.
              Connect your weather data source to get real-time data and accurate forecasts.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

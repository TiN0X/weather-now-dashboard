export type LocationBannerProps = {
  icon: string,
  city: string | undefined,
  country: string | undefined,
  date: string,
  temp: string,
  isDay: boolean,
}

export type DailyForecastItemProps = {
  day: string,
  icon: string,
  maxTemp: string,
  minTemp: string,
}
export type HourlyForecastItemProps = {
  hour: string,
  temp: string,
  icon: string,
  isNight: boolean,
}

export type GeocodingCity = {
  "id": number,
  "name": string,
  "latitude": number,
  "longitude": number,
  "elevation": number,
  "feature_code": string,
  "country_code": string,
  "admin1_id": number,
  "timezone": string,
  "population": number,
  "country_id": number,
  "country": string,
  "admin1"?: string
  "admin2"?: string
  "admin3"?: string
}

export type WeatherResponseDTO = {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds:  number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  current_units: Record<string, string>,
  current: {
    time: string,
    interval:  number,
    temperature_2m:  number,
    relative_humidity_2m:  number,
    wind_speed_10m:  number,
    weather_code:  number,
    precipitation:  number,
    apparent_temperature:  number,
    is_day:  number
  },
  hourly_units: Record<string, string>,
  hourly: {
    time: string[],
    temperature_2m: number[],
    weather_code: number[]
  },
  daily_units: Record<string, string>,
  daily: {
    time: string[],
    weather_code: number[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
  }
}

export type GeolocationResponseDTO = {
  "latitude": number,
  "lookupSource": string,
  "longitude": number,
  "localityLanguageRequested": string,
  "continent": string,
  "continentCode": string,
  "countryName": string,
  "countryCode": string,
  "principalSubdivision": string,
  "principalSubdivisionCode": string,
  "city": string,
  "locality": string,
  "postcode": string,
  "plusCode": string,
  "localityInfo": {
    "administrative": [
      {
        "name": string,
        "description": string,
        "isoName": string,
        "order": number,
        "adminLevel": number,
        "isoCode": string,
        "wikidataId": string,
        "geonameId": number,
      },
      {
        "name": string,
        "description": string,
        "isoName": string,
        "order": number,
        "adminLevel": string,
        "wikidataId": string,
        "geonameId": number,
      },
      {
        "name": string,
        "description": string,
        "order": number,
        "adminLevel": number,
        "wikidataId": string,
        "geonameId": number,
      },
      {
        "name": string,
        "description": string,
        "order": number,
        "adminLevel": number,
        "wikidataId": string,
      }
    ],
    "informative": [
      {
        "name": string,
        "description": string,
        "isoName": string,
        "order": number,
        "isoCode": string,
        "wikidataId": string,
        "geonameId": number,
      },
      {
        "name": string,
        "description": string,
        "order": number,
      },
      {
        "name": string,
        "description": string,
        "order": number,
      },
      {
        "name": string,
        "description": string,
        "order": number,
        "wikidataId": string,
        "geonameId": number,
      },
      {
        "name": string,
        "description": string,
        "order": number,
        "wikidataId": string,
      }
    ]
  }
}

export type GeocodingResponseDTO= {
  "results": GeocodingCity[],
  "generationtime_ms": number
}

export type GeocodingArgs = {
  city: string,
  count: number,
}

export type CoordsArgs = {
  lat: number,
  lon: number
}

export type CurrentForecast = {
  country?: string,
  city?: string,
  date: string,
  feelsLike: number,
  precipitation: number,
  temp: number,
  wind: number,
  humidity: number,
  isDay: boolean,
  icon: number,
}

export type HourlyForecast = {
  id: string,
  rawDate: Date,
  utcSeconds: number,
  temp: number,
  formattedHour: string,
  icon: number,
}

export type DailyForecast = {
  id: string,
  dayName: string,
  maxTemp: number,
  minTemp: number,
  icon: number,
}

export type MappedCurrentForecast = CurrentForecast
export type MappedHourlyForecast = HourlyForecast[]
export type MappedDailyForecast = DailyForecast[]

export type MappedWeatherResponse = {
  current: MappedCurrentForecast,
  hourly: MappedHourlyForecast,
  daily: MappedDailyForecast,
}

export type MappedGeolocation = {
  country: string,
  city: string,
}

export type MappedGeocoding = {
  id: number
  city: string,
  country: string
  location: {
    lat: number
    lon: number
  },
  adminDivision: {
    admin1: string | null,
    admin2: string | null,
    admin3: string | null
  },
}

export type MappedGeocodingArray = MappedGeocoding[] | null

export type LocationState = {
  lat: number,
  lon: number,
  isSearchResultCity: boolean,
}
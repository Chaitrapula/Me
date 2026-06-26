import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const GEO_URL = '/geo/india-states.json'

function IndiaMap({ places }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="map-frame">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [82.75, 21.84], scale: 941 }}
        width={520}
        height={560}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="map-land"
              />
            ))
          }
        </Geographies>

        {places.map((p) => {
          const isHover = hovered === p.name
          return (
            <Marker
              key={p.name}
              coordinates={p.coordinates}
              onMouseEnter={() => setHovered(p.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <circle
                r={isHover ? 6 : 4}
                className={`map-pin ${p.type === 'trek' ? 'map-pin-trek' : 'map-pin-dest'}`}
              />
              {isHover && (
                <g className="map-tip" transform="translate(0,-12)">
                  <text textAnchor="middle" className="map-tip-text">
                    {p.name}
                  </text>
                </g>
              )}
            </Marker>
          )
        })}
      </ComposableMap>
    </div>
  )
}

export default IndiaMap

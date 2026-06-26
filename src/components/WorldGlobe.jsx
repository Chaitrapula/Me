import { useState, useRef, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Marker, Sphere, Graticule } from 'react-simple-maps'

const GEO_URL = '/geo/countries-110m.json'
const HIGHLIGHT = ['Bhutan', 'India']

function WorldGlobe({ markers }) {
  const [rotation, setRotation] = useState([-88, -20, 0])
  const [spinning, setSpinning] = useState(true)
  const drag = useRef(null)

  useEffect(() => {
    if (!spinning) return
    const id = setInterval(() => {
      setRotation(([l, p, r]) => [l - 0.35, p, r])
    }, 50)
    return () => clearInterval(id)
  }, [spinning])

  const onDown = (e) => {
    setSpinning(false)
    drag.current = { x: e.clientX, y: e.clientY, rot: rotation }
  }
  const onMove = (e) => {
    if (!drag.current) return
    const dx = e.clientX - drag.current.x
    const dy = e.clientY - drag.current.y
    const [l, p, r] = drag.current.rot
    setRotation([l + dx * 0.4, Math.max(-90, Math.min(90, p - dy * 0.4)), r])
  }
  const onUp = () => { drag.current = null }

  return (
    <div className="globe-frame">
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{ rotate: rotation, scale: 200 }}
        width={420}
        height={420}
        style={{ width: '100%', height: 'auto', cursor: drag.current ? 'grabbing' : 'grab' }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        <Sphere className="globe-sphere" />
        <Graticule className="globe-grid" />
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className={HIGHLIGHT.includes(geo.properties.name) ? 'globe-land globe-land-hi' : 'globe-land'}
              />
            ))
          }
        </Geographies>

        {markers.map((m) => (
          <Marker key={m.name} coordinates={m.coordinates}>
            <circle r={5} className={`globe-pin ${m.home ? 'globe-pin-home' : ''}`} />
            <text textAnchor="middle" y={-10} className="globe-label">{m.name}</text>
          </Marker>
        ))}
      </ComposableMap>
      <p className="globe-hint">Drag to spin the globe</p>
    </div>
  )
}

export default WorldGlobe

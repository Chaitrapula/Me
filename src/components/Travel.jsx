import { motion } from 'framer-motion'
import { FiMapPin, FiGlobe } from 'react-icons/fi'
import { FaMountain } from 'react-icons/fa'
import IndiaMap from './IndiaMap'
import WorldGlobe from './WorldGlobe'
import './Travel.css'

const destinations = [
  { name: 'Munnar', region: 'Kerala', coordinates: [77.0595, 10.0889], type: 'dest' },
  { name: 'Wayanad', region: 'Kerala', coordinates: [76.1320, 11.6854], type: 'dest' },
  { name: 'Kochi', region: 'Kerala', coordinates: [76.2673, 9.9312], type: 'dest' },
  { name: 'Calicut', region: 'Kerala', coordinates: [75.7804, 11.2588], type: 'dest' },
  { name: 'Kodaikanal', region: 'Tamil Nadu', coordinates: [77.4892, 10.2381], type: 'dest' },
  { name: 'Ooty', region: 'Tamil Nadu', coordinates: [76.6932, 11.4064], type: 'dest' },
  { name: 'Coorg', region: 'Karnataka', coordinates: [75.7382, 12.4244], type: 'dest' },
  { name: 'Gokarna', region: 'Karnataka', coordinates: [74.3188, 14.5479], type: 'dest' },
  { name: 'Goa', region: 'West India', coordinates: [73.8278, 15.4909], type: 'dest' },
  { name: 'Delhi', region: 'North India', coordinates: [77.2090, 28.6139], type: 'dest' },
  { name: 'Taj Mahal', region: 'Agra', coordinates: [78.0421, 27.1751], type: 'dest' },
  { name: 'Kashmir', region: 'Jammu & Kashmir', coordinates: [74.7973, 34.0837], type: 'dest' },
  { name: 'Guwahati', region: 'Assam', coordinates: [91.7362, 26.1445], type: 'dest' },
  { name: 'Tawang', region: 'Arunachal Pradesh', coordinates: [91.8594, 27.5861], type: 'dest' },
  { name: 'Shergaon', region: 'Arunachal Pradesh', coordinates: [92.2700, 27.1300], type: 'dest' },
]

const treks = [
  { name: 'Meeshapulimala', region: 'Munnar, Kerala', coordinates: [77.2030, 10.1840], type: 'trek' },
  { name: 'Kolukkumalai', region: 'Near Munnar', coordinates: [77.2230, 10.1330], type: 'trek' },
  { name: 'Kwirara Betta', region: 'Karnataka', coordinates: [77.1000, 12.8000], type: 'trek' },
]

const globeMarkers = [
  { name: 'Home', coordinates: [77.5946, 12.9716], home: true },
  { name: 'Bhutan', coordinates: [90.4336, 27.5142] },
]

function Travel() {
  return (
    <section id="travel" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">06 — Beyond Work</span>
        <h2 className="section-title"><em>Travel</em></h2>
        <p className="section-subtitle">Places I've wandered across India and beyond</p>

        <div className="travel-maps">
          <div className="map-col">
            <IndiaMap places={[...destinations, ...treks]} />
          </div>

          <div className="legend-col">
            <div className="legend-group">
              <h4 className="legend-head"><FiMapPin /> Destinations</h4>
              <ul className="legend-list">
                {destinations.map((d) => (
                  <li key={d.name}>
                    <span className="dot dot-dest" />
                    <span className="legend-name">{d.name}</span>
                    <span className="legend-region">{d.region}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="legend-group">
              <h4 className="legend-head"><FaMountain /> Trekking</h4>
              <ul className="legend-list">
                {treks.map((t) => (
                  <li key={t.name}>
                    <span className="dot dot-trek" />
                    <span className="legend-name">{t.name}</span>
                    <span className="legend-region">{t.region}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="abroad-block">
          <span className="trek-label"><FiGlobe /> Abroad</span>
          <div className="globe-row">
            <WorldGlobe markers={globeMarkers} />
            <div className="abroad-info">
              <h3 className="abroad-place">Bhutan</h3>
              <p className="abroad-meta">Other country</p>
              <p className="abroad-tag">Land of the Thunder Dragon — my one international trip so far, just across the Himalayas from home.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Travel

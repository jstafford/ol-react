import React, { Component } from 'react'

import { Feature, geom, layer, Map, source, View } from '../../lib'

class App extends Component {
  render() {
    return (
      <Map view={<View resolution={10000} center={[0, 0]}/>}>
        <layer.Tile>
          <source.OSM />
        </layer.Tile>
        <layer.Vector>
          <source.Vector>
            <Feature id='box' style={{stroke: {color: [255, 0, 0, 1]}}}>
              <geom.LineString>
                {[[0, 0], [100000, 0], [100000, 100000], [0, 100000], [0, 0]]}
              </geom.LineString>
            </Feature>
          </source.Vector>
        </layer.Vector>
      </Map>
    )
  }
}

export default App;

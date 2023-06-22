import L from 'leaflet';

import dron from './dron.png'


const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [140, 100],
        iconAnchor: [70, 50],
        tooltipAnchor: [0, 0]
    }
});

export const dronIcon = new LeafIcon({ iconUrl: dron })


import './generating-markup.js';
import './form.js';
import './disabled.js';
import './leaflet-map.js';
import './api.js';
import './filters.js';

import {
  getData
} from './api.js';
import {
  createSecondaryMarkers
} from './leaflet-map.js';
import {
  setMapActive
} from './disabled.js';
import {
  setData
} from './filters.js';

getData().then((result) => {
  createSecondaryMarkers(result);
  setData(result);
  setMapActive();
})

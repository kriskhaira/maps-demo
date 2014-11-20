// app/controllers/application.js
import Ember from 'ember';
import {MAP_TYPES} from 'google-map/components/google-map';

var lat = 40.75047;
var lng = -73.98061;

export default Ember.Controller.extend({
  lat:         lat,
  lng:         lng,
  zoom:        15,
  type:        'road',
  mapTypes:    MAP_TYPES,
  markers:     [
    {title: 'liftforward', lat: lat, lng: lng, description: 'New office'},
    {title: 'tallan', lat: 40.74646, lng: -73.98427, description: 'Old office'},
  ],
});

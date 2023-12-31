// Generated by CoffeeScript 2.7.0
// browser.coffee
var audio;

import {
  undef,
  defined,
  notdefined
} from '@jdeighan/base-utils';

import {
  assert,
  croak
} from '@jdeighan/base-utils/exceptions';

audio = undef; // audio context - create only when needed, then keep


// ---------------------------------------------------------------------------
//   beep - play a sound
export var beep = (volume = 100, freq = 520, duration = 200) => {
  var u, v;
  if (audio === undef) {
    audio = new AudioContext();
  }
  v = audio.createOscillator();
  u = audio.createGain();
  v.connect(u);
  v.frequency.value = freq;
  v.type = "square";
  u.connect(audio.destination);
  u.gain.value = volume * 0.01;
  v.start(audio.currentTime);
  v.stop(audio.currentTime + duration * 0.001);
};

// ---------------------------------------------------------------------------
export var inBrowser = function() {
  return typeof window !== 'undefined';
};

// ---------------------------------------------------------------------------
export var localStorageAvailable = function() {
  var e, got, storage, x;
  if (!inBrowser()) {
    return false;
  }
  if (typeof window.localStorage === 'undefined') {
    return false;
  }
  storage = window.localStorage;
  try {
    x = '__storage_test__';
    storage.setItem(x, x);
    got = storage.getItem(x);
    storage.removeItem(x);
    return got === x;
  } catch (error) {
    e = error;
    return false;
  }
};

// ---------------------------------------------------------------------------
export var getLocalStore = (key, defValue = {}) => {
  if (!localStorageAvailable()) {
    return undef;
  }
  if (localStorage.hasOwnProperty(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    localStorage.setItem(key, JSON.stringify(defValue));
    return defValue;
  }
};

// ---------------------------------------------------------------------------
export var setLocalStore = (key, value) => {
  if (!localStorageAvailable()) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

How to use this library
=======================

This library provides these functions:

inBrowser() - returns true if running in a browser
beep(volume, freq, duration) - emit a beep
	defaults are (100, 520, 200) and are optional
localStorageAvailable() - tests availability of localStorage
getLocalStore(key, defVal={}) - converts using JSON.stringify()
setLocalStore(key, value) - converts using JSON.stringify()

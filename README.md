## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

-The following is a React App built using SAWO Auth API,Geo-Ipify API & React-Leaflet JS that allows the user to find the geolocation data of his current IP Address as well search the same information for any other IP or domain and display them on a map. The following React App is also fully responsive with Boostrap.

### The challenge

Objectives of the challenge was , 

Users should be able to:
- Login using SAWO sdk (the passwordless way)
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

<p align='center'><img src=screenshots\1.PNG>
<p align="center">
<p align='center'><img src=screenshots\2.PNG>
<p align="center">
<p align='center'><img src=screenshots\4.PNG>
<p align="center">
<img src=screenshots\3.PNG>
<img src=screenshots\5.PNG>

### Links

- Solution URL: [Github](https://github.com/hotaanubhab/IP-Address-Tracker)
- Live Site URL: [Heroku](https://ip-address-track.herokuapp.com/)

## My process

I started with planning the the components I was going to divide the project into. Being mainly a backend-developer I was hesitant with React as first but then tookup the challenge after researching on the various packages of react available to make this project such as react-leaflet etc. 
I decided to go with the main App.js Component and two child components Datacontent (For the Geolocation Data) & Mapcontent(For the Map and Marker display).
Then a created the basic jsx template for the the same and did a bit of styling to get the idea of the final product.
Then I went on and added the SAWO Auth API following the React App Example (Github) from the docs.
Adding React-Leaflet Map was a bit tricky due to conflicts with create-react-app and had to downgrade the core files of leaflet for it to work.
Then I started working with the dynamic data.
- I used the useState() hook to initiliaze my state variables for dynamic render , such as marker location , geoloaction data , etc.
- Then I used the useEffect() hook to call functions on startup to initiliaze API_KEYS from 
'.env' file.
- To fetch the Geolocation Data I used a fetch request to the GeoIpify API endpoint with the rerspective parameters, even applied a regex expression to check the IP or Domain was valid.
- It simple from here on to update the states using the JSON returned by the fetch request and render the child components with there contructs.


## Future

There's still scope for improvement and features I wanted to add but ran out of time. 
- Error Message Display on invalid IP or Domain
- Login Session Storage to store payload on cookies or localStorage using react-client-session package
- Integration on a Node Backend to tally the IP search data's to a database for later view.
- Implement a local cache for faster search of same IP addresses in one session without requiring a separate fetch request again.


### Built with

- Semantic HTML5 markup
- CSS3 custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- Bootstrap5
- LeafletJS
- React-Leaflet
- GeoIpify API
- SAWO Auth API



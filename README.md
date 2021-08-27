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



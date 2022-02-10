import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef, useState } from "react";


function MyMapComponent({center, zoom,}:{ center: google.maps.LatLngLiteral; zoom: number;}){
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div style={{height: '500px', width: '500px'}} ref={ref} id="map" />;
}


const render = (status) => {
  switch (status) {
    case Status.LOADING:
      // return <Spinner />;
      return (
          <div className ="mainContent" >
            <h1>LOADING</h1>
          </div>
      )
    case Status.FAILURE:
      // return <ErrorComponent />;
      return (
          <div className ="mainContent">
            <h1>FAILURE</h1>
          </div>
      )
    default:
      return(
          <div className ="mainContent" >
            <h1>LOADING</h1>
          </div>
      )
  }
};

const GMapComponent = (center) =>{
    return(
      <Wrapper apiKey={"AIzaSyCjrB7MoawGDHAGCz4kQO1qR6qscq3J77k"} render={render}>
        <div style={{margin:10}}>
          <MyMapComponent center={center.center} zoom={17} />
        </div>
      </Wrapper>
    )
}


const GMap = () =>{
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
  function clickFnc(e){
    let event = e.target.id;
    console.log("e.target.id : ", e.target.id);
    switch(event){
      case"highSchool":
        console.log("event : ", event);
        setCenter({ lat: 25.079336074740095, lng: 121.57509629793006 })
        break
      case"college":
        console.log("event : ", event);
        setCenter({ lat: 24.069227718085195, lng: 120.71459696537369 })
        break
      case"company":
        console.log("event : ", event);
        setCenter({ lat: 25.061617171459197, lng: 121.6348142690849 })
        break
      default:
        break
    }
  }
  return(
    <div className ="mainContent" >

      <h1>Google Map Application</h1>
      <GMapComponent center = {center}/>
      <div style={{display : 'flex', height: '50px', width: '500px', justifyContent: 'spaceAround'}}>
        <button id = 'highSchool' onClick ={clickFnc} >High School</button>
        <button id = 'college' onClick ={clickFnc} >College</button>
        <button id = 'company' onClick ={clickFnc} >Company</button>
      </div>
    </div>
  )
}

export default GMap;
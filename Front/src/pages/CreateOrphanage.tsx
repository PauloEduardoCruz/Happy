import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';


import { FiPlus } from "react-icons/fi";
import Sidebar from '../components/SideBar'


import '../styles/pages/create-orphanage.css';
import mapMarkerImg from '../images/map-marker.svg'

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function CreateOrphanage() {

  return (
    <div id="page-create-orphanage">
      <Sidebar></Sidebar>

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-15.8950577,-48.118437]}
              style={{ width: '100%', height: 280 }}
              zoom={16}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" ></TileLayer>

              <Marker interactive={false} icon={happyMapIcon} position={[-15.8950577,-48.118437]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;

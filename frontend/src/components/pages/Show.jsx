import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const api = axios.create({
    baseURL: 'https://app-turistico.onrender.com/api'
})

function Show() {
    const location = useLocation();
    const { id } = location.state || {};

    const [destination, setDestination] = useState(null);
    const [attraction, setAttraction] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/destinations/${id}`);
                setDestination(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        const fetchAttractions = async () => {
            try {
                const response = await api.get(`/destinations/${id}/attractions`);
                setAttraction(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
        fetchAttractions();
    }, [id]);

    if (!destination) {
        return <div>Carregando...</div>;
    }

    if (!attraction) {
        return <div>Carregando...</div>
    }

    const center = {
        lat: destination.lat,
        lng: destination.lng
    };

    return(
        <>  
            <div style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
            }}>
                <img
                src={destination.imageUrl}
                alt="Full Width"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6  }}
                />
                <div style={{
                position: 'absolute',
                color: 'white',
                textAlign: 'center'
                }}>
                    <h1 id='home'>{destination.name}</h1>
                </div>
            </div>
            <div className='description py-4'>
                <h1>Descrição</h1>
                <p>{destination.description}</p>
            </div>
            <div className="atratives p-4 pt-0">
                <h1 className='pb-4'>Principais atrativos</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Tipo de atração</th>
                        <th>Descrição</th>
                        <th>Dicas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attraction.map((data) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.type}</td>
                                <td>{data.description}</td>
                                <td>{data.tips}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div>
                <h3 className='pb-4'>Mapa interativo</h3>
                <MapContainer center={center} zoom={10} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={center}>
                        <Popup>{destination.title}</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
}

export default Show;

import MyDestinations from '../Destinations';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const api = axios.create({
    baseURL: 'https://app-turistico.onrender.com/api'
});

function Home() {
    
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/destinations');
                setDatas(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    const navigate = useNavigate();

    const toDestinations = (id) => {
        navigate('/pontos', { state: {id} })
    }

    return (
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
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4c/33/a3/lagoas.jpg?w=1200&h=-1&s=1"
                alt="Full Width"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6  }}
                />
                <div style={{
                position: 'absolute',
                color: 'white',
                textAlign: 'center'
                }}>
                    <h1 id='home'>Tourist Guide</h1>
                    <h4>Os melhores pontos turísticos do Maranhão</h4>
                </div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }} className='py-5'>
                <h2 id='pontos' className='m-0 pb-5'>Melhores pontos turísticos</h2>

                <div style={{
                display: 'flex',
                gap: 20,
                flexWrap: 'wrap',
                justifyContent: 'center'
                }}>
                    { datas.map( (data) => (
                        <MyDestinations key={data.id} toDestinations={() => toDestinations(data.id)} data={data} />
                    ) ) }
                </div>
                
            </div>
        </>
    );
}

export default Home
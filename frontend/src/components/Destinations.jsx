import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyDestinations({toDestinations, data}) {
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top"src={data.imageUrl} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Button variant="primary" onClick={toDestinations}>Ver detalhes</Button>
      </Card.Body>
    </Card>
  );
}

export default MyDestinations;
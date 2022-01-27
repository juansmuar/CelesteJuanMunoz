import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import './ItemListContainer.css'

const ItemListContainer = ({name, price, description, img}) => (
    <div className="container">
        <Card>
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <img src={img} alt='menu-img'/>
                <CardSubtitle className="mb-2 text-muted" tag="h6">{price}</CardSubtitle>
                <CardText>{description}</CardText>
                <Button>Comprar</Button>
            </CardBody>
        </Card>
    </div>
);

export default ItemListContainer;
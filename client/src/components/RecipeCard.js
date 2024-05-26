import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={recipe.img_url} />
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>{recipe.category}</Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                    {recipe.ingredients.map((ingredient, index) => (
                        <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                    ))}
                </ListGroup>
                <Card.Body>
                    <Card.Text>{recipe.instructions}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;
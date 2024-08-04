import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box
} from '@mui/material';
import { Recipe, Ingredient } from '../types';
import Recipes from '../datas/recipes.json'
import Ingredients from '../datas/ingredients.json'

export const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipes: Recipe[] = JSON.parse(JSON.stringify(Recipes))
  const ingredients: Ingredient[] = JSON.parse(JSON.stringify(Ingredients))
  const recipe = recipes.find(r => r.id === id)


  if (!recipe) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="md">
      <Card sx={{ marginTop: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={recipe.image}
          alt={recipe.name}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {recipe.name}
          </Typography>
          
          <Typography variant="h6" gutterBottom>材料:</Typography>
          <List>
            {recipe.ingredients.map((ing, index) => {
              const ingredient = ingredients.find(i => i.id === ing.ingredientId);
              return (
                <ListItem key={index}>
                  <ListItemText 
                    primary={ingredient?.name} 
                    secondary={ing.amount} 
                  />
                </ListItem>
              );
            })}
          </List>

          <Divider sx={{ my: 2 }} />
          <Typography>アルコール度数：{recipe.alchol}%</Typography>
          <Typography variant="h6" gutterBottom>作り方:</Typography>
          <Box>
            <Typography variant="body1" gutterBottom>
              {recipe.method}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { Recipe, Ingredient } from '../types';
import { Link } from 'react-router-dom';
import Recipes from '../datas/recipes.json'
import Ingredients from '../datas/ingredients.json'

export const Home = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<string>('');

  const recipes: Recipe[] = JSON.parse(JSON.stringify(Recipes))
  const ingredients: Ingredient[] = JSON.parse(JSON.stringify(Ingredients))
  const filteredRecipes = selectedIngredient
    ? recipes.filter(recipe =>
      recipe.ingredients.some(ing => ing.ingredientId === selectedIngredient)
    )
    : recipes;

  return (
    <Container maxWidth="lg">

      <FormControl fullWidth margin="normal">
        <InputLabel id="ingredient-select-label">材料で絞り込み</InputLabel>
        <Select
          labelId="ingredient-select-label"
          value={selectedIngredient}
          label="材料で絞り込み"
          onChange={(e) => setSelectedIngredient(e.target.value as string)}
        >
          <MenuItem value="">全て</MenuItem>
          {ingredients.map((ing) => (
            <MenuItem key={ing.id} value={ing.id}>{ing.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={4} marginTop={2}>
        {filteredRecipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card>
              <CardActionArea component={Link} to={`/recipe/${recipe.id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {recipe.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

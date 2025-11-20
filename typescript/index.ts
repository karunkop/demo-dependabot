import express from 'express';
import { map } from 'lodash';


const app = express();
const port = 8000;

app.get('/', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = map(numbers, (n) => n * 2);
  res.json({ doubled });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


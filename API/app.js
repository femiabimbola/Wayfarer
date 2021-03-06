import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import users from './routes/users.routes';

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to Wayfarer root',
  });
});

// API ROUTES
app.use('/api/v1/users', users);

const port = 2000;
app.listen(port, () => {
  console.log(`Yaay server is listening on ${port}`);
});

export default app;

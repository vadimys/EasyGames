export default function errorHandling(app) {
  app.use((req, res, next) => res.status(404).json('API not found'));
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json(error.message);
  });
}

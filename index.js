"use strict";
import app from './src/app';

const port = 9000;

app()
  .then(app => app.listen(port))
  .catch(() => {
    process.exit(1);
  });

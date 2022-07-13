const IS_ADMIN = false;

const isAdmin = (req, res, next) => {
  if (!IS_ADMIN)
    res.send({
      error: 403,
      descripcion: `ruta ${req.baseUrl} | method ${req.method} no autorizado`,
    });

  next();
};

export { isAdmin };

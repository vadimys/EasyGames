import Auth from '../../auth/authModel';

const login = (req, res) => {
  Auth.exists({
    username: req.username,
    password: req.password,
  })
    .then(status => {
      status
        ? res.status(201).json('User logged in!')
        : res.status(404).json('User not found!');
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

export default login;

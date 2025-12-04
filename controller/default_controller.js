const index = (req, res) => {
  res.render('index', { title: 'Home' });
};

const vm = (req, res) => {
  res.render('vm', { title: 'VM' });
};

const ubuntu = (req, res) => {
  res.render('ubuntu', { title: 'Ubuntu' });
};

const nginx = (req, res) => {
  res.render('nginx', { title: 'nginx' });
};

module.exports = {
  index,
  vm,
  ubuntu,
  nginx,
};

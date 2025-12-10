const index = (req, res) => {
  res.render('index', { title: 'Home' });
};

const vm = (req, res) => {
  res.render('vm', { title: 'VM' });
};

const ubuntu = (req, res) => {
  res.render('ubuntu', { title: 'Ubuntu' });
};

const node = (req, res) => {
  res.render('node', { title: 'Node' });
};

module.exports = {
  index,
  vm,
  ubuntu,
  node,
};

const index = (req, res) => {
  res.render('index', { title: 'Home' });
};
const protect = (req, res) => {
  res.render('global-protect', { title: 'Global protect' });
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

const nodeLocal = (req, res) => {
  res.render('node-local', { title: 'Local Node' });
};

const nodeVm = (req, res) => {
  res.render('node-vm', { title: 'Node Vm' });
};
const begrep = (req, res) => {
  res.render('begrep', { title: 'Begrep' });
};

module.exports = {
  index,
  protect,
  vm,
  ubuntu,
  node,
  nodeLocal,
  nodeVm,
  begrep
};

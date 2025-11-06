const axe = require('axe-core');

(async () => {
  const results = await axe.run(document);
  console.log(results.violations);
})();

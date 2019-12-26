stage 'Build'

node {
// Checkout
git branch: 'master',url: 'https://github.com/ducdn221/Jenkins_Newman.git';

// install required bundles
sh 'bundle install'

// build and run tests with coverage
sh 'bundle exec rake build spec'

// Archive the built artifacts
archive (includes: 'pkg/*.gem')
publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
}
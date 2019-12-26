node {
sh 'bundle install'

sh 'bundle exec rake build spec'

archive (includes: 'pkg/*.gem')
publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
    stage('Postman CI'){
        git 'https://github.com/ducdn221/Jenkins_Newman.git'
        
    }
    
    stage('Install Node Dependencies') {
        bat 'npm install'
    }
    stage('Run Tests') {
        bat 'npm run test-api-newman'
        
    }
}

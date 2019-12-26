node {
    stage('Postman CI'){
        git 'https://github.com/ducdn221/Jenkins_Newman.git'
        
    }
    stage('Install Node Dependencies') {
        bat 'npm install'
    }
    stage('Run Tests') {
        bat 'npm run test-api-newman'
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
    }
}

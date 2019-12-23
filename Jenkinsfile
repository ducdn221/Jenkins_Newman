node {
    stage('Postman CI'){
        git 'https://github.com/ducdn221/Jenkins_Newman.git'
        
    }
    stage('Install Node Dependencies') {
        sh 'npm install'
    }
    stage('Run Tests') {
        sh 'npm run test-post-deploy -d env-dev.json'
    }
}

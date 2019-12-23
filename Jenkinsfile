node {
    echo 'Pulling...' + env.BRANCH_NAME
        checkout scm
    stage('Postman CI'){
        git 'https://github.com/ducdn221/Jenkins_Newman.git'
        
    }
    stage('Install Node Dependencies') {
        bat 'npm install'
    }
    stage('Run Tests') {
        bat 'npm run test-post-deploy -d env-dev.json'
    }
}

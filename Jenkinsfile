def getEnvFromBranch(branch) {
  if (branch == 'value1') {
    return 'production'
  } else {
    return 'staging'
 }
}
node {
    environment {
    targetedEnv = getEnvFromBranch(env.param1)
  }
    stage('Postman CI'){
        git 'https://github.com/ducdn221/Jenkins_Newman.git'
        steps {
                // use environment variable as parameter to predefined steps
                echo "These are my parameters: '${env.param}'"
            }
        
    }
    stage('Install Node Dependencies') {
        bat 'npm install'
    }
    stage('Run Tests') {
        bat 'npm run test-api-newman'
    }
}

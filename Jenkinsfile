def getEnvFromBranch(branch) {
  if (branch == 'value1') {
    return 'production'
  } else {
    return 'staging'
 }
}
node {
   echo "These are my parameters: '${env.param1}'"
    environment {
     
    targetedEnv = getEnvFromBranch(env.param1)
  }
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

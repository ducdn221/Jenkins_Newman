def getEnvFromBranch(branch) {
  if (branch == 'value1') {
    return '-d env-dev.json'
  } else {
    return '-d env-prod.json'
 }
}
node {
   
    environment {
     
    targetedEnv = getEnvFromBranch(env.param1)
  }
  echo "These are my parameters: '${env.targetedEnv}'"
    stage('Postman CI'){
        git 'https://github.com/ducdn221/Jenkins_Newman.git'       
    }
    stage('Install Node Dependencies') {
        bat 'npm install'
    }
    stage('Run Tests') {
        bat 'npm run test-api-newman1 ${env.targetedEnv}'
    }
}

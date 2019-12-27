node {
    stage('Postman CI'){
        git 'https://github.com/ducdn221/Jenkins_Newman.git'
        
    }
    stage('Install Node Dependencies') {
        bat 'npm install'
    }
    stage('Run Tests') {
        bat 'npm run test-api-newman'
    }

    stage('build') {
         // Checkout
   checkout scm
 
   // install required bundles
   sh 'bundle install'
 
   // build and run tests with coverage
   sh 'bundle exec rake build spec'
 
   // Archive the built artifacts
   archive (includes: 'pkg/*.gem')
    }
}

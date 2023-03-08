pipeline {
  agent {
    kubernetes {
      yaml """
apiVersion: v1
kind: Pod
metadata:
  labels:
    app: maven
spec:
  containers:
  - name: 'nodejs'
    image: node:18-alpine
    command:
    - cat
    tty: true
  - name: 'syft'
    image: ldonleycb/syft-runner
    command:
    - cat
    tty: true
"""
    }
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        container('nodejs') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
    stage('Tests') {
    parallel {
      stage('Unit Test') {
        steps {
          container('nodejs') {
            sh 'npm run test:ci'
          }
        }
        post {
          always {
            junit 'reports/junit.xml'
          }
        }
      }

      stage('Static Code Analysis') {
        steps {
          container('nodejs') {
            sh 'npm run eslint || true'
          }
        }
      }
      }
    }
    stage('Build and Push Image') {
      when {
        beforeAgent true
        anyOf {
          branch 'main';
          branch 'master'
        }
      }
      steps {
        kanikoBuildPushGeneric("insurance-frontend", "latest", "cb-thunder-v2/ldonley-workshop")
        {
          checkout scm
        }
      }
    }
    stage('Generate SBOM') {
      steps {
        container('syft') {
          sh 'syft ./ -o json=sbom.json'
        }
        archiveArtifacts artifacts: 'sbom.json', fingerprint: true
      }
    }
  }
}

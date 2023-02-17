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

    parallel {
      stage('Unit Test') {
        steps {
          container('nodejs') {
            sh 'npm run test:ci'
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

      stage('Container Scanning') {
        steps {
          echo 'Add grype scan'
        }
      }

      stage('Secret Scanning') {
        steps {
          echo 'Add git-secret scan'
        }
      }

      stage('Dependency Scanning') {
        steps {
          echo 'Add OWASP dependency check'
        }
      }

      stage('Dynamic Application Security Testing') {
        steps {
          echo 'Add OWASP ZAP'
        }
      }

      stage('Fuzz Testing') {
        steps {
          echo 'Add a fuzzing tool like AFL'
        }
      }

      stage('Security and Compliance Policy Checks') {
        steps {
          echo 'Add compliance check'
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

    stage('Sign Artifact with Sigstore') {
      steps {
        echo 'Add sigstore cosign step'
      }
    }
  }
}

# Node.js CI/CD Pipeline Demo

A simple Node.js application demonstrating a complete CI/CD pipeline using GitHub Actions and Docker.

## 🚀 What This Project Demonstrates

This project showcases a beginner-friendly CI/CD pipeline that:
- Automatically tests your code on every push
- Builds a Docker container
- Pushes the image to DockerHub
- Provides a foundation for automated deployment

## 📁 Project Structure

```
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml          # GitHub Actions workflow
├── app.js                    # Main Node.js application
├── app.test.js              # Test file for the application
├── package.json             # Node.js dependencies and scripts
├── Dockerfile               # Docker container configuration
└── README.md                # This file
```

## 🛠️ How the CI/CD Pipeline Works

### Pipeline Triggers
- **Automatic**: Runs on every push to the `main` branch
- **Manual**: Can be triggered on pull requests to `main`

### Pipeline Steps

1. **Test Job** (`test`)
   - Checks out the repository code
   - Sets up Node.js environment
   - Installs dependencies with `npm ci`
   - Runs tests with `npm test`
   - Performs code quality checks

2. **Build and Push Job** (`build-and-push`)
   - Depends on successful completion of the test job
   - Sets up Docker Buildx for advanced features
   - Logs into DockerHub using GitHub Secrets
   - Builds a multi-platform Docker image (AMD64 and ARM64)
   - Pushes the image to DockerHub with appropriate tags
   - Uses GitHub Actions cache for faster builds

3. **Deploy Job** (`deploy`)
   - Runs only on the main branch
   - Currently displays deployment information
   - Ready for extension with actual deployment logic

## 🔧 Setup Instructions

### Prerequisites
- GitHub account
- DockerHub account
- Git installed locally

### 1. Fork or Clone This Repository
```bash
git clone <your-repository-url>
cd nodejs-demo-app
```

### 2. Set Up DockerHub Credentials as GitHub Secrets

You need to add your DockerHub credentials to your GitHub repository:

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add these two secrets:

   **Secret 1:**
   - Name: `DOCKERHUB_USERNAME`
   - Value: Your DockerHub username

   **Secret 2:**
   - Name: `DOCKERHUB_TOKEN`
   - Value: Your DockerHub access token (not password!)

#### How to Get DockerHub Token:
1. Go to [DockerHub](https://hub.docker.com)
2. Sign in to your account
3. Click on your profile picture → **Account Settings**
4. Go to **Security** tab
5. Click **New Access Token**
6. Give it a name (e.g., "GitHub Actions")
7. Copy the generated token (you won't see it again!)

### 3. Test the Pipeline

#### Option A: Push to Main Branch
```bash
# Make a small change to trigger the pipeline
echo "# Test change" >> README.md
git add .
git commit -m "Test CI/CD pipeline"
git push origin main
```

#### Option B: Create a Pull Request
```bash
# Create a new branch
git checkout -b test-pipeline
echo "# Test change" >> README.md
git add .
git commit -m "Test CI/CD pipeline"
git push origin test-pipeline
# Then create a PR on GitHub
```

### 4. Monitor the Pipeline
1. Go to your GitHub repository
2. Click on the **Actions** tab
3. You'll see your workflow runs
4. Click on a run to see detailed logs

## 🐳 Running the Application Locally

### Using Node.js
```bash
# Install dependencies
npm install

# Run tests
npm test

# Start the application
npm start
```

Visit `http://localhost:3000` to see the app running.

### Using Docker
```bash
# Build the Docker image
docker build -t nodejs-demo-app .

# Run the container
docker run -p 3000:3000 nodejs-demo-app
```

Visit `http://localhost:3000` to see the app running in Docker.

## 📊 Understanding the Workflow File

The `.github/workflows/main.yml` file contains:

- **Triggers**: When the workflow should run
- **Environment Variables**: Shared variables across jobs
- **Jobs**: Different stages of the pipeline
- **Steps**: Individual actions within each job
- **Dependencies**: How jobs depend on each other

### Key Features:
- **Multi-platform builds**: Creates images for both AMD64 and ARM64
- **Caching**: Uses GitHub Actions cache for faster builds
- **Security**: Uses secrets for DockerHub authentication
- **Conditional deployment**: Only deploys from main branch
- **Comprehensive testing**: Runs tests before building

## 🔍 Troubleshooting

### Common Issues:

1. **DockerHub login fails**
   - Check that your `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` secrets are set correctly
   - Ensure the token has the right permissions

2. **Tests fail**
   - Run `npm test` locally to debug
   - Check that all dependencies are installed

3. **Docker build fails**
   - Test the Dockerfile locally: `docker build -t test .`
   - Check for syntax errors in the Dockerfile

4. **Workflow doesn't trigger**
   - Ensure you're pushing to the `main` branch
   - Check that the workflow file is in `.github/workflows/`

## 🚀 Next Steps

Once you have this basic pipeline working, you can extend it by:

1. **Adding more tests**: Unit tests, integration tests, end-to-end tests
2. **Code quality checks**: ESLint, Prettier, SonarQube
3. **Security scanning**: Docker security scans, dependency vulnerability checks
4. **Deployment**: Deploy to cloud platforms (AWS, Azure, GCP)
5. **Notifications**: Slack, email notifications on success/failure
6. **Environment management**: Different environments (dev, staging, prod)

## 📚 Learning Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [CI/CD Best Practices](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License - see the package.json file for details.

---

**Happy Learning! 🎉**

This project is designed for DevOps beginners. Start with this foundation and gradually add more advanced features as you learn!

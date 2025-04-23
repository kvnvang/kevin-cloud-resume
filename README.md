# kevin-cloud-resume-challenge

Welcome to my Cloud Resume Challenge, this project is a real-world, end-to-end cloud engineering showcase using AWS and Infrastructure as Code (IaC). It demonstrates my ability to build secure, scalable serverless applications with CI/CD pipelines — and it's live at:
**[https://www.kevinvang.org]**
**Blog post [https://medium.com/@kvn_vang/cloud-resume-challenge-a9101d4b659f]**

# What I learned
Through this challenge, I alearned how to:
- Build and deploy cloud resources using AWS SAM and CloudFormation
- Secured Static websites with S3 + CloudFront + Origin Access Control (OAC)
- Create a CI/CD pipeline using GitHub Actions
- Debug IAM permission issues and CORS errors
- Set up and test serverless APIs using Lambda and DynamoDB

Tools and Services
Category | Tools/Services
Cloud provide - AWS
Hosting - S3 + CloudFront
Domain - Route 53
Security - IAM, ACM (HTTPS), OAC
Backend - AWS Lambda (node.js), API Gateway
Database - DynamoDB
IAC - AWS SAM, CloudFormation
CI/CD - GitHub Actions
Frontend - HTML, CSS, Javascript
Testing - Jest, SAM CLI, curl
Monitoring - CloudWatch

# Struggles I Faced
- IAM & Access Control
I had to troubleshoot permission erros between S3, CloudFront and Lambda. Resolved by applying least privilage IAM roles and using OAC (Origin Access Control)
- CORS Error
Frontend failed to get data from API Gateway. I fixed it by adding proper headers in Lambda responses and tweaking API Gateway settings.
- CloudFront Caching
My site wouldn't update after changes. I solved it by automating cache invalidation in the CI/CD workflow.
- Local API Testing
Testing Lambda locally was new to me. I recall in my Cloud Engineer Acadamy that you can 'curl' to simulate API requests.

# Architecture Diagram
User --> Route 53 --> CloudFront --> S3 Bucket --> API Gate Way --> Lambda --> DynamoDB

# Project Structure
This repo contains the source code and supporting files for a serverless application deployed using the AWS Serverless Application Model (SAM).
src/ - Lambda function source code
events/ - Sample test events
tests/ Unit tests (jest)
template.yaml - CloudFormation template

# Setup and Deployment Guide
AWS SAM CLI - [Install here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Node.js 22 – [Install here](https://nodejs.org/en/)
- Docker – [Install here](https://hub.docker.com/search/?type=edition&offering=community)

# Build and Deploy SAM
sam build
sam deploy --guided
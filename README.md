# Cloud Resume Challenge – Kevin Vang

Welcome! 👋 This project is my completed version of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), a hands-on AWS learning project that showcases cloud engineering and DevOps skills.

✅ Live Site: [https://kevinvang.org](https://kevinvang.org)

---

## 🚀 Technologies Used

| Tool | Purpose |
|------|---------|
| **HTML/CSS/JS** | Static resume frontend |
| **Amazon S3** | Hosts static website |
| **Amazon CloudFront** | Global CDN + HTTPS support |
| **AWS ACM** | Free SSL certificate for `kevinvang.org` |
| **AWS Route 53** | DNS for the custom domain |
| **Amazon DynamoDB** | Stores live visitor count |
| **AWS Lambda (Node.js)** | Backend to increment visitor count |
| **Amazon API Gateway** | REST API to expose Lambda to frontend |
| **AWS SAM CLI** | Infrastructure as Code (IaC) |
| **GitHub + CLI** | Project version control and future CI/CD |

---

## 📊 Features

- Live hosted resume at **`kevinvang.org`**
- Visitor counter backed by **DynamoDB + Lambda**
- Color-changing visitor count animation with JavaScript
- Secure **HTTPS via CloudFront + OAC**
- SAM-deployed serverless architecture

---

## ✅ Cloud Resume Challenge Checklist

- [x] Resume written in HTML
- [x] Hosted via Amazon S3
- [x] HTTPS secured via CloudFront + ACM
- [x] Custom domain set with Route 53: `kevinvang.org`
- [x] Visitor counter backed by DynamoDB
- [x] Serverless backend using Lambda + API Gateway
- [x] Infrastructure as Code via AWS SAM
- [ ] CI/CD pipeline via GitHub Actions (coming soon!)
- [ ] Blog post about the process (optional)

---

## 📁 Project Structure


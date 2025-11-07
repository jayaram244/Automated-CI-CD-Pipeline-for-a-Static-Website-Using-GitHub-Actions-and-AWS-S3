# Automated CI/CD Pipeline for a Static Website Using GitHub Actions and AWS S3

## Overview

This project hosts a simple static website deployed automatically via a CI/CD pipeline that leverages **GitHub Actions** for automation and **AWS S3** for static hosting.

---

## What is CI/CD?

**Continuous Integration (CI)** means merging code changes frequently to a shared repository and automatically running builds and tests to detect issues early.

**Continuous Deployment (CD)** automates the release of validated code changes to production environments, reducing manual intervention and accelerating delivery.

Together, CI/CD enables fast, reliable, and repeatable software delivery.

---

## What is CloudFront CDN?

**Amazon CloudFront** is a Content Delivery Network (CDN) service that caches your content at global edge locations to deliver it faster to end users worldwide. 

Using CloudFront with an S3 bucket improves website performance, reduces load on the origin, and provides security features such as SSL termination.

---

## What This Project Contains

- A **static website** with HTML, CSS, and JavaScript files.
- A **GitHub Actions workflow** to automate build and deploy on every push to `main`.
- Deployment to a **versioned AWS S3 bucket** serving the website.
- **CloudFront cache invalidation** to ensure users get the latest content immediately.

---

## How to Run the Pipeline

1. Push code changes to the repository's `main` branch.
2. The GitHub Actions workflow automatically triggers.
3. It checks out the code, configures AWS credentials from your repository secrets.
4. Synchronizes the website files with your S3 bucket, skipping workflow and README files.
5. Invalidates CloudFront cache if you use CloudFront CDN.
6. Once complete, your static website updates live on the  CloudFront distribution.

---

## Setup Requirements

- AWS credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`) stored as encrypted GitHub secrets.
- Your S3 bucket name as `AWS_S3_BUCKET_NAME`.
- CloudFront distribution ID as `CLOUDFRONT_DISTRIBUTION_ID`.
- Correctly configured S3 bucket for static website hosting and versioning enabled.
- CloudFront distribution defaults root object set to your index page.

![S3-Versioning](https://readme-images-jayaram.s3.us-east-1.amazonaws.com/S3-Versioning.png)
![Cache-invalidation-in-cloudfront](https://readme-images-jayaram.s3.us-east-1.amazonaws.com/CF-Invalidation.png)
![Flow Diagram](https://readme-images-jayaram.s3.us-east-1.amazonaws.com/demo.png)

---

## Benefits

- Automates deployment for fast, consistent updates.
- Reduces manual errors and downtime.
- Enables easy rollback with S3 versioning.
- Delivers content faster to users globally with CloudFront.

---

## License

This project is licensed under the MIT License.

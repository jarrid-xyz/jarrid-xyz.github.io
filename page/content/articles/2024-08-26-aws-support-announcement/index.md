---
title: Keyper now Support Secure Data Flow Flow on AWS
description: Keyper v0.0.3 now adds AWS support, simplifying encryption and key management with AWS KMS and IAM integration in three commands.
author: Lulu Cheng
authorLink: https://l1990790120.github.io/about
img: images/post.png
date: 2024-08-26
tags: ["Keyper", "AWS", "Announcement", "Release"]
---

You can finally stop Googling "How to encrypt and decrypt data with AWS KMS." We’re excited to share that the [Keyper v0.0.3 release](https://github.com/jarrid-xyz/keyper/releases/tag/v0.0.3){target="_blank"} now supports AWS. [Keyper](https://jarrid.xyz/keyper){target="_blank"} simplifies role and key management, encryption, and decryption into three simple commands. We’ll be updating Keyper's [step-by-step tutorial](https://github.com/jarrid-xyz/keyper-tutorial){target="_blank"} soon to show you how to encrypt and decrypt your data in AWS in just a few simple steps.

## What Does Keyper Do?

Data security is critical, but managing permissions and encryption keys can be complicated. [Keyper](https://jarrid.xyz/keyper){target="_blank"} streamlines this process, helping companies protect sensitive data and comply with regulations without the complexity.

At [Jarrid](https://jarrid.xyz), we build tools to make data security simple so software developers can focus on the applications and platform engineer can focus on the infrastructure. [Keyper](https://jarrid.xyz/keyper){target="_blank"} simplifies encryption and key management across cloud environments like AWS and GCP, automating key creation, management, and deployment to make encrypting and decrypting data straightforward.

## Keyper’s AWS Support

With the [Keyper v0.0.3 release](https://github.com/jarrid-xyz/keyper/releases/tag/v0.0.3){target="_blank"}, we’ve expanded [Keyper](https://jarrid.xyz/keyper){target="_blank"} to support [AWS](https://aws.amazon.com/){target="_blank"}:

- **[AWS KMS](https://aws.amazon.com/kms/){target="_blank"} Key Management**: [Keyper](https://jarrid.xyz/keyper){target="_blank"} now fully integrates with AWS KMS, automating the KMS key creation and management within your AWS infrastructure.
  
- **[AWS IAM](https://aws.amazon.com/iam/){target="_blank"} Role Management**: [Keyper](https://jarrid.xyz/keyper){target="_blank"} simplifies permissions by automating IAM role creation and assignment, ensuring only authorized access to your encryption keys.

- **End-to-End Secure Data Flow**: [Keyper](https://jarrid.xyz/keyper){target="_blank"} now supports end-to-end secure data flow in [AWS](https://aws.amazon.com/){target="_blank"}, enabling the deployment of advanced encryption protocols like [Direct AES + ACLs Encryption Flow](/articles/2024-07-14-introduce-keyper-secure-data-flow/#direct-aes-acls-encryption-flow) in [AWS](https://aws.amazon.com/){target="_blank"}. Learn more about [Keyper's Secure Data Flow](/articles/2024-07-14-introduce-keyper-secure-data-flow).

- **Three Simple Commands**: Set up an IAM role, create a KMS key, and [encrypt/decrypt your data in just three simple commands](https://jarrid.xyz/keyper/getting-started/){target="_blank"}.

- **Implemented with [Terraform](https://www.terraform.io/){target="_blank"}**: [Terraform](https://www.terraform.io/){target="_blank"} provides auditability and traceability on changes, and it can be easily integrated into any existing CI/CD pipelines, ensuring every configuration update is tracked and monitored.

## Demo

::Asciinema{id="asciicast-673686"}
::

## Getting Started

Refer to our [AWS deployment guide](https://jarrid.xyz/keyper/deploy/aws/){target="_blank"} for instructions on how to configure [Keyper](https://jarrid.xyz/keyper){target="_blank"} to deploy to [AWS](https://aws.amazon.com/){target="_blank"}.

After running `keyper deploy apply` to create the roles and keys accordingly, you can specify to use AWS keys for encryption and decryption with the `-s aws` option:

```bash
keyper data encrypt -s aws -k $KEY_ID --plaintext $SECRET
keyper data decrypt -s aws -k $KEY_ID --ciphertext $CIPHERTEXT
```

This allows you to easily encrypt and decrypt your data using AWS keys managed by Keyper.

## Summary

The [Keyper v0.0.3 release](https://github.com/jarrid-xyz/keyper/releases/tag/v0.0.3){target="_blank"} marks a significant milestone in simplifying data security for [AWS](https://aws.amazon.com/){target="_blank"} users. With seamless integration of [AWS KMS](https://aws.amazon.com/kms/){target="_blank"} and [IAM](https://aws.amazon.com/iam/){target="_blank"}, as well as support for end-to-end secure data flows, [Keyper](https://jarrid.xyz/keyper){target="_blank"} empowers both developers and platform engineers to manage encryption without the complexity. By leveraging [Terraform](https://www.terraform.io/){target="_blank"} for infrastructure as code, [Keyper](https://jarrid.xyz/keyper){target="_blank"} ensures that your encryption practices are not only secure but also auditable and easily integrated into your existing CI/CD pipelines.

Let [Keyper](https://jarrid.xyz/keyper){target="_blank"} take care of your data security so you can focus on building great applications and strong infrastructure.
---
title: "Keyper by Jarrid: Weekly Update [2024/08/09]"
description: Keyper v0.0.2 now support remote backend in GCS, direct file reading and writing, and a bug fix for key retrieval. We’ve also released a new tutorial on full file encryption.
author: Lulu Cheng
authorLink: https://l1990790120.github.io/about
img: https://images.pexels.com/photos/13092796/pexels-photo-13092796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
date: 2024-08-09
tags: ["Announcement", "Release"]
---

We’re excited to announce [Keyper v0.0.2 release](https://github.com/jarrid-xyz/keyper/releases/tag/v0.0.2){target="_blank"} and [a step by step tutorial for data vulnerability remediation](https://github.com/jarrid-xyz/keyper-tutorial){target="_blank"}. Read more about the tutorial [here](/articles/2024-08-09-step-by-step-guide-to-remediate-data-vuln).

## What's New?

We've added several important features in this release to make [Keyper](https://jarrid.xyz/keyper){target="_blank"} a cloud and production ready library.



### 1. Support for Remote Backend in GCS

We’ve added support for [Terraform remote backend](https://developer.hashicorp.com/terraform/language/settings/backends/remote){target="_blank"} in [Google Cloud Storage (GCS)](https://cloud.google.com/storage){target="_blank"}. This allows you to store and manage [Terraform state](https://developer.hashicorp.com/terraform/language/state){target="_blank"} remotely and share across CI/CD pipelines. With this update, you can embed [Keyper](https://jarrid.xyz/keyper){target="_blank"} in your infrastructure as code workflows.

### 2. Reading and Writing Files Directly

Our platform now supports reading and writing files, making it easier to manage your data workflows. Whether you need to read configurations or write out processed data, these new capabilities streamline your data management processes.

### 3. Bug Fix: Retrieve Key by ID and Name

We’ve fixed a bug that affected retrieving keys by both ID and name. This fix ensures that you can now reliably access your keys, whether you’re using their unique ID or their assigned name. [Check out our docs here](https://jarrid.xyz/keyper/resource/key/){target="_blank"}.

### 4. Whole File Encryption Tutorial

We’ve released a free step-by-step tutorial that walks you through setting up the [GCP service account](https://cloud.google.com/iam/docs/service-account-overview) and [Terraform](https://www.terraform.io/){target="_blank"}, creating and managing your encryption keys with [Keyper](https://jarrid.xyz/keyper){target="_blank"}, and encrypting a sample file with sensitive data on [GCS](https://cloud.google.com/storage) identified by data vulnerability scans.

➡️ [Go to the tutorial now](https://github.com/jarrid-xyz/keyper-tutorial?tab=readme-ov-file#keyper-tutorial)

## Looking Forward

In our upcoming release, we’re introducing a custom vault for advanced crypto key management. This feature leverages the latest encryption techniques, allowing you to secure your data while still being able to leverage your data in analytics and AI/ML processes with minimal decryption overhead.

We’re also adding file metadata tracking, so you can easily track which keys were used to encrypt specific files. This will help you manage access and key rotation more efficiently.

At Jarrid, we aim to make data security more than just vulnerability scans or technical jargon — we want to make data security actionable. By simplifying complex encryption techniques, we empower non-security engineers to effectively protect their data.

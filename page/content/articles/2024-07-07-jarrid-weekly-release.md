---
title: "Keyper by Jarrid: Weekly Update [2024/07/07]"
description: We’ve streamlined the end-to-end key management and encryption/decryption in 3 simple commands. Better yet, it’s now containerized and can be run anywhere.
author: Lulu Cheng
authorLink: https://l1990790120.github.io/about
img: https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
date: 2024-07-07
tags: ["Announcement", "Release"]
---

[Keyper](https://github.com/jarrid-xyz/keyper) is a powerful multi-platform Kotlin (Java) based CLI tool designed to simplify crypto key management and deployment with just a few commands. Think of Keyper as the Stripe for crypto keys. Every week, we introduce new features to help make security easier for developers and engineers worldwide.

::LetsTalkAndSubscribe{ctaText="Are you working on Fintech, Crypto or Healthcare projects? We'd love to help. Talk to us now."}
::

## Feature Release

1. [Keyper](https://github.com/jarrid-xyz/keyper/) is now containerized. You can run it from anywhere: laptops, Kubernetes, or any CI/CD pipelines, all with the same simple configuration.
2. Encrypt/decrypt is now fully supported via library/cli. Key management is now as simple as 3 simple commands.

```bash
# create key
keyper key create --backend local --stack gcp

# deploy to cloud kms
keyper deploy apply

# encrypt/decrypt
keyper key list # -> grab key-id
keyper data encrypt --key-id "<key-id>" --backend local -stack gcp --plaintext "<plaintext>" # returns ciphertext
keyper data decrypt --key-id "<key-id>" --backend local -stack gcp --ciphertext "<ciphertext>" # returns plaintext
```

Encrypting and decrypting data couldn't get easier than this. [Jarrid's](https://jarrid.xyz/) mission is to make crypto key management and software security as simple as possible for application and data engineers.

## Demo

Enough talk. Here are the end-to-end demos with [Keyper's](https://github.com/jarrid-xyz/keyper) Docker CLI.

### Create Key

::Asciinema{id="asciicast-667093"}
::

### Deploy Plan and Apply

::Asciinema{id="asciicast-667094"}
::

::Asciinema{id="asciicast-667095"}
::

### Encrypt/Decrypt

::Asciinema{id="asciicast-667096"}
::


### Try it Yourself

Library is free to use here: https://github.com/jarrid-xyz/keyper

::LetsTalkAndSubscribe{ctaText="We know this is an early (buggy) release and we'd love to help you set it up. If you have any feedback we'd love to talk to you."}
::

## Coming Up Next Week

### IAM Role Support

Our plan is to further streamline key management with IAM role support directly integrated with cloud providers. Adding IAM role permission configurations on top of existing key configurations allows platform and governance teams to easily track and control which applications/platforms have specific permissions to encrypt/decrypt with each key.

### Key Sharing

Currently, [Keyper](https://github.com/jarrid-xyz/keyper/) only supports symmetric keys. Sharing symmetric key is typically achieved with asymmetric key encryption. A hybrid approach ensures better performance and efficiency in terms of encryption/decryption while allowing safe sharing of the symmetric key itself. Sounds complicated? Don't worry, we will be wrapping all these exchange in [Keyper](https://github.com/jarrid-xyz/keyper/) so that it's as simple as `keyper key share <...>` for developers to share keys.

### Docs

We understand that blog posts and READMEs aren't necessarily the easiest to search or provide a full picture of how [Keyper](https://github.com/jarrid-xyz/keyper/) CLI and library work. We will be providing more comprehensive documentation as we continue to add functionalities next week.

## Summary

We are super excited about the progress we've made so far and are eagerly looking for projects to help us further prove out this concept. The library itself is completely free, with the goal of simplifying security for developers and providing a more documented flow. This allows you to easily meet various compliance, regulation, and security requirements at the same time. Of the various crypto key management libraries such as [tink](https://developers.google.com/tink) and [libsodium](https://doc.libsodium.org/), we are the ONLY library that allows you to directly leverage any cloud-based KMS (via [Terraform](https://www.terraform.io/)) with clear documentation and traceability without added complexity or burden for application and data engineers to understand how crypto keys work under the hood. 

Give [Keyper](https://github.com/jarrid-xyz/keyper/) a try and ask us any questions. We’d love to help you build secure applications and data pipelines without added complexity.

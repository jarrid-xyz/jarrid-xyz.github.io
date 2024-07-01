---
title: "Keyper by Jarrid: Simplify Crypto Key Management"
description: We are excited to announce the release of Keyper, a powerful multi-platform Kotlin (Java) based CLI tool designed to simplify cryptokey management and deployment with just a few commands. Think of Keyper as the Stripe for crypto keys.
author: Lulu Cheng
authorLink: https://l1990790120.github.io/about
img: https://images.pexels.com/photos/5474292/pexels-photo-5474292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
date: 2024-07-21
tags: ["Announcement", "Release"]
---

Jarrid is excited to announce the release of [Keyper](https://github.com/apiobuild/jarrid-keyper), a powerful multi-platform Kotlin (Java) based CLI tool designed to simplify crypto key management and deployment with just a few commands. Think of Keyper as the Stripe for crypto keys. We know there are many features to be added, but we'd like to share this early release and welcome your feedback.

Keyper manages cryptokeys in two layers: Key Configuration > Terraform Integration.

## Key Configuration File Generation

Crypto key configurations help keep each key well documented and managed. We chose a file-based approach because it is:

- **Flexible**

  Easily extend to track additional metadata within your deployment stack or organizational information.

- **Readable**

  More digestible format for developers and users from other teams compared to Terraform.

- **File Based**

  Easily integrated with [GitOps](https://github.com/topics/gitops) workflows for UI/editable experiences, checking diffs, automating approvals, and deployments without additional tools. Files also allow for easy change event tracking and auditing if needed. You can also swap file backend to key-value storage for infinite scalability.

### Example Crypto Key Configuration

```json
{
  "usage": "CREATE_KEY",
  "keyId": "<uuid>",
  "created": "2024-06-30T06:45:54.414795Z",
  "deploymentId": "<uuid>",
  "context": {
    "platform": "jarrid",
    "application": "keyper",
    "intent": "encrypt/decrypt",
    "scope": "test"
  }
}
```

### Generating a Key Configuration File with Keyper CLI

```bash
keyper key --usage CREATE_KEY --backend LOCAL --stack GCP
```

- **`--usage CREATE_KEY`**:

  Trigger creation of a new crypto key. Future functionality includes: SHARE_KEY, ENCRYPT, DECRYPT. Track progress [here](https://github.com/apiobuild/jarrid-keyper/issues/4).

- **`--backend LOCAL`**:

  Store configuration files locally for easy integration with GitHub and automated deployment.

- **`--stack GCP`**:

  Generate configuration files for GCP.

## Terraform Integration

[Keyper](ttps://github.com/apiobuild/jarrid-keyper) wraps the creation and management of resources in [Terraform](https://www.terraform.io/). This allows for multi-cloud support, state management, and dependency resolution. Currently, we support GCP, with plans to add AWS soon. Terraform comes with the following benefits:

- **Multi Cloud/Platform Support**

  [Terraform](https://www.terraform.io/) make it easy to translate one [key configuration](#crypto-key-configuration-file) into various cloud providers such as AWS, GCP, Azure. Terraform natively integrate with most deployment pipelines without additional implementation such as [Github Action](https://docs.github.com/en/actions), [GCP Cloud Deploy](https://cloud.google.com/deploy/docs/overview).

- **State Management and Dependency Resolution**

  [Terraform](https://www.terraform.io/) at it's core wraps cloud resource APIs. However, few features come with terraform for free. 1. State management: users can easily track diff introduced by their changes. 2. Dependency resolution: not all cloud resources could be deployed at the same time, terraform tracks and manage dependency in complex deployment for users.

[Terraform](https://www.terraform.io/) adds a lot of overhead as opposed to just calling resource management APIs to set it up. Further, [HCL](https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md) is declarative and in the past, developers had to manage programmable logic in both [HCL](https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md) and other programmable libraries. Because of these drawbacks, we decided to leverage [Cloud Development Kit for Terraform (CDKTF)](https://developer.hashicorp.com/terraform/cdktf) so that we can retain the flexibility of programmable languages and break down deployment to as granular as needed while keeping the simplicity of cloud resource management and deployment pipelines.

### Example Keyper Deploy Cli Usage

[CDKTF](https://developer.hashicorp.com/terraform/cdktf) has several key concept that could be easily mapped to existing [Terraform](https://www.terraform.io/) vocabulary for developers that came from [Terraform](https://www.terraform.io/) and [HCL](https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md) background.

- [`cdktf synth`](https://developer.hashicorp.com/terraform/cdktf/cli-reference/commands#synth):

  `synth` essentially programmatically generate the `cdktf.out` (similar to deployment definition file).

- [`cdktf diff`](https://developer.hashicorp.com/terraform/cdktf/cli-reference/commands#diff):

  `diff` is equivalent of [`terraform plan`](https://developer.hashicorp.com/terraform/cli/commands/plan) which shows what resources will be deploy/modified/destroy based on current resource deployment definition file generated in `cdktf.out`.

- [`cdktf deploy`](https://developer.hashicorp.com/terraform/cdktf/cli-reference/commands#diff):

  `deploy` is equivalent of [`terraform apply`](https://developer.hashicorp.com/terraform/cli/commands/apply) which will run the terraform plan accordingly.

Now, don't worry about the translation of these different commands. We've wrap it for you as well in keyper.

```bash
# generate deployment plan
keyper deploy plan --usage CREATE_KEY --backend LOCAL --stack GCP

# apply deployment plan
keyper deploy apply --usage CREATE_KEY --backend LOCAL --stack GCP
```

## Demo

### Create Key

::Asciinema{id="asciicast-666351"}
::

### Deploy Plan

::Asciinema{id="asciicast-666352"}
::

### Deploy Apply

::Asciinema{id="asciicast-666353"}
::

## Future Release

### Monday Release

Jarrid drops new feature release every Monday. Stay tuned and please share any feedback with us. Together, we can build a better ["Keyper"](https://github.com/apiobuild/jarrid-keyper) for our data.

### Next Week

We will add additional feature and talk about how to use [Keyper](https://github.com/apiobuild/jarrid-keyper) APIs to manage the end to end process to encrypt and decrypt the data.

1. Create a crypto key with TTL
2. Encrypt data
3. Send encrypted data
4. Share encrypted keys
5. Decrypt data
6. Destroy keys

## Summary

By managing data through crypto keys (on top of existing access control), we can expose data access management beyond teams and BUs within company and allow data creators (platform users that creates the data) to have direct control over data sharing. This creates better transparency between businesses and data creators comparing to the "Terms of Usage" or "Terms of Service" checkbox.

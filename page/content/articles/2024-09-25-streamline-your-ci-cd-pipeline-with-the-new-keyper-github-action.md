---
title: "Streamline Keyper CI/CD Pipeline with Keyper's Github Action"
description: Automate data security in your CI/CD pipeline with Keyper's Github Action. Deploy data security policies using configurations only, no code required.
author: Lulu Cheng
authorLink: https://l1990790120.github.io/about
img: https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
date: 2024-09-25
tags: ["Tutorial", "Keyper", "Encryption", "AWS", "KMS", "CI/CD"]  
---

We're excited to introduce the new [Keyper Github Action](https://github.com/marketplace/actions/keyper-action){:target="_blank"}. You can now automate `keyper deploy plan` and `keyper deploy apply` commands in your CI/CD pipeline using [Github Action](https://github.com/features/actions){:target="_blank"}. [Keyper Github Action](https://github.com/marketplace/actions/keyper-action){:target="_blank"} enables you to deploy data security workflows with only configurations, reducing friction between technical and non-technical teams, and ensuring consistent security policy implementation across your organization.

➡️ [Check out our tutorial and try it out now](https://github.com/jarrid-xyz/keyper-tutorial/tree/main/6-use-cases/6-4-deploy-keyper-via-github-action){:target="_blank"}

## Demo

::Youtube2{src="https://www.youtube.com/embed/YkJXNaPokgs?controls=0&modestbranding=1&showinfo=0&rel=0"}
::

## What is Keyper?

[Keyper by Jarrid](https://jarrid.xyz/keyper){:target="_blank"} is a suite of data security tools designed to simplify role, key, and permission policy creation, management, and deployment. [Keyper](https://jarrid.xyz/keyper){:target="_blank"} is fully integrated with popular cloud KMS services such as AWS KMS and GCP KMS, and is easy to incorporate into any existing tech stack and CI/CD workflows. With [Keyper's Github Action](https://github.com/marketplace/actions/keyper-action){:target="_blank"}, data security policy deployment can be fully automated alongside your existing code and infrastructure.

## Automated Data Security with Keyper CI/CD

[Continuous Integration and Continuous Deployment (CI/CD)](https://www.redhat.com/en/topics/devops/what-is-ci-cd){:target="_blank"} automates code and infrastructure deployment. By adding Keyper into your CI/CD pipeline, teams can manage data security cloud resources and policies with configurations and no code required.

## Introducing the Keyper Github Action

[Keyper Github Action](https://github.com/marketplace/actions/keyper-action){:target="_blank"} automates role, key, and permission policy deployment in your CI/CD pipeline. It runs [`terraform plan`](https://developer.hashicorp.com/terraform/cli/commands/plan){:target="_blank"} to validate configurations for new data security resources and policies, and automatically creates or updates them using [`terraform apply`](https://developer.hashicorp.com/terraform/cli/commands/apply){:target="_blank"} after changes or pull requests are merged into the main branch. By integrating security management into the CI/CD process, Keyper ensures that security configurations are consistently enforced across your organization and infrastructure.

With fully configuration-driven data security management, both technical and non-technical teams can easily create and enforce standardized security policies without additional operational overhead.

## How to Use the Keyper Github Action

[Keyper GitHub Action](https://github.com/marketplace/actions/keyper-action){:target="_blank"} automates roles, keys, and permission policies in your CI/CD pipeline.

➡️ [Check out the full tutorial and try it out now](https://github.com/jarrid-xyz/keyper-tutorial/tree/main/6-use-cases/6-4-deploy-keyper-via-github-action){:target="_blank"}

1. **Setup Keyper Github Action**
  
   Create the Github Action YAML file at `.github/workflows/keyper-cicd.yml` in your repository and add Keyper to the steps.
    ```yml
    name: Keyper Action (Deploy Plan/Apply)

    on:
      push:
        branches: [main]
      pull_request:
        branches: [main]

    jobs:
      keyper-action:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - name: Run Keyper Action (Deploy Plan)
            id: keyper-plan
            uses: jarrid-xyz/keyper@v0.0.4
            with:
              args: deploy plan
          - name: Run Keyper Action (Deploy Apply)
            id: keyper-apply
            uses: jarrid-xyz/keyper@v0.0.4
            with:
              args: deploy apply
            if: github.ref == 'refs/heads/main' # Only run if merged to main
    ```

2. **Create Keyper Resources**

    In your repo's directory, create Keyper deployment, role, and key with Keyper CLI.

    ```sh
    keyper create -t deployment # create deployment
    keyper create -t role -n role-1 # create role
    keyper create -t key # create key
    ```

    This will generate configuration files similar to [the example in the keyper-tutorial](https://github.com/jarrid-xyz/keyper-tutorial/tree/main/configs/){:target="_blank"}.

    ```
    configs
    └── fb94659d-ce39-45a8-a2d7-112b4104cf43
        ├── deployment.json
        ├── key
        │   └── 8fc8518c-6691-4294-83ed-9dd9e46e5722.json
        └── role
            └── c90177bc-054c-42f4-89a0-3839b1f0b8f8.json
    ```

3. **Create and Merge the Change**

    Commit and push the changes to your remote repository:

    ```sh
    git add configs
    git commit -m "<commit message>"
    git push
    ```

    Create a PR, and the Keyper Github Action will be triggered automatically to run `terraform plan` on the PR and validate the configurations.

4. **Check Deployment Status**

    If `terraform plan` looks good, merge the PR to main. The Keyper Github Action will be triggered automatically again to run `terraform apply`. This will create and deploy the role and key to the cloud.

## Summary

At Jarrid, we believe security is an enabler for developers. By creating security-aware developer tools, we empower engineering teams to build applications faster and more securely. [Keyper](https://jarrid.xyz/keyper){:target="_blank"} automates security processes, allowing developers to focus on product features without compromising security. With a configuration-based interface, both technical and non-technical teams can collaborate to develop organization-wide security standards, minimizing miscommunication and reducing operational overhead.

With [Keyper](https://jarrid.xyz/keyper){:target="_blank"}, security is embedded into the development toolings and process. Engineering teams can build secure software without compromising on simplicity and velocity. By injecting security tools into the development process, organizations can have a flexible yet robust way to evolve their security practices constantly without migrations or disruptions.


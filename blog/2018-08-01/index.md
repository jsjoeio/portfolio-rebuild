---
date: "2018-08-01"
title: "How to Create Subdomain in Gatsby/Netlify"
category: "Coding"
---

So you want to add a subdomain to your site? It wasn't super clear in the docs but I figured it out and wanted to share to make your life easier! 😄

Here's how to create a subdomain for your Gatsby website that's hosted by Netlify.

1.  Login to Netlify
2.  Navigate to your website's Settings
3.  Click on the "Build & Deploy" tab on the left
4.  Inside Deploy Settings > Branch deploys > select "Let me add individual branches" and add the branches you want to deploy.
5.  Next in your Settings, go to Domain Management.
6.  Scroll down to Branch Subdomains and then select the branch you want to deploy as a subdomain.
7.  Click "Create subdomain" and boom! 💣

_Keep in mind the branch name will be used as the subdomain name._

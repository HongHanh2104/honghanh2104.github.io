---
layout: page
title: 🏆Won two awards in European Statistics Awards
description: My team won two awards with a total of €6,000
img: assets/img/activity/logo_web_intelligence.svg
importance: 1
date: 2025-8-28
category: challenge
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/activity/job_classification_1.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of our Generation-Assisted Retrieval pipeline.
</div>

My team, **FVNWL**, has achieved outstanding results in the European Statistics Awards for the Web Intelligence Classification Challenge! We proudly secured:

- **2nd Place in the Accuracy Award (€5,000)** 🏆
- **3rd Place in the Innovativity Award (€1,000)** 🏆

This was a fantastic opportunity to tackle a real-world data challenge, and we couldn't be prouder of our solution.

---

## **The Challenge: Making Sense of Online Job Ads**

In today's digital world, online job advertisements (OJAs) are a goldmine of information about the labor market. To unlock these insights, every job ad needs to be classified into a standardized occupational category. The problem? The sheer volume, variety, and messy nature of these ads make manual classification impossible.

We faced several key hurdles:

- **Inconsistency**: The same job can have wildly different titles and descriptions.
- **Multiple Languages**: Ads are posted in many different languages, complicating analysis.
- **Dynamic Roles**: Jobs evolve, and new roles pop up all the time, making it hard for any system to keep up.

Our mission was to build an automated, accurate, and innovative system to classify these job ads efficiently.

---

## **Our Solution: A "Generation-Assisted Retrieval" Framework**

Instead of treating this as a simple classification task, we reframed it as a smart search (retrieval) problem. We developed a novel framework called **Generation-Assisted Retrieval**, which cleverly combines advanced search techniques with the reasoning power of Large Language Models (LLMs). Our precess was:

- Hybrid Search: We first found potential job categories based on the ad's overall meaning (semantic search). We then re-ranked these results using a precise word-by-word match on the job title, which we hypothesized was the most critical piece of information.
- LLM-Powered Analysis: The top results were fed to two Large Language Models (LLMs). They didn't just pick a code—they also explained their reasoning and provided a confidence score, making the system highly interpretable.
- Smart Ensembling: We combined the LLMs' predictions using a custom Digit-wise Hierarchical Ensembling method, which intelligently voted on each digit of the final job code to maximize accuracy.

---

## **Meet My Team Member**

We are a team of four PhD students from universities across Dublin, Ireland, each with a passion for machine learning and data science.

- Hong-Hanh Nguyen-Le: University College Dublin
- Van-Tuan Tran: Trinity College Dublin
- Thang-Long Nguyen-Ho: Dublin City University
- Quang-Tien Tran: University College Dublin

We are incredibly grateful for this recognition and want to thank the organizers of the European Statistics Awards. This challenge has been a fantastic learning experience, and we look forward to pushing the boundaries of data science further!

---

If you are interested in our solution, explore more in our report and Github:

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-center align-items-center">
  <div class="repo p-2 text-center">
    <a href="https://docs.google.com/document/d/1N9qeDCfi6P35cQjzfigVZU3kM6hzZMbj/edit?usp=sharing&ouid=108036439965109978384&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
      <img class="repo-img-light" alt="Report" src="https://img.shields.io/badge/Report-View_PDF-green?logo=adobeacrobatreader&style=for-the-badge">
      <img class="repo-img-dark" alt="Report" src="https://img.shields.io/badge/Report-View_DOC-green?logo=adobeacrobatreader&style=for-the-badge&color=lightgreen">
    </a>
  </div>
  <div class="repo p-2 text-center">
    <a href="https://github.com/nhtlongcs/job-classification" target="_blank" rel="noopener noreferrer">
      <img class="repo-img-light" alt="GitHub" src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub&style=for-the-badge">
      <img class="repo-img-dark" alt="GitHub" src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub&style=for-the-badge&color=lightgrey">
    </a>
  </div>
</div>

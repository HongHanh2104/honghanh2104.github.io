---
layout: page
title: 🥇Won the first award at UCC AI Quest 2023
description: My team won the AI Quest Top Prize of €5,000
img: assets/img/activity/BestTeamGroup.jpg
importance: 2
date: 2024-5-28
category: challenge
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/activity/ucc-ai-quest-method.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of our approach.
</div>

My team, **FSGWL**, has won first prize (€5,000) in the [UCC AI Quest competition](https://www.ucc.ie/en/compsci/news/ai-quest-makes-history-unveiling-tech-prodigies-who-tackled-sustainability-challenges.html)! Our work focused on accurately identifying vegetation from aerial images, a critical task for environmental monitoring.

---

## **The Challenge: Spotting Vegetation from the Sky**

Monitoring vegetation is vital for making informed environmental decisions, tracking agricultural health, and promoting sustainable development. While drones and AI can help, the dataset for this challenge presented three key difficulties:

We faced several key hurdles:

- **Data Scarcity**: The dataset was small, with only around 5000 images.
- **Coarse Annotations**: The provided outlines (masks) of the vegetation areas were not very precise.
- **Difficult Samples**: Many images were blurry or had complex backgrounds, making it hard for models to distinguish the vegetation.

---

## **Our Solution: A Hybrid Approach**

To overcome these challenges, we developed a hybrid solution, improving both the data we used and the models we trained.

### Improving the Data (Data-Centric)

- We used heavy color augmentation (changing brightness, contrast, and hue) to force our models to learn the shapes of vegetation rather than just relying on the color green.
- To handle the imprecise masks, our models predicted smaller, more detailed masks which we then upscaled. This effectively "blurred" our predictions to better match the coarse ground truth provided in the dataset.

### Building Smarter Models (Model-Centric)

- We introduced a novel Repeated Warmup Learning Rate (RWLR) scheduler, a custom technique to keep the training process stable and effective.
- Instead of using a single model, we used a "hierarchical stacking" approach. This involved combining the predictions from four different families of advanced segmentation models to achieve a more accurate and robust final result.

This dual-pronged strategy allowed us to build a highly accurate and resilient system. Our final code is open-sourced and available on

---

## **Meet My Team Member**

Team FSGWL is composed of three PhD students from universities across Dublin:

- Hong-Hanh Nguyen-Le: University College Dublin
- Van-Tuan Tran: Trinity College Dublin
- Thang-Long Nguyen-Ho: Dublin City University

We are thrilled with this result and hope our solution can contribute to real-world applications in agriculture and environmental science.

---

If you are interested in our solution, explore more in our report and Github:

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-center align-items-center">
  <div class="repo p-2 text-center">
    <a href="https://drive.google.com/file/d/1axZj-SlB5kuOkuwuMaq6Y_9loUimFwM9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <img class="repo-img-light" alt="Report" src="https://img.shields.io/badge/Report-View_PDF-green?logo=adobeacrobatreader&style=for-the-badge">
      <img class="repo-img-dark" alt="Report" src="https://img.shields.io/badge/Report-View_PDF-green?logo=adobeacrobatreader&style=for-the-badge&color=lightgreen">
    </a>
  </div>
  <div class="repo p-2 text-center">
    <a href="https://github.com/nhtlongcs/ucc-ai-quest-2023" target="_blank" rel="noopener noreferrer">
      <img class="repo-img-light" alt="GitHub" src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub&style=for-the-badge">
      <img class="repo-img-dark" alt="GitHub" src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub&style=for-the-badge&color=lightgrey">
    </a>
  </div>
</div>

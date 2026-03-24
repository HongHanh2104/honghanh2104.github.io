---
layout: page
permalink: /teaching/
title: Teaching
description: Supervision & Teaching at University College Dublin's School of Computer Science
nav: true
nav_order: 6
_styles: >
  .teaching-intro {
    padding: 1.5rem;
    border-left: 4px solid var(--global-theme-color);
    background: var(--global-code-bg-color);
    border-radius: 0 0.5rem 0.5rem 0;
    margin-bottom: 2.5rem;
  }
  .teaching-intro p {
    margin-bottom: 0;
    font-size: 1.05rem;
    line-height: 1.7;
  }
  .course-card {
    border: 1px solid var(--global-divider-color);
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
    background: var(--global-card-bg-color);
  }
  .course-card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-color: var(--global-theme-color);
  }
  .course-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .course-code {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--global-bg-color);
    background: var(--global-theme-color);
    padding: 0.2rem 0.65rem;
    border-radius: 0.25rem;
    letter-spacing: 0.03em;
    white-space: nowrap;
  }
  .course-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0.25rem 0 0.5rem;
    color: var(--global-text-color);
  }
  .course-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.75rem;
    font-size: 0.88rem;
    color: var(--global-text-color-light);
  }
  .course-meta i {
    color: var(--global-theme-color);
    margin-right: 0.35rem;
    width: 1rem;
    text-align: center;
  }
  .course-responsibilities h4 {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: var(--global-text-color);
  }
  .course-responsibilities ul {
    margin: 0;
    padding-left: 1.2rem;
  }
  .course-responsibilities li {
    font-size: 0.92rem;
    line-height: 1.65;
    margin-bottom: 0.2rem;
  }
  .section-heading {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--global-theme-color);
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--global-divider-color);
  }
  .page-section-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .page-section-title i {
    color: var(--global-theme-color);
    margin-right: 0.5rem;
  }
  .page-section-divider {
    height: 3px;
    background: linear-gradient(to right, var(--global-theme-color), transparent);
    border: none;
    margin-bottom: 2rem;
  }
  .supervision-level {
    font-size: 1rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .supervision-level-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.3rem;
    background: var(--global-theme-color);
    color: var(--global-bg-color);
    font-size: 0.7rem;
    font-weight: 700;
  }
  .supervision-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  .supervision-table thead th {
    background: var(--global-code-bg-color);
    padding: 0.6rem 0.8rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--global-text-color-light);
    border-bottom: 2px solid var(--global-divider-color);
  }
  .supervision-table thead th:first-child {
    border-radius: 0.4rem 0 0 0;
  }
  .supervision-table thead th:last-child {
    border-radius: 0 0.4rem 0 0;
  }
  .supervision-table tbody td {
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid var(--global-divider-color);
    vertical-align: top;
    line-height: 1.55;
  }
  .supervision-table tbody tr:last-child td {
    border-bottom: none;
  }
  .supervision-table tbody tr:hover {
    background: var(--global-code-bg-color);
  }
  .student-name {
    font-weight: 600;
    color: var(--global-text-color);
    white-space: nowrap;
  }
  .thesis-title {
    font-style: italic;
    color: var(--global-text-color-light);
    font-size: 0.88rem;
  }
  .grade-badge {
    display: inline-block;
    padding: 0.15rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
  }
  .grade-a-plus {
    background: rgba(34, 197, 94, 0.12);
    color: #16a34a;
    border: 1px solid rgba(34, 197, 94, 0.3);
  }
  .grade-b-plus {
    background: rgba(59, 130, 246, 0.12);
    color: #2563eb;
    border: 1px solid rgba(59, 130, 246, 0.3);
  }
  .grade-high {
    background: rgba(16, 185, 129, 0.12);
    color: #059669;
    border: 1px solid rgba(16, 185, 129, 0.3);
  }
  .grade-ongoing {
    background: rgba(234, 179, 8, 0.12);
    color: #ca8a04;
    border: 1px solid rgba(234, 179, 8, 0.3);
  }
  .pub-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.78rem;
    background: rgba(181, 9, 172, 0.08);
    border: 1px solid rgba(181, 9, 172, 0.2);
    border-radius: 0.25rem;
    padding: 0.15rem 0.5rem;
    margin-top: 0.25rem;
    line-height: 1.4;
    color: var(--global-text-color);
  }
  .pub-tag i {
    color: var(--global-theme-color);
    font-size: 0.72rem;
  }
  .pub-venue {
    font-weight: 600;
  }
  .pub-status {
    font-size: 0.75rem;
    color: var(--global-text-color-light);
    font-style: italic;
  }
  .student-university {
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    margin-top: 0.1rem;
  }
  .student-university i {
    color: var(--global-theme-color);
    margin-right: 0.25rem;
    font-size: 0.72rem;
  }
  .year-col {
    white-space: nowrap;
    color: var(--global-text-color-light);
    font-size: 0.85rem;
  }
---

<div class="teaching-intro">
  <p>
    I currently serve as a <strong>Teaching Assistant</strong> at <strong>University College Dublin's School of Computer Science</strong>, supporting both undergraduate and graduate-level courses. My role involves facilitating student learning, providing technical guidance, and supervising research projects.
  </p>
</div>

<!-- ═══════════════════════════════════════════════════ -->
<!--                   SUPERVISION                      -->
<!-- ═══════════════════════════════════════════════════ -->

<div class="page-section-title"><i class="fa-solid fa-users-line"></i>Supervision</div>
<hr class="page-section-divider">

<!-- PhD Students -->
<div class="supervision-level">
  <span class="supervision-level-icon">PhD</span>
  Doctoral Students
</div>

<table class="supervision-table">
  <thead>
    <tr>
      <th>Student</th>
      <th>Topic</th>
      <th>Year</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="student-name">Yang Fang</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>University College Dublin</div>
      </td>
      <td><span class="thesis-title">Multi-modal Deepfake Detection</span></td>
      <td class="year-col">2025 &ndash; present</td>
      <td><span class="grade-badge grade-ongoing">Ongoing</span></td>
    </tr>
  </tbody>
</table>

<!-- Master Students -->
<div class="supervision-level">
  <span class="supervision-level-icon">MSc</span>
  Master Students
</div>

<table class="supervision-table">
  <thead>
    <tr>
      <th>Student</th>
      <th>Thesis/Project</th>
      <th>Year</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>
        <span class="student-name">Remond Bakker</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>University College Dublin &mdash; MSc FCCI</div>
      </td>
      <td>
        <span class="thesis-title">Evaluating the Capabilities and Risks of Gemini Banana in Generating Synthetic Images</span>
      </td>
      <td class="year-col">2026</td>
      <td><span class="grade-badge grade-a-plus">In Progress</span></td>
    </tr>
    <tr>
    <tr>
      <td>
        <span class="student-name">Bernhard Kneip</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>University College Dublin &mdash; MSc FCCI</div>
      </td>
      <td>
        <span class="thesis-title">Evaluating the Efficacy of Large Language Models for Forensic Triage of Web Server Logs</span>
        <div>
          <span class="pub-tag">
            <i class="fa-solid fa-file-lines"></i>
            "Sample-Efficient LLM-Based Detection of Malicious Web Server Logs with Forensically Explainable Reasoning," <span class="pub-venue">IEEE Trans. Inf. Forensics Secur.</span>
            <span class="pub-status">(Under Review)</span>
          </span>
        </div>
      </td>
      <td class="year-col">2025</td>
      <td><span class="grade-badge grade-a-plus">A+</span></td>
    </tr>
    <tr>
      <td>
        <span class="student-name">Michael Rettinger</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>University College Dublin &mdash; MSc FCCI</div>
      </td>
      <td>
        <span class="thesis-title">Comparative Analysis of Contemporary Deepfake Detection Tools</span>
        <div>
          <span class="pub-tag">
            <i class="fa-solid fa-file-lines"></i>
            "How Effective Are Publicly Accessible Deepfake Detection Tools? A Comparative Evaluation of Open-Source and Free-to-Use Platforms," <span class="pub-venue">EuroS&P Workshop</span> (Rank A)
            <span class="pub-status">(Under Review)</span>
          </span>
        </div>
      </td>
      <td class="year-col">2025</td>
      <td><span class="grade-badge grade-a-plus">A+</span></td>
    </tr>
    <tr>
      <td>
        <span class="student-name">Ben Beaumont</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>University College Dublin &mdash; MSc FCCI</div>
      </td>
      <td>
        <span class="thesis-title">A Thin Blue Algorithm: Evaluating the Effectiveness of OSINT Tools in Verifying Tampered and Deepfake Imagery, and their Applicability to Law Enforcement Investigation</span>
        <div>
          <span class="pub-tag">
            <i class="fa-solid fa-file-lines"></i>
            "How Effective Are Publicly Accessible Deepfake Detection Tools? A Comparative Evaluation of Open-Source and Free-to-Use Platforms," <span class="pub-venue">EuroS&P Workshop</span> (Rank A)
            <span class="pub-status">(Under Review)</span>
          </span>
        </div>
      </td>
      <td class="year-col">2025</td>
      <td><span class="grade-badge grade-a-plus">A+</span></td>
    </tr>
    <tr>
      <td>
        <span class="student-name">Vince Noort</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>University College Dublin &mdash; MSc FCCI</div>
      </td>
      <td>
        <span class="thesis-title">Improving Security in IoMT through Hierarchical Cyberattacks Classification</span>
        <div>
          <span class="pub-tag">
            <i class="fa-solid fa-file-lines"></i>
            "Paper Title 3," <span class="pub-venue">IEEE TrustCom 2024</span> (Rank B)
            <span class="pub-status">(Published)</span>
          </span>
        </div>
      </td>
      <td class="year-col">2024</td>
      <td><span class="grade-badge grade-a-plus">A+</span></td>
    </tr>
    <tr>
      <td>
        <span class="student-name">Barbara de Vries</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>University College Dublin &mdash; MSc FCCI</div>
      </td>
      <td><span class="thesis-title">Surfing the Digital Wave: Enhancing Fast-Paced Criminal Investigations through Network Traffic Analysis</span></td>
      <td class="year-col">2024</td>
      <td><span class="grade-badge grade-b-plus">B+</span></td>
    </tr>
  </tbody>
</table>

<!-- Undergraduate Students -->
<div class="supervision-level">
  <span class="supervision-level-icon">BSc</span>
  Undergraduate Students
</div>

<table class="supervision-table">
  <thead>
    <tr>
      <th>Student</th>
      <th>Paper</th>
      <th>Year</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="student-name">Hai-Son Nguyen-Le</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>HCMC University of Science &mdash; Honours Class</div>
      </td>
      <td>
        <span class="pub-tag">
          <i class="fa-solid fa-file-lines"></i>
          "AFSS: Artifact-Focused Self-Synthesis for Mitigating Bias in Audio Deepfake Detection," <span class="pub-venue">IJCNN 2026</span> (Rank B)
        </span>
      </td>
      <td class="year-col">2025</td>
      <td><span class="grade-badge grade-a-plus">Accepted</span></td>
    </tr>
    <tr>
      <td>
        <span class="student-name">Phuc-Khang Vo-Hang</span><br>
        <span class="student-name">Hoang C. Ta</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>HCMC University of Science &mdash; Honours Class</div>
      </td>
      <td>
        <span class="pub-tag">
          <i class="fa-solid fa-file-lines"></i>
          "ChaRVoC: A Challenge-Response Voice Cancelable Authentication System," <span class="pub-venue">CITA 2026</span>
        </span>
      </td>
      <td class="year-col">2026</td>
      <td><span class="grade-badge grade-ongoing">Under Review</span></td>
    </tr>
    <tr>
      <td>
        <span class="student-name">Tien-Dat Le</span><br>
        <span class="student-name">Tuan-Kiet Phan</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>HCMC University of Science &mdash; APCS Program</div>
      </td>
      <td>
        <span class="pub-tag">
          <i class="fa-solid fa-file-lines"></i>
          "Poisoned Noise Purification"<span class="pub-status"></span>
        </span>
      </td>
      <td class="year-col">2026</td>
      <td><span class="grade-badge grade-ongoing">In Progress</span></td>
    </tr>
    <tr>
      <td>
        <span class="student-name">Hoa-Vien Nguyen-Hoang</span>
        <div class="student-university"><i class="fa-solid fa-building-columns"></i>HCMC University of Science &mdash; Honours Class</div>
      </td>
      <td>
        <span class="pub-tag">
          <i class="fa-solid fa-file-lines"></i>
          "Test-Time Adaptation in Dynamic Scenarios," <span class="pub-venue"></span>
        </span>
      </td>
      <td class="year-col">2025</td>
      <td><span class="grade-badge grade-a-plus">In Progress</span></td>
    </tr>
  </tbody>
</table>

<!-- ═══════════════════════════════════════════════════ -->
<!--                    TEACHING                        -->
<!-- ═══════════════════════════════════════════════════ -->

<div class="page-section-title"><i class="fa-solid fa-chalkboard-user"></i>Teaching</div>
<hr class="page-section-divider">

<h3 class="section-heading"><i class="fa-solid fa-chalkboard-user"></i>&nbsp; Graduate Courses</h3>

<div class="course-card">
  <div class="course-header">
    <div>
      <span class="course-code">COMP47470</span>
      <div class="course-title">Data and Database Forensics</div>
    </div>
  </div>
  <div class="course-meta">
    <span><i class="fa-solid fa-graduation-cap"></i>MSc in Forensics Computing & Cybercrime Investigation</span>
    <span><i class="fa-regular fa-calendar"></i>Fall 2023, 2024</span>
  </div>
  <div class="course-responsibilities">
    <h4>Responsibilities</h4>
    <ul>
      <li>Delivering lectures on data forensics: <em>Introduction to NLP for Digital Forensics</em>, <em>LLM-generated Text Detection Introduction</em></li>
      <li>Providing technical support to students</li>
      <li>Grading assignments and providing detailed feedback</li>
    </ul>
  </div>
</div>

<div class="course-card">
  <div class="course-header">
    <div>
      <span class="course-code">COMP47510</span>
      <div class="course-title">Financial Investigation Techniques</div>
    </div>
  </div>
  <div class="course-meta">
    <span><i class="fa-solid fa-graduation-cap"></i>MSc in Forensics Computing & Cybercrime Investigation</span>
    <span><i class="fa-regular fa-calendar"></i>Spring 2023, 2024</span>
  </div>
</div>

<div class="course-card">
  <div class="course-header">
    <div>
      <span class="course-code">COMP41880</span>
      <div class="course-title">AI Investigation</div>
    </div>
  </div>
  <div class="course-meta">
    <span><i class="fa-solid fa-graduation-cap"></i>MSc in Forensics Computing & Cybercrime Investigation</span>
    <span><i class="fa-regular fa-calendar"></i>Spring 2026</span>
  </div>
  <div class="course-responsibilities">
    <h4>Responsibilities</h4>
    <ul>
      <li>Delivering lectures: <em>Introduction to LLMs and Generative Models</em>, <em>AI-Enhanced Techniques for Log Data Analysis</em>, <em>Tampering Detection</em> </li>
      <li>Providing technical support to students</li>
      <li>Grading assignments and providing detailed feedback</li>
    </ul>
  </div>
</div>

<div class="course-card">
  <div class="course-header">
    <div>
      <span class="course-code">COMP40160</span>
      <div class="course-title">Research Project</div>
    </div>
  </div>
  <div class="course-meta">
    <span><i class="fa-solid fa-graduation-cap"></i>MSc in Forensics Computing & Cybercrime Investigation</span>
    <span><i class="fa-regular fa-calendar"></i>Summer 2024, 2025</span>
  </div>
  <div class="course-responsibilities">
    <h4>Responsibilities</h4>
    <ul>
      <li>Supervising Master students' research projects</li>
      <li>Providing research and technical guidance</li>
      <li>Reviewing and providing feedback on research proposals and final reports</li>
    </ul>
  </div>
</div>

<h3 class="section-heading" style="margin-top: 2.5rem;"><i class="fa-solid fa-laptop-code"></i>&nbsp; Undergraduate Courses</h3>

<div class="course-card">
  <div class="course-header">
    <div>
      <span class="course-code">COMP30030</span>
      <div class="course-title">Introduction to AI</div>
    </div>
  </div>
  <div class="course-meta">
    <span><i class="fa-solid fa-graduation-cap"></i>School of Computer Science Undergraduate Program</span>
    <span><i class="fa-regular fa-calendar"></i>Fall 2024</span>
  </div>
  <div class="course-responsibilities">
    <h4>Responsibilities</h4>
    <ul>
      <li>Supporting practical lab sessions</li>
    </ul>
  </div>
</div>

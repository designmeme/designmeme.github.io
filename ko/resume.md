---
title:      이력서 및 경력기술서
subtitle:   프리랜서 프론트엔드 웹 개발자 이지혜입니다
name:       resume
permalink:  /ko/about/resume
excerpt:    
---

{% assign resume = site.data.resume %}

##### 경력
{% include career-list.html careers=resume.career %}

##### 학력
{% include career-list.html careers=resume.education %}

***

### 경력 기술서
웹 표준에 맞춰 의미 있는 구조를 가지며, 다양한 환경에 반응하도록 디자인과 UX를 구현하고, 
(검색엔진을 포함하여) 모두가 접근 가능한 웹사이트를 만들기 위해 노력하고 있습니다.

***

##### 프로젝트
다양한 형태의 웹사이트와 모바일 웹, 반응형 웹 그리고 웹 접근성 프로젝트까지 풍부한 개발 경험을 가지고 있습니다. [^project]
{: .small}

[^project]: 주요 작업은 이름 앞에 <i class="fa fa-star" aria-hidden="true"></i> 표시가 있습니다. 특별한 언급이 없다면 신규 제작 프로젝트이며, 프론트엔드 부문을 전담하였거나 90% 이상 기여한 작업입니다.
 
{% include career-list.html careers=resume.projects %}

***

##### 전문 기술
전문 분야와 기술, 개발할 때 사용하는 도구입니다. 

{% for skill in resume.skills %}
- {{ skill }}{% endfor %}

***

##### 협업
프로젝트 목표를 제대로 이해하고 기획 및 디자인을 존중하며 여러 직군과 협업합니다.
소규모부터 대규모까지 다양한 규모의 프로젝트에서 팀원 및 분야 책임자로 일한 경험이 많습니다.

- Email, Slack
- 프로젝트 및 이슈 관리: GitLab, Bitbucket, JIRA, Trello, Redmine, Google Drive
- 기획: Oven, AXURE, Balsamiq Mockups, PowerPoint
- 디자인: Zeplin, InVision, Sketch, Photoshop

***

##### 남김글
능동적으로 프로젝트를 수행하고 다양한 기술과 협업 능력을 높이며 프론트엔드 웹 개발자가 지녀야 할 자질을 쌓아왔습니다. 
항상 새로운 기술에 대한 관심과 배우고자 하는 열망을 바탕으로 업무에 임하겠습니다.
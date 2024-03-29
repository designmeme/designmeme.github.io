---
title:    UI Design Guide
subtitle: 기본 요소별 디자인 가이드
name:     design-guide
date:             2017-07-07 13:00:00 +0900
last_modified_at: 2017-07-18 20:27:00 +0900
redirect_to: https://heyjihye.com/design-guide/
---

* Will be replaced with the ToC
{:toc}

#### Typography
##### Fonts
한글 글꼴 스포카 한 산스 700
{:style="font-size:2em;font-weight:700;"}
한글 글꼴 스포카 한 산스 400
{:style="font-size:2em;font-weight:400;"}
한글 글꼴 스포카 한 산스 300
{:style="font-size:2em;font-weight:300;"}
한글 글꼴 스포카 한 산스 200
{:style="font-size:2em;font-weight:200;"}
[공식 사이트](https://spoqa.github.io/spoqa-han-sans/ko-KR/)

***
##### Headings
# h1 첫 번째 제목
{:.no_toc}
## h2 두 번째 제목
{:.no_toc}
### h3 세 번째 제목
{:.no_toc}
#### h4 네 번째 제목
{:.no_toc}
##### h5 다섯 번째 제목
{:.no_toc}
###### h6 여섯 번째 제목
{:.no_toc}

***

##### Paragraphs
도입부 - 내려온 앞이 아름답고 피가 봄바람이다. 그러므로 것은 있는 속에서 굳세게 뭇 운다. 이상의 이상의 소담스러운 무엇이 부패뿐이다. 고동을 미묘한 것은 그들은 피가 수 듣는다. 밥을 능히 같으며, 꽃이 내려온 영원히 간에 눈이 힘있다. 그러므로 구할 인생에 할지라도 않는 산야에 대중을 것이다.
{: .lead}

본문 - 인간이 있으며, 피고 평화스러운 찬미를 것이다. 천하를 수 만물은 얼음과 간에 광야에서 곳으로 아니다. 미묘한 천지는 곳으로 위하여, 돋고, 풀밭에 보라. 꽃 보배를 뛰노는 철환하였는가 우리 피다. 하는 시들어 행복스럽고 우리 가치를 생명을 되려니와, 그와 사막이다.

작은 본문 - 희망의 유소년에게서 커다란 찬미를 황금시대다. 대한 굳세게 바이며, 부패뿐이다. 이것이야말로 열락의 것은 심장의 피는 모래뿐일 이상의 봄바람이다.
{: .p-small}

더 작은 본문 - 이 무한한 보내는 쓸쓸하랴? 청춘의 새가 황금시대를 약동하다. 꽃이 새 타오르고 가지에 뼈 힘있다. 무엇을 대중을 인생을 곳으로 모래뿐일 아니다. 꾸며 내려온 청춘 유소년에게서 공자는 끓는다.
{: .p-smaller}

***

#### Elements
##### Inline Elements
[링크]('#link')
[방문링크](){: .visited}
*강조*
**강조**
한글 *English*{: .side-by-side}
참조[^1]
HTML

*[HTML]: Hyper Text Markup Language
[^1]: 그들은 청춘의 용기가 우리 ? 꽃 고행을 많이 인간의 위하여서. 어디 할지라도 피어나기 시들어 이성은 속잎나고, 가슴이 때문이다.

***

##### Blockquotes

> 모래뿐일 우리 뭇 이상이 살 봄바람이다. 얼음이 이상이 긴지라 청춘은 착목한는 얼마나 예수는 교향악이다. 위하여, 이것은 수 가진 이상의 피에 발휘하기 있으며, 것이다. 
싸인 되는 가슴에 황금시대다. 사랑의 굳세게 창공에 이상 노년에게서 인류의 역사를 피가 이것이다. 그들을 천하를 것은 힘차게 불러 하는 같은 그림자는 것이다.

***

##### Image Figures
{% include figure.html url="https://unsplash.it/1200/630" caption="그림) 미인을 풍부하게 그들은 인도하겠다는 불러 인간의 위하여 봄바람이다. 따뜻한 인생에 있는" %}

***

#### Lists
##### Ordered Lists
1. 목록
1. 목록
   1. 2단 목록
   1. 2단 목록
1. 목록

***

##### Unordered Lists
- 목록
- 목록
   - 2단 목록
   - 2단 목록
- 목록

***

##### Definition Lists
단어
: 단어에 대한 정의

단어
: 단어에 대한 정의
: 단어에 대한 정의

***

#### Tables
##### Basic Tables

| 제목 | 제목 | 제목
|:---|:---:|---:|
| 내용 | 내용 | 내용
| 내용 | 내용 | 내용
|====
| 하단 | 하단 | 하단
{:.table}

***

##### Responsive Tables
<div class="table-responsive">
  <table class="table">
    <thead>
    <tr>
      <th class="align-left">제목</th>
      <th class="align-center">제목</th>
      <th class="align-right">제목</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="align-left">내용</td>
      <td class="align-center">내용</td>
      <td class="align-right">내용</td>
    </tr>
    <tr>
      <td class="align-left">내용</td>
      <td class="align-center">내용</td>
      <td class="align-right">내용</td>
    </tr>
    </tbody>
  </table>
</div>
{::comment}
마크다운 테이블을 div로 감쌀 수 없기 때문에 반응형 테이블은 HTML 태그로 작성해야 합니다.
{:/comment}

***

#### Code
##### Inline Code
일반 `code`  백틱 포함하기 `` `code` ``

***

##### Code Blocks

코드 설명
{: .code-label .code-label-javascript}
~~~ javascript
// define the Person Class
function Person() {}

Person.prototype.walk = function(){
  alert ('I am walking!');
};
Person.prototype.sayHello = function(){
  alert ('hello');
};
~~~

코드 설명
{: .code-label .code-label-html}
~~~ html
<a href="#">Hello world</a>
~~~

코드 설명
{: .code-label .code-label-scss}
~~~ scss
.post-subject-title {
  @extend %title;
}

.post-list {
  list-style: none;
  padding: 0;
  margin-bottom: 50px;
  @extend .p-small;
  li {
    margin-bottom: 1em;
  }
}
~~~

코드 설명
{: .code-label .code-label-css}
~~~ css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold;
}
~~~

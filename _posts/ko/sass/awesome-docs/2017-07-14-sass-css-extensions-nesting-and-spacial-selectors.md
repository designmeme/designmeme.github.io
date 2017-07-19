---
subject:  sass-awesome-docs
name:     sass-css-extensions
title:    CSS 확장
subtitle: 중첩과 특수 선택자로 CSS 확장하기
excerpt:  Sass에서 가장 기본적인 기능으로, 활용 범위가 넓은 중첩과 부모 참조 선택자를 설명합니다.
tags:     [sass, scss, css, preprocessor, selectors, nesting, 전처리기, 선택자, 중첩]
image:    
date:             2017-07-14 17:07:00 +0900
last_modified_at: 2017-07-19 13:20:00 +0900
---

* Will be replaced with the ToC
{:toc}

Sass는 CSS 확장 언어입니다. 여기에는 변수, 믹스인, 함수 등 여러 기능이 있지만, 가장 기본은 **CSS 확장** *CSS Extensions*{:.side-by-side}이라 할 수 있습니다.
CSS 확장은 크게 중첩과 특수 선택자로 나누어 집니다.
[원문](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#CSS_Extensions){:.original-link target="_blank"}
{: .lead}

***

#### 중첩
중첩 *Nesting*{:.side-by-side}은 CSS의 문법을 응용하여, **선택자나 속성의 관계**를 중첩 형태로 풀어낸 문법입니다.
여기에는 선택자를 중첩하는 '규칙 중첩'과 속성을 중첩하는 '속성 중첩'이 있습니다.

***

##### 규칙 중첩 
CSS 규칙을 중첩하여 작성할 수 있습니다.
규칙 중첩 *Nested Rules*{:.side-by-side}은 부모 선택자를 계속 반복하지 않게 해줍니다. 
특히 하위 선택자를 많이 사용하는 복잡한 CSS 규칙을 간단하게 작성할 수 있으며, 그 구조를 한눈에 볼 수 있습니다.

두 규칙을 중첩하여 작성했습니다.
{: .code-label .code-label-scss}
~~~ scss
#main p {
  color: #00ff00;
  width: 97%;

  .redbox {
    background-color: #ff0000;
    color: #000000;
  }
}
~~~

안에 중첩한 규칙에 바깥 규칙의 선택자가 상속되어 CSS로 출력됩니다.
{: .code-label .code-label-css}
~~~ css
#main p {
  color: #00ff00;
  width: 97%; }
  #main p .redbox {
    background-color: #ff0000;
    color: #000000; }
~~~

***

##### 속성 중첩 
CSS 속성에는 **네임스페이스**로 묶인 속성이 있습니다. 예로 font 네임스페이스는 아래의 속성을 포함합니다.
 
- `font-` 로 시작하는 모든 속성
- `font-size`, `font-family`, `font-weight`, `font-variant`, `font-style`, `font-cerning` 등 

(1)속성의 네임스페이스를 이용해 중첩하여 작성할 수 있습니다.[^namespace]

font 네임스페이스를 가진 속성을 중첩하여 작성했습니다.
{: .code-label .code-label-scss}
~~~ scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
~~~

중첩된 속성 이름 앞에 네임스페이스가 추가되어 각각 출력됩니다.
{: .code-label .code-label-css}
~~~ css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
~~~

(2)중첩 속성은 **단축 속성** 값의 일부로 작성할 수 있습니다. 단축 속성의 값을 나열하고 마지막에 중괄호 `{}`를 사용해 중첩 속성을 작성하면 됩니다.

단축 속성의 값과 중첩 속성을 함께 작성했습니다.
{: .code-label .code-label-scss}
~~~ scss
.funky {
  font: 20px/24px fantasy {
    weight: bold;
    style: italic;
  }
}
~~~

단축 속성은 그대로 출력되고, 중첩된 속성은 각각 출력됩니다.
{: .code-label .code-label-css}
~~~ css
.funky {
  font: 20px/24px fantasy;
    font-weight: bold;
    font-style: italic;
}
~~~

***

#### 특수 선택자
Sass는 CSS 선택자의 모든 형태 외에 두 가지 특수 선택자를 제공합니다. 중첩 규칙에서 사용하는 '부모 참조 선택자'와 `@extend` 전용 선택자인 '플레이스홀더 선택자'입니다.

***

##### 부모 참조 선택자 `&`
중첩 규칙에서 `&`를 사용하여 부모 선택자를 참조할 수 있습니다.

(1)부모 참조 선택자와 다른 선택자를 **결합하여** 사용합니다.[^parent]
 
- 가상 클래스 `&:active`, `&:empty`, `&:first-child` 등
- 가상 요소 `&::after`, `&::selection`, `&::first-letter` 등
- 아이디, 클래스, 속성 선택자  `&#movie`, `&.active`, `&[type=radio]` 등
- 접미사[^suffix] `&-sidebar`, `&--default:hover` 등

(2)부모 참조 선택자를 **하위 선택자로** 위치시킬 수 있습니다.

- `.wf-loading &`, `[lang:ko] &`, `.page section &` 등

(3)위 두 방법을 함께 사용할 수도 있습니다.

- `.wf-loading &:before`, `[lang:ko] &#movie`, `.page section &:first-child` 등

중첩 규칙안에서 부모 참조 선택자를 활용합니다.
{: .code-label .code-label-scss}
~~~ scss
#main {
  color: black;
  a {
    font-weight: bold;
    text-decoration: none;
    &:hover { text-decoration: underline; }
    body.firefox & { font-weight: normal; }
  }
}
~~~

부모 참조 선택자를 상위 중첩 규칙의 부모 선택자로 변경하여 출력합니다.
{: .code-label .code-label-css}
~~~ css
#main {
  color: black; }
  #main a {
    font-weight: bold;
    text-decoration: none; }
    #main a:hover {
      text-decoration: underline; }
    body.firefox #main a {
      font-weight: normal; }
~~~

부모 참조 선택자 `&`는 이전까지 **중첩된 모든 상위 부모 선택자**를 나타냅니다.

***

##### 플레이스홀더 선택자 `%`
Sass는 '플레이스홀더 선택자 *placeholder selector*{:.side-by-side}&rsquo;라는 특수한 형태의 선택자를 제공합니다.
`#`로 시작하는 아이디 선택자나 `.`으로 시작하는 클래스 선택자와 비슷하게 기호 `%`으로 시작합니다.

이 선택자는 `@extend` 전용 규칙을 정의하고 호출할 때만 사용하는 특수한 선택자입니다.
이 선택자를 포함한 규칙 그 자체는 CSS로 출력되지 않고, `@extend`로 이 선택자를 호출한 곳에서만 출력됩니다.
자세한 내용은 [`@extend` 전용 선택자](#) 글에서 확인하세요.

플레이스홀더 선택자 맛보기
{: .code-label .code-label-scss}
~~~ scss
#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}

.notice {
  @extend %extreme;
}
~~~


[^namespace]: `font` 속성 안에 네임스페이스에서 벗어난 `padding` 같은 속성을 중첩하여 작성하면, 컴파일 오류는 나지 않지만 `font-padding`이라는 의미 없는 속성을 얻게 됩니다.
[^parent]: 부모 참조 선택자 `&`가 다른 선택자와 결합할 경우 항상 단어 맨 앞에 와야 합니다. `p.active&`와 같이 단어 끝이나 중간에 위치하면 컴파일 에러가 발생합니다.
[^suffix]: 부모 선택자가 `*`처럼 접미사를 가질 수 없는 선택자일 경우 컴파일 오류가 발생합니다.
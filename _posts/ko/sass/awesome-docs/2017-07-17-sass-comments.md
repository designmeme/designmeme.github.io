---
subject:  sass-awesome-docs
name:     sass-comments
title:    Sass 인라인 주석과 블록 주석
subtitle: 출력 스타일에 맞춰 Sass 주석 활용하기
excerpt:  Sass는 CSS 표준 블록 주석 `/* */`을 지원하며, `//`로 시작하는 인라인 주석도 함께 지원합니다.
tags:     [sass, scss, css, preprocessor, output styles, comments, options, variables, 옵션, 주석, 출력, 전처리기, 보간]
image:    
date:             2017-07-17 18:01:00 +0900
last_modified_at: 2017-07-24 22:23:00 +0900
redirect_to: https://heyjihye.com/blog/sass-comments/
---

* Will be replaced with the ToC
{:toc}

Sass는 CSS 표준 블록 주석 `/* */`을 지원하며, `//`로 시작하는 인라인 주석도 함께 지원합니다.
[원문](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Comments________and_____comments){:.original-link target="_blank"}
{: .lead}


***

##### 인라인 주석 `//`
인라인 주석은 출력 옵션에 상관없이 모두 CSS 출력물에서 삭제됩니다. 그러므로 최종 CSS 출력물에는 없어도 되는 개발용 내용 등을 자유롭게 작성할 수 있습니다.

인라인 주석 작성 예시
{: .code-label .code-label-scss}
~~~ scss
// 인라인 주석은
// 최종 출력물에는 포함되지 않습니다.
a { color: green; }
strong { color: blue; } // 개발용 참고 내용을 작성하세요.
~~~

nested 출력 스타일로 출력된 CSS - 인라인 주석이 삭제되었습니다.
{: .code-label .code-label-css}
~~~ css
a {
  color: green; }
strong { 
  color: blue; }
~~~

***

##### 블록 주석 `/* */`
블록 주석은 출력 스타일에 따라 CSS 출력물에 다양하게 표시됩니다.
(1)기본 스타일인 'nested'와 'expanded'에서는 그대로 출력되며, 
(2)출력 스타일이 'compatible'이면 여러 줄에 작성한 주석을 모두 한 줄로 표시합니다.
(3)출력 스타일이 'compressed'이면 블록 주석은 삭제됩니다. 

블록 주석 작성 예시
{: .code-label .code-label-scss}
~~~ scss
/* 블록 주석은
 * 출력 스타일에 따라 다르게 표시됩니다 */
a { color: green; }
~~~

순서대로 nested, expanded, compatible, compressed 출력 스타일에 따라 출력된 CSS
{: .code-label .code-label-css}
~~~ css
/* 블록 주석은
 * 출력 스타일에 따라 다르게 표시됩니다 */
a {
  color: green; }
  
/* 블록 주석은
 * 출력 스타일에 따라 다르게 표시됩니다 */
a {
  color: green;
}

/* 블록 주석은 출력 스타일에 따라 다르게 표시됩니다 */
a { color: green; }

a{color:green}
~~~

(4)하지만 출력 스타일이 'compressed'이어도 주석의 첫 글자로 느낌표 `!`를 써넣으면 삭제하지 않고 출력물에 그대로 표시합니다.

강제로 주석 출력하기
{: .code-label .code-label-scss}
~~~ scss
/*! 언제나 표시해야 할
 * 블록 주석은 느낌표를 붙여주세요. */
a { color: green; }
~~~

순서대로 nested, expanded, compatible, compressed 출력 스타일에 따라 출력된 CSS
{: .code-label .code-label-css}
~~~ css
/*! 언제나 표시해야 할
 * 블록 주석은 느낌표를 붙여주세요. */a{color:green}
~~~

***

##### 출력 스타일에 따른 주석 출력 여부
{% include post/sass-comments-table.html %}
출력 스타일에 관련한 자세한 내용은 [CSS 출력 스타일](/ko/blog/sass-css-output-style/)에서 확인할 수 있습니다.

***

##### 주석에 변수 끼워 넣기
CSS 출력물에 남기길 원하는 주석 중에 문서 버전과 같은 정보를 **끼워 넣기 *interpolation*{: .side-by-side} 기법**을 활용해서 작성할 수 있습니다. 
이 방법은 문서 상단에 저작권, 버전 정보 등을 표시할 때 유용합니다.

변수를 끼워 넣기 기법으로 주석 내용에 작성합니다.
{: .code-label .code-label-scss}
~~~ scss
$version: "1.2.3";
/*! My Framework Styles version #{$version}. */
~~~

변수의 값이 주석 내용에 표시됩니다.
{: .code-label .code-label-css}
~~~ css
/*! My Framework Styles version 1.2.3. */
~~~

---
subject:  sass-awesome-docs
name:     sass-sassscript
title:    SassScript
subtitle: 작지만 강력한 확장 기능 모음
excerpt:  변수, 연산, 함수는 SassScript를 대표하는 기능입니다.
tags:     [sass, scss, css, preprocessor, 전처리기, 보간, 스크립트, script, 자료형, data type, parent selector, parent script, 부모 참조 선택자]
image:    
date:             2017-07-19 13:36:00 +0900
last_modified_at: 2017-07-30 22:48:00 +0900
redirect_to: https://heyjihye.com/blog/sass-sassscript/
---

* Will be replaced with the ToC
{:toc}

Sass는 SassScript라는 확장 기능 모음을 제공합니다. **변수**, **연산**, **함수**는 SassScript를 대표하는 기능입니다.
[원문](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#SassScript__sassscript){:.original-link target="_blank"}
{: .lead}

숫자, 문자열, 색상, 목록, 맵 등 **다양한 데이터 유형**을 제공하며, 이를 변수에 담아 활용하고, 연산자를 이용해 연산할 수 있습니다.
**끼워 넣기 *interpolation*{: .side-by-side}** 기법과 **부모 스크립트** `&`도 Sass의 활용 범위를 넓히는 데 큰 역할을 합니다.

***

#### SassScript 사용 범위
SassScript를 사용하는 활용 범위를 크게 두 가지로 나누어 정리해봤습니다. 참 다양한 곳에 표현식을 사용할 수 있군요.
자세한 활용법과 예시는 각 부분의 페이지에서 다시 볼 수 있으니, 여기에선 큰 맥락을 살펴보는 차원에서 봐주시길 바랍니다.

***

##### 직접 사용
변수, 연산, 함수를 값으로 직접 사용합니다. SassScript 표현식을 사용하는 일반적인 방법입니다.
- 속성값
- 미디어 쿼리에서 미디어 속성 이름[^feature]
- 미디어 쿼리에서 미디어 속성값
- `if()`, `@if`, `@while`의 조건식의 값
- `@each`의 대상
- `@for`의 범위
- `@debug`의 값

***

##### 간접 사용
꼭 끼워 넣기를 활용해야 변수, 연산, 함수를 사용할 수 있습니다.
이름이나 문자열 안에서 SassScript 표현식을 사용하고 싶은 경우에 이 방법을 사용합니다.   
예) `#{$var}`, `#{$max-width / 2}`, `#{map-get($breakpoints, md)}`
- 선택자
- 속성 이름
- 미디어 쿼리에서 미디어 타입
- `@warn`과 `@error`의 메시지 안에서
- 여러 줄 주석 내용 안에서 &mdash; [보러가기](/ko/blog/sass-comments/#주석에-변수-끼워-넣기)

***

#### SassScript 목차
SassScript는 다양한 기능과 문법을 가지고 있고, 설명할 내용과 예시도 많습니다. 각 부문을 다음과 같이 나누어 작성하였습니다.

- [대화형 셸](/ko/blog/sass-interactive-shell/)
- [식별자 이름](/ko/blog/sass-identifiers/)
- [변수 `$`](/ko/blog/sass-variables/)
- [변수와 `!default` 플래그](/ko/blog/sass-variables-and-default-flag/)
- 데이터 유형
- 연산
- 괄호의 활용
- 함수
- 끼워 넣기 `#{}`
- 부모 스크립트 `&`


[^feature]: 미디어 쿼리에서 괄호 안에 작성하는 미디어 속성 이름과 값은 조건식처럼 쓰이기 때문에, 미디어 속성 이름을 '이름'이라고 부르지만 '조건식의 값'으로 봐야 합니다.





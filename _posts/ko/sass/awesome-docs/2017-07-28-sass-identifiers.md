---
subject:  sass-awesome-docs
name:     sass-identifiers
title:    Sass 식별자 이름
subtitle: 표기법과 특이사항
excerpt:  Sass에서도 식별자 이름에 따른 규칙이 강제로 정해진 것은 없지만 CSS와 거의 비슷하게 사용합니다.
tags:     [sass, scss, css, preprocessor, 전처리기, sass identifiers, 스네이크 표기법, underscore, 언더스코어, hyphen-separated case]
image:    
date:             2017-07-28 16:33:00 +0900
last_modified_at:
redirect_to: https://heyjihye.com/blog/sass-identifiers/
---

* Will be replaced with the ToC
{:toc}

**변수 이름, 믹스인 이름, 함수 이름, 파일 이름** 등 Sass에서 쓰이는 식별자 규칙을 알아봅시다.
{: .lead}

***

##### 식별자 이름 표기법
일반적으로 CSS에서 사용하는 클래스 이름은 모두 소문자로 작성합니다. 그리고 대부분의 개발자는 다음의 두 가지의 표기법 중 하나를 사용할 것입니다.
이 중에서 뱀 표기법보다는 케밥 표기법이 더욱 많이 쓰입니다.

케밥 표기법 *kebab-case*{: .side-by-side}[^hyphen]
: 단어를 하이픈 `-`으로 연결.

뱀 표기법 *snake_case*{: .side-by-side}
: 단어를 밑줄 `_`로 연결.

Sass에서도 식별자 이름에 따른 규칙이 강제로 정해진 것은 없지만 CSS와 거의 비슷하게 사용합니다.
케밥 표기법과 뱀 표기법 중 선호 하는 것을 사용하면 되겠죠.
참고로 Sass의 내장 함수 이름은 모두 케밥 표기법을 따릅니다. 

***

##### 하이픈과 밑줄
Sass 식별자 이름에서 하이픈 `-`과 밑줄 `_`을 교차하여 사용할 수 있습니다. 
다음 예시를 확인해주세요.

- `add-column` 믹스인을 `add_column`이라는 이름으로 호출할 수 있습니다.
- `$font_size`라는 변수를 `$font-size`이라는 이름으로 사용할 수 있습니다.
- `map-get` 함수를 `map_get`이라는 이름으로 호출할 수 있습니다.
- `@import "layout-header";`와 `@import "layout_header";`는 같은 결과를 가져옵니다.


[^hyphen]: 이 표기법은 정해진 하나의 명칭은 없지만 jQuery, lodash, Vuejs 등 다양한 곳에서 kebab-case라고 부릅니다. lisp-case, spinal-case 라고도 합니다.


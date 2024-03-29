---
subject:  sass-awesome-docs
name:     sass-data-types
title:    Sass 데이터 타입
subtitle: 
excerpt:  
tags:     [sass, scss, css, preprocessor, 전처리기, 데이터 유형]
image:    
date:             2017-07-31 00:00:00 +0900
last_modified_at:
redirect_to: https://heyjihye.com/blog/sass-data-types/
---

* Will be replaced with the ToC
{:toc}

[원문](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Data_Types){:.original-link target="_blank"}
{: .lead}


***

###### 

[^]: 

SassScript에는 8가지 데이터 타입이 있습니다.
- 숫자 (예. 1.2, 13, 10px)
- 문자열 (예. "foo", 'bar', baz)
  - *따옴표*로 감싼 문자열 (예. "foo", 'bar')
  - *따옴표 없는* 문자열 (예. baz)
- 색상 (예. blue, #04a3f9, rgba(255, 0, 0, 0.5))
- 불린 (예. true, false)
- 널 (에. null)
- 목록
  - *쉼표*로 구분한 목록 (예. Helvetica, Arial, sans-serif)
  - *공백*으로 구분한 목록 (예. 1.5em 1em 0 2em)
- 맵 (예. (key1: value1, key2: value2))
- 함수 참조 *function references*{: .side-by-side}



물론 CSS 속성값의 모든 타입을 지원한다. 유니코드, !important 선언

##### 문자열 Strings
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings
문자열은 큰 따옴표나 작은 따옴표로 둘러쌀수 있고, 따옴표 없이 작성할 수도 있다.
어떻게 사용하든 변환없이 그대로 CSS 결과에 반영된다.
예외) 문자열 값인 변수가 믹스인에서 끼워넣기로 사용될 경우에만 따옴표가 제거된다.

##### 목록 Lists
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#lists
목록형은 어떻게 Sass가 `margin: 10px 15px 0 0 or font-face: Helvetica, Arial, sans-serif` 같은 CSS 선언의 값을 나타내는지이다.
목록형은 CSS에서 콤마나 공백으로 구분되어 나열된 값의 연속과 같다. 

그자체로는 별거 없지만 SassScript 목록 함수에서 활용하면 가치가 높아진다.
- `nth` 함수: 목록의 특정 아이템에 접근할 수 있다
- `join` 함수: 여러 목록을 합친다
- `append` 함수: 목록에 아이템을 추가한다
- `@each` 지시자: 목록의 각 아이템에 스타일을 추가한다

목록의 값으로 목록을 가질 수 있다. 내부 목록을 구분하기 위해 콤마를 사용하거나 명확히 하기위해 괄호를 사용할 수도 있다.  (1px 2px) (5px 6px)
주의) 괄호가 쓰인 목록 값이 CSS로 변환할 때, CSS에 맞지 않는 문법이기 때문에 괄호는 삭제된다. (실험 필요)
*font-family, font 예시들면 좋을 듯.
 
목록의 값으로 아이템이 없는 ()를 할당할 수 있다. empty map이라고 한다.
속성 값으로서 ()는 CSS으로 변환되지 않으며 e.g. font-family: () 에러를 낸다.
목록 값에 빈 목록이 포함되거나 1px 2px () 3px 널 값이 들어가면 1px 2px null 3px 이 값들만 삭제된 후에 CSS로 변환한다.

콤마로 구분되는 목록은 값을 할당할 때 마지막에 콤마를 활용할 수 있다.
콤마로 구분되는 값이 하나인 목록을 만든다. (1,) -> [1] / 괄호 없이 1,만하면 에러?
콤마로 구분되는 값이 하나이고 목록형인 목록을 만든다. (1 2 3,) => [[1,2,3]]

##### 맵스 Maps
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps
맵스는 객체와 비슷하며, 이름-값 쌍(a map)이 나열된 목록이다.
연관 있는 값을을 그룹지어서 관리할 수 있으며, 역동적으로 접근할 수 있다.
CSS의 미디어 쿼리 표현식과 유사하지만, CSS에는 맵스와 상응하는 형태가 없다.

목록형과 다르게 맵스의 값은 괄호로 쌓여야하며, 각 값은 콤마로 구분되어야 한다.
맵스의 이름과 값은 모두 어떤 SassScript 오브젝트던지 될 수 있다.
하나의 이름에는 하나의 값만 가질 수 있으며, 값으로 목록을 가질 수도 있다.
여러 이름에 하나의 값을 동일하게 설정할 수도 있다.

목록과 비슷하게 맵스는 대부분은 SassScript 함수에서 사용한다.
- `map-get` 함수: 맵의 값을 가져온다
- `map-merge` 함수: 맵에 값을 덧붙인다.
- `@each` 지시자: 맵안에 이름-값 쌍에 스타일을 추가한다.
주의) 맵안의 이름-값 쌍의 순서는 할당된 그대로다.

맵스는 목록이 쓰이는 곳 어디든 쓰일 수 있다.
목록 함수에서 사용된다면, 맵스는 중첩 목록처럼 취급된다. 예시필요
주의) 목록은 맵스처럼 취급되지 않는다. 예외로 빈 목록 () 일 때만 빼고.
()는 빈 이름-값 쌍을 가진 맵이자 아이템이 없는 목록이다.

노트) 맵의 이름은 어떠한 Sass 데이타형도 될 수 있다. 맵형도 된다.
맵을 선언하는 문법은 값에 임의의 SassScript 표현식을 허용한다.

맵스는 CSS로 변환되지 않으며, 맵스를 스타일의 값으로 사용하면 에러가 난다.
`inspect($value)` 함수를 사용하면 출력 문자를 확인할 수 있어 맵스를 디버깅하는데 유용하다. 

##### 색상 Colors
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#colors
모든 CSS 색상 표현은 SassScript 색상 값으로 변환된다.
예시)

compressed 출력 모드에서 Sass는 색상값을 가장 작은 CSS 표현으로 변경한다.  
#FF0000 -> red, blanchedalmond -> #FFEBCD

색상 이름을 사용할때 흔한 문제는 Sass는 다른 출력 모드에서는 작성한 그대로 결과물에 나타나는 것을 선호한다는 것. (compressed 외 모드 말하는 듯)
선택자 이름에 색상이 끼워넣어지면 compressed 될경우 문법에 맞지 않게 되기 때문이다.
이를 예방하기 위해, 색상 이름을 선택자 이름으로 사용할 경우에는 꼭 따옴표 있는 문자열로 작성해라.



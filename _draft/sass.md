

Sass 시작하기
이름, 두 개의 문법에서 선택하기
개발 환경 설정하기
프리프로세서 -> 장단점 단점은 컴파일해야한다!

## 특징 
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#features
- 완전 CSS 호환성
- 언어 확장: 변수, 중첩, 믹스인
- 유용한 함수: 색상 등 값 조정하기
- 고급 기능: 라이브러리를 위한 제어 지시문
- 서식에 맞는 결과물: 사용자 정의 가능

## 문법 
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax
SCSS: 
Sassy CSS 의미, the CSS-extension syntax
공식 웹사이트 문서 페이지에서 사용됨, http://sass-lang.com/guide 가이드 페이지에 예시가 우선으로 작성됨.
CSS 문법의 확장형 -> 문법에 맞는 CSS 구문은 SCSS 파일에서도 완벽히 호환된다는 뜻. 대다수의 CSS 핵과 특정 브라우저용 문법 (예. IE filter)도 이해함.
.scss 확장자를 사용함.

Sass (예전 문법, Sass’s indented syntax)
http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html
CSS를 좀 더 간단히 작성하기
1.선택자의 중첩을 나타내기 위해 브라켓이 아니라 속성 블록을 구분하기 위해 들여쓰기로 대신함
2.속성을 구분하기 위해 세미콜론 대신 줄바꿈을 사용함
이런 이유 때문에 SCSS보다 읽기 쉽고 빨리 쓸 수 있어 선호함.
CSS와 호환되지 않음.
.sass 확장자를 사용함.

두 문법은 동일한 기능을 가지고 있지만, 문법이 서로 다름.
서로의 다른 확장자의 파일을 import 할 수 있음.

서로의 파일 확장자 변경하려면 `sass-convert` 명령어를 사용한다.
내용과 확장자를 변경해줌

tip: scss 멀티라인 지원안함. 이슈가 2011년부터 수정안되고 있음. 

## Sass 사용하기
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass

넘 어렴, 환경이 다름...
-> npm, jekyll 사용으로 나중에 내용추가 해야게뜸

## CSS Extensions 확장
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#css_extensions

### 규칙 중첩
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_rules
CSS 규칙을 서로 중첩하여 작성할 수 있다.
부모 선택자를 계속 반복하는 것을 해결해주고, 중첩된 선택자를 많이 사용하는 복잡한 CSS 문서 구조를 간략하게 하고 알아보기 쉽게 한다.

### 부모 참조 선택자: &
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-selector
규칙 중첩에서 부모 선택자와 자식 선택자의 중첩을 해결했다면, 부모 참조 선택자는 부모 선택자를 더 긴밀하다고 보면됨.
부모 자식의 순서가 아니라, 다양한 부모 선택자의 조합을 상요하려면 부모 참조 선택자를 사용한다.
1. 내부 규칙에 부모 선택자의 가상 요소나 상태 hover 같은 것 사용
2. 부모 선택자의 부모 선택자를 사용
주의: &가 대체하는 부모 선택자가 중첩된 선택자일 경우 &가 사용되기 바로 전까지 모두 사용됨.

&:hovered 처럼 &와 합쳐진 선택자를 쓸경우, &는 항상 단어 앞에 와야 한다. *뒤나 중간에 붙을 수 없다.
CSS 선택자 외에, 접미사를 붙일 수 있다. &-some-word

### 속성 중첩
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_properties
font, background, padding 등은 단축 속성이다.
https://developer.mozilla.org/ko/docs/Web/CSS/Shorthand_properties
font-family, font-size, font-weight는 font라는 하나의 네임스페이스에 속한 것으로 보고, 각각을 하위 속성으로 하여 중첩하여 작성할 수 있다.
기존 단축속성 작성 문법과 섞어서 사용할 수 있다.
이때 단축속성은 그대로 사용되고 속성 중첩은 따로 작성된다.
*font 단축속성에는 line-height가 있지만, 이는 sass에서 font 네임스페이스의 하위 속성으로는 들어갈 수 없다.

### 플레이스홀더 선택자: %, `@extend`에서 활용함
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_
아이디 선택자 #와 클래스 선택자 . 와 비슷함.
이런 이유로 `@extend` 지시자와 함께 쓸수 있다. (참조 페이지 링크 들어가야함)

`@extend` 없이 작성된 그 자체의 규칙 집합은 CSS로 변환되지 않는다. (변수처럼)

## 주석 /* */ 와 //
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#comments
CSS 표준 다중줄 주석 /* */를 지원하며, 한 줄 주석을 처리하기 위한 //도 지원한다.
다중줄 주석은 가능한 경우 CSS 결과물에 남게되며, (출력 모드에 따라 다름)
한줄 주석은 삭제된다.
출력 모드가 'compressed'라도 다중줄 주석이 보이게 하려면 주석의 첫글자로 !를 써넣으면 된다.
문서 상단에 저작권등을 표시할 때 유용하다.
CSS 결과물 주석내부에 쓰일 글에 변수를 사용하려면 아래와 같이 주석 내부에 변수를 사용한다.
#{$version}
참조: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_

## SassScript
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#sassscript
Sass는 기본 CSS 속성 구문뿐만 아니라 SassScript라는 확장 기능을 제공한다.
여기에는 변수 사용, 산수, 기타 기능이 있다. SassScript는 속성값으로 사용할 수 있다.
선택자나 속성 이름을 만들 수도 있으며, 믹스인 작성시 유용하다. 끼워넣기를 활용한다.

### 대화형 쉘 (Interactive Shell)
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interactive_shell
대화형 쉘을 이용하면 SassScript를 쉽게 시험해볼 수 있다.
쉘을 시작하려면 sass 커맨드라인을 `-i` 옵션과 함께 실행한다.
실행 후 SassScript 표현을 작성해 넣으면, 계산된 결과를 출력한다.
* 문서에 작성하기 전에 값을 확인하고 싶거나, 문법을 확인하기위해 사용하면 좋다.

### 변수 $
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_
SassScript를 사용하는 가장 직접적인 방법은 변수를 사용하는 것이다.
변수는 $ 달러 기호로 시작하며, CSS 속성 구문과 비슷하다.
$width: 5em;
변수는 아래와 같이 사용할 수 있다.
예시.

글로벌 변수는 어디서든 사용할 수 있다.
변수가 선택자 안에 선언되었다면 그 범위 아에서만 사용할 수 있다. 지역 변수와 같다.
그렇더라도 `!global` 플래그를 작성하면 글로벌 변수처럼 어디서든 사용할 수 있다.

역사적 이유로(어떤 이유일까.. 궁금), 변수와 모든 Sass 식별자의 이름의 하이픈과 언더스코어는 교차사용이 가능하다.
$main-width라고 선언된 변수는 $main_width로도 사용할 수 있으며, 그 반대도 가능하다.

### 데이터형(Data types)
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#data_types
SassScript는 7개의 주요한 데이터형을 지원한다.
- 숫자
- 문자열
- 목록
- 맵스
- 색상
- 불린
- 널

물론 CSS 속성값의 모든 타입을 지원한다. 유니코드, !important 선언

#### 문자열 Strings
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings
문자열은 큰 따옴표나 작은 따옴표로 둘러쌀수 있고, 따옴표 없이 작성할 수도 있다.
어떻게 사용하든 변환없이 그대로 CSS 결과에 반영된다.
예외) 문자열 값인 변수가 믹스인에서 끼워넣기로 사용될 경우에만 따옴표가 제거된다.

#### 목록 Lists
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#lists
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

#### 맵스 Maps
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

#### 색상 Colors
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#colors
모든 CSS 색상 표현은 SassScript 색상 값으로 변환된다.
예시)

compressed 출력 모드에서 Sass는 색상값을 가장 작은 CSS 표현으로 변경한다.  
#FF0000 -> red, blanchedalmond -> #FFEBCD

색상 이름을 사용할때 흔한 문제는 Sass는 다른 출력 모드에서는 작성한 그대로 결과물에 나타나는 것을 선호한다는 것. (compressed 외 모드 말하는 듯)
선택자 이름에 색상이 끼워넣어지면 compressed 될경우 문법에 맞지 않게 되기 때문이다.
이를 예방하기 위해, 색상 이름을 선택자 이름으로 사용할 경우에는 꼭 따옴표 있는 문자열로 작성해라.

### 연산자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#operations
모든 데이터 타입은 부등 연산자 equality operations (== and !=) 를 지원한다.
각 타입에 따라 지원하는 다양한 연산자도 있다.

#### 숫자 연산자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#number_operations
SassScript는 표준 산술 연산자를 지원한다.
addition +, subtraction -, multiplication *, division /, and modulo %
Sass math 함수는 산술 연산을 하면서도 단위(units)를 유지한다.
이때문에 서로 맞지 않는 단위를 가진 숫자들 끼리는 계산할 수 없다.
예) px 단위와 em 단위를 더할 수 없다.
같은 단위를 가진 두 숫자를 곱하면 단위도 곱해진다.
예) 10px * 10px == 100px * px -> px * px 는 CSS에서 유효하지 않은 단위이다. 그래서 에러가 난다.

비교 연산자 Relational operators (<, >, <=, >=)도 지원한다.

##### 나누기와 /
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#division-and-slash
CSS는 속성 값으로 숫자들을 분리(구분)하기 위해 /를 사용한다. font: 12px/12px
SassScript는 CSS의 확장이기 때문에 당연히 이를 지원해야 한다.
나아가 /를 나누기 연산자로도 활용할 수 있어야 한다.
이는 기본적으로 SassScript에서 두 숫자가 /로 분리되어 작성된다면 CSS에서 나누기가 아닌 분리기호로 사용되어 변환없이 그대로 나타난다.

/를 나누기 연산자로 사용하기 위한 3가지 방법이 있다.
1. 나누기 표현식안의 하나 혹은 두개 모두, 변수이거나 함수로 반환된 숫자이다.
2. 나누기 표현식이 괄호로 둘러 쌓여있다. 예외) 숫자가 목록의 값중 하나이고 목록이 괄호로 둘러 쌓인 경우 제외
3. 나누기 표현식이 다른 산술 연산자와 함께 사용될 경우

변수를 사용하면서 /를 분리 기호로 사용하러면 변수를 #{}로 둘러 싸면 된다.

*숫자를 문자로 보느냐의 차이인듯, 연산이나 함수등이 작동하경우 /도 동일하게 보고, 문자열일경우 /도 문자열로 본다.

#### 빼기, 음수 그리고 -
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#subtraction
-는 CSS와 Sass에서 모두 다양하게 사용된다.
- 빼기 연산자 5px - 3px
- 음수기호 -3px
- 단항 부정 연산자? unary negation operator  -$var
- 식별자의 일부  font-weight
대부분의 경우 명확히 구분되지만, 어떨 때는 까다로운 경우가 있다.
일반적인 경우 아래와 같이 사용하면 안전하다.
- 빼기 연산자로 사용할 경우 양 쪽에 공백을 둔다.
- 음수기호나 단항 부정 연사자로 쓸 경우 앞쪽에 공백을 두고 뒷쪽은 두지 않느다.
- 단항 부정 연사자가 공백으로 구분된 목록의 값일 경우 괄호로 감싼다. 10px (-$var) 12px

-의 여러 의미들은 아래의 순서대로 우선순위를 가진다.
1. -는 식별자의 일부이다. a-1는 따옴표 없는 문자열이다. 
유일한 예외는 단위(? 단위없이 숫자만 와도 된단느 건지 확인)에 따른다. Sass는 보통 어떤 식별자든지 사용할 수 있지만, 식별자는 하이픈(-)다은에 숫자가 오면 안된다.
 5px-3px는 5px - 3px와 동일함을 의미한다.
2. 두 숫자 사이에 공백 없이 -가 있다면 -는 나누기 연산자다. 1-2 -> 1 - 2.
3. 리터럴 숫자가 -로 시작하면 음수기호를 나타낸다. 1 -2 -> 1과 -2를 값으로 가진 목록
4. 두 숫자 사이에 공백 여부와 상관없이 -가 있다면 나누기 연산자다. 1 -$var -> 1 - $var
5. 값 앞에 -가 있다면 단항 부정 연산자이다. 변수의 값을 가져와서 네가티브값을 반환한다. 아핫

* 우선순위를 외우는 것보다 명확히 사용하는 게 나을 것 같다. 경우나 시간에 따라서 명확히 이해하기 힘들다. 주석다는 것보다 낫다.

#### 색상 연산자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#color_operations
색상 값에 모든 산술 연산자를 사용할 수 있다.  r,g,b 값으로 조각내어 서로 연산한다는 의미.

산술 연산자를 사용하는 것보다 같은 효과를 나타내는 색상 함수를 사용하는 것이 좋을 수 있다.

색상 값과 숫자를 혼합해서 산술 할 수도 있다. color: #010203 * 2

주의) 알파 채널을 가진 색상은 (rgba, hsla)을 같은 알파 값을 가진 색상 끼리만 산술 가능하다. 알파 값은 산술하지 않는다.
rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75)

알파 값은 `opacify`와 `transparentize` 함수로 조정할 수 있다.
opacify($translucent-red, 0.3)

IE `filters`는 모든 색상값에 알파 값을 가지도록 했으며 #AABBCCDD 포맷을 철저히 지켜야 한다.
`ie_hex_str` 함수를 써서 변환할 수 있다.

#### 문자열 연산자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#string_operations
+ 연산자는 문자열을 서로 붙일 수 있다. e + -resize -> e-resize

따옴표 문자열과 따옴표 없는 문자열을 + 로 연결하면 앞의 문자열 형식을 따른다.
"Foo " + Bar -> "Foo Bar"

문자열 안에 #{}를 사용하여 다이나믹 값을 끼워넣을 수 있다. *끼워넣기 섹션에서 다른 부분과 연결해서 모아서 보여주기
"I ate #{5 + 10} pies!"
끼워넣기 값이 Null 일 경우 공백으로 처리된다.
 
#### 불린 연산자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#boolean_operations
SassScript는 불린 값에 `and`, `or`, `not` 연산자를 지원한다.
* 끝이네 ㅋ 아무래도 조건 지시자 쪽이랑 연결해서 보여줘야 할듯.

#### 목록 연산자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#list_operations
목록 타입을 지원하는 특정 연산자가 없다. (기본 연산자 제외)
대신 `list` 관련 함수를 사용한다.

### 괄호
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parentheses
괄호는 연산자 처리 순서를 결정하기 위해 사용할 수 있다.
1em + (2em * 3)

* 이외에 연산자(부등호 연산자 예시 추가)와 목록에서 어떻게 쓰이는지 예시 모아보기

### 함수
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions
SassScript는 기본 CSS 함수 문법을 사용하기 위한 유용한 몇몇 함수들을 가지고 있다.
hsl(0, 100%, 50%)

모든 함수 목록 http://sass-lang.com/documentation/Sass/Script/Functions.html
*엄청 많네...... 각 데이터 타입에 맞게 분할해서 소개해야함.

#### 키워드 인자 http://blog.daum.net/swrush/155
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#keyword_arguments
Sass 함수는 키워드 인자를 명시해서 호출할 수 있다.
hsl($hue: 0, $saturation: 100%, $lightness: 50%)
덜 간결하지만, 스타일시트를 읽기 쉽게 한다. 함수 사용시 더 유연한 인터페이스를 사용 가능하며, 많은 인자를 호출하는데 어려움을 줄여준다.

이름 있는 인자는 순서와 상관없이 넘길 수 있다.
기본 값을 갖는 인자는 생략할 수 있다.
인자 이름이 변수 이름이라면(예시가 있다면 좋을듯) 언더스코어와 대시는 상호교차하여 인식된다. *위에 나왔던 얘기 연결하기

### 끼워넣기 #{}
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_
* 다른 부분의 끼워넣기 활용 모아보기
SassScript 변수를 선택자와 속성 이름으로 사용할 수 있게 해준다.
p.#{$name} / #{$attr}-color: blue

속성 값에서 연산자 사용 없는 /를 구현한다.
font: #{$font-size}/#{$line-height};

### SassScript에서 &
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-script
*부모 참조 연산자 &과 구분해서, 비교

선택자에서 &가 부모 참조 연산자로 사용하는 것과 비슷하게, SassScript에서 &은 현재 부모 선택자를 지칭한다.
&의 값은 공백으로 구분된 목록을 값으로 가지는 콤마로 구분된 목록이다.
.foo.bar .baz.bang, .bip.qux -> ((".foo.bar" ".baz.bang"), ".bip.qux")
각 선택자는 문자열이라는 것을 인지하게 따옴표로 쌓여있지만, 실제로는 따옴표 없는 값이다. (확인 필요)
부모 선택자가 2개가 아니거나(콤마가 없다) 단일 선택자 (여러 부모가 없다, 공백이 없다)라고 해도, &는 항상 2단 중첩 목록을 값으로 가진다.

부모 선택자가 없다면 &는 Null을 반환한다. 이점을 활용해 믹스인에서 &의 존재 여부를 검사할 수 있다.
@if &

### 변수 기본값 !default
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_
!default 플래그를 변수 값 끝에 추가하면, 변수에 값이 할당되지 않았을 경우에만 값을 할당한다.
즉 변수에 값이 있다면 다시 값을 항당하지 않고, 기존 값이 없을 경우에만 값을 할당 한다.

변수 값이 Null일 경우에는 값이 할당 되지 않은 것처럼 취급한다.


## @ 규칙과 지시자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#directives

### @import

#### 조각 Partials
#### @import 중첩
### @media
### @extend
#### 작동법
#### 복합 선택자 확장
#### 다중 확장
#### 체인닝 확장
#### 선택자 시퀀스
#### @extend-Only 선택자
#### !optional 플래스
#### 지시자에서 @extend 
### @at-root
#### @at-root(without: ...) @at-root(with: ...)
### @debug
### @warn
### @error

## 조건 지시자와 표현식
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives__expressions
### if()
### @if
### @for
### @each
#### 다중 할당
### @while

## 믹스인 지시자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins
### 믹스인 선언: @mixin
### 믹스인 사용: @include
### 인자
#### 키워드 인자
#### 변수 인자
### 믹스인에 컨텐츠 블록 넘기기
#### 변수 범위와 컨텐츠 블록

## 함수 지시자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#function_directives

## 결과물 양식/ 출력 스타일
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style
### :nested
### :expanded
### :compact
### :compressed


## 용어
Directives, a directive 지시자
Operations, an operation 연산자
identifiers, an identifier 식별자: 변수이름, 속성이름 등
rules, a rule 규칙
rulesets, a ruleset 규칙 집합
selectors, a selector 선택자
properties, a property 속성
mixin 믹스인 ?믹스인이 무엇인가 내용 필요
interpolation 끼워넣기, 보간법: 문자열 보간. 문자열에 데이터값을 끼워 넣는 방법
flag 플래그: 상태를 기록하고 처리의 흐름을 제어하기 위한 boolean형 변수
http://blog.daum.net/question0921/1106

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

***

## SassScript
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#sassscript
Sass는 기본 CSS 속성 구문뿐만 아니라 SassScript라는 확장 기능을 제공한다.
여기에는 변수 사용, 산수, 기타 기능이 있다. SassScript는 속성값으로 사용할 수 있다.
선택자나 속성 이름을 만들 수도 있으며, 믹스인 작성시 유용하다. 끼워넣기를 활용한다.

### 대화형 쉘 (Interactive Shell) -> 뒤로
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interactive_shell
대화형 쉘을 이용하면 SassScript를 쉽게 시험해볼 수 있다.
쉘을 시작하려면 sass 커맨드라인을 `-i` 옵션과 함께 실행한다.
실행 후 SassScript 표현을 작성해 넣으면, 계산된 결과를 출력한다.
* 문서에 작성하기 전에 값을 확인하고 싶거나, 문법을 확인하기위해 사용하면 좋다.

*** 

### 변수 $
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_
SassScript를 사용하는 가장 직접적인 방법은 변수를 사용하는 것이다.
변수는 $ 달러 기호로 시작하며, CSS 속성 구문과 비슷하다.
$width: 5em;
변수는 아래와 같이 사용할 수 있다.
예시.

글로벌 변수는 어디서든 사용할 수 있다.
변수가 선택자 안에 정의되었다면 그 범위 아에서만 사용할 수 있다. 지역 변수와 같다.
그렇더라도 `!global` 플래그를 작성하면 글로벌 변수처럼 어디서든 사용할 수 있다.

역사적 이유로(어떤 이유일까.. 궁금), 변수와 모든 Sass 식별자의 이름의 하이픈과 언더스코어는 교차사용이 가능하다. *믹스인, 변수에서도 나옴
$main-width라고 정의된 변수는 $main_width로도 사용할 수 있으며, 그 반대도 가능하다.

### 변수 기본값 !default
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_
!default 플래그를 변수 값 끝에 추가하면, 변수에 값이 할당되지 않았을 경우에만 값을 할당한다.
즉 변수에 값이 있다면 다시 값을 항당하지 않고, 기존 값이 없을 경우에만 값을 할당 한다.

변수 값이 Null일 경우에는 값이 할당 되지 않은 것처럼 취급한다.

***

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

***

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

***

### 괄호
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parentheses
괄호는 연산자 처리 순서를 결정하기 위해 사용할 수 있다.
1em + (2em * 3)

* 이외에 연산자(부등호 연산자 예시 추가)와 목록에서 어떻게 쓰이는지 예시 모아보기

***

### 함수
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions
SassScript는 기본 CSS 함수 문법을 사용하기 위한 유용한 몇몇 함수들을 가지고 있다.
hsl(0, 100%, 50%)

모든 함수 목록 http://sass-lang.com/documentation/Sass/Script/Functions.html
*엄청 많네...... 각 데이터 타입에 맞게 분할해서 소개해야함.

*사용자 정의 함수 링크

#### 키워드 인수 http://blog.daum.net/swrush/155 -> 믹스인과 유사함
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#keyword_arguments
Sass 함수는 키워드 인수를 명시해서 호출할 수 있다.
hsl($hue: 0, $saturation: 100%, $lightness: 50%)
덜 간결하지만, 스타일시트를 읽기 쉽게 한다. 함수 사용시 더 유연한 인터페이스를 사용 가능하며, 많은 인수를 호출하는데 어려움을 줄여준다.

이름 있는 인수는 순서와 상관없이 넘길 수 있다.
기본 값을 갖는 인수는 생략할 수 있다.
인수 이름이 변수 이름이라면(예시가 있다면 좋을듯) 언더스코어와 대시는 상호교차하여 인식된다. *위에 나왔던 얘기 연결하기

***

### 끼워넣기 #{}
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_
* 다른 부분의 끼워넣기 활용 모아보기
SassScript 변수를 선택자와 속성 이름으로 사용할 수 있게 해준다.
p.#{$name} / #{$attr}-color: blue

속성 값에서 연산자 사용 없는 /를 구현한다.
font: #{$font-size}/#{$line-height};

***

### SassScript에서 &
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-script
* 부모 참조 연산자 &과 구분해서, 비교

선택자에서 &가 부모 참조 연산자로 사용하는 것과 비슷하게, SassScript에서 &은 현재 부모 선택자를 지칭한다.
&의 값은 공백으로 구분된 목록을 값으로 가지는 콤마로 구분된 목록이다.
.foo.bar .baz.bang, .bip.qux -> ((".foo.bar" ".baz.bang"), ".bip.qux")
각 선택자는 문자열이라는 것을 인지하게 따옴표로 쌓여있지만, 실제로는 따옴표 없는 값이다. (확인 필요)
부모 선택자가 2개가 아니거나(콤마가 없다) 단일 선택자 (여러 부모가 없다, 공백이 없다)라고 해도, &는 항상 2단 중첩 목록을 값으로 가진다.

부모 선택자가 없다면 &는 Null을 반환한다. 이점을 활용해 믹스인에서 &의 존재 여부를 검사할 수 있다.
@if &

***

## @-규칙과 지시자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#directives
Sass는 모든 CSS3 @-규칙을 지원한다. CSS at-규칙 https://developer.mozilla.org/ko/docs/Web/CSS/At-rule
추가로 "지시자 directives"라고 부르는 Sass만의 규칙도 있다. Sass에서 지시자는 다양한 역할을 하며 아래에 자세히 설명.
조건 지시자와 믹스인 지시자로 참고하여라.

***

### @import
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import
Sass는 CSS `@import` 규칙을 확장하여 활용해 SCSS 및 Sass 파일을 불러온다.
불러온 SCSS 및 Sass 파일은 모두 한 CSS 파일로 합쳐진다.
불러온 파일에 있는 변수와 믹스인은 메인 파일에서 사용할 수 있다.

Sass를 불러올 때 최근경로(?디렉터리)가 기본경로이다. 이 안에 있는 Sass 파일을 사용한다.
(Rack, Rails, Merb 사용시 Sass 파일 디렉터리를 기준으로 한다. 기본경로를 변경하려면 `:load_paths` 옵션을 사용하거나, 커맨드 라인에서 `--load-path`를 사용하라)

`@import` 불러올 파일이름을 입력받는다.
기본적으로는 Sass 파일을 직접 불러온다.

몇가지 상황에 따라 본래의 CSS @import 규칙으로 그대로 사용된다. 
- 파일 확장자가 `.css`일 경우
- 파일 이름이 `http://`로 시작할 경우
- 파일 이름이 `url()`일 경우
- `@import`가 미디어 쿼리와 같이 쓰였을 경우

위의 상황 중 하나라도 속하지 않고 파일 확장자가 `.scss`이거나 `.sass`일 경우, 불러온 Sass, SCSS 파일은 내용을 불러와 하나로 합쳐진다.
확장자가 없을 경우, 작성한 이름을 가진 `.scss`이거나 `.sass` 확장자 파일을 찾아서 불러온다.

~~~ scss
@import "foo.scss";
@import "foo"; // 두 확장자를 각기 가진 같은 이름 파일이 있으면 우선순위는 어떻게?
~~~

하나의 `@import`에 여러 파일을 불러올 수 있다.

불러오기에서도 제한적이지만 끼워넣기 #{}를 사용할 수 있다.
변수를 사용해 Sass 파일을 동적으로 불러올 순 없다.
끼워넣기는 `url()` 형식을 사용한 CSS 불러오기만 가능하다.

#### 조각 Partials
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#partials
불러오기로만 사용하고 CSS 파일로 각기 변환되지 않아야하는 Sass, SCSS 파일은 이름을 _ 언더스코어로 시작하면된다.
그리고 불러오기시 이름의 언더스코어를 생략하여 작성한다.
* 언더스코어없이 불러오기 가능한지 확인, 부트스트랩처럼 여러버전 가능할듯

경로와 이름이 같은 조각 파일과 아닌 파일이 있고 이 파일을 불러오면 컴파일시 에러가 난다.
_colors.scss 파일과 colors.scss 처럼.

#### @import 중첩
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested-import
대부분의 경우에 `@import`를 문서에서 최상위 레벨에 작성한다.
CSS 규칙과 `@media` 규칙 내부에 포함시킬 수 있다.
`@import`를 최상위 레벨에 작성한 것처럼, 내부에 포함된 파일의 내용이 불러와지며, 상위 규칙안에 중첩되어 합쳐진다.

지시자는 문서의 기본레벨에서만 허용된다. 그러므로 중첩된 @import 파일 내용에 `@mixin`이나 `@charset`같은 지시자가 있으면 안된다. 

믹스인이나 조건 지시나 안에서 `@import`를 중첩하여 사용할 수 없다.

***

### @media
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#media
Sass에서 `@media` 지시자는 한가지 추가 기능을 빼면 순수 CSS에서와 동일하게 작동한다.
이 지시자는 CSS 규칙 안에 중첩하여 작성할 수 있다.
CSS 규칙 안에 `@media` 지시자가 작성되면, 미디어 쿼리는 스타일시트 최상단(가장 밖)으로 올라가며, 모든 선택자와 규칙이 이 안으로 들어온다.
선택자를 반복하여 작성하거나 스타일시트의 흐름을 깨지 않으면서 미디어 특정 스타일을 쉽게 추가할 수 있게 한다.

`@media` 쿼리는 서로 중첩하여 작성할 수 있다.
쿼리는 `and` 연산자로 이어져 병합된다.

SassScript 표현식 포함하여 `@media` 쿼리을 작성할 수 있다.
(변수, 함수, 연산자를 포함)
표현식은 기능 이름이나 값으로 쓰일 수 있다.
* 끼워넣기로 미디어 타입을 작성 

***

### @extend
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend
공통 스타일과 특정 스타일을 분리해서 클래스를 분리하여 스타일을 작성하고 html에서도 두 클래스를 모두 작성 한다.

공통 클래스와 특정 클래스를 모두 외워야하는 부담이 있고 이는 버그를 불러오거나 마크업에 구조적이지 않은 스타일을 작성하게 한다.
`@extend`는 이런 문제를 해결한다. 한 선택자가 다른 선택자를 상속받게 한다.

html에는 특정 클래스만 작성하면 된다.

특정 선택자가 `@extend`를 사용하여 포함시킨 선택자에 적용되는 규칙은 특정 선택자에도 적용된다.
* 잘성명해야해요, 한줄인데 활용은 짱임. 작동법에 예시 나와있네...

#### 작동법
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#how_it_works
`@extend`는 확장할 선택자 extending selector를 확장된 선택자 extended selector에 끼워넣는 방식으로 작동한다.

선택자가 합쳐질 때 `@extend`는 중복을 잘 제거한다.
나아가 서로 맞지 않는 선택자는 처리하지 않는다.

#### 복합 선택자 확장
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extending_complex_selectors
클래스 선택자 뿐만 아니라 모든 선택자를 확장할 수 있다.
special.cool, a:hover, or a.user[href^="http://"]

#### 다중 확장
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#multiple_extends
여러 선택자를 확장할 수 있다.
각 선택자를 `@extend`에 작성하거나, 하나의 `@extend`에 콤마로 구분하여 선택자를 작성할 수 있다.

#### 체인닝 확장
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#chaining_extends
이미 선택자 확장을 한 선택자를 또 다시 확장할 수 있다.

#### 선택자 시퀀스
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#selector_sequences
`.foo .bar`나 `.foo + .bar`와 같은 선택자 시퀀스는 확장할 수는 있지만, 현재로서는 확장된 선택자로 사용할 수 없다.

##### 선택자 시퀀스 합치기
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#merging_selector_sequences
어떤 경우에는 한 선택자 시퀀스가 다른 시퀀스에 있는 셀렉터를 확장하기도 한다. *먼말
이런 경우 두 시퀀스는 합쳐져야만 한다.

기술적으로는 선택자를 합치는 모든 경우를 생성할 수있지만, 그러면 스타일시트가 너무 커진다.
예를 들어 위에 있는 예시의 두 시퀀스로 10개의 다른 셀렉터를 만들 수 있다.
대신 Sass는 유용할 것 같은 셀렉터들만 생성한다.

두 셀렉터 시퀀스가 공통된 부분이 없다면, 두개의 새로운 셀렉터를 생성한다.
첫 번째 시퀀스가 앞에 있고 두번째 시퀀스가 뒤에 있는 셀렉터 하나와 그 반대 하나이다.

만약 두 시퀀스가 공통 선택자를 가지고 있다면, 공통 선택자는 합쳐지고 남은 선택자만 위의 경우처럼 교차하여 생성된다.

#### @extend-전용 선택자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholders
스타일을 작성하여 `@extend`로만 사용하고 HTML에서 직접 사용하지 않을 경우가 있다.
특히 Sass 라이브러리를 작성하여, 필요할 경우 `@extend`로 사용하고 아닐 경우 무시할 수 있는 스타일을 제공할 때 그렇다.

이럴 때 일반 클래스를 사용하면, 스타일시트가 만들어질 때, 많은 별도의 CSS가 포함된다.
그리고 HTML에서 사용하는 다른 클래스와 충돌할 염려도 있다.
그래서 Sass는 "플레이스홀더 선택자 placeholder selectors"를 지원한다. 예) %foo

플레이스홀더 선택자는 아이디 선택자 `#`나 클래스 선택자 `.`와 비슷하게 앞에 기호 `%`가 붙어있다.
클래스나 아이디를 사용할 수 있는 곳에 사용할 수 있다.
그리고 그 자체 규칙세트는 CSS로 변환된지 않는다.

그러나, 플레이스홀더 선택자는 아이디나 클래스처럼 확장될 수 있다.
확장된 선택자는 생성되지만, 플레이스홀더 선택자 자체는 생성되지 않는다. *위와 동일내용

#### `!optional` 플래그
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#the__flag
선택자를 확장할때 `@extend`가 작동하지 않으면 에러가 발생한다.
예로  a.important {@extend .notice} 없는 선택자를 확장할때,
선택자가 충돌할 경우 에러남.

이런 경우 에러를 내지않고 사용가능할 경우에만 확장할 경우 `!optional` 플래그 선택자 뒤에 작성하면 된다.

#### 지시자에서 @extend 사용하기
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_in_directives
`@media` 같은 지시자 안에서 `@extend`를 사용하는데 제한이 따른다.
Sass는 `@media` 외부의 CSS 규칙을 `@media`내부에 적용하지 않는다.
이는 여기저기에 스타일을 복사해서 스타일시트 용량을 엄청나게 증가시키지 않고는 불가능하기 때문.
즉 `@media`나 다른 CSS 지시자 안에 `@extend`를 사용하면, 에러가 난다.
* 선택자를 콤마로 구분하여 확장하는 것인데, 미디어 쿼리는 이렇게 할 수 없기 때문.
셀렉터는 같은 지시자 블럭에 속해 있을 경우에만 확장이 가능하다.
* 확장하려는 셀렉터가 미디어 쿼리 안에있고, 같은 미디어 쿼리를 가진 셀렉터 안에서 확장은 가능한가?

* 필요한 경우 믹스인으로 대신함, 이럴때 차이 알려주기. 확장은 선택자를 추가하고 규칙은 하나. 믹스인은 각 선택자에 규칙을 복붙하는 것.
* 미디어 쿼리말고 다른 지시자에 적용할만한 것이 있나? @page?

***

### `@at-root`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#at-root
`@at-root` 지시자는 부모 선택자 아래에 중첩시키지 않고, 하나 혹은 그 이상의 규칙을 문서 루트로 빼낸다.
단일 인라인 선택자로 사용할 수도 있고,
여러 선택자를 가진 블록으로 사용할 수도 있다.

기본적으로 `@at-root`는 모든 상위 선택자를 제거한다. * 지시자 밖으로 이동안하나?
* 사용 사례, 새로운 자식 선택자, 부모 선택자 활용 + 추가 부모 선택자

#### @at-root(without: ...) @at-root(with: ...)
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_and_
`@at-root`는 `@media` 같은 중첩된 지시자 밖으로만 빼내도록 사용할 수도 있다.

`@at-root (without: ...)`에는 모든 지시자를 사용할 수 있다.
여러 지시자를 작성하려면 공백으로 구분한다.

`@at-root`에 넘기는 두개의 특별한 값이 있다.
`@at-root (without: rule)`는 쿼리 없는 `@at-root`와 같다. *먼말. 테스트필요
`@at-root (without: all)`는 스타일을 모든 지시자와 CSS 규칙 밖으로 이동시킨다.

지시자나 규칙을 포함시키는 것을 명시하길 원한다면, 제외할 것을 나열하지 말고, `without`대신 `with`을 사용한다.
`@at-root (with: rule)`는 모든 지시자를 제외시키면서, CSS 규칙은 유지한다.

***

### `@debug`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_5
`@debug`는 SassScript 표현식의 값을 표준 에러 출력 스트림에 출력한다.
복잡한 SassScript를 작성할 때 디버깅하기에 유용하다.
* 개발중인 경우에만 사용. 개발완료시 삭제하기

### `@warn`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_6
`@warn`는 SassScript 표현식의 값을 표준 에러 출력 스트림에 출력한다.
라이브러리에 유용하다. 라이브러리 사용자에게 마이너한 믹스인 사용 실수를 수정하거나 삭제하라고 경고할 필요가 있을 때 사용한다.

`@warn`과 `@debug` 사이에는 주요한 두가지 차이점이 있다.
1. 경고는 `:quiet` Sass 옵션이나 `--quiet` 커맨드라인 옵션을 사용해 끌 수 있다.
2. 스타일시트 트레이스/추적?이 메세지와 함께 출력된다. 그래서 사용자가 어느 부분에서 경고가 발생했는지 확인할 수 있다. *css 결과물에 나온다는 건가?

### `@error`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_7
`@error`는 치명적 오류를 발생?던진다. 스택 추적과 함께 - 어디서 에러났는지 알려주는거 말하는 듯
믹스인과 함수에서 인수의 유효성을 검사할 때 유용하다.

* 세개 비교하기

***

## 조건 지시자와 표현식
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives__expressions
SassScript는 기본 조건 지시자와 표현식을 지원한다.
특정 조건에만 스타일을 포함하거나 같은 스타일을 변형을 주어 여러번 포함시킬때 사용한다.

노트: 조건 지시자는 고급 기능으로 매일 쓰는 흔한 것은 아니다.
믹스인에서 주로 사용하며, 본질적으로 유연성이 필요한 Compass 같은 라이브러리에서 특히 많이 볼 수 있다.

### `if()`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_8
빌트인 `if()` 함수는 조건에 맞게 두가지 가능한 결과물 중에 하나만 리턴한다.
어떤 스크립트 맥락에서든지 사용 할 수 있다.
정의되지 않을 수 있는 변수를 참조하거나 에러가 발생할 수 있는 계산을(예. 0으로 나누기) 할 수 있다.

### `@if`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_9
`@if` 지시자는 SassScript 표현식을 받으며, 표현식이 `false`나 `null`이 아닌 값을 반환하면, 그 안에 중첩된 스타일을 사용한다.

몇개의 `@else if` 문을 사용해 여러 조건에 따라 분기할 수 있고, `@else`문으로 조건외의 상황을 처리할 수 있다.
최상위 `@if` 문이 실패하면 작성 순서에 따라 성공할 때까지 `@else if` 조건문을 시도하며, 
모든 조건이 맞지 않고 마지막에 `@else` 문을 작성했을 경우 이 안의 스타일을 사용한다. 

***

### `@for`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10
`@for` 지시자는 스타일 세트를 반복해서 출력한다.
매 반복때 카운터 변수를 사용해 결과물을 조정할 수 있다.
이 지시자는 두가지 형식으로 사용할 수 있다.
`@for $var from <start> through <end>`
`@for $var from <start> to <end>`
키워드 `through`와 `to`만 다르다.
`$var`는 자유롭게 지은 이름을 사용할 수 있다. `$i` 처럼
`<start>` and `<end>`는 정수를 반환하는 SassScript 표현식이다.
`<start>` 가 `<end>` 보다 크다면 카운터는 감소하며.
`<start>` 가 `<end>` 보다 작다면 카운터는 증가하한다

`@for` 문은 `$var`에 범위안의 각각의 연속 번호를 할당한다.
`$var` 값을 사용해 작성한 스타일의 결과물을 만들어낸다.
*이때 끼워넣기를 사용함.

`from ... through` 형식에서는 `<start>` 와 `<end>`의 값을 포함한다.
`from ... to` 형식에서는 `<start>`의 값은 포함하지만 `<end>`의 값은 포함하지 않는다.


### `@each`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#each-directive
`@each` 지시자는 보통 `@each $var in <list or map>` 형식을 가진다.
`$var`는 자유롭게 지은 이름을 사용할 수 있다. `$length`나 `$name`처럼
`<list or map>`는 목록이나 맵을 반환하는 SassScript 표현식이다.

`@each` 규칙은 `$var`에 목록이나 맵의 각 아이템을 할당한다.
`$var` 값을 사용해 작성한 스타일의 결과물을 만들어낸다/출력한다.
*이때 끼워넣기를 사용함.


#### 다중 할당
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#each-multi-assign
`@each` 지시자는 다수의 변수를 사용할 수 있다.
`@each $var1, $var2, ... in <list>`
`<list>`가 2단 목록?이면 하위 목록의 각 아이템이 각 변수에 순서대로 할당된다.
* 목록 데이터형에 괄호를 사용하여 명확히 한다.

`@each $var1, $var2, ... in <map>`
맵은 이름-값 쌍을 하위 목록으로 가진 2단 목록과 동일하게 취급된다.
각 이름과 값에 변수를 할당한다.

### `@while`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_12
`@while` 지시자는 SassScript 표현식을 받아 `false`로 평가될 때까지 스타일을 반복해 출력한다.
`@for` 문에서 할 수 없는 더 복잡한 반복을 수행하는데 사용하며, 아주 드물게 사용된다. 
* `@while` 문 안에서 SassScript 표현식에 쓰인 변수를 재할당 할 수 있다.

***

## 믹스인 지시자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins
믹스인은 스타일시트 전반에서 재사용할 스타일을 정의하기 위해 사용한다.
`.float-left` 같은 비구조적인 클래스에 의존할 필요를 없애준다.
믹스인은 전체 CSS 규칙를 담을 수도 있으며, Sass 문서 어디서나 사용하는 무엇이든 포함할 수 있다.
인수도 받으며, 아주 적은 믹스인으로 넓은 범위의 스타일을 만들어낼 수 있다.

### 믹스인 정의: `@mixin`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#defining_a_mixin
믹스인은 `@mixin` 지시자와 함께 정의한다.
지시자 뒤에 믹스인 이름을 작성하고 선택적으로 인수를 작성한다.
블럭 안에 믹스인 내용을 포함한다.

믹스인은 선택자와 스타일 블럭을 포함할 수도 있고, 선택자 없이 스타일만 포함할수도 있다.
선택자에는 부모 참조 & 도 포함할 수 있다.

역사적 이유로(어떤 이유일까.. 궁금), 변수와 모든 Sass 식별자의 이름의 하이픈과 언더스코어는 교차사용이 가능하다. *믹스인, 변수에서도 나옴2
예로 `add-column`이라는 믹스인을 정의했다면, `add-column`와 `add_column` 둘 모두로 포함시킬 수 있다.

### 믹스인 포함: `@include`
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#including_a_mixin
믹스인은 `@include` 지시자를 사용해 포함시킬 수 있다.
이 지시자는 믹스인 이름을 받으며, 선택적으로 인수를 보낼 수 있다.
그리고 믹스인을 통해서 현재의 규칙에 포함시킬 스타일을 정의할 수도 있다.

믹스인은 문서 루트에, 즉 어떠한 규칙 외부에서도 포함시킬 수 있다.
(선택자 없이) 스타일 속성을 바로 작성하거나, 바로 부모 참조를 사용하지 않으면..(내부 부모참조는 가능)
자손 선택자 descendent selectors만 정의한 믹스인은 문서 최상위 레벨로 안전하게 믹스 된다?

믹스인 정의에는 다른 믹스인을 포함할 수 있다.

믹스인 정의에는 자신 믹수인을 포함할 수도 있다.
Sass 3.3 이전 버전에서는 믹스인 재귀 recursion가 금지된다. 즉 3.3 이상에서 사용 가능?

***

### 인수
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixin-arguments
믹스인은 인수로 SassScript 값을 취할 수 있다.
이 값은 믹스인이 포함될때 주어지며, 믹스인 안에서 변수로서 사용 가능하다.

믹스인은 정의할 때, 믹스인 이름 뒤에 괄호안에 콤마로 구분한 변수 이름이 인수이다.
믹스인을 포함할때도 마찬가지로 이름 뒤 괄호안에 값을 작성한다.

믹스인은 정의할 때, 인수는 기본값을 지정하려면 일반 변수 설정 문법을 사용한다.
믹스인을 포함할때 인수 값을 써넣지 않으면 기본값이 대신 사용된다.

#### 키워드 인수
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#keyword_arguments_2
믹스인은 포함할때 명시적 키워드 인수 explicit keyword arguments를 사용할 수 있다 (변수 이름 같이 쓰는 것)

덜 간결하지만 스타일시트를 읽기 더 쉽게 한다
그리고 많은 인수를 제공하는 함수가 더 유연하게 인터페이스를 표현하여 여러움없이 호출할 수 있다
  
명명된 인수 Named arguments 는 순서와 상관없이 작성할 수 있다
기본값을 가진 인수는 생략할 수 있다
명명된 인수가 변수 이름이므로, 하이픈과 언더스코어를 교차하여 사용할 수 있다. *믹스인, 변수에서도 나옴3

#### 변수 인수
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_arguments
어떤 경우에는 믹스인과 함수가 알수 없는 수의 인수를 받아야할 때도 있다
예로 `box-shadow`를 만드는 믹스인은 인수로 여러 쉐도우 값을 받을 수 있다
이런 경우를 위해 Sass는 "변수 인수 variable arguments"를 지원한다.
믹스인이나 함수 선언 끝에 위치한 인수로 남은 모든 인수를 목록 데이터타입으로 묶어서 받는다.
 이 인수는 일반 인수와 똑같이 보이지만 뒤에 `...`이 따른다
 * 값이 하나라도 목록형인가? / ()형 목록은 어떻게 ? / @each 를 쓸수 있나?
 
변수 인수는 키워드 인수도 포함하여 믹스인이나 함수에 넘길 수 있다
이는 `keywords($args)` 함수를 사용해서 구현하는데, 이 함수는 $없는 문자열을 값으로 바꿔 맵을 반환한다.

변수 인수는 믹스인은 호출할 때도 사용할 수 있다.
같은 문법을 사용해, 값의 목록을 확장하여 각 값이 분리된 인수로 넘겨진다.
또는 값의 맵으로 확장할 수도 있으며 각 이름-값 쌍은 각 키워드 인수로 취급된다
* 하나의 변수에 여러 값을 모아서 넘긴다 라고 알려줌

목록 하나와 맵 하나의 인수를 같이 넘길 수도 있는데, 목록이 먼저오고 맵이 나중에 와야한다
`@include colors($values..., $map...)`
* 왜? 키워드 인수와 일반 인수도 그런가, 일반 값은 순서대로 이후 키워드는 마지막에 와야하나부다

변수 인수는 특정 믹스인의 인수 시그니처 argument signature를 바꾸지 않으면서 스타일을 추가하기 위한 중첩 믹스인에서 사용할 수 있다.
이를 위해선 키워드 인수는 바로 감싸진 믹스인으로 넘겨져야 한다.

***

### 믹스인에 컨텐츠 블록 넘기기
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixin-content
믹스인 안에 있는 스타일 내부에 놓기위해 스타일 블럭을 넘기는 것도 가능하다
넘겨진 컨텐츠 블록은 믹스인 안에 `@content` 지시자가 위치한 곳에 대치된다

노트: `@content`가 다수 작성되거나 반복문 안에 있으면, 스타일 블록은 각 호출만큼 중복하여 작성된다.

#### 변수 범위와 컨텐츠 블록
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_scope_and_content_blocks
믹스인에 넘겨진 콘텐츠 블록은 믹스인 내부 범위가 아니라, 블록이 정의된 범위에서 평가된다.
즉 믹스인에 위치한 변수는 넘겨지는 스타일 블록에서 사용할 수 없으며, 
넘겨지는 스타일 블록에서 사용한 변수는 글로벌 변수나 속한 지역 변수의 값이 사용된다.

넘겨지는 블록안에 있는 변수와 믹스인은 그 자체로 넘어가는 것이아니라 값으로 변환한뒤 믹스인으로 넘겨진다고 이해하면 된다.

***

## 함수 지시자
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#function_directives
자신만의 함수를 정의해서 값이나 스크립트 맥락으로 사용할 수 있다

함수는 모든 글로벌 변수에 접근 가능(믹스인도 같음)하며 믹스인처럼 인수를 받을 수도 있다.
함수안에는 여러 구문을 가질 수 있으며, 반드시 `@return`을 이용해 함수의 값을 반환해야 한다.
 
 믹스인과 같이, Sass 정의 함수도 키워드 인수를 사용할 수 있다.
사용자 정의 함수는 믹스인과 동일하게 변수 인수를 지원한다.
 
정의 함수 이름에 프리픽스를 포함하여 Sass나 CSS의 기본 함수와 충돌을 막고, 구별을 명확히 하는 것을 추천한다
 `-acme-grid-width` 예시

역사적 이유로(어떤 이유일까.. 궁금), 변수와 모든 Sass 식별자의 이름의 하이픈과 언더스코어는 교차사용이 가능하다. *믹스인, 변수에서도 나옴4
예로 `add-column`이라는 함수을 정의했다면, `add-column`와 `add_column` 둘 모두로 호출할 수 있다.

***
## Sass 사용하기
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass

넘 어렴, 환경이 다름...
-> npm, jekyll 사용으로 나중에 내용추가 해야게뜸

***

# 치트시트 -> 단독 포스트로 분리 
- 한번에 보여주기 (내장 함수 제외)
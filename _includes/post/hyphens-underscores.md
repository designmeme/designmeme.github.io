##### 하이픈과 밑줄
변수 이름, 믹스인 이름, 함수 이름, 파일 이름 등 모든 Sass 식별자에서 하이픈 `-`과 밑줄(언더스코어) `_`는 교차하여 사용할 수 있습니다. 
아래 예시를 확인해주세요.

- `add-column` 믹스인을 `add_column`이라는 이름으로 호출할 수 있습니다.
- `$font_size`라는 변수를 `$font-size`로 사용할 수 있습니다.
- `map-get` 함수를 `map_get`으로 호출할 수 있습니다.
- `@import "layout-header";`와 `@import "layout_header";`는 같은 결과를 가져옵니다.
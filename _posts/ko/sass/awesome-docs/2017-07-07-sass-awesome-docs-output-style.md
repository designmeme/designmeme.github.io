---
subject:  sass-awesome-docs
name:     sass-awesome-docs-output-style
title:    Sass 출력 스타일
subtitle: 4가지 CSS 양식 중 마음에 드는 것을 선택하세요
tags:     sass, scss, css
image:    
date:             2017-07-07 10:23:00 +0900
last_modified_at: 2017-07-07 13:34:00 +0900
---

* Will be replaced with the ToC
{:toc}

Sass의 기본 CSS 출력 스타일인 중첩 스타일은 문서의 구조를 잘 반영한 매우 뛰어난 양식이지만,
사용자의 취향과 필요에 맞춰 Sass는 다양한 출력 스타일을 지원합니다.
[원문](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style){:.original-link target="_blank"}
{: .lead}

***

##### `:nested` 
**중첩 스타일**은 Sass의 기본 출력 스타일로, CSS 스타일과 HTML 문서의 구조를 잘 보여줍니다.
각 속성은 한 줄에 작성하고, 각 규칙은 중첩 정도에 따라 **들여쓰기**합니다.

중첩 스타일로 출력한 CSS
{: .code-label .code-label-css}
~~~ css
#main {
  color: #fff;
  background-color: #000; }
  #main p {
    width: 10em; }

.huge {
  font-size: 10em;
  font-weight: bold;
  text-decoration: underline; }
~~~

들여쓰기 덕분에 훑어만 봐도 스타일 구조를 쉽게 알 수 있으므로 큰 CSS 파일을 살펴볼 때 더욱 유용합니다.

***

##### `:expanded`
**확장 스타일**은 **사람**이 작성한 CSS 스타일과 거의 같다고 할 수 있습니다.
속성은 규칙 안에서 들여쓰기하여 각 한 줄에 작성하고, 규칙은 들여쓰기하지 않습니다.

확장 스타일로 출력한 CSS
{: .code-label .code-label-css}
~~~ css
#main {
  color: #fff;
  background-color: #000;
}
#main p {
  width: 10em;
}

.huge {
  font-size: 10em;
  font-weight: bold;
  text-decoration: underline;
}
~~~

***

##### `:compact`

**축약 스타일**은 중첩 스타일이나 확장 스타일보다 공간을 덜 차지합니다.
각 CSS 규칙을 단 한 줄에 표시하며 속한 모든 속성도 같은 줄에 작성합니다. 
줄마다 선택자가 앞에 있어서 속성보다 **선택자**에 더욱 집중하게 합니다.

축약 스타일로 출력한 CSS
{: .code-label .code-label-css}
~~~ css
#main { color: #fff; background-color: #000; }
#main p { width: 10em; }

.huge { font-size: 10em; font-weight: bold; text-decoration: underline; }
~~~

***

##### `:compressed`
**압축 스타일**은 최소한의 공간을 차지하도록 압축한 형태로, 사람이 읽는 상황을 고려하지 않습니다.
선택자를 구분하는 공백처럼 꼭 필요한 공백이나, 파일 끝에 하나의 새 줄 밖의 공백은 모두 삭제합니다.
또 다른 소소한 압축도 실행하는데, 색상 값을 최소 표현으로 변경합니다.

압축 스타일로 출력한 CSS
{: .code-label .code-label-css}
~~~ css
#main{color:#fff;background-color:#000}#main p{width:10em}.huge{font-size:10em;font-weight:bold;text-decoration:underline}
~~~

***

##### 어떻게 설정하나요
4가지 출력 스타일 중 하나를 선택해서 `:style` 옵션[^option] 값으로 설정하거나, 커맨드라인에서 `--style` 플래그와 함께 값을 입력합니다.

루비 온 레일즈 설정 예시
{: .code-label .code-label-ruby}
~~~ ruby
Sass::Plugin.options[:style] = :compressed
~~~
커맨드라인 설정 예시
{: .code-label}
~~~
sass --watch style.scss:style.css --style compressed
~~~

이외에도 개발 환경에 따라 각기 다른 방법으로 출력 스타일 옵션을 지정할 수 있습니다.


[^option]: 루비 온 레일즈*Ruby on Rails*{: .side-by-side} 나 랙*Rack*{: .side-by-side}등 루비 기반 환경설정 파일에서 [옵션](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#options)을 설정할 수 있습니다.
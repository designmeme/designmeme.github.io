---
subject:  sass-awesome-docs
name:     sass-interactive-shell
title:    Sass 대화형 셸
subtitle: SassScript 간편 실험실
excerpt:  SassScript 표현식을 스타일시트에서 작성하기 전에 대화형 셸을 이용하여 헷갈리는 데이터 유형이나, 애매하고 복잡한 변수, 함수 연산의 결과를 미리 확인하면 표현식의 결과를 명확히 할 수 있습니다.
tags:     [sass, scss, css, preprocessor, 전처리기, 스크립트, script, CLI, terminal, prompt, 테스트, 자료형, data type]
image:    
date:             2017-07-19 17:56:00 +0900
last_modified_at: 2017-07-24 22:23:00 +0900
redirect_to: https://heyjihye.com/blog/sass-interactive-shell/
---

* Will be replaced with the ToC
{:toc}

대화형 셸 *Interactive Shell*{:.side-by-side}은 SassScript를 아주 쉽게 실험해보고 결과를 확인해 볼 수 있는 작은 실험실입니다.
[원문](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Interactive_Shell){:.original-link target="_blank"}
{: .lead}

SassScript 표현식을 스타일시트에서 작성하기 전에 대화형 셸을 이용하여 **헷갈리는 데이터 유형**이나, **애매하고 복잡한 변수, 함수 연산의 결과**를 미리 확인하면 표현식의 결과를 명확히 할 수 있습니다.
또한, Sass 파일을 생성하지 않고 SassScript 표현식을 직접 작성하고 결과를 바로 얻을 수 있으므로 문법을 배우는 단계에서 **실습**하기에 좋습니다.

***

##### 대화형 셸 사용법

1. 맥의 '터미널'이나 윈도우의 '명령 프롬프트' 등 운영체제가 제공하는 기본 커맨드라인 인터페이스나, IDE가 내장한 커맨드라인 인터페이스를 엽니다.
2. `sass -i`를 입력한 후 `enter` 혹은 `return`을 누릅니다.[^install]
3. `>>`가 표시되며 대화형 셸이 열렸습니다!!
4. 실험할 SassScript 표현식을 입력한 후 `enter` 혹은 `return`을 누릅니다.
5. 셸이 결과를 보여줍니다.
6. 다음 줄에 `>>`가 표시되며 셸이 또 다른 입력을 기다립니다.
7. 계속 대화하듯이 SassScript 표현식을 시험해보세요 :)

대화형 셸 사용 예시
{: .code-label}
~~~ 
$ sass -i
>> 'Hello, Sassy World!'
"Hello, Sassy World!"
>> 10px + 5px / 2
12.5px
>> 10, 20 30
(10, (20 30))
>> random(100)
82
>>
~~~


[^install]: 대화형 셸을 사용하기 위해서는 Sass가 컴퓨터에 설치되어 있어야 합니다. 이 글을 읽는 사용자자 대부분이 이미 설치를 마치고 Sass를 사용하고 있을 테지만, 혹시 설치를 안 했다면 [Sass 설치하기](http://sass-lang.com/install)를 읽고 설치부터 차근히 시작해보세요.


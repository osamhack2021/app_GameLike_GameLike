# GameLike
![Logo](https://raw.githubusercontent.com/osamhack2021/app_web_GameLike_GameLike/master/logo.png?token=AFO66GTBZHV776LQYFH47LLBOYQOI)

## 프로젝트 소개
 많은 장병들이 군대에서 목표를 세우고, 그것을 달성하려고 노력합니다. 그를 위한 개인 정비 시간은 평일 3시간, 주말엔 12시간씩 주어집니다. 하지만 귀찮아서, 쉬어야 해서, 게임하느라 등등등 실제 개인 정비 시간을 계획한 대로 효율적으로 사용하기는 쉽지 않습니다. 
 
 GameLike는 장병들이 게임을 하듯 자신의 목표를 설정하고, 할 일을 계획하여 달성할 수 있도록 도와주는 플랫폼입니다. 자신의 목표를 설정하고, 목표 달성을 위해 계획을 세우고, 계획을 실천할 수 있게 도와줍니다. 그리고 계획을 잘 수행할 때 마다 더 성취감을 얻을 수 있고 다른 사람과 경쟁할 수 있게 하는 플랫폼입니다.


## 기능 설명
### 기능 구조

(순서도 사진 첨부)
 퀘스트 탭에서 퀘스트를 제작하고, 수행할 수 있습니다.
 퀘스트를 수행하면 경험치를 획득하고, 경험치가 일정량 이상 모이면 레벨업이 가능합니다.
 프로필과 순위를 통해 나의 레벨과 다른 사람의 레벨을 확인할 수 있습니다.
 

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* 안드로이드 버전 10(Q) 이상 사용

## 기술 스택 (Technique Used) 
### Server(back-end)
 - [javascript]
 - [Node.js](https://nodejs.org/ko/)
 - [express](https://expressjs.com/ko/)
 - [MySQL](https://www.mysql.com/)
 
### Front-end
 - [typescript](https://www.typescriptlang.org/)
 - [react.js](https://reactjs.org/)
 - [react-native](https://reactnative.dev/)
 - [redux](https://ko.redux.js.org/)
 - [react-navigation](https://reactnavigation.org/)
 - [axios](https://axios-http.com/)
 - [babel](https://babeljs.io/)
 - [eslint](https://eslint.org/)
 
### Cloud / Infra
 - [Docker](https://www.docker.com/)
 - [docker-compose](https://github.com/docker/compose)
 - [dockerize](https://github.com/jwilder/dockerize)

## 설치 안내 (Installation Process)

<p>step1. GameLike 저장소를 클론합니다.</p>


```bash
$ git clone https://github.com/osamhack2021/app_web_GameLike_GameLike.git
```
<br>
<p>step2. 클론된 폴더에서 서버 패키지를 설치합니다</p>

```bash
$ cd SERVER/
$ docker pull mysql
$ sudo docker-compose up --build
```

## 프로젝트 사용법 (Getting Started)
**마크다운 문법을 이용하여 자유롭게 기재**

잘 모를 경우
구글 검색 - 마크다운 문법
[https://post.naver.com/viewer/postView.nhn?volumeNo=24627214&memberNo=42458017](https://post.naver.com/viewer/postView.nhn?volumeNo=24627214&memberNo=42458017)

 편한 마크다운 에디터를 찾아서 사용
 샘플 에디터 [https://stackedit.io/app#](https://stackedit.io/app#)
 
## 팀 정보 (Team Information)
- 백승훈 (bagzaru3690@gmail.com), Github Id: bagzaru
- 조현수 (tacit3233@naver.com), Github Id: ChoHyeonSu
- 이헌우 (leehun456@ajou.ac.kr), Github Id: wannaBpark

## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/osamhack2021/app_web_GameLike_GameLike/blob/master/license.md)

This project is licensed under the terms of the MIT license.

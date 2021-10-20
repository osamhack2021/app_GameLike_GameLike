# GameLike
![Logo](https://raw.githubusercontent.com/osamhack2021/app_web_GameLike_GameLike/master/logo.png?token=AFO66GTBZHV776LQYFH47LLBOYQOI)

## 프로젝트 소개
 많은 장병들이 군대에서 목표를 세우고, 그것을 달성하려고 노력합니다. 그를 위한 개인 정비 시간은 평일 3시간, 주말엔 12시간씩 주어집니다. 하지만 귀찮아서, 쉬어야 해서, 게임하느라 등등등 실제 개인 정비 시간을 계획한 대로 효율적으로 사용하기는 쉽지 않습니다. 
 
 GameLike는 장병들이 게임을 하듯 자신의 목표를 설정하고, 할 일을 계획하여 달성할 수 있도록 도와주는 플랫폼입니다. 자신의 목표를 설정하고, 목표 달성을 위해 계획을 세우고, 계획을 실천할 수 있게 도와줍니다. 그리고 계획을 잘 수행할 때 마다 더 성취감을 얻을 수 있고 다른 사람과 경쟁할 수 있게 하는 플랫폼입니다.


## 기능 설명
### 기능 구조

(순서도 사진 첨부)
 * 퀘스트 탭에서 퀘스트를 제작하고, 수행할 수 있습니다.
 * 퀘스트를 수행하면 경험치를 획득하고, 경험치가 일정량 이상 모이면 레벨업이 가능합니다.
 * 개인 정비 시간에 어떤 일을 수행할 때마다, 퀘스트 수행 버튼을 눌러 경험치를 획득할 수 있습니다.
 * 어떤 일을 종료하게 된다면, 퀘스트 종료를 눌러 끝낼 수 있습니다.
 

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* 안드로이드 버전 10(Q) 이상 사용

## 기술 스택 (Technique Used) 
### Server(back-end)
 - javascript
 - [Node.js](https://nodejs.org/ko/)
 - [express](https://expressjs.com/ko/)
 - [MySQL](https://www.mysql.com/)
 
### Front-end
 - typescript
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

### 안드로이드 어플리케이션 설치 방법
 - [설치](https://github.com/osamhack2021/app_GameLike_GameLike/raw/master/APP/release/GameLike.apk)
 - 안드로이드 스마트폰에서 위 링크로 들어가 apk 파일을 설치합니다.
 
### 서버 패키지 설치 방법

<p>step0. Docker / docker-compose 설치를 진행합니다.</p>

 - [Get Docker](https://docs.docker.com/get-docker/)
 - [Get docker-compose](https://github.com/docker/compose/releases)

<p>step1. GameLike 저장소를 클론합니다.</p>


```bash
$ git clone https://github.com/osamhack2021/app_web_GameLike_GameLike.git
```
<br>
<p>step2. docker-compose 설정을 진행합니다.</p>

    // SERVER/docker-compose.yml 파일을 본인 환경에 맞게 수정합니다.
    // 컨테이너 명, 포트 정보, DB 정보를 수정합니다.
    // 기본 포트 (서버 : 80, DB: 3306)
    // 10/27 (수) 까지 제공된 VM에서만 서버 설정이 유효합니다.
    
<br>

<p>step3. 클론된 폴더로 이동하여 docker-compose로 컨테이너를 빌드 후 실행합니다.</p>

```bash
$ cd app_web_GameLike_GameLike/SERVER/
$ docker pull mysql
$ sudo docker-compose up --build
```
<br>

#### 이미 사용중인 포트일 경우
```bash
// 해당 프로세스의 ID를 lsof 명령어로 확인후 종료시킵니다.
$ sudo lsof -i tcp:포트명
$ sudo kill -9 PID(프로세스아이디)
```
#### Mysql이 실행중이거나 권한이 없을 경우
```bash
// 각각 서비스를 종료시키거나 해당 유저에 권한을 부여합니다.
$ service mysql stop
$ sudo usermod -aG docker ${USER}
```

## 프로젝트 사용법 (Getting Started)
**마크다운 문법을 이용하여 자유롭게 기재**

![Login](https://github.com/osamhack2021/app_GameLike_GameLike/blob/master/Login.png?raw=true)
 * 로그인 화면에서 아이디, 비밀번호를 입력해 로그인이 가능합니다.
 * 아이디가 없다면 회원가입도 가능합니다.

![Home](https://github.com/osamhack2021/app_GameLike_GameLike/blob/master/HomeScreen.png?raw=true)
 * 홈 화면 상단에서는 자신의 닉네임, 레벨을 확인 가능합니다. 
 * 중단에서는 레벨 바를 통해 현재 경험치, 레벨을 확인 가능합니다. 
 * 하단에서는 수행 버튼을 눌러 퀘스트 화면으로 넘어갈 수 있습니다.

![QuestMain](https://github.com/osamhack2021/app_GameLike_GameLike/blob/master/Quest1.png?raw=true)
 * 퀘스트 화면에서 오늘 할 퀘스트를 추가할 수 있습니다.
 * 또는 오늘 할 퀘스트를 선택하여 실행할 수 있습니다.

![QuestProgress](https://github.com/osamhack2021/app_GameLike_GameLike/blob/master/Quest2.png?raw=true)
 * 퀘스트 시작을 눌러 퀘스트를 진행할 수 있습니다.
 * 퀘스트 종료를 누르면 퀘스트가 종료되고 오늘 한 퀘스트를 돌아볼 수 있습니다.
 
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

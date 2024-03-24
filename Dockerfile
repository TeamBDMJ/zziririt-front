# 1단계: 빌드 환경 설정
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

# 2단계: 프로덕션 환경 설정
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#
## 가져올 부모 이미지를 정의
##FROM node:14
#FROM node:latest
## yarn 설치
##RUN npm install -g yarn
## 경로 설정하기
#WORKDIR /app
## package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
#COPY package.json .
## 명령어 실행 (의존성 설치)
##RUN npm install
#RUN yarn install
##RUN yarn global add serve
##RUN mkdir ./build
## 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
#COPY . .
##COPY ./build ./build
#
## 각각의 명령어들은 한줄 한줄씩 캐싱되어 실행된다.
## package.json의 내용은 자주 바뀌진 않을 거지만
## 소스 코드는 자주 바뀌는데
## npm install과 COPY . . 를 동시에 수행하면
## 소스 코드가 조금 달라질때도 항상 npm install을 수행해서 리소스가 낭비된다.
#
## 3000번 포트 노출
#EXPOSE 3000
#
## npm start 스크립트 실행
##CMD ["npm", "start"]
#CMD ["yarn", "start"]
##ENTRYPOINT ["serve", "-s", "build"]
#
## 그리고 Dockerfile로 docker 이미지를 빌드해야한다.
## $ docker build -t <이미지 이름> .
#    # $ docker run --name <컨테이너 이름> -v ${PWD}:/app -d -p 3000:3000 --rm <Dockerfile로 만든 이미지 이름>
## --rm 컨테이너 존재시 중지 후 다시 시작
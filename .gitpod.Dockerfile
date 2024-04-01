FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@27.0.6 -g
RUN npm i @learnpack/learnpack@2.1.39 -g && learnpack plugins:install @learnpack/dom@1.1.1

# node
FROM node

# папка
WORKDIR /app

# звідки корінь->корінь
COPY . .

# залежності
RUN npm instal

EXPOSE  3000

CMD [ "npm", "start" ]



# docker build .
#docker image
# docker run -d -p 4000:3000 
 


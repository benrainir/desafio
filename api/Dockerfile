FROM maven:3-openjdk-11

WORKDIR /api

# for development, we bind mount volumes; comment out for production
COPY . .

RUN mvn clean install

CMD mvn spring-boot:run
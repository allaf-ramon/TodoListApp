FROM maven:3.9.9-amazoncorretto-21-alpine AS build
COPY . .
RUN mvn package -DskipTests

FROM eclipse-temurin:21-alpine
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
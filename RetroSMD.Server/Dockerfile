#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
USER app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
RUN --mount=type=secret,id=secrets_json,dst=/etc/secrets/secrets.json
ARG BUILD_CONFIGURATION=Release
RUN apt-get update && \
      apt-get -y install sudo
RUN curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
RUN apt-get install -y nodejs
WORKDIR /src
COPY ["RetroSMD.Server/RetroSMD.Server.csproj", "RetroSMD.Server/"]
RUN dotnet restore "./RetroSMD.Server/RetroSMD.Server.csproj"
COPY . .
WORKDIR "/src/RetroSMD.Server"
RUN dotnet build "./RetroSMD.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./RetroSMD.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "RetroSMD.Server.dll"]

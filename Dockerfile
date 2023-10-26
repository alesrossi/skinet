# Serve Stage
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY prod .

EXPOSE 80

ENTRYPOINT ["dotnet", "API.dll"]
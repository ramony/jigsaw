# rem set JAVA_HOME=C:\Users\Ray\.jdks\openjdk-18.0.2.1
deployTag=$RANDOM
image=jigsaw:1.0.0-SNAPSHOT-$deployTag
npm run build
docker build -t $image .
docker tag $image 127.0.0.1:5000/$image
docker push 127.0.0.1:5000/$image
kubectl set image deployment/jigsaw  jigsaw=127.0.0.1:5000/$image
echo ${image} deployed
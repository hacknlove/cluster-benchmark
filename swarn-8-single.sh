docker service create --name benchmark --replicas=8 --publish 8080:8080 pykiss/node-cluster-benchmark:latest node single.js

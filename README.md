# Knative Microservice App
- It's a simple microservice application created to test knative services as a Kubernetes framework.
- Additionally, stress tests are added by means of the k6 tool.

# Requirements
- Docker
- Kubernetes
- Minikube or kind
- Knative
- K6

# How to run
## Knative Deploy
### Service 100% Traffic
To run the application you only need to download the content of the source code and run the script:

    kubectl apply -f service.yaml

This command will create a satisfactory response that the service has been created, then you can check the url of the service with: 

    kn service list

### Service 50% Traffic - Two versions
To run the application you need to do previously the "100% Traffic", after that you need to execute the following line of code:

    kubectl apply -f TrafficSplit.yaml

Note: If you want to change the responses in the service you can modify the env variables in TrafficSplit.yaml.

This command will create a satisfactory response that the service has been configured, then you can check the behavior of the service with this command:

    kn service describe microservice-app

This command will show the two revisions with 50% - 50% of traffic for each version with, additionally you can get the URL, the last thing left to test is the url of the service.

Two additional endpoints can be tested which would be /home /hello:

- http://microservice-app.default.{IP-Address}.sslip.io/hello
- http://microservice-app.default.{IP-Address}.sslip.io/home

## K6 Test

To run the stress tests performed in K6, we enter to modify the file k6-test.js in line 10, 11 and 12 with the url of the local service previously uploaded.

Finally we run the tests with the command:

    k6 run k6-test.js
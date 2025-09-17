Resources:

https://www.hellointerview.com/learn/system-design/in-a-hurry/how-to-prepare
https://blog.algomaster.io/t/system-design
https://www.youtube.com/watch?v=qSJAvd5Mgio
https://www.youtube.com/watch?v=EgJ7xts82Mg&list=PLTCrU9sGyburBw9wNOHebv9SjlE4Elv5a&index=12
https://www.youtube.com/playlist?list=PL5q3E8eRUieWtYLmRU3z94-vGRcwKr9tM



Key Concepts:

    Scalability Vertical Scaling (adding more resources to same machine)
                Horizontal Scaling (adding more machines)
  Performance:
    Latency
    Throughput
  
  Availability
  Relaiablity
  Consistency
Buildind Blocks:

  Application servers
  Load Balancers
  Databases
  Caching
  Message queue
  Storage
  Proxy Server
  CDN (content delivery network)


API Design Styles:

Rest (Representational state transfer)
GraphQL



Load Balancing:

Static Load Balancing (Round robin, weighted round robin,IP hash)
Dynamic Load Balancing (Least connections, weighted least connections, Least response time)

----------------------------------------------------------------------------------------------------------------------------------
    Caching (temporary storage)
TTL time to live

1 Cache aside
2 read through
3 write through
4 Write behind   
5 Near Cache
6 Refresh a head cache 

----------------------------------------------------------------------------------------------------------------------------------
    Hashing :
Normal Hashing 
Consisting Hashing


-----------------------------------------------------------------------------------------------------------------------------
Rate Limiting

Bucket
leacky bucket
 fixed window counter
sliding window

---------------------------------------------------------------------------------------

Sharding:
 Logical
Physical

Horizontal 
Vertical


Key based sharding
Range based sharding
Directory based sharding

-------------------------------------------------------------------------------------------------------------------------------
    Database replication
-------------------------------------------------------------------------------------------------------

    Performance Metrics:

Throughput
Bandwidth
Latency

-------------------------------------------------------------------------------------------------------------------------------------

    CAP Theorem

Consistency
Availability
Partition tolerance

----------------------------------------------------------------------------------------------------------------------------------------

    Questions:
URL shortner:

1  Gather Requirements:
    Functional requirements
    Non functional requirements
2 List core entities:
    List,collections,databases etc
3 API or interface
4 Data Flow
5 High level design
6 Deep dives



API Design
Database design
High level design
Deep dive





-----------------------------------------------------------------------------------------------------------------------------------
    1. *Define the Problem Space:*
     - Understand problem and define scope.
     - Clarify functional and non-functional requirements.
     - State assumptions and decisions explicitly.

  2. *Design the System at a High Level:*
     - Design APIs to define how clients access system resources.
     - Consider request parameters, response types, and communication between client and server.
     - Create a high-level design diagram to illustrate system architecture.

  3. *Deep Dive into the Design:*
     - Examine system components and relationships in detail.
     - Consider non-functional requirements' impact on design choices.
     - Present different design options with pros and cons.

  4. *Identify Bottlenecks and Scaling Opportunities:*
     - Assess system's ability to operate under various conditions and support growth.
     - Address single points of failure, data replication, global service support, and scalability.
     - Consider concepts like horizontal sharding, CDN, caching, rate limiting, and databases.

  5. *Review and Wrap Up:*
     - Summarize major decisions with justifications and trade-offs.
     - Ensure design satisfies all requirements.
     - Identify directions for further improvement.


----------------------------------------------------------------------------------------------------------------------------------------------
    API GateWay Responsibilities
1 Validate the request
2 Run middleware (auth,rate limiting etc)
3 Route to correct service
4 Transform the response




    










  

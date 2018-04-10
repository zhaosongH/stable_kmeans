# stable version K-means


## Getting Started

These code will enable a stable version k-means algorithm. Technically, we select the best classification result from several k-means results.

test code can be found in client/page1/index.js

core code can be found in client/page1/k-means.js

## Installing
to develop with full live reload. use:
```
npm install
npm start 
```

## Running the clustering
code are moduled as Kmeans, use:
```
let Kmeans = require("./k-means.js");
```

run stable k-means:
```
let data = [[1,2,3],
	[5,2,7],
	[3,8,7],
	[5,3,5],
	[2,6,9],
	[4,2,0],
	[2,5,2]]
Kmeans.Init(3,data)
let clusterdata = Kmeans.Scluster(300) //300 is the number of k-means runs, and we select the best result.
```

change data and continue iterating:
```
let data = [[1,2,3],
	[5,2,20],
	[3,8,2],
	[5,3,3],
	[2,6,9],
	[4,2,0],
	[2,5,2]]
kmeans.Init(3,data)
kmeans.setcenters(clusterdata.centroids)
clusterdata = kmeans.cluster(100)
```
		




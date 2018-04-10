1.	*  npm install
2.	* `npm start` to develop with full live reload.


3.  run stable k-means:
		kmeans.Init(3,[[1,2,3],
			[5,2,7],
			[3,8,7],
			[5,3,5],
			[2,6,9],
			[4,2,0],
			[2,5,2]])
		let clusterdata = kmeans.Scluster(300) //300 is the number of k-means runs, and we select the best result.

4.  change data and continue iterating:
		kmeans.Init(3,[[1,2,3],
			[5,2,20],
			[3,8,2],
			[5,3,3],
			[2,6,9],
			[4,2,0],
			[2,5,2]])
		kmeans.setcenters(clusterdata.centroids)
		clusterdata = kmeans.cluster(100)


test code can be found in client/page1/index.js

core code can be found in client/page1/k-means.js
moduled as Kmeans, use:
let kmeans = require("./k-means.js");

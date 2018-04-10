require("./index.scss");
require("../common/common.js");
let kmeans = require("./k-means.js");


//stable k-means
kmeans.Init(3,[[1,2,3],
	[5,2,7],
	[3,8,7],
	[5,3,5],
	[2,6,9],
	[4,2,0],
	[2,5,2]])
let clusterdata = kmeans.Scluster(300)
console.log(clusterdata)

//change data
kmeans.Init(3,[[1,2,3],
	[5,2,20],
	[3,8,2],
	[5,3,3],
	[2,6,9],
	[4,2,0],
	[2,5,2]])
kmeans.setcenters(clusterdata.centroids)
clusterdata = kmeans.cluster(100)
console.log(clusterdata);

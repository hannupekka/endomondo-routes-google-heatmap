endomondo-routes-google-heatmap
===============================

Uses Google Heatmap to visualize Endomondo training routes.

Obtaining Endomondo training data
=================================
Endomondo does not offer official API but data is still available through their mobile API. There are two ways to get data for this application:

* Use some 3rd party API, for example [https://github.com/isoteemu/sports-tracker-liberator](https://github.com/isoteemu/sports-tracker-liberator)
* Get data from ```http://api.mobile.endomondo.com/mobile/api/workout/list?&authToken=<YOUR_AUTH_TOKEN>&maxResults=1000&fields=feed_id,points```
 * To get ```YOUR_AUTH_TOKEN```, you can for example use API mentioned earlier.

How to use
==========
Get your data and save it as ```data.json```. Data is expected to be in the following format:
```javascript
{
  "more": false,
  "data": [
        {
            "id": 335337811,
            "points": [
                {
                    "time": "2014-05-06 13:56:11 UTC",
                    "lng": 23.747099,
                    "inst": 2,
                    "lat": 61.492392,
                    "dist": 0
                },
                {
                    "time": "2014-05-06 13:56:13 UTC",
                    "speed": 0,
                    "alt": 125.8,
                    "lng": 23.747099,
                    "lat": 61.492392,
                    "dist": 0
                },
                {...},
                {...},
            ]
        },
        {...},
        {...}
    ]
}

```

Notes
=====
Since Endomondo does not provide proper API and amount of datapoints is huge, this example only uses half of the data.

Demo
====
[http://dev.hannupekka.info/mapper/](http://dev.hannupekka.info/mapper)
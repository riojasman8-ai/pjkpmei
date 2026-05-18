(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08975AA7_3B29_7853_41CC_CA5C4AE81B3E",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09706A28_3B29_785D_4194_6FD39C6EC65F",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.58,
   "backwardYaw": -171.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F",
   "distance": 1
  },
  {
   "yaw": 178.54,
   "backwardYaw": 0.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B",
 "thumbnailUrl": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_t.jpg",
 "label": "DJI_0856",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28B3616B_3B17_48DD_41AE_37FE5FAC02E2",
  "this.overlay_28AD4D76_3B19_78B4_41A3_533337A3F64F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A1AD94A_3B29_78D2_41C0_15B8B51619F4",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A69C99A_3B29_7872_41B4_E56DC00627FB",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_78F6B631_534D_0EEF_41D1_4E6F014D6421",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_75F20BBD_52CD_3E41_41CA_B5B85E6F365F_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_75F20BBD_52CD_3E41_41CA_B5B85E6F365F_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_75F20BBD_52CD_3E41_41CA_B5B85E6F365F_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_75F20BBD_52CD_3E41_41CA_B5B85E6F365F_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 174.9,
   "backwardYaw": -7.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34596073_3AFB_48CE_41B0_150EA745FD79",
   "distance": 1
  },
  {
   "yaw": -1.71,
   "backwardYaw": 176.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345875C9_3AFB_4BDA_4195_70E646107781",
 "thumbnailUrl": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_t.jpg",
 "label": "DJI_0872",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_288231EE_3B1B_CBD4_41C4_AD82044D3440",
  "this.overlay_28A6FBED_3B1B_DFD4_41C3_74934A4B0258"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -1.18,
   "backwardYaw": -178.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34573723_3AFB_484D_41C5_8B9930C94C08",
   "distance": 1
  },
  {
   "yaw": 179.14,
   "backwardYaw": 0.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543",
 "thumbnailUrl": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_t.jpg",
 "label": "DJI_0847",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_295B74C3_3AE9_C9CD_41CD_32EADBF4631E",
  "this.overlay_284B071F_3B18_C874_41A5_3DE0FD65731D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09C14A5F_3B29_78F3_41C5_062BA35F516B",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -6.48,
   "backwardYaw": -174.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0",
   "distance": 1
  },
  {
   "yaw": -137.12,
   "backwardYaw": 2.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36",
   "distance": 1
  },
  {
   "yaw": 142.99,
   "backwardYaw": -35.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_352819B3_3AF8_F84E_41C8_7642F236331D",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427",
 "thumbnailUrl": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_t.jpg",
 "label": "DJI_0839",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28B0A3F1_3B18_CFCD_41C6_A804C82CFF3C",
  "this.overlay_28B8E27A_3B19_48BC_41CC_13590D8B12DE",
  "this.overlay_1A72F522_3B28_C84D_41C1_B0FB018E67F5"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_camera"
  },
  {
   "media": "this.panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_camera"
  },
  {
   "media": "this.panorama_34573723_3AFB_484D_41C5_8B9930C94C08",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34573723_3AFB_484D_41C5_8B9930C94C08_camera"
  },
  {
   "media": "this.panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_camera"
  },
  {
   "media": "this.panorama_3457519A_3AFB_487E_41B0_866888B28D6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3457519A_3AFB_487E_41B0_866888B28D6A_camera"
  },
  {
   "media": "this.panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_camera"
  },
  {
   "media": "this.panorama_3457BC12_3AFB_584E_41C1_87182D8F3021",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_camera"
  },
  {
   "media": "this.panorama_3456E154_3AFB_48CA_4190_F58FAFE88712",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_camera"
  },
  {
   "media": "this.panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_camera"
  },
  {
   "media": "this.panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_camera"
  },
  {
   "media": "this.panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_camera"
  },
  {
   "media": "this.panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_camera"
  },
  {
   "media": "this.panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_camera"
  },
  {
   "media": "this.panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_camera"
  },
  {
   "media": "this.panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_camera"
  },
  {
   "media": "this.panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_camera"
  },
  {
   "media": "this.panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_camera"
  },
  {
   "media": "this.panorama_352819B3_3AF8_F84E_41C8_7642F236331D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_352819B3_3AF8_F84E_41C8_7642F236331D_camera"
  },
  {
   "media": "this.panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_camera"
  },
  {
   "media": "this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_camera"
  },
  {
   "media": "this.panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_camera"
  },
  {
   "media": "this.panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_camera"
  },
  {
   "media": "this.panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_camera"
  },
  {
   "media": "this.panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_camera"
  },
  {
   "media": "this.panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_camera"
  },
  {
   "media": "this.panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_camera"
  },
  {
   "media": "this.panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_camera"
  },
  {
   "media": "this.panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_camera"
  },
  {
   "media": "this.panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_camera"
  },
  {
   "media": "this.panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_camera"
  },
  {
   "media": "this.panorama_34587AF2_3AFB_B9CE_419A_D633F258E143",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_camera"
  },
  {
   "media": "this.panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_camera"
  },
  {
   "media": "this.panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_camera"
  },
  {
   "media": "this.panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_camera"
  },
  {
   "media": "this.panorama_34596073_3AFB_48CE_41B0_150EA745FD79",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34596073_3AFB_48CE_41B0_150EA745FD79_camera"
  },
  {
   "media": "this.panorama_345875C9_3AFB_4BDA_4195_70E646107781",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345875C9_3AFB_4BDA_4195_70E646107781_camera"
  },
  {
   "media": "this.panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_camera"
  },
  {
   "media": "this.panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1",
   "camera": "this.panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "FadeOutEffect_78F67631_534D_0EEF_41D1_2F6F10F30CF3",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0852EA92_3B29_784D_41BE_FA3C12582BDD",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345875C9_3AFB_4BDA_4195_70E646107781_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_78ED962D_534D_0EF7_41D2_C014C0107352",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "id": "FadeOutEffect_78F53631_534D_0EEF_41C6_B7C75B12E62E",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.96,
   "backwardYaw": 173.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4",
 "thumbnailUrl": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_t.jpg",
 "label": "DJI_0863",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28996276_3B18_C8B4_41C6_30A16A52475A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_090959FA_3B29_7BBD_41CC_716CB5ECB449",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BE3193C_3B29_78B6_41C0_BD0CBA7E9B3B",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_78F56631_534D_0EEF_41D4_D9F4EA3B9B4A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_758DC548_52CF_0ACD_41C7_3FFAD71AC15E_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_758DC548_52CF_0ACD_41C7_3FFAD71AC15E_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_758DC548_52CF_0ACD_41C7_3FFAD71AC15E_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_758DC548_52CF_0ACD_41C7_3FFAD71AC15E_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A48697B_3B29_78B3_41A1_716BAD81C481",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AC189DC_3B29_7BF5_41C4_B0203251E92F",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_094F1A20_3B29_784E_41C5_43145291B6B4",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A30196F_3B29_78D2_41BE_326E52DB22B9",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "items": [
  {
   "media": "this.panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_camera"
  },
  {
   "media": "this.panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_camera"
  },
  {
   "media": "this.panorama_34573723_3AFB_484D_41C5_8B9930C94C08",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34573723_3AFB_484D_41C5_8B9930C94C08_camera"
  },
  {
   "media": "this.panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_camera"
  },
  {
   "media": "this.panorama_3457519A_3AFB_487E_41B0_866888B28D6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3457519A_3AFB_487E_41B0_866888B28D6A_camera"
  },
  {
   "media": "this.panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_camera"
  },
  {
   "media": "this.panorama_3457BC12_3AFB_584E_41C1_87182D8F3021",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_camera"
  },
  {
   "media": "this.panorama_3456E154_3AFB_48CA_4190_F58FAFE88712",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_camera"
  },
  {
   "media": "this.panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_camera"
  },
  {
   "media": "this.panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_camera"
  },
  {
   "media": "this.panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_camera"
  },
  {
   "media": "this.panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_camera"
  },
  {
   "media": "this.panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_camera"
  },
  {
   "media": "this.panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_camera"
  },
  {
   "media": "this.panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_camera"
  },
  {
   "media": "this.panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_camera"
  },
  {
   "media": "this.panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_camera"
  },
  {
   "media": "this.panorama_352819B3_3AF8_F84E_41C8_7642F236331D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_352819B3_3AF8_F84E_41C8_7642F236331D_camera"
  },
  {
   "media": "this.panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_camera"
  },
  {
   "media": "this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_camera"
  },
  {
   "media": "this.panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_camera"
  },
  {
   "media": "this.panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_camera"
  },
  {
   "media": "this.panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_camera"
  },
  {
   "media": "this.panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_camera"
  },
  {
   "media": "this.panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_camera"
  },
  {
   "media": "this.panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_camera"
  },
  {
   "media": "this.panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_camera"
  },
  {
   "media": "this.panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_camera"
  },
  {
   "media": "this.panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_camera"
  },
  {
   "media": "this.panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_camera"
  },
  {
   "media": "this.panorama_34587AF2_3AFB_B9CE_419A_D633F258E143",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_camera"
  },
  {
   "media": "this.panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_camera"
  },
  {
   "media": "this.panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_camera"
  },
  {
   "media": "this.panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_camera"
  },
  {
   "media": "this.panorama_34596073_3AFB_48CE_41B0_150EA745FD79",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_34596073_3AFB_48CE_41B0_150EA745FD79_camera"
  },
  {
   "media": "this.panorama_345875C9_3AFB_4BDA_4195_70E646107781",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345875C9_3AFB_4BDA_4195_70E646107781_camera"
  },
  {
   "media": "this.panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_camera"
  },
  {
   "media": "this.panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist, 37, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_camera"
  }
 ],
 "id": "ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09E5CA68_3B29_78DD_41C8_87C248ABB4F8",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_090399FA_3B29_7BBD_41C1_FB99A6FEE991",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_EDB1AC01_FD1E_143F_41E0_CF7D100094DC",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -7.74,
   "backwardYaw": 174.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345875C9_3AFB_4BDA_4195_70E646107781",
   "distance": 1
  },
  {
   "yaw": 175.65,
   "backwardYaw": -1.46,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34596073_3AFB_48CE_41B0_150EA745FD79",
 "thumbnailUrl": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_t.jpg",
 "label": "DJI_0871",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_288F5FF5_3B1B_77B4_41C8_65D53CF6AFA4",
  "this.overlay_28A48D8F_3B1B_5854_4186_EE523B12F3B7"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_099A6A38_3B29_78BE_41C5_76AA147414CC",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_78F0662F_534D_0EF3_41CF_7970A968DE61",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.94,
   "backwardYaw": 179.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B",
 "thumbnailUrl": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_t.jpg",
 "label": "DJI_0846",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_295350DF_3AE8_C9F4_41CB_E38778C07689"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A1E7944_3B29_78D6_41C8_DAB89BDD9B41",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "duration": 400,
 "id": "effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 176.41,
   "backwardYaw": -0.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1",
 "thumbnailUrl": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_t.jpg",
 "label": "DJI_0862",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28B58491_3B17_C84C_41C2_5D5060A0E336"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A74E98A_3B29_7852_41B5_5E76E05296E6",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 177.66,
   "backwardYaw": -9.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3",
   "distance": 1
  },
  {
   "yaw": -1.46,
   "backwardYaw": 175.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34596073_3AFB_48CE_41B0_150EA745FD79",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45",
 "thumbnailUrl": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_t.jpg",
 "label": "DJI_0870",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28819173_3B1B_48CC_4167_3C6FE5C2364E",
  "this.overlay_28A060DA_3B1B_49FC_4192_B643BACF7AA9"
 ]
},
{
 "duration": 500,
 "id": "FadeOutEffect_78F1462F_534D_0EF3_41CF_312AA3422C8C",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34596073_3AFB_48CE_41B0_150EA745FD79_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_78F66631_534D_0EEF_4195_EF5D1ECAB174",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08407A97_3B29_7872_41B5_32BEF778DF7B",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -21.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_080A1A77_3B29_78B2_41A8_D52E5939F5C4",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D1D683D_3B29_78B6_41A4_00197572FC10",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -171.53,
   "backwardYaw": 0.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B",
   "distance": 1
  },
  {
   "yaw": -3.28,
   "backwardYaw": -179.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F",
 "thumbnailUrl": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_t.jpg",
 "label": "DJI_0857",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28B44498_3B17_487C_4190_E67B2A02B197",
  "this.overlay_2865870B_3B18_C85C_41C6_C0576FC42CD9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -178.74,
   "backwardYaw": -1.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543",
   "distance": 1
  },
  {
   "yaw": -0.65,
   "backwardYaw": -168.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34573723_3AFB_484D_41C5_8B9930C94C08",
 "thumbnailUrl": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_t.jpg",
 "label": "DJI_0848",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_294B372C_3AE9_C854_41B5_E3699397E452",
  "this.overlay_28460AF1_3B18_F9CC_41B6_89059875052B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A62B99A_3B29_7872_41CA_8C02A6B68BBA",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08B52AB7_3B29_79B3_4192_80C4ED10368D",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34573723_3AFB_484D_41C5_8B9930C94C08_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.71,
   "backwardYaw": -174.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3",
   "distance": 1
  },
  {
   "yaw": -166.26,
   "backwardYaw": -3.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34587AF2_3AFB_B9CE_419A_D633F258E143",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4",
 "thumbnailUrl": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_t.jpg",
 "label": "DJI_0868",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28807D2C_3B18_B854_41B6_EC5E21427EEF",
  "this.overlay_28A6E9CF_3B18_DBD4_4160_84782A8439CE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 177.04,
   "backwardYaw": -1.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3456E154_3AFB_48CA_4190_F58FAFE88712",
   "distance": 1
  },
  {
   "yaw": 0.19,
   "backwardYaw": 158.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD",
 "thumbnailUrl": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_t.jpg",
 "label": "DJI_0854",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_294A6108_3AE8_C85C_41CD_320D215F261C",
  "this.overlay_28696958_3B19_F8FC_41B3_ADFB3C9A12B4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -1.58,
   "backwardYaw": 177.54,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3456E154_3AFB_48CA_4190_F58FAFE88712",
   "distance": 1
  },
  {
   "yaw": 179.67,
   "backwardYaw": -0.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3457BC12_3AFB_584E_41C1_87182D8F3021",
 "thumbnailUrl": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_t.jpg",
 "label": "DJI_0852",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_294E6834_3AE8_B8B4_41C5_C3F352AE88B2",
  "this.overlay_28485BAC_3B19_B854_418C_DE191FB93691"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_78F7762F_534D_0EF3_418F_4EA34475AF57",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "duration": 400,
 "id": "effect_1A65691F_310E_0014_41BF_C2605660352F",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08A50AB7_3B29_79B3_41BA_F7D44406FCEA",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AEF79EA_3B29_7BDD_41CC_544590454B84",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -6.73,
   "backwardYaw": -164,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513",
   "distance": 1
  },
  {
   "yaw": -174.05,
   "backwardYaw": -6.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0",
 "thumbnailUrl": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_t.jpg",
 "label": "DJI_0840",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28A5357E_3B19_48B4_41B7_BE008605D191",
  "this.overlay_28C566A6_3B19_4854_41C3_A63E768084E3"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 8.09,
   "backwardYaw": -166.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34",
   "distance": 1
  },
  {
   "yaw": 177.91,
   "backwardYaw": -9.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96",
 "thumbnailUrl": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_t.jpg",
 "label": "DJI_0843",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28AFC1AC_3B1F_4854_41A9_A3513DF586F0",
  "this.overlay_28CE8116_3B1F_4874_41CC_A8ED3990087A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ECB0811_3B29_784F_41B5_413993F004B0",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_18BBC752_310E_006C_41B5_0D8B802FB057",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09F66A61_3B29_78CF_4192_C4E61220C964",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 154.05,
   "backwardYaw": 5.83,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD",
   "distance": 1
  },
  {
   "yaw": -3.97,
   "backwardYaw": 167.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34587AF2_3AFB_B9CE_419A_D633F258E143",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632",
 "thumbnailUrl": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_t.jpg",
 "label": "DJI_0866",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_288CC307_3B19_4854_41C9_311F309004F0",
  "this.overlay_28A45E9A_3B19_587C_41CA_3F63D83F9F7D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -0.14,
   "backwardYaw": 179.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3457BC12_3AFB_584E_41C1_87182D8F3021",
   "distance": 1
  },
  {
   "yaw": -179.32,
   "backwardYaw": -1.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3457519A_3AFB_487E_41B0_866888B28D6A",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1",
 "thumbnailUrl": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_t.jpg",
 "label": "DJI_0851",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_294BF644_3AE9_48CB_41C0_656FF8B3EC89",
  "this.overlay_2846A0BA_3B19_49BC_4195_544EDF27B81E"
 ]
},
{
 "duration": 400,
 "id": "effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_64A2F141_5375_02AE_41CD_2997E77F9B40",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A7D298A_3B29_7852_41CB_F078432D9850",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -3.22,
   "backwardYaw": -166.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4",
   "distance": 1
  },
  {
   "yaw": 167.87,
   "backwardYaw": -3.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34587AF2_3AFB_B9CE_419A_D633F258E143",
 "thumbnailUrl": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_t.jpg",
 "label": "DJI_0867",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2886BE78_3B19_78BC_41B4_2EAA66F96112",
  "this.overlay_289AD85B_3B19_58FC_4174_0BB5B5955FDE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -178.32,
   "backwardYaw": -5.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1",
 "thumbnailUrl": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_t.jpg",
 "label": "DJI_0874",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28826E15_3B1B_B874_4194_DC6192C30F45"
 ]
},
{
 "duration": 500,
 "id": "FadeOutEffect_78F6262F_534D_0EF3_41D3_4DFC3A09636E",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 176.03,
   "backwardYaw": 0.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC",
   "distance": 1
  },
  {
   "yaw": -1.61,
   "backwardYaw": 165.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0",
 "thumbnailUrl": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_t.jpg",
 "label": "DJI_0860",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28B2C86C_3B17_D8D4_41B1_72C446E85E09",
  "this.overlay_2863E30F_3B17_4854_41C9_1F01CBD8187E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.02,
   "backwardYaw": 176.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0",
   "distance": 1
  },
  {
   "yaw": 175.28,
   "backwardYaw": -0.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC",
 "thumbnailUrl": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_t.jpg",
 "label": "DJI_0859",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28B5C506_3B17_4854_41BB_1483D66893D0",
  "this.overlay_28661386_3B17_4854_41C8_CA206B0D75FB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EFC181E_3B29_7875_41CD_1B6C799B7CD2",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0866EAA3_3B29_7853_41B4_1EF9E8F20458",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -179.7,
   "backwardYaw": -3.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F",
   "distance": 1
  },
  {
   "yaw": -0.29,
   "backwardYaw": 175.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0",
 "thumbnailUrl": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_t.jpg",
 "label": "DJI_0858",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28B4956F_3B17_48D4_41C3_F2C149FC2A35",
  "this.overlay_286A0087_3B18_C854_41B4_98CB900DEABC"
 ]
},
{
 "id": "ImageResource_78F0562F_534D_0EF3_41D2_C0F8A2F0BE5D",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_75E6B157_52CD_0ACA_41C5_0B743094B81F_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_75E6B157_52CD_0ACA_41C5_0B743094B81F_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_75E6B157_52CD_0ACA_41C5_0B743094B81F_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_75E6B157_52CD_0ACA_41C5_0B743094B81F_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A2B2976_3B29_78B2_41C3_D21B4C1F13F9",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_163FEAB2_310E_002C_416A_B20913F49C44",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -5.23,
   "backwardYaw": -178.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1",
   "distance": 1
  },
  {
   "yaw": 176.41,
   "backwardYaw": -1.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345875C9_3AFB_4BDA_4195_70E646107781",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F",
 "thumbnailUrl": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_t.jpg",
 "label": "DJI_0873",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_288A6EDB_3B1B_F9FC_41CC_B7A6037E4351",
  "this.overlay_28A41938_3B1B_D8BC_41C6_8838E9E72288"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 8.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A0EC956_3B29_78F5_41CD_5315A2F7F98B",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A05895C_3B29_78F5_41C3_31F867F90D79",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AFB69E5_3B29_7BD7_4175_B3518087EE5D",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -161.74,
   "backwardYaw": -0.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513",
   "distance": 1
  },
  {
   "yaw": -9.25,
   "backwardYaw": 177.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8",
 "thumbnailUrl": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_t.jpg",
 "label": "DJI_0842",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28AF9294_3B1F_C874_41B0_DA928221EA9C",
  "this.overlay_28CE6E95_3B1F_D874_41B5_2CF3A84DABF1"
 ]
},
{
 "duration": 500,
 "id": "FadeInEffect_78EDF62D_534D_0EF7_41C9_BBE4DAB51E03",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A03C963_3B29_78D3_41B0_005CC6C36EEB",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.13,
   "backwardYaw": -172.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3457519A_3AFB_487E_41B0_866888B28D6A",
   "distance": 1
  },
  {
   "yaw": -168.9,
   "backwardYaw": -0.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34573723_3AFB_484D_41C5_8B9930C94C08",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A",
 "thumbnailUrl": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_t.jpg",
 "label": "DJI_0849",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_294B38B4_3AE9_B9B4_4188_25A8ADACEB51",
  "this.overlay_284EF360_3B18_C8CC_41BC_E6D91F0B5F3A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09367A0D_3B29_7857_4189_3E239243A49B",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -12.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D17084D_3B29_78D6_4193_9E70A7C51D59",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0964BA28_3B29_785D_4191_CB9AC9204632",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_78F1962F_534D_0EF3_41C1_00477EADDD73",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_74A3EB07_52CB_1E57_41D2_FABBD1E8A46E_0_0.jpg",
   "width": 28874,
   "class": "ImageResourceLevel",
   "height": 14465
  },
  {
   "url": "media/zoomImage_74A3EB07_52CB_1E57_41D2_FABBD1E8A46E_0_1.jpg",
   "width": 16384,
   "class": "ImageResourceLevel",
   "height": 8207
  },
  {
   "url": "media/zoomImage_74A3EB07_52CB_1E57_41D2_FABBD1E8A46E_0_2.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4103
  },
  {
   "url": "media/zoomImage_74A3EB07_52CB_1E57_41D2_FABBD1E8A46E_0_3.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2051
  },
  {
   "url": "media/zoomImage_74A3EB07_52CB_1E57_41D2_FABBD1E8A46E_0_4.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_74A3EB07_52CB_1E57_41D2_FABBD1E8A46E_0_5.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_74A3EB07_52CB_1E57_41D2_FABBD1E8A46E_0_6.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "275%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "DJI_0845",
 "id": "panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94",
 "thumbnailUrl": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_28AF2AAC_3B18_F854_41C4_45C0FB167847"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_EDE31937_FD1A_1C43_41E4_B1DB0E7241B4",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -0.45,
   "backwardYaw": -161.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8",
   "distance": 1
  },
  {
   "yaw": -164,
   "backwardYaw": -6.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513",
 "thumbnailUrl": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_t.jpg",
 "label": "DJI_0841",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28A359E4_3B1F_BBD4_41B5_2C06FF2AC3FA",
  "this.overlay_28CC3A15_3B1F_D874_419B_0C4834F22261"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_092A8A13_3B29_7873_41A2_CD6204065639",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_78F0762F_534D_0EF3_41D4_1E0E1BCE93DD",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EF7482E_3B29_7855_41BA_47A631A296ED",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -37.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A94399A_3B29_7872_41C5_A6555099B5F0",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08397A77_3B29_78B2_41C6_9D5E853615AC",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A3EB969_3B29_78DF_41C7_A2BB975D6AE4",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ADAF9D0_3B29_7BCE_41B0_9741AEE1C1AC",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08713A9B_3B29_7872_41B9_80D3976611B6",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A5DE97B_3B29_78B3_41C2_98777752C61E",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09896A38_3B29_78BE_41CD_3A3EA2AA72FA",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 177.54,
   "backwardYaw": -1.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3457BC12_3AFB_584E_41C1_87182D8F3021",
   "distance": 1
  },
  {
   "yaw": -1.64,
   "backwardYaw": 177.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3456E154_3AFB_48CA_4190_F58FAFE88712",
 "thumbnailUrl": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_t.jpg",
 "label": "DJI_0853",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_294ACC47_3AE8_D8D5_41C5_83678A2C391B",
  "this.overlay_285BEC21_3B19_D84D_41AC_CE2EFEA6011C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09BE2A38_3B29_78BE_41BC_6297A272AAD9",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A8099B6_3B29_7BB5_41B0_4ED71FE39611",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 2.31,
   "backwardYaw": -137.12,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427",
   "distance": 1
  },
  {
   "yaw": 83.71,
   "backwardYaw": -96.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_352819B3_3AF8_F84E_41C8_7642F236331D",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36",
 "thumbnailUrl": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_t.jpg",
 "label": "DJI_0838",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28A1AEF0_3B1B_59CC_41CB_301FCC6111B7",
  "this.overlay_28C27DFF_3B18_BBB4_41BB_FD3278F092D9"
 ]
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_18885C2A_310A_003C_41B2_9B60A3A66C9F",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "duration": 400,
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09589A19_3B29_787F_41C2_1A8EFE323918",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 42.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09D21A58_3B29_78FD_41C6_03A9BB8A429A",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "duration": 500,
 "id": "FadeOutEffect_78F7062F_534D_0EF3_41C9_1CFFA422A6E1",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -0.96,
   "backwardYaw": 176.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1",
   "distance": 1
  },
  {
   "yaw": 165.48,
   "backwardYaw": -1.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5",
 "thumbnailUrl": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_t.jpg",
 "label": "DJI_0861",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28B5F674_3B17_C8B4_41C8_05D772CDA965",
  "this.overlay_28546EE3_3B17_59CC_41AD_D2F26F5AD344"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -35.37,
   "backwardYaw": 142.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427",
   "distance": 1
  },
  {
   "yaw": -96.17,
   "backwardYaw": 83.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_352819B3_3AF8_F84E_41C8_7642F236331D",
 "thumbnailUrl": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_t.jpg",
 "label": "DJI_0837",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_289E3B65_3B1B_B8D5_41AC_22211CE81B1B",
  "this.overlay_28D3566A_3B1B_48DC_41A1_48DCC10FDE36"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AB549BA_3B29_7BBD_41BE_E463DD0BFC14",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ED047FE_3B29_77B2_41CB_7A29640281E3",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.8,
   "backwardYaw": 167.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD",
   "distance": 1
  },
  {
   "yaw": 173.64,
   "backwardYaw": -2.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF",
 "thumbnailUrl": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_t.jpg",
 "label": "DJI_0864",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28647836_3B19_B8B4_41C5_95429E298C1F",
  "this.overlay_28A89D3F_3B19_D8B4_41C5_3F3E73BC95C8"
 ]
},
{
 "duration": 500,
 "id": "FadeInEffect_78F57631_534D_0EEF_41D4_0CA899B851E2",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_085DBA8A_3B29_785D_41C1_66F953E05026",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A56E97B_3B29_78B3_41B0_DA0999087EA1",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0942AA26_3B29_7852_41C6_4E17BB2396F0",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_64A17141_5375_02AE_41D1_39CD203154A1",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_081AFA6F_3B29_78D3_41AE_B0D05C077515",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3457519A_3AFB_487E_41B0_866888B28D6A_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08873AA7_3B29_7853_4181_F227CBDCACB5",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_082E5A84_3B29_7855_41CC_73B34E58014E",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_F2D95D32_FD1A_145D_41DF_3B15A8774774",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 172.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AAF09C2_3B29_7BCD_41CC_DC502BAD3838",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_352819B3_3AF8_F84E_41C8_7642F236331D_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A8909AE_3B29_7855_41C1_33B6057C908A",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_164A1542_310E_006C_41C8_B7C2AB9D709D",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AA039CA_3B29_7BDD_41C6_5A07C74DB4E4",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_78F1A62F_534D_0EF3_418D_0D2E6D2C68DE",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94"
  },
  {
   "yaw": -166.26,
   "backwardYaw": 8.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34",
 "thumbnailUrl": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_t.jpg",
 "label": "DJI_0844",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28AD4995_3B1F_5874_419C_05312EE39B3B",
  "this.overlay_28D015A7_3B18_C854_41BA_0879241B527C"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -174.8,
   "backwardYaw": -2.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4",
   "distance": 1
  },
  {
   "yaw": -9.25,
   "backwardYaw": 177.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3",
 "thumbnailUrl": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_t.jpg",
 "label": "DJI_0869",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2880C9E5_3B18_FBD4_41B9_B45D9528DD79",
  "this.overlay_28B6F961_3B18_D8CF_419C_DFB23CCB42C1"
 ]
},
{
 "id": "ImageResource_78EDE62D_534D_0EF7_4187_ADA4E5FD321E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_74BC4FCF_52CB_15D3_41D0_5B8229E7640F_0_0.jpg",
   "width": 28874,
   "class": "ImageResourceLevel",
   "height": 14465
  },
  {
   "url": "media/zoomImage_74BC4FCF_52CB_15D3_41D0_5B8229E7640F_0_1.jpg",
   "width": 16384,
   "class": "ImageResourceLevel",
   "height": 8207
  },
  {
   "url": "media/zoomImage_74BC4FCF_52CB_15D3_41D0_5B8229E7640F_0_2.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4103
  },
  {
   "url": "media/zoomImage_74BC4FCF_52CB_15D3_41D0_5B8229E7640F_0_3.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2051
  },
  {
   "url": "media/zoomImage_74BC4FCF_52CB_15D3_41D0_5B8229E7640F_0_4.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_74BC4FCF_52CB_15D3_41D0_5B8229E7640F_0_5.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_74BC4FCF_52CB_15D3_41D0_5B8229E7640F_0_6.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 167.36,
   "backwardYaw": 0.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF",
   "distance": 1
  },
  {
   "yaw": 5.83,
   "backwardYaw": 154.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD",
 "thumbnailUrl": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_t.jpg",
 "label": "DJI_0865",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2892440F_3B19_C854_41C5_89112E19B1F5",
  "this.overlay_289A2F3F_3B19_D8B4_41BA_5453AE54AD4C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -12.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09AF8A48_3B29_78DE_41B4_6CE2471A87F9",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2A237CC9_317A_007D_4176_36E090D2269C",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_EDB05026_FD1A_0C44_41EA_7A7383BCF1B7",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -172.16,
   "backwardYaw": -2.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A",
   "distance": 1
  },
  {
   "yaw": -1.4,
   "backwardYaw": -179.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3457519A_3AFB_487E_41B0_866888B28D6A",
 "thumbnailUrl": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_t.jpg",
 "label": "DJI_0850",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_294C2EF5_3AE9_59B5_41CB_369C4137BFF2",
  "this.overlay_2849F513_3B19_484C_41C1_416683B88DE2"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_78F6062F_534D_0EF3_419A_022615D38E0E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_7A9F7FBC_52CD_1641_41D4_170E7E3B12D8_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_7A9F7FBC_52CD_1641_41D4_170E7E3B12D8_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_7A9F7FBC_52CD_1641_41D4_170E7E3B12D8_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_7A9F7FBC_52CD_1641_41D4_170E7E3B12D8_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -6.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AE1A9EA_3B29_7BDD_41CD_78AFD834341E",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A10D950_3B29_78CD_41B0_1E7109DD5F16",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_78F6162F_534D_0EF3_41CE_37B00E28F37C",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "id": "ImageResource_78F7662F_534D_0EF3_41C1_84A370969066",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_7A03A0AE_52CD_0A5C_41D0_BB301A32181B_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_7A03A0AE_52CD_0A5C_41D0_BB301A32181B_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_7A03A0AE_52CD_0A5C_41D0_BB301A32181B_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_7A03A0AE_52CD_0A5C_41D0_BB301A32181B_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.6,
   "backwardYaw": 178.54,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B",
   "distance": 1
  },
  {
   "yaw": 158.7,
   "backwardYaw": 0.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD",
   "distance": 1
  }
 ],
 "hfovMin": "275%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69",
 "thumbnailUrl": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_t.jpg",
 "label": "DJI_0855",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_29495138_3AE8_C8BC_41C5_4DF6D5556F15",
  "this.overlay_2868A89C_3B19_B87B_41C0_4954AB8A4D32"
 ]
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_112869ED_311E_0034_41C2_70A247245BB7",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ACC89D6_3B29_7BF2_41C8_F038489200AA",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09DD3A48_3B29_78DE_41AC_7913F918F091",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08DB1AB7_3B29_79B3_41BE_FA2308324069",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EE8382E_3B29_7855_41C3_305C570B76DC",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_camera",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_091589EA_3B29_7BDD_41C9_9425BC934107",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BE63934_3B29_78B5_41A4_409B4C559280",
 "manualZoomSpeed": 4,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_1622AA86_310A_00F4_41A8_DBA0885BA83A",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58",
  "this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC",
  "this.Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83C8239_F8DE_01A1_41D3_401F7AD1E733",
 "class": "Container",
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "cursor": "hand",
 "maxHeight": 128,
 "maxWidth": 128,
 "toolTipShadowSpread": 0,
 "id": "IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": "0%",
 "width": 38,
 "toolTipOpacity": 1,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipBorderColor": "#767676",
 "toolTipTextShadowColor": "#000000",
 "iconURL": "skin/IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E.png",
 "toolTip": "Fullscreen",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 25,
 "top": "0.44%",
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "data": {
  "name": "IconButton1493"
 },
 "horizontalAlign": "center"
},
{
 "maxHeight": 121,
 "maxWidth": 480,
 "id": "Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "0%",
 "width": "9.955%",
 "borderSize": 0,
 "url": "skin/Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6.jpg",
 "minHeight": 1,
 "top": "0.22%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "4.741%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image132788"
 },
 "horizontalAlign": "center"
},
{
 "itemThumbnailShadowColor": "#000000",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "scrollBarColor": "#FFFFFF",
 "id": "ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C",
 "class": "ThumbnailList",
 "right": "0.3%",
 "width": 132.03,
 "itemLabelHorizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailOpacity": 1,
 "minHeight": 20,
 "itemThumbnailShadowOpacity": 0.27,
 "verticalAlign": "top",
 "minWidth": 20,
 "itemPaddingRight": 3,
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "height": "94.377%",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.33,
 "itemThumbnailBorderRadius": 5,
 "shadow": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "paddingRight": 20,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "playList": "this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist",
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "0.7%",
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailScaleMode": "fit_outside",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 13,
 "paddingBottom": 10,
 "itemThumbnailShadowVerticalLength": 3,
 "itemLabelGap": 8,
 "itemThumbnailShadow": true,
 "horizontalAlign": "left",
 "itemThumbnailWidth": 75,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "UIComponent",
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent65832"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "ZoomImage",
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage65833"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton65834"
 },
 "iconWidth": 20,
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "right": 10,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "borderSize": 0,
 "borderColor": "#000000",
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "layout": "horizontal",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "horizontalAlign": "center"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.58,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.11,
   "yaw": 0.58
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F, this.camera_0A0EC956_3B29_78F5_41CD_5315A2F7F98B); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B3616B_3B17_48DD_41AE_37FE5FAC02E2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.58,
   "yaw": 0.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0_HS_1_0.png",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ]
   },
   "hfov": 5.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.6,
   "yaw": 178.54
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69, this.camera_0A05895C_3B29_78F5_41C3_31F867F90D79); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28AD4D76_3B19_78B4_41A3_533337A3F64F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.66,
   "yaw": 178.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.75,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.98,
   "yaw": 174.9
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34596073_3AFB_48CE_41B0_150EA745FD79, this.camera_0AAF09C2_3B29_7BCD_41CC_DC502BAD3838); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_288231EE_3B1B_CBD4_41C4_AD82044D3440",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.75,
   "yaw": 174.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.8,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.72,
   "yaw": -1.71
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F, this.camera_0AA039CA_3B29_7BDD_41C6_5A07C74DB4E4); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A6FBED_3B1B_DFD4_41C3_74934A4B0258",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -1.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345875C9_3AFB_4BDA_4195_70E646107781_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.73,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.58,
   "yaw": -1.18
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34573723_3AFB_484D_41C5_8B9930C94C08, this.camera_0A30196F_3B29_78D2_41BE_326E52DB22B9); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_295B74C3_3AE9_C9CD_41CD_32EADBF4631E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.73,
   "yaw": -1.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0_HS_1_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ]
   },
   "hfov": 3.95,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.51,
   "yaw": 179.14
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B, this.camera_0A2B2976_3B29_78B2_41C3_D21B4C1F13F9); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_284B071F_3B18_C874_41A5_3DE0FD65731D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.95,
   "yaw": 179.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.4,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.26,
   "yaw": 142.99
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_352819B3_3AF8_F84E_41C8_7642F236331D, this.camera_0A1E7944_3B29_78D6_41C8_DAB89BDD9B41); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B0A3F1_3B18_CFCD_41C6_A804C82CFF3C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.4,
   "yaw": 142.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.48,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22,
   "yaw": -137.12
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36, this.camera_0BE3193C_3B29_78B6_41C0_BD0CBA7E9B3B); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B8E27A_3B19_48BC_41CC_13590D8B12DE",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.48,
   "yaw": -137.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_1_HS_2_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 9.06,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -7.68,
   "yaw": -6.48
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0, this.camera_0BE63934_3B29_78B5_41A4_409B4C559280); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1A72F522_3B28_C84D_41C1_B0FB018E67F5",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.06,
   "yaw": -6.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.55,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.75,
   "yaw": -2.96
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF, this.camera_0AE1A9EA_3B29_7BDD_41CD_78AFD834341E); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28996276_3B18_C8B4_41C6_30A16A52475A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.55,
   "yaw": -2.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.62,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.49,
   "yaw": -7.74
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345875C9_3AFB_4BDA_4195_70E646107781, this.camera_0A8099B6_3B29_7BB5_41B0_4ED71FE39611); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_288F5FF5_3B1B_77B4_41C8_65D53CF6AFA4",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.62,
   "yaw": -7.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.71,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.73,
   "yaw": 175.65
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45, this.camera_0AB549BA_3B29_7BBD_41BE_E463DD0BFC14); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A48D8F_3B1B_5854_4186_EE523B12F3B7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.71,
   "yaw": 175.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596073_3AFB_48CE_41B0_150EA745FD79_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.73,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.58,
   "yaw": 0.94
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543, this.camera_0AEF79EA_3B29_7BDD_41CC_544590454B84); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_295350DF_3AE8_C9F4_41CB_E38778C07689",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.73,
   "yaw": 0.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345CBCCE_3AFB_59D6_41B1_463956AA8E3B_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 154
     }
    ]
   },
   "hfov": 4.67,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.26,
   "yaw": 176.41
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5, this.camera_0A62B99A_3B29_7872_41CA_8C02A6B68BBA); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B58491_3B17_C84C_41C2_5D5060A0E336",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.67,
   "yaw": 176.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.62,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.49,
   "yaw": -1.46
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34596073_3AFB_48CE_41B0_150EA745FD79, this.camera_0EE8382E_3B29_7855_41C3_305C570B76DC); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28819173_3B1B_48CC_4167_3C6FE5C2364E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.62,
   "yaw": -1.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.23,
   "yaw": 177.66
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3, this.camera_0EF7482E_3B29_7855_41BA_47A631A296ED); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A060DA_3B1B_49FC_4192_B643BACF7AA9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.68,
   "yaw": 177.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.22,
   "yaw": -3.28
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0, this.camera_0A69C99A_3B29_7872_41B4_E56DC00627FB); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B44498_3B17_487C_4190_E67B2A02B197",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -3.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0_HS_1_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "hfov": 6.15,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.88,
   "yaw": -171.53
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B, this.camera_0A74E98A_3B29_7852_41B5_5E76E05296E6); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2865870B_3B18_C85C_41C6_C0576FC42CD9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.15,
   "yaw": -171.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.69,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.77,
   "yaw": -0.65
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A, this.camera_082E5A84_3B29_7855_41CC_73B34E58014E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_294B372C_3AE9_C854_41B5_E3699397E452",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.69,
   "yaw": -0.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0_HS_1_0.png",
      "width": 143,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ]
   },
   "hfov": 6.05,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.21,
   "yaw": -178.74
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3451C1FD_3AFB_4BBA_41A3_BC0C41C15543, this.camera_08397A77_3B29_78B2_41C6_9D5E853615AC); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28460AF1_3B18_F9CC_41B6_89059875052B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.05,
   "yaw": -178.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34573723_3AFB_484D_41C5_8B9930C94C08_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.25,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.52,
   "yaw": -166.26
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34587AF2_3AFB_B9CE_419A_D633F258E143, this.camera_0ACC89D6_3B29_7BF2_41C8_F038489200AA); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28807D2C_3B18_B854_41B6_EC5E21427EEF",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.25,
   "yaw": -166.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.65,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.99,
   "yaw": -2.71
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3, this.camera_0ADAF9D0_3B29_7BCE_41B0_9741AEE1C1AC); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A6E9CF_3B18_DBD4_4160_84782A8439CE",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.65,
   "yaw": -2.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.58,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.06,
   "yaw": 0.19
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69, this.camera_080A1A77_3B29_78B2_41A8_D52E5939F5C4); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_294A6108_3AE8_C85C_41CD_320D215F261C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.58,
   "yaw": 0.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0_HS_1_0.png",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "hfov": 5.69,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.59,
   "yaw": 177.04
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3456E154_3AFB_48CA_4190_F58FAFE88712, this.camera_081AFA6F_3B29_78D3_41AE_B0D05C077515); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28696958_3B19_F8FC_41B3_ADFB3C9A12B4",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.69,
   "yaw": 177.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.91,
   "yaw": -1.58
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3456E154_3AFB_48CA_4190_F58FAFE88712, this.camera_090399FA_3B29_7BBD_41C1_FB99A6FEE991); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_294E6834_3AE8_B8B4_41C5_C3F352AE88B2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.66,
   "yaw": -1.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0_HS_1_0.png",
      "width": 128,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "hfov": 5.33,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.74,
   "yaw": 179.67
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1, this.camera_09367A0D_3B29_7857_4189_3E239243A49B); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28485BAC_3B19_B854_418C_DE191FB93691",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.33,
   "yaw": 179.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457BC12_3AFB_584E_41C1_87182D8F3021_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.05,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.28,
   "yaw": -174.05
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427, this.camera_0A7D298A_3B29_7852_41CB_F078432D9850); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A5357E_3B19_48B4_41B7_BE008605D191",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.05,
   "yaw": -174.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.86,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.21,
   "yaw": -6.73
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513, this.camera_0A48697B_3B29_78B3_41A1_716BAD81C481); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28C566A6_3B19_4854_41C3_A63E768084E3",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.86,
   "yaw": -6.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.8,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.72,
   "yaw": 8.09
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34, this.camera_0866EAA3_3B29_7853_41B4_1EF9E8F20458); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28AFC1AC_3B1F_4854_41A9_A3513DF586F0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.8,
   "yaw": 8.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 9.12,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.17,
   "yaw": 177.91
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8, this.camera_08975AA7_3B29_7853_41CC_CA5C4AE81B3E); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28CE8116_3B1F_4874_41CC_A8ED3990087A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.12,
   "yaw": 177.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.76,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.73,
   "yaw": 154.05
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD, this.camera_0D1D683D_3B29_78B6_41A4_00197572FC10); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_288CC307_3B19_4854_41C9_311F309004F0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.76,
   "yaw": 154.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.75,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.98,
   "yaw": -3.97
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34587AF2_3AFB_B9CE_419A_D633F258E143, this.camera_0D17084D_3B29_78D6_4193_9E70A7C51D59); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A45E9A_3B19_587C_41CA_3F63D83F9F7D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.75,
   "yaw": -3.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.57,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.38,
   "yaw": -0.14
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3457BC12_3AFB_584E_41C1_87182D8F3021, this.camera_0A5DE97B_3B29_78B3_41C2_98777752C61E); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_294BF644_3AE9_48CB_41C0_656FF8B3EC89",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.57,
   "yaw": -0.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0_HS_1_0.png",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "hfov": 6.98,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.08,
   "yaw": -179.32
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3457519A_3AFB_487E_41B0_866888B28D6A, this.camera_0A56E97B_3B29_78B3_41B0_DA0999087EA1); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2846A0BA_3B19_49BC_4195_544EDF27B81E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -179.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.62,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.49,
   "yaw": 167.87
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632, this.camera_09E5CA68_3B29_78DD_41C8_87C248ABB4F8); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2886BE78_3B19_78BC_41B4_2EAA66F96112",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.62,
   "yaw": 167.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.65,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.99,
   "yaw": -3.22
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4, this.camera_09F66A61_3B29_78CF_4192_C4E61220C964); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_289AD85B_3B19_58FC_4174_0BB5B5955FDE",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.65,
   "yaw": -3.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34587AF2_3AFB_B9CE_419A_D633F258E143_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.87,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.96,
   "yaw": -178.32
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F, this.camera_09BE2A38_3B29_78BE_41BC_6297A272AAD9); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28826E15_3B1B_B874_4194_DC6192C30F45",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.87,
   "yaw": -178.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.34,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.56,
   "yaw": -1.61
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5, this.camera_08DB1AB7_3B29_79B3_41BE_FA2308324069); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B2C86C_3B17_D8D4_41B1_72C446E85E09",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.34,
   "yaw": -1.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0_HS_1_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 148
     }
    ]
   },
   "hfov": 6.11,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.6,
   "yaw": 176.03
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC, this.camera_08A50AB7_3B29_79B3_41BA_F7D44406FCEA); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2863E30F_3B17_4854_41C9_1F01CBD8187E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.11,
   "yaw": 176.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.55,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.87,
   "yaw": 0.02
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0, this.camera_08873AA7_3B29_7853_4181_F227CBDCACB5); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B5C506_3B17_4854_41BB_1483D66893D0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.55,
   "yaw": 0.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0_HS_1_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ]
   },
   "hfov": 6.31,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.51,
   "yaw": 175.28
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0, this.camera_08B52AB7_3B29_79B3_4192_80C4ED10368D); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28661386_3B17_4854_41C8_CA206B0D75FB",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.31,
   "yaw": 175.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.51,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.77,
   "yaw": -0.29
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345640EE_3AFB_C9D7_41C1_5891F5468BBC, this.camera_0964BA28_3B29_785D_4191_CB9AC9204632); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B4956F_3B17_48D4_41C3_F2C149FC2A35",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.51,
   "yaw": -0.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0_HS_1_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ]
   },
   "hfov": 6.49,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.49,
   "yaw": -179.7
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3456165A_3AFB_C8FE_41C0_D8D20E9C482F, this.camera_09706A28_3B29_785D_4194_6FD39C6EC65F); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_286A0087_3B18_C854_41B4_98CB900DEABC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.49,
   "yaw": -179.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3451FBC8_3AFB_DFDA_41C8_D417604B19C0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.79,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.97,
   "yaw": 176.41
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345875C9_3AFB_4BDA_4195_70E646107781, this.camera_0EFC181E_3B29_7875_41CD_1B6C799B7CD2); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_288A6EDB_3B1B_F9FC_41CC_B7A6037E4351",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 176.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.98,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.95,
   "yaw": -5.23
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345C106B_3AFB_48DD_41C0_98C63D2B1DC1, this.camera_0ECB0811_3B29_784F_41B5_413993F004B0); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A41938_3B1B_D8BC_41C6_8838E9E72288",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.98,
   "yaw": -5.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3458DB1B_3AFB_787E_41C8_319FAFD36E4F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.65,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.99,
   "yaw": -9.25
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96, this.camera_09896A38_3B29_78BE_41CD_3A3EA2AA72FA); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28AF9294_3B1F_C874_41B0_DA928221EA9C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.65,
   "yaw": -9.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.96,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.45,
   "yaw": -161.74
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513, this.camera_099A6A38_3B29_78BE_41C5_76AA147414CC); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28CE6E95_3B1F_D874_41B5_2CF3A84DABF1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.96,
   "yaw": -161.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.67,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.49,
   "yaw": -2.13
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3457519A_3AFB_487E_41B0_866888B28D6A, this.camera_094F1A20_3B29_784E_41C5_43145291B6B4); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_294B38B4_3AE9_B9B4_4188_25A8ADACEB51",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.67,
   "yaw": -2.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0_HS_1_0.png",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "hfov": 5.56,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.86,
   "yaw": -168.9
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34573723_3AFB_484D_41C5_8B9930C94C08, this.camera_0942AA26_3B29_7852_41C6_4E17BB2396F0); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_284EF360_3B18_C8CC_41BC_E6D91F0B5F3A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.56,
   "yaw": -168.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.42,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.01,
   "yaw": -177.06
  }
 ],
 "id": "overlay_28AF2AAC_3B18_F854_41C4_45C0FB167847",
 "maps": [
  {
   "hfov": 8.42,
   "yaw": -177.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345F26E9_3AFB_49DD_41A1_24BE9C95DC94_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.77,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.48,
   "yaw": -0.45
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3453F630_3AF8_C84A_41A0_3B7A44F879D8, this.camera_0AC189DC_3B29_7BF5_41C4_B0203251E92F); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A359E4_3B1F_BBD4_41B5_2C06FF2AC3FA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.77,
   "yaw": -0.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.73,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.23,
   "yaw": -164
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345D2B37_3AF8_D8B6_41C6_9EAE2E4E06E0, this.camera_0AFB69E5_3B29_7BD7_4175_B3518087EE5D); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28CC3A15_3B1F_D874_419B_0C4834F22261",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.73,
   "yaw": -164,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345880FC_3AF8_C9BB_41CB_77D6523AB513_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.62,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.95,
   "yaw": -1.64
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD, this.camera_08713A9B_3B29_7872_41B9_80D3976611B6); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_294ACC47_3AE8_D8D5_41C5_83678A2C391B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.62,
   "yaw": -1.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0_HS_1_0.png",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "hfov": 5.67,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.34,
   "yaw": 177.54
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3457BC12_3AFB_584E_41C1_87182D8F3021, this.camera_08407A97_3B29_7872_41B5_32BEF778DF7B); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_285BEC21_3B19_D84D_41AC_CE2EFEA6011C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.67,
   "yaw": 177.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3456E154_3AFB_48CA_4190_F58FAFE88712_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 7.51,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.81,
   "yaw": 83.71
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_352819B3_3AF8_F84E_41C8_7642F236331D, this.camera_09C14A5F_3B29_78F3_41C5_062BA35F516B); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A1AEF0_3B1B_59CC_41CB_301FCC6111B7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.51,
   "yaw": 83.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.79,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.97,
   "yaw": 2.31
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427, this.camera_09D21A58_3B29_78FD_41C6_03A9BB8A429A); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28C27DFF_3B18_BBB4_41BB_FD3278F092D9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 2.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.36,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.99,
   "yaw": -0.96
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34549093_3AFB_C84D_41A2_010CE47C1AD1, this.camera_085DBA8A_3B29_785D_41C1_66F953E05026); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B5F674_3B17_C8B4_41C8_05D772CDA965",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.36,
   "yaw": -0.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0_HS_1_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "hfov": 6.13,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.97,
   "yaw": 165.48
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34565639_3AFB_C8BD_41B5_9B99748C1CC0, this.camera_0852EA92_3B29_784D_41BE_FA3C12582BDD); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28546EE3_3B17_59CC_41AD_D2F26F5AD344",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.13,
   "yaw": 165.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457FB5D_3AFB_F8FA_41CB_0BDDEBB183D5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.92,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.71,
   "yaw": -96.17
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3463AFD2_3AF8_F7CE_41C0_A0A263544E36, this.camera_0A8909AE_3B29_7855_41C1_33B6057C908A); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_289E3B65_3B1B_B8D5_41AC_22211CE81B1B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.92,
   "yaw": -96.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.97,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.2,
   "yaw": -35.37
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345AC5B2_3AF8_C84E_41C8_6C439C7DF427, this.camera_0A94399A_3B29_7872_41C5_A6555099B5F0); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28D3566A_3B1B_48DC_41A1_48DCC10FDE36",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.97,
   "yaw": -35.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_352819B3_3AF8_F84E_41C8_7642F236331D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.78,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.22,
   "yaw": 173.64
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345A95D6_3AFB_CBF7_41A2_525235CDF0C4, this.camera_09DD3A48_3B29_78DE_41AC_7913F918F091); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28647836_3B19_B8B4_41C5_95429E298C1F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 173.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.81,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.47,
   "yaw": 0.8
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD, this.camera_09AF8A48_3B29_78DE_41B4_6CE2471A87F9); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28A89D3F_3B19_D8B4_41C5_3F3E73BC95C8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.81,
   "yaw": 0.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 9.13,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.66,
   "yaw": -3.97
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28AD4995_3B1F_5874_419C_05312EE39B3B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.13,
   "yaw": -3.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.8,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.72,
   "yaw": -166.26
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345F9BB3_3AF8_B84E_41C2_AB4B94FAAD96, this.camera_0ED047FE_3B29_77B2_41CB_7A29640281E3); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28D015A7_3B18_C854_41BA_0879241B527C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -166.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34596178_3AFB_48BA_41C2_AFE2F5F30E34_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.63,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.24,
   "yaw": -9.25
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34581B1F_3AFB_5876_41A0_70CCC2D90D45, this.camera_09589A19_3B29_787F_41C2_1A8EFE323918); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2880C9E5_3B18_FBD4_41B9_B45D9528DD79",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.63,
   "yaw": -9.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.75,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.98,
   "yaw": -174.8
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345A6036_3AFB_48B6_41C4_1809F4293BA4, this.camera_092A8A13_3B29_7873_41A2_CD6204065639); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28B6F961_3B18_D8CF_419C_DFB23CCB42C1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.75,
   "yaw": -174.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345535DB_3AFB_4BFE_41C3_71DBF4683ED3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_1_HS_0_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.67,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.48,
   "yaw": 167.36
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345A2B08_3AFB_D85A_41A3_FFFA191760DF, this.camera_0A1AD94A_3B29_78D2_41C0_15B8B51619F4); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2892440F_3B19_C854_41C5_89112E19B1F5",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.67,
   "yaw": 167.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_1_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "hfov": 8.73,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.23,
   "yaw": 5.83
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345B45AD_3AFB_C85A_41C0_0C3787F3C632, this.camera_0A10D950_3B29_78CD_41B0_1E7109DD5F16); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_289A2F3F_3B19_D8B4_41BA_5453AE54AD4C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.73,
   "yaw": 5.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_345BB059_3AFB_C8FA_41CC_2DFFE3946FAD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.7,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.53,
   "yaw": -1.4
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_345056BE_3AFB_49B6_419E_0FE12384A2C1, this.camera_0A3EB969_3B29_78DF_41C7_A2BB975D6AE4); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_294C2EF5_3AE9_59B5_41CB_369C4137BFF2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.7,
   "yaw": -1.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0_HS_1_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "hfov": 6.94,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.99,
   "yaw": -172.16
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3457DC67_3AFB_78D6_418E_92EA4176B50A, this.camera_0A03C963_3B29_78D3_41B0_005CC6C36EEB); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2849F513_3B19_484C_41C1_416683B88DE2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.94,
   "yaw": -172.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3457519A_3AFB_487E_41B0_866888B28D6A_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_1_HS_0_0.png",
      "width": 179,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "hfov": 7.64,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.32,
   "yaw": 0.6
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34570129_3AFB_C85A_41C6_6EB351A5C70B, this.camera_091589EA_3B29_7BDD_41C9_9425BC934107); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_29495138_3AE8_C8BC_41C5_4DF6D5556F15",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.64,
   "yaw": 0.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0_HS_1_0.png",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "hfov": 5.51,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.37,
   "yaw": 158.7
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_34572698_3AFB_487A_41C2_FBF44A93EEAD, this.camera_090959FA_3B29_7BBD_41CC_716CB5ECB449); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2868A89C_3B19_B87B_41C0_4954AB8A4D32",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.51,
   "yaw": 158.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_34574BE9_3AFB_BFDA_41C4_B7E61663FC69_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_D83E5239_F8DE_01A1_41E2_92AEE4B33327",
  "this.IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83E6239_F8DE_01A1_41E6_78C235396A58",
 "class": "Container",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_D83E1239_F8DE_01A1_41E5_88196F100AEF",
  "this.IconButton_6458015E_5375_0552_41C6_76E5D5ACC9D8"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC",
 "class": "Container",
 "right": 0,
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "horizontalAlign": "left"
},
{
 "maxHeight": 1044,
 "maxWidth": 553,
 "id": "Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6",
 "left": "4.24%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "width": "16.364%",
 "borderSize": 0,
 "url": "skin/Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6.png",
 "minHeight": 1,
 "top": "1.54%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "6.836%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image75720"
 },
 "horizontalAlign": "center"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_D83E5239_F8DE_01A1_41E2_92AEE4B33327",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 50,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054.png",
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 },
 "horizontalAlign": "center"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_D83E0239_F8DE_01A1_41D0_F56FFF66140C"
 ],
 "id": "Container_D83E1239_F8DE_01A1_41E5_88196F100AEF",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "90%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "paddingLeft": 0,
 "id": "IconButton_6458015E_5375_0552_41C6_76E5D5ACC9D8",
 "class": "IconButton",
 "right": 9,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "iconURL": "skin/IconButton_6458015E_5375_0552_41C6_76E5D5ACC9D8.png",
 "bottom": "40%",
 "verticalAlign": "middle",
 "top": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC, false, 0, this.effect_64A2F141_5375_02AE_41CD_2997E77F9B40, 'hideEffect', false); this.setComponentVisibility(this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58, true, 0, this.effect_64A17141_5375_02AE_41D1_39CD203154A1, 'showEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6458015E_5375_0552_41C6_76E5D5ACC9D8_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 },
 "horizontalAlign": "center"
},
{
 "backgroundColorRatios": [
  0.11
 ],
 "data": {
  "name": "- Buttons set"
 },
 "children": [
  "this.Image_D83FF239_F8DE_01A1_41E8_88289901D50C",
  "this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB",
  "this.Container_D83CF239_F8DE_01A1_41C9_AB076235A8E0",
  "this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D",
  "this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D",
  "this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385",
  "this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4",
  "this.Container_D83F1239_F8DE_01A1_41D9_12715517E333",
  "this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7"
 ],
 "id": "Container_D83E0239_F8DE_01A1_41D0_F56FFF66140C",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "class": "Container",
 "scrollBarOpacity": 0.68,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 40,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_D83FF239_F8DE_01A1_41E8_88289901D50C",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_D83FF239_F8DE_01A1_41E8_88289901D50C.png",
 "minHeight": 30,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 40,
 "height": "25%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 },
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 1"
 },
 "children": [
  "this.Container_D83FD239_F8DE_01A1_41EB_F702C37C1EC3",
  "this.Button_D83FC239_F8DE_01A1_41E1_F6D3D0F13731",
  "this.Container_D83FB239_F8DE_01A1_41D1_DD7782C73A51",
  "this.Button_D83FA239_F8DE_01A1_41D6_194EBE0D2616",
  "this.Container_D83F9239_F8DE_01A1_41A4_5D0E0A77149D",
  "this.Button_D83F8239_F8DE_01A1_41E1_76FC118CAE45",
  "this.Container_D83F7239_F8DE_01A1_41C0_0443DA8D3FC3",
  "this.Button_D83F6239_F8DE_01A1_41E3_A895FDF814B9",
  "this.Container_D83F5239_F8DE_01A1_41C1_51CBD66A5270",
  "this.Button_D83F4239_F8DE_01A1_41B5_28F3F291CA5F",
  "this.Container_D83F3239_F8DE_01A1_41E5_BF45B4748C56",
  "this.Button_D83F2239_F8DE_01A1_41DB_D384749A91D3",
  "this.Container_D83F1239_F8DE_01A1_41D2_0E8D22A7A304",
  "this.Button_43D0B7AD_5175_14B1_41D3_014B9E659815"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB",
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "top": "26%",
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_D83CE239_F8DE_01A1_41ED_667EE3235A14",
  "this.HTMLText_D83CD239_F8DE_01A1_41D9_0860B2AF7FB3",
  "this.Container_D83CC239_F8DE_01A1_41EE_85DF1A123FF2",
  "this.Container_D83C7239_F8DE_01A1_41D1_F44EDA364441"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83CF239_F8DE_01A1_41C9_AB076235A8E0",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "bottom",
 "height": 130,
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_D83C1239_F8DE_01A1_41D6_558AD54762AD",
  "this.Container_D83C0239_F8DE_01A1_41EE_BD3BD7A9642D",
  "this.Container_D83DF239_F8DE_01A1_4198_547846E01F95",
  "this.Button_D83DE239_F8DE_01A1_41B4_6E9C69515E17"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D",
  "this.Container_D83CA239_F8DE_01A1_41BC_B2761C1F2FC7",
  "this.Container_D83C9239_F8DE_01A1_41DC_8AFD484DE6D7",
  "this.Button_D83C8239_F8DE_01A1_41DF_711BF6E51B6A"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F",
  "this.Container_D83F4239_F8DE_01A1_41E4_ED596ADEA119",
  "this.Container_D83F3239_F8DE_01A1_41A1_4852C78B3F11",
  "this.Button_D83F2239_F8DE_01A1_41D9_732F6E60A6E7"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4",
  "this.Container_D83FE239_F8DE_01A1_41D3_FBDA8CA40BC4",
  "this.Container_D83FD239_F8DE_01A1_41CD_E150A46E78BB",
  "this.Button_D83FC239_F8DE_01A1_41ED_A362839BA01E"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-5"
 },
 "children": [
  "this.Button_D83F0239_F8DE_01A1_41EE_30315EC39D44",
  "this.Container_D83CF239_F8DE_01A1_41A0_7990D06A16E5",
  "this.Container_D83CE239_F8DE_01A1_41C8_03BE266C9216",
  "this.Button_D83CA239_F8DE_01A1_41E0_2A57361F3EEB",
  "this.Button_D83C9239_F8DE_01A1_41C7_9FD986659EA7",
  "this.Button_D83C8239_F8DE_01A1_41ED_1459DB6FE1FA",
  "this.Button_D83C7239_F8DE_01A1_41E8_81BD8A73CC3E",
  "this.Button_D83C6239_F8DE_01A1_41EC_FD9BEA80D5C6",
  "this.Button_D83C5239_F8DE_01A1_41D0_A8EA4615E52A",
  "this.Button_D83C4239_F8DE_01A1_41EC_75CFF5ABCA12"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83F1239_F8DE_01A1_41D9_12715517E333",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_D83C0239_F8DE_01A1_41C4_33122759A932",
  "this.Container_D83DE239_F8DE_01A1_41E3_BF8402B43AD2",
  "this.Container_D83DD239_F8DE_01A1_41C9_1AE732875272",
  "this.Button_D83DC239_F8DE_01A1_41D3_5AF86AEFD7DE"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83FD239_F8DE_01A1_41EB_F702C37C1EC3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_D83FC239_F8DE_01A1_41E1_F6D3D0F13731",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "44c >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_2A237CC9_317A_007D_4176_36E090D2269C, 'hideEffect', false); this.setComponentVisibility(this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D, true, 0, this.effect_1A65691F_310E_0014_41BF_C2605660352F, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83FB239_F8DE_01A1_41D1_DD7782C73A51",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_D83FA239_F8DE_01A1_41D6_194EBE0D2616",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "44b >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D, true, 0, this.effect_F2D95D32_FD1A_145D_41DF_3B15A8774774, 'showEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_EDE31937_FD1A_1C43_41E4_B1DB0E7241B4, 'hideEffect', false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F9239_F8DE_01A1_41A4_5D0E0A77149D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Location"
 },
 "id": "Button_D83F8239_F8DE_01A1_41E1_76FC118CAE45",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedLabel": "Inserdt Text",
 "mode": "push",
 "height": 50,
 "label": "36 >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_112869ED_311E_0034_41C2_70A247245BB7, 'hideEffect', false); this.setComponentVisibility(this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385, true, 0, this.effect_18BBC752_310E_006C_41B5_0D8B802FB057, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F7239_F8DE_01A1_41C0_0443DA8D3FC3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_D83F6239_F8DE_01A1_41E3_A895FDF814B9",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "ortho >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB, 'hideEffect', false); this.setComponentVisibility(this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4, true, 0, this.effect_163FEAB2_310E_002C_416A_B20913F49C44, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F5239_F8DE_01A1_41C1_51CBD66A5270",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_D83F4239_F8DE_01A1_41B5_28F3F291CA5F",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "Panel >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_164A1542_310E_006C_41C8_B7C2AB9D709D, 'hideEffect', false); this.setComponentVisibility(this.Container_D83F1239_F8DE_01A1_41D9_12715517E333, true, 0, this.effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F3239_F8DE_01A1_41E5_BF45B4748C56",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_D83F2239_F8DE_01A1_41DB_D384749A91D3",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "Direksi kit >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_18885C2A_310A_003C_41B2_9B60A3A66C9F, 'hideEffect', false); this.setComponentVisibility(this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7, true, 0, this.effect_1622AA86_310A_00F4_41A8_DBA0885BA83A, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F1239_F8DE_01A1_41D2_0E8D22A7A304",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_43D0B7AD_5175_14B1_41D3_014B9E659815",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "Tampilan April",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.openLink('https://pjkpkipp1a.github.io/pjkpkipp1aapril/', '_blank')",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_D83CE239_F8DE_01A1_41ED_667EE3235A14",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "horizontalAlign": "left"
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_D83CD239_F8DE_01A1_41D9_0860B2AF7FB3",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 78,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "data": {
  "name": "-Container Icons 1"
 },
 "children": [
  "this.IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A",
  "this.IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422",
  "this.IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A",
  "this.IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83CC239_F8DE_01A1_41EE_85DF1A123FF2",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "bottom",
 "height": 56,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 7,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Container Icons 2"
 },
 "children": [
  "this.IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112",
  "this.IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC",
  "this.IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237",
  "this.IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83C7239_F8DE_01A1_41D1_F44EDA364441",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 44,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 7,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "fontStyle": "italic",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_D83C1239_F8DE_01A1_41D6_558AD54762AD",
 "fontSize": 18,
 "class": "Button",
 "iconURL": "skin/Button_D83C1239_F8DE_01A1_41D6_558AD54762AD.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_D83C1239_F8DE_01A1_41D6_558AD54762AD_rollover.png",
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83C0239_F8DE_01A1_41EE_BD3BD7A9642D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83DF239_F8DE_01A1_4198_547846E01F95",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_D83DE239_F8DE_01A1_41B4_6E9C69515E17",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "18 Mei 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 26)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "fontStyle": "italic",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D",
 "fontSize": 18,
 "class": "Button",
 "iconURL": "skin/Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D, false, 0, this.effect_EDB05026_FD1A_0C44_41EA_7A7383BCF1B7, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_EDB1AC01_FD1E_143F_41E0_CF7D100094DC, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D_rollover.png",
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83CA239_F8DE_01A1_41BC_B2761C1F2FC7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83C9239_F8DE_01A1_41DC_8AFD484DE6D7",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_D83C8239_F8DE_01A1_41DF_711BF6E51B6A",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "18 Mei 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 17)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "fontStyle": "italic",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F",
 "fontSize": 18,
 "class": "Button",
 "iconURL": "skin/Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F_rollover.png",
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F4239_F8DE_01A1_41E4_ED596ADEA119",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83F3239_F8DE_01A1_41A1_4852C78B3F11",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_D83F2239_F8DE_01A1_41D9_732F6E60A6E7",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "18 Mei 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "fontStyle": "italic",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4",
 "fontSize": 18,
 "class": "Button",
 "iconURL": "skin/Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4_rollover.png",
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83FE239_F8DE_01A1_41D3_FBDA8CA40BC4",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83FD239_F8DE_01A1_41CD_E150A46E78BB",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_D83FC239_F8DE_01A1_41ED_A362839BA01E",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Soon",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "fontStyle": "italic",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_D83F0239_F8DE_01A1_41EE_30315EC39D44",
 "fontSize": 18,
 "class": "Button",
 "iconURL": "skin/Button_D83F0239_F8DE_01A1_41EE_30315EC39D44.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83F1239_F8DE_01A1_41D9_12715517E333, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_D83F0239_F8DE_01A1_41EE_30315EC39D44_rollover.png",
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83CF239_F8DE_01A1_41A0_7990D06A16E5",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83CE239_F8DE_01A1_41C8_03BE266C9216",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_D83CA239_F8DE_01A1_41E0_2A57361F3EEB",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "8 februari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_78EDE62D_534D_0EF7_4187_ADA4E5FD321E, null, '90%', '90%', this.FadeInEffect_78EDF62D_534D_0EF7_41C9_BBE4DAB51E03, this.FadeOutEffect_78ED962D_534D_0EF7_41D2_C014C0107352, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_D83C9239_F8DE_01A1_41C7_9FD986659EA7",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedLabel": "Lorem Ipsum",
 "mode": "push",
 "height": 36,
 "label": "15 Februari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_78F1962F_534D_0EF3_41C1_00477EADDD73, null, '90%', '90%', this.FadeInEffect_78F1A62F_534D_0EF3_418D_0D2E6D2C68DE, this.FadeOutEffect_78F1462F_534D_0EF3_41CF_312AA3422C8C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_D83C8239_F8DE_01A1_41ED_1459DB6FE1FA",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "22 Februari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_78F0562F_534D_0EF3_41D2_C0F8A2F0BE5D, null, '90%', '90%', this.FadeInEffect_78F0662F_534D_0EF3_41CF_7970A968DE61, this.FadeOutEffect_78F0762F_534D_0EF3_41D4_1E0E1BCE93DD, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_D83C7239_F8DE_01A1_41E8_81BD8A73CC3E",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "01 Maret 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_78F7662F_534D_0EF3_41C1_84A370969066, null, '90%', '90%', this.FadeInEffect_78F7762F_534D_0EF3_418F_4EA34475AF57, this.FadeOutEffect_78F7062F_534D_0EF3_41C9_1CFFA422A6E1, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_D83C6239_F8DE_01A1_41EC_FD9BEA80D5C6",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "8 Maret 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_78F6062F_534D_0EF3_419A_022615D38E0E, null, '90%', '90%', this.FadeInEffect_78F6162F_534D_0EF3_41CE_37B00E28F37C, this.FadeOutEffect_78F6262F_534D_0EF3_41D3_4DFC3A09636E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_D83C5239_F8DE_01A1_41D0_A8EA4615E52A",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "15 Maret 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_78F6B631_534D_0EEF_41D1_4E6F014D6421, null, '90%', '90%', this.FadeInEffect_78F66631_534D_0EEF_4195_EF5D1ECAB174, this.FadeOutEffect_78F67631_534D_0EEF_41D1_2F6F10F30CF3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_D83C4239_F8DE_01A1_41EC_75CFF5ABCA12",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "29 Maret 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_78F56631_534D_0EEF_41D4_D9F4EA3B9B4A, null, '90%', '90%', this.FadeInEffect_78F57631_534D_0EEF_41D4_0CA899B851E2, this.FadeOutEffect_78F53631_534D_0EEF_41C6_B7C75B12E62E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "fontStyle": "italic",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_D83C0239_F8DE_01A1_41C4_33122759A932",
 "fontSize": 18,
 "class": "Button",
 "iconURL": "skin/Button_D83C0239_F8DE_01A1_41C4_33122759A932.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_D83C0239_F8DE_01A1_41C4_33122759A932_rollover.png",
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83DE239_F8DE_01A1_41E3_BF8402B43AD2",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83DD239_F8DE_01A1_41C9_1AE732875272",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_D83DC239_F8DE_01A1_41D3_5AF86AEFD7DE",
 "fontSize": 18,
 "class": "Button",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "15 Januari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "horizontalAlign": "left"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A",
 "class": "IconButton",
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Info"
 },
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422",
 "class": "IconButton",
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A",
 "class": "IconButton",
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://maps.app.goo.gl/1pubcp9CUWTmDFFbA', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Location"
 },
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F",
 "class": "IconButton",
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112",
 "class": "IconButton",
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://www.instagram.com/pjkp_kipp1a?igsh=MXE0NjBhbjdqYzVnaw==', '_blank')",
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_pressed_rollover.png",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC",
 "class": "IconButton",
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Video"
 },
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237",
 "class": "IconButton",
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1",
 "class": "IconButton",
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 1,
 "iconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1_pressed_rollover.png",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1_pressed.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton --"
 },
 "horizontalAlign": "center"
}],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C_playlist,this.mainPlayList])",
 "data": {
  "name": "Player22681"
 },
 "children": [
  "this.MainViewer",
  "this.Container_D83C8239_F8DE_01A1_41D3_401F7AD1E733",
  "this.IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E",
  "this.Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6",
  "this.ThumbnailList_7A69002C_5375_02F6_41A5_F39C32B7470C",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "scripts": {
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

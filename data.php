<?php
$data = json_decode(file_get_contents('data.json'));
$output = array();
$i = 0;
foreach ($data->data as $workout) {
  if (isset($workout->points) && count($workout->points) > 1) {
    foreach ($workout->points as $point) {
      if (isset($point->lat) && isset($point->lng) && $i % 2 == 0) {
        $output[] = array(
          'lat' => $point->lat,
          'lng' => $point->lng
        );
      }
      $i++;
    }
  }
}
print json_encode($output);
?>
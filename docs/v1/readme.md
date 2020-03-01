---
pageClass: api-document
---

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left

## General Information
All API Request will use base URL
```
https://yudistira.turnbackhoax.id/Antihoax/
```
!!!
!!!!
!!!!!

!!!!!! section main-section closed
!!!!! sub-section section-area
!!!! sub-section section-left
## Get News
Get news list based on selected category from our Global Fast-check Database. We only use `GET` method for API Call Here 
!!!!
!!!! sub-section section-right right-spacer
+++ section-notes Category List
- `LATEST` /api/path/entity {.get}
- `RANDOM` /api/path/entity {.post}
- `BY ID` /api/path/entity/:id {.update}
+++
!!!!
!!!!!

=== sub-section-wrapper
!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Closed Sub Section 1
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!
!!! sub-section section-right right-spacer
+++ section-codes
```json
{
    "param_key": "value",
    "param_index": 12345
}
```
+++
!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Closed Sub Section 2
Malesuada proin libero nunc consequat interdum varius. Ultrices dui sapien eget mi proin sed libero enim. Ornare aenean euismod elementum nisi quis eleifend quam. Hendrerit dolor magna eget est lorem ipsum. Nunc congue nisi vitae suscipit tellus mauris a diam. Amet volutpat consequat mauris nunc congue nisi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Convallis posuere morbi leo urna molestie.
!!!
!!! sub-section section-right right-spacer
+++ section-codes
```json
{
    "param_key": "value",
    "param_index": 12345
}
```
+++
+++ section-codes Multiple Code
:::: tabs :options="{ useUrlFragment: false }"
::: tab "JSON"
```json
{
    "param_key": "value",
    "param_index": 12345
}
```
:::
::: tab "Curl"
```bash
curl --request GET \
  --url https://endpoint.com/url \
  --header 'authorization: Basic REPLACE_BASIC_AUTH' \
  --header 'content-type: application/json'
```
:::
::: tab "Request 2"
```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://endpoint.com/url",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "authorization: Basic REPLACE_BASIC_AUTH",
    "content-type: application/json"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```
:::
::::
+++
!!!
!!!!
!!!!!
===

!!!!!! section main-section
!!!!! sub-section section-area
!!!! sub-section section-left
## Search News
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!!
!!!! sub-section section-right right-spacer
+++ section-notes Method List
- `GET` /api/path/entity {.get}
- `POST` /api/path/entity {.post}
- `UPDATE` /api/path/entity/:id {.update}
- `DELETE` /api/path/entity/:id {.delete}
+++
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Sub Section
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!
!!! sub-section section-right right-spacer
+++ section-codes
```json
{
    "param_key": "value",
    "param_index": 12345
}
```
+++
!!!
!!!!
!!!!!

!!!!!!
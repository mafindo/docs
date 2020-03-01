---
pageClass: api-document
---

# Base URL
All API Request will use base URL
```
https://yudistira.turnbackhoax.id/Antihoax/
```

# API Reference Layout

This page is using the frontmatter configuration

    ---
    sidebar: auto
    pageClass: api-document
    ---

## 3 Column Layout Wrapper
The Layout using [vuepress-plugin-container](https://github.com/vuepress/vuepress-plugin-container) plugins


### Left and Right
    !!!!! section main-section
    !!!! sub-section section-area
    !!! sub-section section-left
    Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
    !!!
    !!! sub-section section-right
    Malesuada proin libero nunc consequat interdum varius. Ultrices dui sapien eget mi proin sed libero enim. Ornare aenean euismod elementum nisi quis eleifend quam. Hendrerit dolor magna eget est lorem ipsum. Nunc congue nisi vitae suscipit tellus mauris a diam. Amet volutpat consequat mauris nunc congue nisi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Convallis posuere morbi leo urna molestie.
    !!!
    !!!!
    !!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!
!!! sub-section section-right
Malesuada proin libero nunc consequat interdum varius. Ultrices dui sapien eget mi proin sed libero enim. Ornare aenean euismod elementum nisi quis eleifend quam. Hendrerit dolor magna eget est lorem ipsum. Nunc congue nisi vitae suscipit tellus mauris a diam. Amet volutpat consequat mauris nunc congue nisi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Convallis posuere morbi leo urna molestie.
!!!
!!!!
!!!!!

    !!!!! section main-section
    !!!! sub-section section-area
    !!! sub-section section-left
    ### Header Inside Content
    Add class `right-spacer` to the right section to even right content with the left
    !!!
    !!! sub-section section-right right-spacer
    Malesuada proin libero nunc consequat interdum varius. Ultrices dui sapien eget mi proin sed libero enim. Ornare aenean euismod elementum nisi quis eleifend quam. Hendrerit dolor magna eget est lorem ipsum. Nunc congue nisi vitae suscipit tellus mauris a diam. Amet volutpat consequat mauris nunc congue nisi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Convallis posuere morbi leo urna molestie.
    !!!
    !!!!
    !!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left
### Header Inside Content
Add class `right-spacer` to the right section to even right content with the left
!!!
!!! sub-section section-right right-spacer
Malesuada proin libero nunc consequat interdum varius. Ultrices dui sapien eget mi proin sed libero enim. Ornare aenean euismod elementum nisi quis eleifend quam. Hendrerit dolor magna eget est lorem ipsum. Nunc congue nisi vitae suscipit tellus mauris a diam. Amet volutpat consequat mauris nunc congue nisi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Convallis posuere morbi leo urna molestie.
!!!
!!!!
!!!!!

### Left Only
    !!!!! section main-section
    !!!! sub-section section-area
    !!! sub-section section-left
    Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
    !!!
    !!!!
    !!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!
!!!!
!!!!!

### Right Only
    !!!!! section main-section
    !!!! sub-section section-area
    !!! sub-section section-left

    !!!
    !!! sub-section section-right
    Malesuada proin libero nunc consequat interdum varius. Ultrices dui sapien eget mi proin sed libero enim. Ornare aenean euismod elementum nisi quis eleifend quam. Hendrerit dolor magna eget est lorem ipsum. Nunc congue nisi vitae suscipit tellus mauris a diam. Amet volutpat consequat mauris nunc congue nisi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Convallis posuere morbi leo urna molestie.
    !!!
    !!!!
    !!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left

!!!
!!! sub-section section-right
Malesuada proin libero nunc consequat interdum varius. Ultrices dui sapien eget mi proin sed libero enim. Ornare aenean euismod elementum nisi quis eleifend quam. Hendrerit dolor magna eget est lorem ipsum. Nunc congue nisi vitae suscipit tellus mauris a diam. Amet volutpat consequat mauris nunc congue nisi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Convallis posuere morbi leo urna molestie.
!!!
!!!!
!!!!!

## Custom Sections

### Tabs Container

The Layout using [vuepress-plugin-tabs](https://github.com/pskordilakis/vuepress-plugin-tabs) plugins

    :::: tabs :options="{ useUrlFragment: false }"
    ::: tab "Tab Title" id="first-tab"
    __markdown content__
    :::
    ::: tab javascript id="second-tab"
    ``` javascript
    () => {
    console.log('JavaScript code example')
    }
    ```
    :::
    ::::

:::: tabs :options="{ useUrlFragment: false }"
::: tab "Tab Title" id="first-tab"
__markdown content__
:::
::: tab javascript id="second-tab"
``` javascript
() => {
console.log('JavaScript code example')
}
```
:::
::::

### Notes
    +++ section-notes Description
    Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet.

    Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
    +++

+++ section-notes Description
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet.

Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
+++

### Notes with table content
    +++ section-notes Key Value Description
    | | |
    | -: |:-|
    | Quam nulla porttitor | Quam nulla porttitor massa id. Sed tempus urna et pharetra.
    | Arcu dui vivamus | Arcu dui vivamus arcu felis bibendum ut.
    | Suspendisse | Suspendisse faucibus interdum posuere lorem ipsum dolor sit.
    | Mattis aliquam | Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
    +++

+++ section-notes Key Value Description
| | |
| -: |:-|
| Quam nulla porttitor | Quam nulla porttitor massa id. Sed tempus urna et pharetra.
| Arcu dui vivamus | Arcu dui vivamus arcu felis bibendum ut.
| Suspendisse | Suspendisse faucibus interdum posuere lorem ipsum dolor sit.
| Mattis aliquam | Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
+++

### Notes with list items
List items for REST method description, using [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) to add additional styling

    +++ section-notes Method List
    - `GET` /api/path/entity {.get}
    - `POST` /api/path/entity {.post}
    - `UPDATE` /api/path/entity/:id {.update}
    - `DELETE` /api/path/entity/:id {.delete}
    +++

+++ section-notes Method List
- `GET` /api/path/entity {.get}
- `POST` /api/path/entity {.post}
- `UPDATE` /api/path/entity/:id {.update}
- `DELETE` /api/path/entity/:id {.delete}
+++

### Code Sample

    +++ section-codes Request Sample
    ```bash
    begin
    # Use Stripe's library to make requests...
    rescue Stripe::CardError => e
    puts "Status is: #{e.http_status}"
    puts "Type is: #{e.error.type}"
    puts "Charge ID is: #{e.error.charge}"
    # The following fields are optional
    puts "Code is: #{e.error.code}" if e.error.code
    puts "Decline code is: #{e.error.decline_code}" if e.error.decline_code
    puts "Param is: #{e.error.param}" if e.error.param
    puts "Message is: #{e.error.message}" if e.error.message
    rescue Stripe::RateLimitError => e
    # Too many requests made to the API too quickly
    rescue Stripe::InvalidRequestError => e
    # Invalid parameters were supplied to Stripe's API
    rescue Stripe::AuthenticationError => e
    # Authentication with Stripe's API failed
    # (maybe you changed API keys recently)
    rescue Stripe::APIConnectionError => e
    # Network communication with Stripe failed
    rescue Stripe::StripeError => e
    # Display a very generic error to the user, and maybe send
    # yourself an email
    rescue => e
    # Something else happened, completely unrelated to Stripe
    end
    ```
    +++

+++ section-codes Request Sample
```bash
begin
  # Use Stripe's library to make requests...
rescue Stripe::CardError => e
  puts "Status is: #{e.http_status}"
  puts "Type is: #{e.error.type}"
  puts "Charge ID is: #{e.error.charge}"
  # The following fields are optional
  puts "Code is: #{e.error.code}" if e.error.code
  puts "Decline code is: #{e.error.decline_code}" if e.error.decline_code
  puts "Param is: #{e.error.param}" if e.error.param
  puts "Message is: #{e.error.message}" if e.error.message
rescue Stripe::RateLimitError => e
  # Too many requests made to the API too quickly
rescue Stripe::InvalidRequestError => e
  # Invalid parameters were supplied to Stripe's API
rescue Stripe::AuthenticationError => e
  # Authentication with Stripe's API failed
  # (maybe you changed API keys recently)
rescue Stripe::APIConnectionError => e
  # Network communication with Stripe failed
rescue Stripe::StripeError => e
  # Display a very generic error to the user, and maybe send
  # yourself an email
rescue => e
  # Something else happened, completely unrelated to Stripe
end
```
+++

### Multiple Code Sample
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

### Request in header

    +++ section-codes <span><strong class="get">GET</strong> /api/path/entity</span>
    &nbsp;
    +++

    +++ section-codes <span><strong class="post">POST</strong> /api/path/entity</span>
    &nbsp;
    +++

    +++ section-codes <span><strong class="update">UPDATE</strong> /api/path/entity</span>
    &nbsp;
    +++

    +++ section-codes <span><strong class="delete">DELETE</strong> /api/path/entity</span>
    &nbsp;
    +++

+++ section-codes <span><strong class="get">GET</strong> /api/path/entity</span>
&nbsp;
+++

+++ section-codes <span><strong class="post">POST</strong> /api/path/entity</span>
&nbsp;
+++

+++ section-codes <span><strong class="update">UPDATE</strong> /api/path/entity</span>
&nbsp;
+++

+++ section-codes <span><strong class="delete">DELETE</strong> /api/path/entity</span>
&nbsp;
+++


!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left
## Side Notes Content
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!
!!! sub-section section-right right-spacer
+++ section-notes Description
Arcu dui vivamus arcu felis bibendum ut. Suspendisse `faucibus` interdum `posuere` `lorem` `ipsum` dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
+++
!!!
!!!!
!!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left
## Side Notes Key Value
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!
!!! sub-section section-right right-spacer
+++ section-notes Key Value
| | |
| -: |:-|
| Quam nulla porttitor | Quam nulla porttitor massa id. Sed tempus urna et pharetra.
| Arcu dui vivamus | Arcu dui vivamus arcu felis bibendum ut.
| Suspendisse | Suspendisse faucibus interdum posuere lorem ipsum dolor sit.
| Mattis aliquam | Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
+++
!!!
!!!!
!!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left
## Side Notes Method List
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!
!!! sub-section section-right right-spacer
+++ section-notes Method List
- `GET` /api/path/entity {.get}
- `POST` /api/path/entity {.post}
- `UPDATE` /api/path/entity/:id {.update}
- `DELETE` /api/path/entity/:id {.delete}
+++
!!!
!!!!
!!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left
## Side Notes with Codes
Quam nulla porttitor massa id. Sed tempus urna et pharetra. Justo nec ultrices dui sapien eget mi proin. Sit amet est placerat in egestas. At ultrices mi tempus imperdiet. Arcu dui vivamus arcu felis bibendum ut. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
!!!
!!! sub-section section-right right-spacer
+++ section-codes  <span><strong class="get">GET</strong> /api/path/entity</span>
```bash
begin
  # Use Stripe's library to make requests...
rescue Stripe::CardError => e
  puts "Status is: #{e.http_status}"
  puts "Type is: #{e.error.type}"
  puts "Charge ID is: #{e.error.charge}"
  # The following fields are optional
  puts "Code is: #{e.error.code}" if e.error.code
  puts "Decline code is: #{e.error.decline_code}" if e.error.decline_code
  puts "Param is: #{e.error.param}" if e.error.param
  puts "Message is: #{e.error.message}" if e.error.message
rescue Stripe::RateLimitError => e
  # Too many requests made to the API too quickly
rescue Stripe::InvalidRequestError => e
  # Invalid parameters were supplied to Stripe's API
rescue Stripe::AuthenticationError => e
  # Authentication with Stripe's API failed
  # (maybe you changed API keys recently)
rescue Stripe::APIConnectionError => e
  # Network communication with Stripe failed
rescue Stripe::StripeError => e
  # Display a very generic error to the user, and maybe send
  # yourself an email
rescue => e
  # Something else happened, completely unrelated to Stripe
end
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

!!!!!! section main-section
!!!!! sub-section section-area
!!!! sub-section section-left
## Section with subsection
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

!!!!!! section main-section closed
!!!!! sub-section section-area
!!!! sub-section section-left
## Section with Closed Subsection
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

!!!!!!

## Parameter List

- Add Wrapper `<div class="parameter-container">`
- Adding `code` for parameter name, `em` for parameter type, `strong` for required param, `striketrough` for optional param in list items and the theme will override the style will emulate param description
- You can add sub param as a child attribute with a html `details` `summary` wrapper
- Please note the additional line space and padding for this to work

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left

### Parameters list sample 1

```html
<div class="parameter-container">

- `param_name` *param_type* __required__ ~~optional~~

  Parameter Description

  <details><summary> Show child attributes </summary><p>
  
  - `sub_param_name` *param_type* __required__ ~~optional~~

    Sub Parameter Description

    <details><summary> Show child attributes </summary><p>
    
    - `sub_sub_param_name` *param_type* __required__ ~~optional~~
    
      Sub Sub Parameter Description
    
    </p></details>

  </p></details>

</div>
```
!!!
!!! sub-section section-right right-spacer
<div class="parameter-container">

- `param_name` *param_type* __required__ ~~optional~~

  Parameter Description

  <details><summary> Show child attributes </summary><p>
  
  - `sub_param_name` *param_type* __required__ ~~optional~~

    Sub Parameter Description

    <details><summary> Show child attributes </summary><p>
    
    - `sub_sub_param_name` *param_type* __required__ ~~optional~~
    
      Sub Sub Parameter Description
    
    </p></details>

  </p></details>

</div>
!!!
!!!!
!!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left

### Parameters list sample 2

<div class="parameter-container">

- `name` *param_type* __required__

  Malesuada proin libero nunc consequat interdum varius. 
  Ultrices dui sapien eget mi proin sed libero enim. 
  Ornare aenean euismod elementum nisi quis eleifend quam. 
  Hendrerit dolor magna eget est lorem ipsum.

- `address` *param_type* ~~optional~~

  Hendrerit dolor magna eget est lorem ipsum. 
  Nunc congue nisi vitae suscipit tellus mauris a diam.

  Possible Enum : `enum 1` `enum 2` `enum 3`

  <details><summary> Show child attributes </summary><p>

  - address.`city` *param_type* __required__

    Malesuada proin libero nunc consequat interdum varius. 
    Ultrices dui sapien eget mi proin sed libero enim. 
    
    Ornare aenean euismod elementum nisi quis eleifend quam. 
    Hendrerit dolor magna eget est lorem ipsum.

  - address.`zipcode` *param_type* ~~optional~~

    Hendrerit dolor magna eget est lorem ipsum. 
    Nunc congue nisi vitae suscipit tellus mauris a diam.

    Possible Enum : `enum 1` `enum 2` `enum 3`

    <details><summary> Show child attributes </summary><p>

    - address.zipcode.`part1` *param_type* __required__

      Malesuada proin libero nunc consequat interdum varius. 
      Ultrices dui sapien eget mi proin sed libero enim.

    - address.zipcode.`part2` *param_type* ~~optional~~

      Hendrerit dolor magna eget est lorem ipsum.
      Nunc congue nisi vitae suscipit tellus mauris a diam.

      Possible Enum : `enum 1` `enum 2` `enum 3`

    </p></details>

  </p></details>

</div>

!!!
!!! sub-section section-right right-spacer
```html
<div class="parameter-container">

- `name` *param_type* __required__

  Malesuada proin libero nunc consequat interdum varius. 
  Ultrices dui sapien eget mi proin sed libero enim. 
  Ornare aenean euismod elementum nisi quis eleifend quam. 
  Hendrerit dolor magna eget est lorem ipsum.

- `address` *param_type* ~~optional~~

  Hendrerit dolor magna eget est lorem ipsum. 
  Nunc congue nisi vitae suscipit tellus mauris a diam.

  Possible Enum : `enum 1` `enum 2` `enum 3`

  <details><summary> Show child attributes </summary><p>

  - address.`city` *param_type* __required__

    Malesuada proin libero nunc consequat interdum varius. 
    Ultrices dui sapien eget mi proin sed libero enim. 
    
    Ornare aenean euismod elementum nisi quis eleifend quam. 
    Hendrerit dolor magna eget est lorem ipsum.

  - address.`zipcode` *param_type* ~~optional~~

    Hendrerit dolor magna eget est lorem ipsum. 
    Nunc congue nisi vitae suscipit tellus mauris a diam.

    Possible Enum : `enum 1` `enum 2` `enum 3`

    <details><summary> Show child attributes </summary><p>

    - address.zipcode.`part1` *param_type* __required__

      Malesuada proin libero nunc consequat interdum varius. 
      Ultrices dui sapien eget mi proin sed libero enim.

    - address.zipcode.`part2` *param_type* ~~optional~~

      Hendrerit dolor magna eget est lorem ipsum.
      Nunc congue nisi vitae suscipit tellus mauris a diam.

      Possible Enum : `enum 1` `enum 2` `enum 3`

    </p></details>

  </p></details>

</div>
```
!!!
!!!!
!!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left

### Parameters list sample 3

Multiple Param Options wrapped in tabs

<div class="parameter-container">

:::: tabs :options="{ useUrlFragment: false }"
::: tab "Success"

- `param_name` *param_type* __required__ ~~optional~~

  Parameter Description

  <details><summary> Show child attributes </summary><p>
  
  - `sub_param_name` *param_type* __required__ ~~optional~~

    Sub Parameter Description

    <details><summary> Show child attributes </summary><p>
    
    - `sub_sub_param_name` *param_type* __required__ ~~optional~~
    
      Sub Sub Parameter Description
    
    </p></details>

  </p></details>

- `param_name_2` *param_type* __required__ ~~optional~~

  Parameter Description

:::
::: tab "Failed"

- `param_name_1` *param_type* __required__ ~~optional~~

  Param Description

- `param_name_2` *param_type* __required__ ~~optional~~

  Param Description

- `param_name_3` *param_type* __required__ ~~optional~~

  Param Description

:::
::: tab "Unknown"

- `param_name_1` *param_type* __required__ ~~optional~~

  Param Description

- `param_name_2` *param_type* __required__ ~~optional~~

  Param Description

:::
::::

</div>

!!!
!!! sub-section section-right right-spacer
<div class="parameter-container">

:::: tabs :options="{ useUrlFragment: false }"
::: tab "Success"

- `param_name` *param_type* __required__ ~~optional~~

  Parameter Description

  <details><summary> Show child attributes </summary><p>
  
  - `sub_param_name` *param_type* __required__ ~~optional~~

    Sub Parameter Description

    <details><summary> Show child attributes </summary><p>
    
    - `sub_sub_param_name` *param_type* __required__ ~~optional~~
    
      Sub Sub Parameter Description
    
    </p></details>

  </p></details>

- `param_name_2` *param_type* __required__ ~~optional~~

  Parameter Description

:::
::: tab "Failed"

- `param_name_1` *param_type* __required__ ~~optional~~

  Param Description

- `param_name_2` *param_type* __required__ ~~optional~~

  Param Description

- `param_name_3` *param_type* __required__ ~~optional~~

  Param Description

:::
::: tab "Unknown"

- `param_name_1` *param_type* __required__ ~~optional~~

  Param Description

- `param_name_2` *param_type* __required__ ~~optional~~

  Param Description

:::
::::

</div>
!!!
!!!!
!!!!!
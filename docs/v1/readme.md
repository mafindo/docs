---
pageClass: api-document
---

!!!!!! section main-section
!!!!! sub-section section-area
!!!! sub-section section-left
# API V1 Reference
API V1 is still active, but obsolete since it has limit to only a few function with `GET` method only. Please switch to our V2 API for better experience.

Mafindo Public API use API Key for Authentication. Please refer to [Authorization](/#authorization) section.
!!!!
!!!! sub-section section-right right-spacer
+++ section-notes Base URL
https://yudistira.turnbackhoax.id/Antihoax/
+++
!!!!
!!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left

## Response

All Request will return an array of article/news object with property explained below

<div class="parameter-container">

- `id` *string*

  Unique identifier for each news item

- `authors` *string*

  News Item Author's Id, some news will show multiple author's Id separated by comma. E.g. `1, 2, 3`

- `status` *string*

  News Item Status to classified if the news is fake or truth.
  
  Possible values: `1` for truth, `2` for fake news

- `classification` *string*

  News Item fake news classification. E.g. `Fabricated Content`

- `title` *string*

  Title of the news Item

- `content` *string*

  Content of the news Item

- `fact` *string*

  An Argument for the news Item which state the fact of the news.

- `references` *string*

  References Link for the news Item.

- `source_issue` *string*

  Source of the News Item.

- `source_link` *string*

  Source of the News Item's URL.

- `picture1` *string*

  URL of a picture which related to the news Item.

- `picture2` *string*

  URL of an additional picture for the news item.

- `tanggal` *string*

  Date of News Item published.

- `tags ` *string*

  List of words which used as label for the news item, separated by comma. E.g. `tag 1, tag 2, tag 3`

- `conclusion ` *string*

  News item conclusion for public awareness.

</div>

!!!
!!! sub-section section-right right-spacer
+++ section-codes Response Sample
```json
[
  {
    "id": "201",
    "authors": "19",
    "status": "2",
    "classification": "Fabricated Content",
    "title": "[HOAKS] Jokowi Angkat Bicara Terkait Demo Massa #2019GantiPresiden di depan Toko Markobar",
    "content": "Akun Facebook bernama Pakde Jokowi @pakdejokowiku mengunggah status dalam laman Facebook, yang isi statusnya terkait penyampaian pendapatnya terhadap aksi massa #2019GantiPresiden yang berunjuk rasa di depan gerai Markobar, Kota Barat, Solo, Minggu (1/7/2018).\r\n\r\n\r\n\r\nSeperti diketahui, Markobar merupakan bisnis kuliner yang dimiliki oleh putra sulung Jokowi Gibran Rakabuming Raka.\r\n\r\n\r\n\r\nIsi unggahan tersebut bertuliskan “Istri, anak dan keluarga, saya jauhkan dari urusan politik. Jadi kalau kalian demo ganti Presiden di depan bisnisnya Gibran, terus apa hubungannya? Demo silahkan, tapi mbok yang pinter dikit.”",
    "fact": "Faktanya, akun bernama Pakde Jokowi itu bukan merupakan akun resmi dari Presiden Jokowi. Sebabnya karena akun resmi Presiden Jokowi sudah mendapat verifikasi dari Facebook dengan tanda centang biru.\r\n\r\nDilansir dari Tirto.id, hasil periksa fakta atas foto massa berkumpul dan berkaos #2019GantiPresiden yang viral di media sosial tidak tepat disebut sebagai aksi demonstrasi warung martabak Markorbar. Benar bahwa massa yang berkumpul dalam foto itu berlokasi di depan warung Markobar Jalan Dr. Moewardi, Surakarta. Kegiatannya adalah acara jalan sehat bersama dari DSKS sekaligus acara deklarasi #2019GantiPresiden.\r\n\r\nNamun, aksi #2019GantiPresiden itu tidak dimaksudkan dilakukan di warung Markobar atau sebagai kegiatan mendemo anak Jokowi.",
    "references": "https://tirto.id/benarkah-massa-2019gantipresiden-mendemo-markobar-cNoh\r\n\r\n",
    "source_issue": null,
    "source_link": "Media Sosial Facebook https://www.facebook.com/pakdejokowiku/",
    "picture1": "https://turnbackhoax.id/wp-content/uploads/2018/07/Akun-Tak-Resmi-Presiden-Jokowi.jpg",
    "picture2": "",
    "tanggal": "2018-07-03",
    "tags": "#2019gantipresiden, jokowi, markobar",
    "conclusion": null
  },
  // ... more news item
]
```
+++

!!!
!!!!
!!!!!

!!!!! section main-section
!!!! sub-section section-area
!!! sub-section section-left

## Request Path

When you do request to our API, you will find this general definition of Path Variables for the request URL will be used in API Endpoints

<div class="parameter-container">

- `LIMIT`

  limit of news item to be be requested

- `API_KEY`

  Your registered API Key

- `:ID`

  Specific News Item ID

</div>

!!!
!!! sub-section section-right right-spacer
+++ section-codes Example Query URL
```
https://yudistira.turnbackhoax.id/Antihoax/latest/LIMIT/API_KEY

https://yudistira.turnbackhoax.id/Antihoax/id/:ID/API_KEY

```
+++
!!!
!!!!
!!!!!


!!!!!!


!!!!!! section main-section closed
!!!!! sub-section section-area
!!!! sub-section section-left
## Get News
Get news list based on selected get news method from our Global Fast-check Database.
!!!!
!!!! sub-section section-right right-spacer
+++ section-notes Get News Method List
- `LATEST` /latest/LIMIT/API_KEY {.get}
- `RANDOM` /random/LIMIT/API_KEY {.get}
- `BY ID` /id/NEWS_ID/:id/API_KEY {.get}
+++
!!!!
!!!!!

=== sub-section-wrapper
!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get Latest News
Get latest news-item addition from our Global Fast-Check Database.
!!!
!!! sub-section section-right right-spacer
+++ section-codes <span><strong class="get">GET</strong> /latest/LIMIT/API_KEY</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request GET \
  --url https://yudistira.turnbackhoax.id/Antihoax/latest/5/123456 \
  --header 'Accept: application/json'
```
:::
::::
+++
!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get Random News
Get random news item with specified limit.
!!!
!!! sub-section section-right right-spacer
+++ section-codes <span><strong class="get">GET</strong> /random/LIMIT/API_KEY</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request GET \
  --url https://yudistira.turnbackhoax.id/Antihoax/random/5/123456 \
  --header 'Accept: application/json'
```
:::
::::
+++
!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get News by ID
Get specific news item by providing expected ID in the URL Path
!!!
!!! sub-section section-right right-spacer
+++ section-codes <span><strong class="get">GET</strong> /random/LIMIT/API_KEY</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request GET \
  --url https://yudistira.turnbackhoax.id/Antihoax/id/1/123456 \
  --header 'Accept: application/json'
```
:::
::::
+++
!!!
!!!!
!!!!!
===
!!!!!!

!!!!!! section main-section
!!!!! sub-section section-area
!!!! sub-section section-left
## Search News
Search News by specifying the criteria in URL path, below are the possible options to be used as search criteria.

#### Search Field Options 
<div class="parameter-container">

- `title`

  Search news item by its title 

- `source_link`

  Search news item by source URL

- `content`

  Search news item by content of the news

- `tags`

  Search news item by tags applied to the news item

</div>
!!!!
!!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="get">GET</strong> /SEARCH_FIELD/SEARCH_VALUE/API_KEY</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request GET \
  --url https://yudistira.turnbackhoax.id/Antihoax/tags/presiden/123456 \
  --header 'Accept: application/json'
```
:::
::::
+++

!!!!
!!!!!

!!!!!!